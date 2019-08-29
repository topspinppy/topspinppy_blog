// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import 'bootstrap/dist/css/bootstrap.min.css';

// require("dotenv").config({
//    path: `.env.${process.env.NODE_ENV}`,
// })

if (process.env.gatsby_executing_command === 'develop' || process.env.GATSBY_ENV === 'staging')
  var envPath = './.env.development'
else
  var envPath = './.env.production'

require('dotenv').config({path: envPath})

console.log(envPath)