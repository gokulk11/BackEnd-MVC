const express = require('express')
const mongoose = require('mongoose');
const userRouter = require('./routes/users.route.js')
require('dotenv').config()

const app = express()
const port = 3000



app.use("/api/users",userRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(data=>console.log("DB Connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_DB);
}
