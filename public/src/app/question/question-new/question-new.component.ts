import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {

  constructor(
    private _questionService:QuestionService,
    private _router:Router,

  ) { }

  ngOnInit() {
  }

  createQuestion(formData){
    this._questionService.createQuestion(formData.value)
    .then((question)=>{
      console.log(question)
      this._router.navigate(['/'])
    })
    .catch((err)=>console.log(err))

  }

}
