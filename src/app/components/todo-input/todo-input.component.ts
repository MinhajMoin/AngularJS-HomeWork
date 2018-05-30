import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ta-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  placholderVal = 'Enter your Tasks for Today';
  newTodoVal = '';
  @Output() todoAdded = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    console.log(this.newTodoVal);
    this.todoAdded.emit(this.newTodoVal);
    this.newTodoVal='';
  }

}
