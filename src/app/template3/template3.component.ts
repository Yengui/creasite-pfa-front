import { Component } from '@angular/core';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css'],
})
export class Template3Component {
  openList: boolean = false;
  handleListClick() {
    this.openList = !this.openList;
  }
}
