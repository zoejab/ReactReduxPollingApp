const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise= global.Promise;
mongoose.connect(process.env.DATABASE, {useUnifiedTopology: true, useNewUrlParser: true });

module.exports.Poll = require('./poll');