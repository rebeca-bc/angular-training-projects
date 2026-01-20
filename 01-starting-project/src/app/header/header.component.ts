import  { Component } from '@angular/core';

@Component({
    // tell what to write over, two words by dash to not do default
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}