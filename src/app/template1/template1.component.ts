import { Component } from '@angular/core';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css'],
})
export class Template1Component {
  openList: boolean = false;
  handleListClick() {
    this.openList = !this.openList;
  }
}
