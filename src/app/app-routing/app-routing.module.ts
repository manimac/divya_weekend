import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AboutChildComponent } from '../about-child/about-child.component';


const route: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch:'full' // page will redirect if url is localhost:4200
  },
  {
    path:'**', redirectTo: 'home' // If user enter the wrong url
  },
  // {
  //   path:'**', component: pageNotFoundComponent
  // },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about',
    children: [
      {
        path: '', component: AboutComponent
      },
      {
        path: ':id', component: AboutChildComponent
      }
      // {
      //   path: 'child', component: AboutChildComponent
      // }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ]
})
export class AppRoutingModule { }
