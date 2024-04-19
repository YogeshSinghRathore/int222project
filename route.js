const express = require("express");
const fs = require("fs");
const path = require("path");


const router = express.Router();

const loginPath = path.join(__dirname, "../");
router.use(express.static(loginPath))
router.get("/", function(req, res){
    res.sendFile(path.join( loginPath, "index.html"));
})

router.get("/login", function(req, res){
    res.sendFile(path.join( loginPath, "login.html"));
})
router.get("/register", function(req, res){
    res.sendFile(path.join( loginPath, "sign.html"));
})

// router.get("/register", function(req, res){
//     res.sendFile(path.join( loginPath, "signup.html"));
// })

router.get("/register", function(req, res){
    fs.readFile("signup.html", "utf8", (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200, { "content-type": "text/html" }).send(data);
        }
      });
})

module.exports = router;
