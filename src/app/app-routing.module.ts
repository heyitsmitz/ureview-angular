import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UnitComponent } from './components/unit/unit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard'
import { UnitsComponent } from './components/units/units.component';
import { AddReviewComponent } from './components/add-review/add-review.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", pathMatch: "full", redirectTo: "home/units" },
  { path: "home", component: HomeComponent, canActivate:[AuthGuard], 
    children: [
      { path: 'units', component: UnitsComponent },
      { path: 'units/:unitCode', component: UnitComponent },
      { path: 'units/:unitCode/add-review', component: AddReviewComponent }
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
