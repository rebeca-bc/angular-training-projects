import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../sharedUI/card/card.component"; 

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required:true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // here they are (read-only) signals -> 
  // thus cant be changed inside the component, only from outside
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imgPath = computed(() => {
  //   return 'assets/users/'+ this.avatar()
  // });

  get imgPath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
