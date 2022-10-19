/* eslint-disable */
const {start} = require('./app') ;
const {db} = require('./models/index')

const port = process.env.PORT || 5000;

db.sync({force:true}).then(()=>{
  start(port)
}).catch(console.error)
