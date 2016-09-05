var mongodb = require('mongodb');
var movies = require('./movies');

var dbInterface = require('./interface');


var uri = 'mongodb://localhost:27017/example';

mongodb.MongoClient.connect(uri, function(error, db) {
	if (error) {
		console.log(error);
		process.exit(1);
	}

	var doc = { title: 'Rogue One', year: 2016, director: 'Gareth Edwards' };
	dbInterface.insert(db, doc, function(error) {
      if (error) {
        console.log(error);
        process.exit(1);
      }
      console.log('all ok');
      process.exit(0);
	});
});
