import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class AnswerService {
  answer:any;
  constructor(private _http:Http) { }

  createAnswer(answer, question_id){
    return this._http.post('/api/question/answer/' + question_id, answer)
    .map((response:Response)=>response.json())
    .toPromise()
  }
  likeAnswer(answer){
    return this._http.post('/api/answer/like/' + answer._id, answer)
    // console.log(answer._id);
    .map((response:Response)=>response.json())
    .toPromise()
  }

}
