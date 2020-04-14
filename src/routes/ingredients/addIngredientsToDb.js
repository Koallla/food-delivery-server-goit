const Ingredients = require('../../db/Schemas/ingredients');
const mongoose = require('mongoose');

const addIngredients = (request, response) => {
  const ingredient = request.body;

  const newIngredient = new Ingredients(ingredient);

  console.log(newIngredient);

  newIngredient
    .save()
    .then(res => console.log(res))
    .catch(err => {
      console.log(err);
    });
};

module.exports = addIngredients;
