import {Router} from 'express';
import multer from 'multer';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({ 
    dest: './tmp/',
});


//POST - /categories
categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
});

//GET - /categories
categoriesRoutes.get('/', (request, response) => {
    return listCategoriesController.handle(request, response);
})

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {
    const {file} = request;
    console.log(file);
    return response.send();
})


export {categoriesRoutes};