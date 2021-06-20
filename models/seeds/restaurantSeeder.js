const mongoose = require('mongoose')
const Restaurant = require('../restaurant') // 載入 restaurant model

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
    console.log('mongodb connected!')

    for (let i = 0; i < 10; i++) {
      Restaurant.create({ name: 'name-' + i })
    }
    
    console.log('done')
  })