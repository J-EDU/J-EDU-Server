/* eslint-disable */
const {start} = require('./app') ;
const {db} = require('./models/index')

const port = process.env.PORT || 5000;

db.sync().then(()=>{
  let count = 0;
  let f = 0 ;
  start(port)
}).catch(console.error)
