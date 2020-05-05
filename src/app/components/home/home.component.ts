import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Book } from 'src/app/classes/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService: StorageService) {}

  public bookTitle: string = "Die unendliche Geschichte";
  public showAlert: boolean = true;
  public newBookTitle: string = "";
  public newBookAuthor: string = "";
  public isEditing: number = undefined;
  public readonly maxTitleLength: number = 20;
  public books: Book[] = [];

  ngOnInit(): void {
    this.books = this.storageService.getBooks();
  }

  public transformBookTitle(title): string {
    return "Buch: " + title;
  }

  public addNewBook() {
    if (this.isEditing) {
      // speichere die Änderungen
      const that = this;
      this.books = this.books.map(function (b) {
        if (b.id == that.isEditing) {
          b.title = that.newBookTitle;
          b.authors = [that.newBookAuthor];
        }
        return b;
      });
    } else {
      // erstelle neues Buch
      const book = new Book();
      book.title = this.newBookTitle;
      book.id = Math.round(Math.random() * 1000000);
      book.authors = this.newBookAuthor ? [this.newBookAuthor] : undefined;
      this.books.push(book);
    }
    this.newBookTitle = "";
    this.newBookAuthor = "";
    this.isEditing = undefined;
    this.storageService.setBooks(this.books);
  }

  public deleteBook(book) {
    console.log(book);
    this.books = this.books.filter(function (b) {
      if (b.title == book.title) {
        return false;
      } else {
        return true;
      }
    });
    this.storageService.setBooks(this.books);
  }

  public editBook(book: Book) {
    this.isEditing = book.id;
    this.newBookTitle = book.title;
    this.newBookAuthor = book.authors.join(", ");
  }
}
