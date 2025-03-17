const info = require('country-information-1')

info.countryData('bangladesh').then(data => console.log(data)).catch(e=>console.log(e))