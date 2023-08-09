import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './library/book-list/book-list.component';
import { BookFormComponent } from './library/book-form/book-form.component';
import { BookDetailsComponent } from './library/book-details/book-details.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookFormComponent,canDeactivate: [CanDeactivateGuard] },
  { path: 'edit/:id', component: BookFormComponent,canDeactivate: [CanDeactivateGuard] },
  { path: 'details/:id', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
