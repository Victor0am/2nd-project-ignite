import {Router} from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

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
});

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});


export {categoriesRoutes};