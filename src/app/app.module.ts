import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { MarkComponent } from './mark/mark.component';
import { OtherComponent } from './other/other.component';
import { ProblemComponent } from './problem/problem.component';
import { Issue1Component } from './issue1/issue1.component';
import { Issue2Component } from './issue2/issue2.component';
import { Issue3Component } from './issue3/issue3.component';
import { Issue4Component } from './issue4/issue4.component';
import { Issue5Component } from './issue5/issue5.component';
import { Issue6Component } from './issue6/issue6.component';
import { Issue7Component } from './issue7/issue7.component';
import { SolvedComponent } from './solved/solved.component';
import { Issue1part2Component } from './issue1part2/issue1part2.component';
import { Issue1part3Component } from './issue1part3/issue1part3.component';
import { Issue1orderComponent } from './issue1order/issue1order.component';
import { CancelComponent } from './cancel/cancel.component';
import { SubmitedComponent } from './submited/submited.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, MarkComponent, OtherComponent, ProblemComponent, Issue1Component, Issue2Component, Issue3Component, Issue4Component, Issue5Component, Issue6Component, Issue7Component, SolvedComponent, Issue1part2Component, Issue1part3Component, Issue1orderComponent, CancelComponent, SubmitedComponent],
  imports: [
    MatSidenavModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
