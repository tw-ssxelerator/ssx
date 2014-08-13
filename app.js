// Generated by LiveScript 1.2.0
(function(){
  var express, path, morgan, favicon, app, server;
  express = require('express');
  path = require('path');
  morgan = require('morgan');
  favicon = require('static-favicon');
  app = express();
  app.set('views', path.join(__dirname, 'views'));
  app.use(favicon());
  app.use(morgan('dev'));
  app.use(express['static'](path.join(__dirname, 'public')));
  app.set('port', process.env.PORT || 3000);
  app.set('view engine', 'jade');
  app.engine('jade', require('jade').__express);
  ['index', 'about', 'partner', 'contact', 'accelerate'].map(function(it){
    return app.get("/" + it, function(req, res){
      return res.render(it + "", {});
    });
  });
  app.get('/', function(req, res){
    return res.render('index', {
      isindex: true
    });
  });
  server = app.listen(app.get('port'), function(){
    return console.log('Express server listening on port ' + server.address().port);
  });
}).call(this);
