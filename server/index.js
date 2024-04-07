const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Sign =require('./models/sign')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Continue with your application logic here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.post('/signup',(req, res)=>{
    Sign.create(req.body)
    .then(sign=>res.json(sign))
    .catch(err=>res.json(err))
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  Sign.findOne({ email: email})
  .then(user=>{
    if(user){
      if (user.password===password){
        res.json("seccess")
      }else{
        res.json('password is incorrect')
      }
    }
    else{
      res.json('no record is existed')
    }
    
  });
});

app.listen('3001', ()=>{
    console.log("server is running")
})
