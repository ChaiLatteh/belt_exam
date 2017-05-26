import { Component, OnInit } from '@angular/core';
import { AnswerService } from './../answer.service';
import { QuestionService } from './../../question/question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.css']
})
export class AnswerNewComponent implements OnInit {
  question:any;
  question_id:string;

  constructor(
    private _answerService:AnswerService,
    private _questionService:QuestionService,
    private _route:ActivatedRoute,
    private _router:Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
      this.question_id = param.question_id;
    })
  }

  getQuestion(question_id){
    this._questionService.getQuestion(this.question_id)
    .then((question=>this.question=question))
    .catch((err)=>console.log(err))
  }

  createAnswer(formData, question_id){
    this.getQuestion(this.question_id);
    console.log(this.question_id);
    this._answerService.createAnswer(formData.value, this.question_id)
    .then(()=>this._router.navigate(['/']))
    .catch((err)=>console.log(err))
  }


}
