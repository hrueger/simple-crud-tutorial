import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bookTitle: string = "Die unendliche Geschichte";
  public showAlert: boolean = true;
  public newBookTitle: string = "";
  public books: string[] = [
    "Die unendliche Geschichte",
    "Die drei ??? Teil 1",
    "Die drei ??? Teil 2",
    "Die drei ??? Teil 3",
    "Die drei ??? Teil 4",
    "Die drei ??? Teil 5",
    "Die drei ??? Teil 6"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public transformBookTitle(title): string {
    return "Buch: " + title;
  }

  public addNewBook() {
    // this.showAlert = !this.showAlert;
    this.books.push(this.newBookTitle);
    this.newBookTitle = "";
  }

}
