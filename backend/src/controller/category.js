const { default: slugify } = require('slugify');
const Category = require('../models/category');

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name)
  }
  if(req.body.parseId){
    categoryObj.parentId = req.body.parentId;
  }

  const cat = new Category(categoryObj);
    cat.save((error, category) => {
      if(error) return res.status(400).json({ error });
      if(category) {
        return res.status(201).json({ category })
      }
    })
  
}

exports.getCategory = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if(error) return res.status(400).json({ error });

    if(categories){
      res.status(201).json({ categories });
    }
  })
}