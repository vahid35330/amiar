import { Issue7Component } from './issue7/issue7.component';
import { Issue6Component } from './issue6/issue6.component';
import { Issue5Component } from './issue5/issue5.component';
import { Issue4Component } from './issue4/issue4.component';
import { Issue3Component } from './issue3/issue3.component';
import { Issue2Component } from './issue2/issue2.component';
import { Issue1Component } from './issue1/issue1.component';
import { ProblemComponent } from './problem/problem.component';
import { OtherComponent } from './other/other.component';
import { MarkComponent } from './mark/mark.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolvedComponent } from './solved/solved.component';
import { Issue1part2Component } from './issue1part2/issue1part2.component';
import { Issue1part3Component } from './issue1part3/issue1part3.component';
import { Issue1orderComponent } from './issue1order/issue1order.component';
import { CancelComponent } from './cancel/cancel.component';
import { SubmitedComponent } from './submited/submited.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mark', component: MarkComponent },
  { path: 'other', component: OtherComponent },
  { path: 'problem', component: ProblemComponent },
  { path: 'issue1', component: Issue1Component },
  { path: 'issue1part2', component: Issue1part2Component },
  { path: 'issue1part3', component: Issue1part3Component },
  { path: 'issue1order', component: Issue1orderComponent },
  { path: 'issue2', component: Issue2Component },
  { path: 'issue3', component: Issue3Component },
  { path: 'issue4', component: Issue4Component },
  { path: 'issue5', component: Issue5Component },
  { path: 'issue6', component: Issue6Component },
  { path: 'issue7', component: Issue7Component },
  { path: 'solved', component: SolvedComponent },
  { path: 'cancel', component: CancelComponent },
  { path: 'submited', component: SubmitedComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
