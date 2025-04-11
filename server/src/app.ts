import express from 'express';
import userRoute from './modules/users/user.route'
const app=express();


app.get('/',(req,res)=>{
    res.send('hello world from servers');
});

app.use('/user',userRoute)

 

 

 
export default app;