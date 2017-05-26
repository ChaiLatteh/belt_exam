import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { AnswerService } from './../../answer/answer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.css']
})
export class QuestionShowComponent implements OnInit {
  question:any;
  question_id:string;
  constructor(private _questionService:QuestionService, private _answerService:AnswerService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
      this.question_id=param.question_id;
      console.log("question ID from url is: ", param.question_id);
    })
    this.getQuestion(this.question_id);
  }

  getQuestion(question_id){
    this._questionService.getQuestion(question_id)
    .then( (question) => {
      this.question = question
    })
    .catch((err) => console.log(err))
  }

  likeAnswer(answer){
    answer.likes+=1;
  }

}
