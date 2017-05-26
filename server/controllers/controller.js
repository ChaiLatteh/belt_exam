var mongoose = require('mongoose');

var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
  login: (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
      if(user == null){
        let newUser = new User(req.body);
        newUser.save( (err, savedUser) =>{
          if(err){
            console.log(err);
            return res.sendStatus(500);
          }
          else{
            req.session.user = savedUser;
            return res.json(savedUser);
          }
        })
      }
      else{
        req.session.user = user;
        return res.json(user);
      }
      console.log(req.session.user);
    })
  },
  getCurrentUser: (req, res) => {
    if(!req.session.user){
      return res.status(401).send("No user in session");
    }
    else{
      return res.json(req.session.user);
    }
  },

  createQuestion: (req, res) => {
    let question = new Question(req.body);
    question.save((err,question)=>{
      if(err){
        console.log(err);
        return res.status(500).send("error creating question");
      }
      else{
        console.log("CREATED A NEW QUESTION!!");
        res.json(question);
      }
    })
  },
  getQuestions: (req, res)=>{
    Question.find((err,questions)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Error getting questions list");
      }
      else{
        return res.json(questions);
      }
    })
  },
  getQuestion: (req, res)=> {
    Question.findOne({_id: req.params.question_id}).populate('_user').populate({path:'answers', populate: {path:'_user'}}).exec((err, question)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Could not show a question");
      }
      else{
        console.log(question);
        res.json(question);
      }
    })
  },
  createAnswer: (req, res)=>{
    Question.findOne({_id:req.params.question_id}, (err, question)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Could not get question for posting answer");
      }
      else{
        var answer = new Answer(req.body);
        answer._user = req.session.user._id;
        answer._question = question._id;
        answer.save((err, newAnswer)=>{
          if(err){
            console.log(err);
            return res.status(500).send("Could not save the answer");
          }
          else{
            question.answers.push(newAnswer);
            question.save((err, data)=>{
              if(err){
                console.log(err);
                return res.status(500).send("error saving question after new answer");
              }
              else{
                res.json(data);
              }
            })
          }
        })
      }
    })
  },
  likeAnswer: (req, res)=>{
  }

  // METHOD HERE
}
