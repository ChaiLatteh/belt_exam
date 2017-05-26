let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AnswerSchema = new Schema({
  answer: {type: String, required:true},
  details: {type: String},
  likes: {type:Number, default:0},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
}, {timestamps: true});

mongoose.model('Answer', AnswerSchema);
