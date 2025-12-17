import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,CommonModule,SidebarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
  isSidebarOpen = true;

  constructor(private renderer:Renderer2){}


   toggleSidebar() {
    debugger
    this.isSidebarOpen = !this.isSidebarOpen;
    if (this.isSidebarOpen) {
      this.renderer.removeClass(document.body, 'sidebar-collapsed');
    } else {
      this.renderer.addClass(document.body, 'sidebar-collapsed');
    }
  }
  closeSidebar() {
    this.isSidebarOpen = false;
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isSidebarOpen) {
      this.renderer.removeClass(document.body, 'sidebar-collapsed');
    } else {
      this.renderer.addClass(document.body, 'sidebar-collapsed');
    }
  }
}
