const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');

db.connect();

router.get('/userdata', (req, res) => {
  console.log(`= = =>req: ${util.inspect(req.query)}`);
  const user_id = req.query.user_id;
  const sql1 = 'SELECT name FROM userinfo WHERE id = ?'
  db.query(sql1, user_id, (err, data) => {
    if(!err){
      res.send(data[0]);
    }
    else{
      console.log("!!!데이터를 가져오지 못했습니다.");
    }
  })
});

router.post('/login', (req, res) =>{
  console.log(`= = =>req: ${util.inspect(req.query)}`);
  const user_id = req.query.user_id;
  const user_pw = req.query.user_pw;
  const sql1 = 'SELECT COUNT(*) AS result FROM userinfo WHERE id = ?'
  db.query(sql1, user_id, (err, data) => {
    if(!err){
      if(data[0].result < 1){
        res.send({'msg': '입력하신 id가 일치하지않습니다.'});
      }else{
        const sql2 = `SELECT 
        CASE (SELECT COUNT(*) FROM userinfo WHERE id = ? AND pw = ?) WHEN '0' THEN NULL ELSE (SELECT id FROM userinfo WHERE id = ? AND pw = ?) END AS userId, 
        CASE (SELECT COUNT(*) FROM userinfo WHERE id = ? AND pw = ?) WHEN '0' THEN NULL ELSE (SELECT pw FROM userinfo WHERE id = ? AND pw = ?) END AS userPw`;
        const params = [user_id, user_pw, user_id, user_pw, user_id, user_pw, user_id, user_pw];
        db.query(sql2, params, (err, data) => {
          if(!err){
            res.send(data[0]);
          }else{
            res.send(err);
          }
        })
      }
    }else{
      res.send(err);
    }
  })
})

router.post('/upload', (req, res) => {
  console.log(`= = =>req: ${util.inspect(req.query)}`);
  const user_id = req.query.user_id;
  const text = req.query.addTodo;
  const params = [user_id, text];
  let sql1 = 'INSERT INTO user_datalist (user_id, todo) VALUES(?, ?);';
  db.query(sql1, params, (err) => {
    if(err){
      res.send(err);
    }
  })
})

router.get('/read', (req, res) => {
  const user_id = req.query.user_id;
  let sql1 = 'SELECT * FROM user_datalist WHERE user_id = ? LIMIT 100;'
  db.query(sql1, user_id, (err, data) => {
    if(!err){
      const list = [];
      for(let i = 0; i < data.length; i++){
        let a = {
          num : data[i].num,
          todo : data[i].todo,
          gool : data[i].gool
        }
        list.push(a);
      }
      res.send(list);
    }
    else{res.send(err);}
  })
})

router.post('/clear', (req, res) => {
  const num = req.query.num;
  const gool = req.query.gool;
  let sql1 = 'UPDATE user_datalist SET gool = ? WHERE num = ?;'
  const params = [gool, num];
  db.query(sql1,params,(err) => {
    if(!err){
      console.log("수정에 성공했습니다.");
    }
  })
})

router.post('/delet', (req, res) => {
  const num = req.query.num;
  let sql1 = 'DELETE FROM user_datalist WHERE num = ?;'
  db.query(sql1,num,(err) => {
    if(!err){
      console.log("삭제에 성공했습니다.");
    }
  })
})
module.exports = router;