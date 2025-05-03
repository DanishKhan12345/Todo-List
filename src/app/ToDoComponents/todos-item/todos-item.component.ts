import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-todos-item',
  // imports: [CommonModule],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}
  ngOnInit() : void {
    // console.log("Todo item initialized", this.todo);
  }  
  deleteTodo(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("Emitted todo:", todo);
  }
}
