import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send('hello world from servers');
});

app.get('/about',(req,res)=>{
    res.send('about pages');
})


 

 
export default app;