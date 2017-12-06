var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name:{type: String, required: true},
    interests:[{type: Schema.Types.ObjectId, ref:'Interest'}]
});

module.exports = mongoose.model('InterestsCategory',schema, 'interestsCategories');