import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/Todo";

@Component({
    selector: "app-todos", 
    templateUrl: "./todos.component.html", 
    styleUrls: ["./todos.component.css"],
})

export class TodosComponent implements OnInit{

    todos: Todo[] = [];
    inputTodo: string = "";

    ngOnInit():void {
        this.todos = [
            {
                content: "This is task #1 (not completed)", 
                completed: false,
            }, 
            {
                content: 'This is task #2 (completed)', 
                completed: false, 
            }
        ]
    }

    onToggle(id: number): void {
        this.todos.map((v, i) => {
            if (i === id) {
                v.completed = !v.completed
            }
            return v
        })
    }

    onDelete(): void  {
        this.todos = this.todos.filter((v) => !v.completed)
    }
}