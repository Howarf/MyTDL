const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');

db.connect();

router.get('/userdata', (req, res) => {
  console.log(`= = =>req: ${util.inspect(req.query)}`);
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
router.post('/logout', (req, res) => {

})

module.exports = router;