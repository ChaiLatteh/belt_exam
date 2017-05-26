import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionShowComponent } from './question/question-show/question-show.component';
import { AnswerNewComponent } from './answer/answer-new/answer-new.component';

const APP_ROUTES: Routes = [
  {path: 'index', component: LoginComponent},
  {path: '', component: QuestionComponent, children:[
    {path: '', component: QuestionListComponent},
    {path: 'new_question', component: QuestionNewComponent},
    {path: 'question/:question_id', component: QuestionShowComponent},
    {path: 'question/:question_id/new_answer', component: AnswerNewComponent},
  ]},

]
export const routing = RouterModule.forRoot(APP_ROUTES);
