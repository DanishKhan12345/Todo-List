import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

@Output() TodoAdd: EventEmitter<Todo> = new EventEmitter<Todo>();
title: string;
desc: string;

constructor() {
  this.title = "";
  this.desc = ""; 
}
addTodo() {
  const newTodo = {
    sno: Math.floor(Math.random() * 1000),
    title: this.title,
    desc: this.desc,
    active: true
    
  }
  this.TodoAdd.emit(newTodo);
  console.log("Emitted todo:", newTodo);
}


}