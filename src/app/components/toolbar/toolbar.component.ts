import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isNavVisible = false;

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }
}
