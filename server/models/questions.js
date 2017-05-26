let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let QuestionSchema = new Schema({
  question: {type: String, required:true},
  description: {type: String},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);
