import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  onMenuClick() {
    this.sidebarToggle.emit();
  }

}
