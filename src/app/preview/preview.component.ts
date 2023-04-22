import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  siteId: string = '';
  template: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.siteId = this.route.snapshot.paramMap.get('siteId') || '';
    this.template = Number(this.siteId);
  }
}
