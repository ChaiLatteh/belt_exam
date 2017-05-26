var controller = require('../controllers/controller');

module.exports = app => {
  app.get('/api/current', controller.getCurrentUser);
  app.post('/api/login', controller.login);
  app.post('/api/question/create', controller.createQuestion);
  app.get('/api/questions', controller.getQuestions);
  app.get('/api/question/:question_id', controller.getQuestion);
  app.post('/api/question/answer/:question_id', controller.createAnswer);
  // app.post('/likeAnswer/:answer_id', controller.likeAnswer);
  app.post('/api/answer/like/:answer_id', controller.likeAnswer);
}
