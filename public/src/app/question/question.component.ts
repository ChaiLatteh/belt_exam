import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  user:any;
  constructor(
    private _questionService: QuestionService,
    private _router:Router,
  ) { }

  ngOnInit() {
    this.getCurrentUser()
  }
  getCurrentUser(){
    this._questionService.getCurrentUser()
    .then( (user)=> {
      this.user = user
      this._router.navigate(['/'])
    })
    .catch( (err) => this._router.navigate(['/index']))
  }


}
