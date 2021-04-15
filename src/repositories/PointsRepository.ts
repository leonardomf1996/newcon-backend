import { EntityRepository, Repository } from 'typeorm';
import { Point } from '../models/Point';

@EntityRepository(Point)
class PointsRepository extends Repository<Point> {

}

export { PointsRepository };