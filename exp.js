import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import User from './user.js';
import bcrypt from 'bcrypt';
import Book from './Book.js';

const exp=express()

mongoose.connect('mongodb://127.0.0.1:27017/Library')
  .then(() => console.log('Connected!'));

  const db=mongoose.connection

let middle=(req,res,next)=>{
    let x=2
    if(x==2){

        console.log('middleware');
        next()
    }
    else{
        res.json('invalid')
    }
}

//middle ware

exp.use(middle)
exp.use(cors())
exp.use(express.json({limit:'50mb'}))

exp.get('/login',(req,res)=>{
    res.json('login page')
})

exp.post('/signin', async (req, res) => {
    try {
      console.log(req.body);
      const { username, password } = req.body;
      let hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
  
      req.body = { ...req.body, password: hashedPassword };
  
      console.log(req.body, 'new body');
      let newdata = new User(req.body);
      console.log(newdata);
  
      let response = await newdata.save();
      console.log(response);
      res.json(response);
    } catch (e) {
      res.status(500).json(e.message);
    }
  });



  
exp.post('/login', async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  let users = await User.findOne({ username: username });
  console.log(users);
  if (!users) {
    return res.status(401).json('invalid username or password');
  }

  let matchPassword = await bcrypt.compare(password, users.password);
  console.log(matchPassword);
  if (!matchPassword) {
    return res.status(401).json('invalid username or password');
  }
  res.json(users);
});
exp.post('/addbook', async (req, res) => {
  try {
      const { bookname, author, des, rate, img } = req.body;
      let newBook = new Book({ bookname, author, des, rate, img });
      let response = await newBook.save();
      res.json(response);
  } catch (e) {
      res.status(500).json(e.message);
  }
});


exp.get('/viewbooks', async (req, res) => {
  try {
      let books = await Book.find();
      res.json(books);
  } catch (e) {
      res.status(500).json(e.message);
  }
});

exp.delete('/deleteData/:id',async(req,res)=>{
    let id=req.params.id
    // let id=new mongoose.Types.ObjectId(req.params.id)
    console.log(id);
    let response=await User.findByIdAndDelete(id)
    // let response=await db.collection('Newusers').deleteOne({_id:id})
    res.json(response)
})

exp.get('/findOne/:id',async (req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await User.findById(id)
    
    // let response=await db.collection('Newusers').findOne({_id:id})
    console.log(response);
    res.json(response)

})

exp.put('/updateOne/:id',async(req,res)=>{
    let id=req.params.id
    let response=await User.findByIdAndUpdate(id,req.body)
    // let response=await db.collection('Newusers').updateOne({_id:id},{$set:req.body})
    res.json(response)

})






exp.listen(4000,()=>{
    console.log('running');
})
