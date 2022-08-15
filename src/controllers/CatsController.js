const { Cat } = require("../models");

exports.createCat = async (req, res) => {
  try {
    const createCatInDb = await Cat.create(req.body);
    //accessing Cat model and inserting an row entry
    res.status(201).json(createCatInDb);
  } catch (err) {
    res.status(500).json({ error: "Cat not created" });
  }
};

exports.findAllCats = async (req, res) => {
    const { queryString } = req.query;
  try {
    if (!queryDb) {
    const findCatsInDb = await Cat.findAll();
    console.log('all cats ' + queryString);
    res.status(200).json(findCatsInDb);
    } else {
        //not working
        console.log('hello')
        const findCatInDb = await Cat.findAll({ where: queryDb});
        console.log(findCatInDb)
        res.status(200).json(findCatInDb);
    }
  } catch (err) {
    res.status(500);
  }
};

exports.findCatById = async (req, res) => {
  const { catId } = req.params;
  try {
    const findCatInDb = await Cat.findByPk(catId);
    if (!findCatInDb) {
      res.sendStatus(404);
    } else {
      res.status(200).json(findCatInDb);
    }
  } catch (err) {
    res.status(500).json({ error: "Cat not created" });
  }
};

exports.updateAnyOfCatsDetails = async (req, res) => {
  const { catId } = req.params;
  const findCatInDb = await Cat.findByPk(catId);

  try {
    if (!findCatInDb) {
      res.sendStatus(404);
    } else {
      const updateCatInDb = await Cat.update(req.body, {
        where: { id: catId },
      });
      res.status(200).json(updateCatInDb);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

//not working!
exports.updateCatFeedDate = async (req, res) => {
  const { catId } = req.params;
  const findCatInDb = await Cat.findByPk(catId);
  
  try {
    if (!findCatInDb) {
      res.sendStatus(404);
    } else {
      console.log(req.body);
      const [updateFedCatDateInDb] = await Cat.update(
        { lastFed: new Date() },
        { where: { id: catId } }
      );
      res.status(200).json(updateFedCatDateInDb);
    }
  } catch (err) {
    res.status(500);
  }
};

exports.deleteCat = async (req, res) => {
  const { catId } = req.params;
  const findCatInDb = await Cat.findByPk(catId);
  try {
    if (!findCatInDb) {
      res.sendStatus(404);
    } else {
      const deleteCatInDb = await Cat.destroy({ where: { id: catId } });
      res.status(200).json(deleteCatInDb);
    }
  } catch (err) {
    res.status(500);
  }
};
