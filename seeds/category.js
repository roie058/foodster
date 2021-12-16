const mongoose = require('mongoose');
const { resName, resType, resCategory, } = require('./resnamegen');
const Restaurant = require('../models/restaurant');





module.exports.filerByCategory = function filerByCategory(list) {
    const category = list[Math.floor(Math.floor(Math.random() * list.length))]
    if (category == 'Asian-Fusion' || category == 'Chinese' || category == 'Japanese' || category == 'Sushi' || category == 'Thai') {
        resName = ['Moon', 'Grand', 'King', 'Lucky Star', 'Ginger Panda', 'Hot', 'Mandarin', 'Golden', 'Sun&Moon', 'Midnight', 'Asian'];
        resType = ['Asian Kitchen', 'Roll', 'Wok', 'Noodle bar', 'Szechuan Restaurant', 'Hunan Gourmet', 'Star', 'Express', 'oriental'];
        Restaurant.Image = 'https://source.unsplash.com/collection/4817197'
    }
    else if (category == 'Bakery' || category == 'burekas') {
        resName = ['Dany', 'Neeman', 'Dahary', 'benedict', 'shpitz', 'mifgash hasheyh', 'abulafya'];
        resType = ['Bakery', 'Bakery Cafe', 'Maafim', 'conditoria', 'bagel', 'burekasim', 'hatshapury'];
        Restaurant.Image = 'https://source.unsplash.com/collection/4484612'
    }
    else if (category == 'Bar / Lounge / Pub' || category == 'Sports Bar') {
        resName = ['Shama shama', 'Herzel', 'Bira nekuda', 'Beer bazar', 'Auto', 'Tirtza', 'Bamboo'];
        resType = ['bar', 'sport bar', 'Beach'];
        Restaurant.Image = 'https://unsplash.com/collection/11510188'
    }
    else if (category == 'Barbeque' || category == 'Steaks') {
        resName = ['Ronen', 'Shauli', 'Ezra', 'Rak', 'Abu Adam', 'Hashamen'];
        resType = ['besarim', 'shupudim', 'Shawarma', 'Express', 'Bashuk',];
        Restaurant.Image = 'https://source.unsplash.com/collection/3450852'
    }
    else if (category == 'Burgers' || category == 'Fast Food') {
        resName = ['Burger', 'Agadir', 'MC', 'Happy', 'Fried', 'Hagaraj'];
        resType = ['Saloon', 'Ranch', 'King', 'Express', 'Meat', 'Chiken'];
        Restaurant.Image = 'https://source.unsplash.com/collection/9498598'
    }
    else if (category == 'Ice Cream' || category == 'Pancakes/Waffles/Doughnuts') {
        resName = ['Golda', 'Deli cream', 'Victory', 'Katzefet', 'original house', 'Dunken'];
        resType = ['Deserts', 'Glida', 'Ice cream', 'waffels', 'Doughnuts', 'pancakes'];
        Restaurant.Image = 'https://source.unsplash.com/collection/32612826'
    }
    else if (category == 'Coffee / Espresso') {
        resName = ['Aroma', 'Ness', 'Beans', 'Alona', 'Keren'];
        resType = ['Coffee', 'Caffe'];
        Restaurant.Image = 'https://source.unsplash.com/collection/8325949'
    }
    else if (category == 'German') {
        resName = ['Bavarian', 'Germen'];
        resType = ['Shnizzel', 'beer garden', 'hot dog'];
        Restaurant.Image = 'https://source.unsplash.com/featured/?german-food'
    }
    else if (category == 'Mediterranean' || category == 'Greek' || category == 'Seafood') {
        resName = ['mikonos', 'santorini', 'plaka', 'sonero'];
        resType = ['tzeziki', 'taverna', 'grill', 'fish and grill'];
        Restaurant.Image = 'https://source.unsplash.com/collection/71551824'
    }
    else if (category == 'Vegan Friendly' || category == 'Vegetarian' || category == 'Soup & Salad') {
        resName = ['green', 'Vegi', 'byond'];
        resType = ['salad', 'soups', 'meat'];
        Restaurant.Image = 'https://source.unsplash.com/collection/83070810'
    }
    else if (category == 'Italian' || category == 'Pizza') {
        resName = ['dominos', 'fabrica', 'Dono moro', 'Papa'];
        resType = ['pizza', 'italliano', 'pizza&pasta', 'febritzio', 'pastabar'];
        Restaurant.Image = 'https://source.unsplash.com/collection/4992462'
    }
    else if (category == 'Mexican') {
        resName = ['Tortiya', 'Tako', 'Maya'];
        resType = ['Mexicana', 'Mexicani', 'Tapasbar'];
        Restaurant.Image = 'https://source.unsplash.com/collection/8518950'
    }

    else {
        resName = ['curry', 'chicken', 'Chai', 'tika'];
        resType = ['spoon', 'massala', 'Palace', 'Temple'];
        Restaurant.Image = 'https://source.unsplash.com/collection/8542239'
    }
    Restaurant.Category = category
};
