import {Router} from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();



//POST - /categories
categoriesRoutes.post('/', (request, response) => {
    const {name, description} = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if(categoryAlreadyExists) {
        return response.status(400).json({error: "Category already exists"});
    }

    categoriesRepository.create({name, description});

    return response.status(201).send();
});

//GET - /categories
categoriesRoutes.get('/', (request, response) => {
    const allCategories = categoriesRepository.list();

    return response.json(allCategories);
})



export {categoriesRoutes};