import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './library/book-list/book-list.component';
import { BookFormComponent } from './library/book-form/book-form.component';
import { BookDetailsComponent } from './library/book-details/book-details.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookFormComponent },
  { path: 'edit/:id', component: BookFormComponent },
  { path: 'details/:id', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
