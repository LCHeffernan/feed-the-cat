const { Router } = require('express');
const catsController = require('../controllers/CatsController');
const cats = require('../models/cats');

const catsRouter = new Router();

catsRouter.post('/', catsController.createCat);
catsRouter.get('/', catsController.findAllCats);
catsRouter.get('/:catId', catsController.findCatById);
catsRouter.patch('/:catId', catsController.updateAnyOfCatsDetails);
catsRouter.patch('/feed/:catId', catsController.updateCatFeedDate);
catsRouter.delete('/:catId', catsController.deleteCat);

module.exports = catsRouter;