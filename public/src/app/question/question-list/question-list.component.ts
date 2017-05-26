import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  user:any;
  questions:Array<any>;
  constructor(
    private _questionService: QuestionService,
    private _router:Router,


  ) { }

  ngOnInit() {
    this.getCurrentUser()
    this.getQuestions()
  }
  getCurrentUser(){
    this._questionService.getCurrentUser()
    .then( (user)=> {
      this.user = user
      this._router.navigate(['/'])
    })
    .catch( (err) => this._router.navigate(['/index']))
  }
  getQuestions(){
    this._questionService.getQuestions()
    .then((question)=>{
      this.questions=question
    })
    .catch((err)=>console.log(err))
  }


}
