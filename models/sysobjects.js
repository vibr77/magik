var mongoose = require('mongoose');
var logger = require("../logger");
const config=require("../config");

const { db: { host, port, name } } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;

mongoose.connect(connectionString, {useMongoClient: true});
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var SysObjectSchema = new mongoose.Schema({
  object_type: {type: String, required: false, trim: true }
},{ strict: false });

var SysObject = mongoose.model('SysObject', SysObjectSchema,'SysObject');
module.exports = SysObject;