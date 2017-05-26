import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class QuestionService {

  constructor(private _http:Http) { }
  getCurrentUser(){
    return this._http.get('/api/current')
    .map( (response:Response) => response.json())
    .toPromise()
  }

  createQuestion(question){
    return this._http.post('/api/question/create', question)
    .map( (response:Response) => response.json())
    .toPromise()
  }

  getQuestions(){
    return this._http.get('/api/questions')
    .map((response:Response)=>response.json())
    .toPromise()
  }

  getQuestion(question_id){
    return this._http.get('/api/question/' + question_id)
    .map((response: Response) => response.json())
    .toPromise()
  }
  getAnswers(question_id){
    return this._http.get('/api/question/answers' + question_id)
    .map((response:Response)=>response.json())
    .toPromise()
  }

}
