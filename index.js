const express=require('express')
const cors=require('cors')
const phones=require('./phonesData.json')
const app=express()
const port=5000

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello to express server!')
})

app.get('/phones',(req,res)=>{
 res.send(phones);
})

app.get('/phones/:id',(req,res)=>{
    // const id=req.params.id;
    // console.log(id,typeof id); 1 string
    const id=parseInt(req.params.id);
    // console.log(id,typeof id);1 number
    const phone=phones.find(phone=>phone.id===id)|| {}
    res.send(phone)

})

app.listen(port,()=>{
    console.log(`Listening to ${port} again`);
})