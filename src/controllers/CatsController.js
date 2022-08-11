const { Cat } = require('../models')

exports.create = async (req, res) => {
    const dbCat = await Cat.create(req.body);
    if(!dbCat) {
        return res.status(500).json({ error: "Cat not created" });
    }
    return res.status(201).json(dbCat);
}