import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  book: Book = { image: '', name: '', editorial: '', gender: '', author: '' };
  initialBook: Book = {
    id: 0,
    image: '',
    name: '',
    editorial: '',
    gender: '',
    author: ''
  };

  isEditing = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditing = true;
        this.bookService.getBook(Number(id)).subscribe(book => {
          this.book = book;
          this.initialBook = { ...book };
        });
      } else {
        this.isEditing = false;
      }
    });
  }

  saveBook(): void {
    if (this.isEditing) {
      this.bookService.updateBook(this.book).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.bookService.createBook(this.book).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  isDirty(): boolean {
    return (
      this.isEditing && (
        JSON.stringify(this.initialBook) !== JSON.stringify(this.book)
      )
    );
  }  
}

