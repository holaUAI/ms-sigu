import express from 'express';
import db from './config/mysql/mysql.js';
import morgan from 'morgan';
import corsMiddleware from './middleware/cors.js';
import CursoRouter from './modules/cursos/routers/curso.route.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.curso_path = '/ms/v1/curso';

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        await db.testConnection();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(corsMiddleware);
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use(this.curso_path, CursoRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`👾 I'M ALIVE => PORT: ${this.port}`);
        });
    }
}

export default Server;
