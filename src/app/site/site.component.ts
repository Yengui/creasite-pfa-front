import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type EditableRegion = {
  id: number;
  name: string;
  groupe: null;
  templatesection: {
    id: number;
    name: string;
    nbrEditReg: number;
    template: {
      id: number;
      name: string;
      description: null;
    };
  };
  type: string;
};

type Content = {
  id: number;
  content: string;
  editableRegion: EditableRegion;
};

type TemplateSection = {
  id: number;
  name: string;
  nbrEditReg: number;
  template: {
    id: number;
    name: string;
    description: null;
  };
};

type Section = {
  id: number;
  name: string;
  contents: Content[];
  templatesection: TemplateSection;
};

type ApiResponse = {
  name: string;
  url: null;
  sections: Section[];
};

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})
export class SiteComponent implements OnInit {
  siteId: string = '';
  template: number = 0;
  websiteData!: ApiResponse;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.siteId = this.route.snapshot.paramMap.get('siteId') || '';
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token') || ''
    );
    this.http
      .get(`${process.env.NG_APP_API}/websites/${this.siteId}`, {
        headers,
      })
      .subscribe((data: any) => {
        this.websiteData = { ...data };
        this.template = data?.template?.id;
      });
  }
}
