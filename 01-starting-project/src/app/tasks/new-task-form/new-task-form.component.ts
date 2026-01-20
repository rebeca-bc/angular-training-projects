import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { UserComponent } from "../../user/user.component";
import { CardComponent } from "../../sharedUI/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css'
})
export class NewTaskFormComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  private tasksService = inject(TasksService);
  
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }, this.userId)
    
    this.close.emit();
  }
}
