import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { BookFormComponent } from '../app/library/book-form/book-form.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<BookFormComponent>
{
  canDeactivate(
    component: BookFormComponent,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.isDirty()) {
      return window.confirm(
        'You have unsaved changes. Do you really want to leave?'
      );
    }
    return true;
  }
}