import { Request, Response } from 'express';
import { getCustomRepository, Like } from 'typeorm';
import { PointsRepository } from '../repositories/PointsRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

class PointController {
   async create(request: Request, response: Response) {
      const { name, city, state, reference, description } = request.body;

      const schema = yup.object().shape({
         name: yup.string().required("Nome obrigatório"),
         city: yup.string().required("Cidade obrigatória"),
         state: yup.string().required("Estado obrigatório"),
         reference: yup.string().required("Referência obrigatória"),
         description: yup.string().required("Descrição obrigatória")
      });

      try {
         await schema.validate(request.body, { abortEarly: false });
      } catch (error) {
         throw new AppError(error);
      }

      const pointsRepository = getCustomRepository(PointsRepository);

      const pointAlreadyExists = await pointsRepository.findOne({
         name
      });
      if(pointAlreadyExists) {
         throw new AppError('Point already exists!')
      }

      const point = pointsRepository.create({
         name,
         city,
         state,
         reference,
         description
      });

      await pointsRepository.save(point);

      return response.status(201).json(point);
   }

   async show(request: Request, response: Response) {
      const pointsRepository = getCustomRepository(PointsRepository);
      
      const all = await pointsRepository.find();

      return response.status(200).json(all);
   }

   async searchByName(request: Request, response: Response) {
      const { nome } = request.params;

      const pointsRepository = getCustomRepository(PointsRepository);

      const pointsByName = await pointsRepository.find({
         name: Like(`%${nome}%`),
      });

      return response.status(200).json(pointsByName);
   }
}

export { PointController };