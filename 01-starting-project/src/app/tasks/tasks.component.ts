import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskFormComponent } from "./new-task-form/new-task-form.component";
import { TasksService } from './tasks.service'; // Add this import


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // this id is the user Id
  @Input({ required:true }) userId!: string ;
  @Input({ required:true }) name!: string ;
  isAddingTask = false;
  // first thing ran and it serves for initializacion and declaration of requirements
  // injector cant function without the service 
  // donest give a special init w no sharing of the values through components... 
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getTaskByUserId(this.userId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
