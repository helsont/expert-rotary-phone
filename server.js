require('babel-core/register');

var React = require('react/addons')
  , components = require('./src/client/app/index');
var ReactApp = React.createFactory(components.ReactApp);
var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', function(req, res){
    // React.renderToString takes your component
    // and generates the markup
    var reactHtml = React.renderToString(ReactApp({}));
    // Output html rendered by react

    res.render('index.ejs', {reactOutput: reactHtml});
});
