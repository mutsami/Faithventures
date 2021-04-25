import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [ {path: '', component: HomeComponent}, 
{
  path: 'about',
  loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
},
{
  path: 'ace',
  loadChildren: () => import('./pages/ace/ace.module').then(m => m.AceModule)
},
{
  path: 'admission',
  loadChildren: () => import('./pages/admission/admission.module').then(m => m.AdmissionModule)
},
{
  path: 'contact',
  loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
