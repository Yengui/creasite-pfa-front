import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formselector',
  templateUrl: './formselector.component.html',
  styleUrls: ['./formselector.component.css'],
})
export class FormselectorComponent implements OnInit {
  formId: string = '';
  form: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.formId = this.route.snapshot.paramMap.get('formId') || '';
    this.form = Number(this.formId);
  }
}
