const express = require('express');
const { handler } = require('./errors');
const app = express();
const router = require('./routes/user.route')
//let us call some inbuilt express wares

app.use(
    express.json({
        limit: "10mb",
        extended: true
    })
);

app.use(
    express.urlencoded({
        limit: "100mb",
        extended: true
    })
);

app.use (
    (req,res,next)=>{
        console.log("Request received:", req.method, req.url);
        next();
    }
)

// error handlers
app.use(handler);
app.use("/api", router)

module.exports = app;
