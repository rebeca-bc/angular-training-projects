import { NgModule } from "@angular/core";
import { SharedUIModule } from "../sharedUI/sharedUI.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';

@NgModule({
    declarations: [
        TasksComponent, 
        TaskComponent, 
        NewTaskFormComponent
    ], 
    // only the ones used in the html in the export because is used in the app.component.html
    exports: [TasksComponent], 
    // browser ist imported here because its only for the root
    imports: [CommonModule, FormsModule, SharedUIModule]
})
export class TasksModule {}