import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../Todos';
import { CommonModule } from '@angular/common';
import { TodosItemComponent } from "../todos-item/todos-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";



@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodosItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() {
    if (localStorage.getItem("todos") === null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(localStorage.getItem("todos")!);
    }
  }

  ngOnInit(): void { }
  deleteTodo(todo: Todo) {
    console.log("Delete todo clicked", todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  TodoAdd(todo: Todo) {
    console.log("Add todo clicked", todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  } 
}