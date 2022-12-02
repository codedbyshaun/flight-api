const PORT = 8000
const express = require('express')
const app = express()
const fetch = require('node-fetch');

  // const url = 'https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures';

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': process.env.default,
  //     'X-RapidAPI-Host': 'madrid-barajas-airport-flights.p.rapidapi.com'
  //   }
  // };

  // fetch(url, options)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.error('error:' + err));

console.log(fetch('https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures'))

app.listen(PORT, () => console.log('running on PORT ' + PORT))

// app.get('/flights', (req, res) => {

// process.env.RAPID_API_KEY
