import { Router } from 'express';
import { PointController } from './controllers/PointController';

const routes = Router();

const pointController = new PointController();

routes.get('/points', pointController.show);
routes.post('/points', pointController.create);
routes.get('/points/:nome', pointController.searchByName);

export { routes };