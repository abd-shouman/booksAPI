import {} from 'dotenv/config';
import server from './config/server';
import './config/database';

const PORT = process.env.PORT || 5555;
server.listen(PORT, ()=>{
    console.log(`Book API server started on port ${PORT}`);
});