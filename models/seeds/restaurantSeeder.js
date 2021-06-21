const mongoose = require('mongoose')
const Restaurant = require('../restaurant') // 載入 restaurant model
const restData = require('../../restaurants.json')

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
    const restArray = restData.results

  for (let i = 0; i < restArray.length; i++) {
    Restaurant.create({
      name: restArray[i].name,
      name_en: restArray[i].name_en,
      category: restArray[i].category,
      image: restArray[i].image,
      location: restArray[i].location,
      phone: restArray[i].phone,
      google_map: restArray[i].google_map,
      rating: restArray[i].rating,
      description: restArray[i].description
    })
  }

    console.log('done')
  })