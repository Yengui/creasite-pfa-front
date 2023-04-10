import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})
export class SiteComponent implements OnInit {
  siteId: string = '';
  template: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.siteId = this.route.snapshot.paramMap.get('siteId') || '';
    // this.http
    //   .get(`https://dummyjson.com/products/${this.siteId}`)
    //   .subscribe((data: any) => {
    //     this.template = data.price;
    //   });
    // this.template = Math.floor(Math.random() * 4) + 1;
    this.template = Number(this.siteId);
  }
}
