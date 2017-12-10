var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    email:{type: String, required: true},
    message:{type: String, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('ContactUsMessage',schema, 'contactUsMessage');