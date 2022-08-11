const { Router } = require('express');
const catsController = require('../controllers/CatsController');

const catsRouter = new Router();

catsRouter.post('/', catsController.create);

module.exports = catsRouter;