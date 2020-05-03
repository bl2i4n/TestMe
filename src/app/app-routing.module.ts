import { AppComponent } from './app.component';
import { QuestionItemsComponent } from './components/question-items/question-items.component';
import { TestQuestionsComponent } from './components/test-questions/test-questions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: TestQuestionsComponent},
  { path: 'home/questionnaire', component: QuestionItemsComponent},
  { path: 'questionnaire', component: QuestionItemsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
