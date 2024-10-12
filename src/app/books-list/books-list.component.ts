import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})

export class BooksListComponent {
  title = "Liste des nouveaux livres :";
  books = [
    {id : 1, title : "Atomic Habits", author : "James Clear", price : 35},
    {id : 2, title : "The slight edge", author : "Jeff Olsen", price : 30},
    {id : 3, title : "Power of habits", author : "...", price : 25}
  ];
  action = "";

  changeAction(action : string){
    this.action = action;
  }
}
