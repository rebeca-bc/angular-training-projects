import { NgModule } from '@angular/core';
// module by angular to help with browser specific functionalities ike data pipes, directives, etc... 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedUIModule } from './sharedUI/sharedUI.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent, 
    ],
    // root component
    bootstrap: [AppComponent],
    // its for standalone components
    imports: [BrowserModule, SharedUIModule, TasksModule]
})
// groups components toegther 
export class AppModule {}