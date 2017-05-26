import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { LoginService } from './login/login.service';
import { QuestionService } from './question/question.service';
import { AnswerService } from './answer/answer.service';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { QuestionShowComponent } from './question/question-show/question-show.component';
import { AnswerNewComponent } from './answer/answer-new/answer-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionListComponent,
    QuestionNewComponent,
    QuestionShowComponent,
    AnswerNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [LoginService, QuestionService, AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
