import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4040;

function startServer(){
    
    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}


startServer();