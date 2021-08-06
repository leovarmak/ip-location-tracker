

const axios = require('axios');
const publicip = require('public-ip');

const url = 'https://www.maxmind.com/geoip/v2.1/city/'
publicip.v4().then(ip => {
    axios.get(url + ip + '?demo=1').then(function(res){
    	let data = res.data;
    	console.log('IP: ' + ip)
    	console.log('City: ' + data.city.names.en + ', ' + data.subdivisions[0].names.en)
    	console.log('Country: ' + data.country.names.en)
    })
});




