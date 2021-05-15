import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './present-contact-bar.component.html',
  styleUrls: ['./present-contact-bar.component.scss'],
  selector: 'app-present-contact-bar',
})
export class PresentContactBarComponent {
  @Output() clicked = new EventEmitter();
  @Input() currentContact;
  icons = {
    circle: faCircle,
  };

  emitEvent() {
    this.clicked.emit();
  }
}
