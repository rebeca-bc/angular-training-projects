import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskData, Task } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
    // only be access inside this class
    private tasks = DUMMY_TASKS;

    constructor() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        }
    }

    // methods
    getTaskByUserId(userId : string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    removeTaskById(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    addTask(newTask: NewTaskData, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.dueDate
        })
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
