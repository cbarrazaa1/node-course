const express = require('express');
const path = require('path');

const app = express();

// Paths
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Handlebars views
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Static serve
app.use(express.static(publicDir));

app.get('', (request, response) => {
  response.render('index', {
    title: 'Weather App',
    name: 'Cesar',
  });
}); 

app.get('/about', (request, response) => {
  response.render('about', {
    title: 'About Me',
    name: 'Cesar Barraza'
  });
});

app.get('/help', (request, response) => {
  response.render('help', {
    message: 'Test message for help',
  })
});

app.get('/weather', (request, response) => {
  response.send({
    forecast: '20 degrees Celsius',
    location: 'Monterrey'
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
})