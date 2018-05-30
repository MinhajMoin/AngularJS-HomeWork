import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ta-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  title = 'Todo App';
  todoList = [];
  constructor() { }

  ngOnInit() {
  }

  addNewTodo(newTodoText) {
    const newTodo = {
      text: newTodoText,
      done: false
    };
    this.todoList.push(newTodo);

  }
  removeTodo(num){
    if (this.todoList[num].done==false){
    this.todoList.splice(num,1);
  }}

}
