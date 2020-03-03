const fs = require("fs");
const path = require("path");

const productToAdd = [
  {
    id: 19112833,
    sku: 1120001,
    name: "Пицца Четыре сезона",
    description:
      "На каждой из четырех частей основы размещены абсолютно разные начинки, символизирующие одно из времен года. Прекрасный вариант для любителей разнообразия и оригинального оформления блюд.",
    price: "110",
    currency: "UAN",
    creatorId: 1,
    created: "21-08-2018",
    modified: "21-08-2018",
    categories: ["pizza"]
  },
  {
    id: 19112834,
    sku: 1120001,
    name: "Пицца Гавайская",
    description:
      "Свое название данный вид получил благодаря одному из главных ингредиентов, который напоминает яркое солнце на Гавайских островах – ананасу. Кроме него в состав пиццы входит сливочный соус, ветчина, красный лук и сыр моцарелла.",
    price: "90",
    currency: "UAN",
    creatorId: 1,
    created: "21-08-2018",
    modified: "21-08-2018",
    categories: ["pizza"]
  },
  {
    id: 19112835,
    sku: 1120001,
    name: "Пицца Капричиоза",
    description:
      "Ее можно назвать классикой итальянской пиццы. В состав Рizza capricciosa входят шампиньоны, маринованные помидоры черри, оливки, ветчина и два вида сыра: Пармезан и Рикотта.",
    price: "120",
    currency: "UAN",
    creatorId: 1,
    created: "21-08-2018",
    modified: "21-08-2018",
    categories: ["pizza"]
  },
  {
    id: 19112836,
    sku: 1120001,
    name: "Пицца Кальцоне",
    description:
      "Начинка в этом виде пиццы спрятана внутри теста, а по форме она напоминает конверт. В некоторых областях Италии Сalzone используют в качестве закуски. Готовится она как с солеными, так и со сладкими начинками.",
    price: "130",
    currency: "UAN",
    creatorId: 1,
    created: "21-08-2018",
    modified: "21-08-2018",
    categories: ["pizza"]
  },
  {
    id: 19112837,
    sku: 1120001,
    name: "Пицца Неаполитанская",
    description:
      "Именно эта пицца была в меню самой первой пиццерии. Ее можно назвать основоположницей этого итальянского блюда. Ее рецептура была узаконена министром сельского хозяйства Италии, из-за чего изменению она не подлежит. В состав пиццы Neapolitano входят анчоусы, свежие томаты, несколько видов сыра и базилик.",
    price: "150",
    currency: "UAN",
    creatorId: 1,
    created: "21-08-2018",
    modified: "21-08-2018",
    categories: ["pizza"]
  }
];

const productPath = path.join(__dirname, "products.json");
const newProductPath = path.join(__dirname, "all-products.json");

fs.readFile(productPath, "utf-8", (err, data) => {
  const product = JSON.parse(data);

  const newProduct = [...product, ...productToAdd];

  fs.writeFile(newProductPath, JSON.stringify(newProduct), err => {
    console.log("writening done");
  });
});
