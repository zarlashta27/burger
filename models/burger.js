//Requires orm and contains all methods that we will be using in order to modify our orm for use in the burgers' database

var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
		
        orm.selectAll("burgers",function(data){
            cb(data);
        });
    },
    
    create: function(inputValue, cb) {
		orm.insertOne("burgers", inputValue, function(data) {
			cb(data);
		});
	},

	update: function(columnName, inputValue, valueId, cb) {
		orm.updateOne("burgers", columnName, inputValue, valueId, function(data) {
			cb(data);
		});
	}
};


module.exports = burger;
