const express = require("express");
const app = express();
const routes = require("./routes/routes");
app.use("/",routes);
app.use('/',(req,res)=>{
  res.send("404");
})
app.listen(3000);
