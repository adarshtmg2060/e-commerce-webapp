import app from './app';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const PORT = process.env.PORT || 4040;

async function startServer() {
    const prisma = new PrismaClient();
    
    try {
        // Test database connection
        await prisma.$connect();
        console.log('Database connected');
        
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to database:', error);
        process.exit(1);
    }
}

startServer();