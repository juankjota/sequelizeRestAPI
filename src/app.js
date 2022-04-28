import express from 'express';
import projectsRoutes from './routes/projects.routes.js'
import tasksRoutes from './routes/task.routes.js';

const app = express();
//app.use(json());
//middlewares
app.use(express.json());


app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;