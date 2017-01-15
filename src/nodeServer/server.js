const permissions = require('./permissions.js');
const request = require("superagent");
const express = require('express');
const oauth2 = require("client-oauth2");
const oa2 = new oauth2(config.express);
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

function getInfo(token) {
  
  return new Promise(function(resolve, reject){
    let result;
    request
      .get(`https://discordapp.com/api/users/@me`)
      .set(`Authorization`, `Bearer ${token}`)
      .end((err, res) => {
        if(err) return reject(err);
        else{
          result = [res.body];
          request
            .get(`https://discordapp.com/api/users/@me/guilds`)
            .set(`Authorization`, `Bearer ${token}`)
            .end((err, res) => {
              if(err) return reject(err);
              else{
                result.push(res.body);
                resolve(result);
              }
            })
        }
      });
  }
}

app.get("/login", (req, res) => {
  res.redirect(oa2.code.getUri());
});

app.get('/me', (req,res) => {
  getInfo(req.cookies.token).then(function(data){
    console.log(data);
  }).catch(function(err){
    console.log(err);
  });
});

app.get("/callback", (req, res) => {
  oa2.code.getToken(req.url).then((user) => {
    console.log(user);
    res.cookie("token", user.data.access_token);
    res.redirect("/me")
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
