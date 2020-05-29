import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AboutChildComponent } from '../about-child/about-child.component';
import { EventsComponent } from '../events/events.component';
import { FormsComponent } from '../forms/forms.component';
import { ParentComponent } from '../parent/parent.component';
import { ApiComponent } from '../api/api.component';
import { CrudComponent } from '../crud/crud.component';


const route: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch:'full' // page will redirect if url is localhost:4200
  },
  // {
  //   path:'**', redirectTo: 'home' // If user enter the wrong url
  // },
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
  },
  {
    path: 'events', component: EventsComponent
  },
  {
    path: 'forms', component: FormsComponent
  },
  {
    path: 'parent-child', component: ParentComponent
  },
  {
    path: 'api', component: ApiComponent
  },
  {
    path: 'crud', component: CrudComponent
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
