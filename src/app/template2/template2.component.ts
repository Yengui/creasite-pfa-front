import { Component } from '@angular/core';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css'],
})
export class Template2Component {
  openList: boolean = false;
  handleListClick() {
    this.openList = !this.openList;
  }
}
