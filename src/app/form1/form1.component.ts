import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Injectable,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

type TicksTable = { [key: string]: boolean };
type ImagesTable = {
  name: string;
  value: string;
};

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component implements AfterViewInit {
  sitetitre = '';
  herotitre = '';
  herobutton1 = '';
  herobutton2 = '';
  section1title = '';
  section1description1 = '';
  section1description2 = '';
  section2title = '';
  section2description = '';
  section3title1 = '';
  section3description1 = '';
  section3title2 = '';
  section3description2 = '';
  section3title3 = '';
  section3description3 = '';
  section3title4 = '';
  section3description4 = '';
  section4title = '';
  section4description = '';
  footertitle1 = '';
  footer1subtitle1 = '';
  footer1subtitle2 = '';
  footer1subtitle3 = '';
  footer1subtitle4 = '';
  footer1subtitle5 = '';
  footer1subtitle6 = '';
  footertitle2 = '';
  footer2subtitle1 = '';
  footer2subtitle2 = '';
  footer2subtitle3 = '';
  footertitle3 = '';
  footer3subtitle1 = '';

  allImages: ImagesTable[] = [];

  ticks: TicksTable = {
    herosection: false,
    section1image: false,
    section3image1: false,
    section3image2: false,
    section3image3: false,
    section3image4: false,
    section4image1: false,
    section4image2: false,
    section4image3: false,
    section4image4: false,
    footerimage: false,
  };

  updateTick(title: string, value: boolean) {
    this.ticks[title] = value;
  }

  sections = [
    { name: 'Hero Section', isVisible: true },
    { name: 'Section 1', isVisible: true },
    { name: 'Section 2', isVisible: true },
    { name: 'Section 3', isVisible: true },
    { name: 'Section 4', isVisible: true },
    { name: 'Footer', isVisible: true },
  ];

  @ViewChild('herosection', { static: false }) fileInput_hero!: ElementRef;
  @ViewChild('section1image', { static: false })
  fileInput_section1!: ElementRef;
  @ViewChild('section3image1', { static: false })
  fileInput_section3_1!: ElementRef;
  @ViewChild('section3image2', { static: false })
  fileInput_section3_2!: ElementRef;
  @ViewChild('section3image3', { static: false })
  fileInput_section3_3!: ElementRef;
  @ViewChild('section3image4', { static: false })
  fileInput_section3_4!: ElementRef;
  @ViewChild('section4image1', { static: false })
  fileInput_section4_1!: ElementRef;
  @ViewChild('section4image2', { static: false })
  fileInput_section4_2!: ElementRef;
  @ViewChild('section4image3', { static: false })
  fileInput_section4_3!: ElementRef;
  @ViewChild('section4image4', { static: false })
  fileInput_section4_4!: ElementRef;
  @ViewChild('footerimage', { static: false }) fileInput_footer!: ElementRef;

  ngAfterViewInit() {
    console.log(this.fileInput_hero); // will log the input element or undefined if it wasn't found
  }

  onFileSelected(event: any) {
    console.log(event.target.files[0]); // will log the selected file
  }

  constructor(private http: HttpClient, private router: Router) {}

  postImage(formData: FormData) {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token') || ''
    );
    return this.http.post(process.env.NG_APP_API + '/ManageImages', formData, {
      headers: headers,
      observe: 'response',
    });
  }

  creerSite(nom: string) {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token') || ''
    );
    const body = {
      name: nom,
      template: {
        id: 1,
      },
    };
    return this.http.post(process.env.NG_APP_API + '/websites', body, {
      headers: headers,
      observe: 'response',
    });
  }

  upload(title: string) {
    this.updateTick(title, false);
    let file;
    switch (title) {
      case 'herosection':
        console.log(this.fileInput_hero);
        file = this.fileInput_hero.nativeElement.files[0];
        break;
      case 'section1image':
        file = this.fileInput_section1.nativeElement.files[0];
        break;
      case 'section3image1':
        file = this.fileInput_section3_1.nativeElement.files[0];
        break;
      case 'section3image2':
        file = this.fileInput_section3_2.nativeElement.files[0];
        break;
      case 'section3image3':
        file = this.fileInput_section3_3.nativeElement.files[0];
        break;
      case 'section3image4':
        file = this.fileInput_section3_4.nativeElement.files[0];
        break;
      case 'section4image1':
        file = this.fileInput_section4_1.nativeElement.files[0];
        break;
      case 'section4image2':
        file = this.fileInput_section4_2.nativeElement.files[0];
        break;
      case 'section4image3':
        file = this.fileInput_section4_3.nativeElement.files[0];
        break;
      case 'section4image4':
        file = this.fileInput_section4_4.nativeElement.files[0];
        break;
      case 'footerimage':
        file = this.fileInput_footer.nativeElement.files[0];
        break;
      default:
        console.error('no image chosen');
        file = this.fileInput_hero.nativeElement.files[0];
        break;
    }
    console.log(file);
    const formData = new FormData();
    formData.append('imageFile', file, file.name);
    formData.forEach((value, key) => {
      console.log(key + ': ' + value);
    });

    this.postImage(formData).subscribe({
      next: (v: HttpResponse<any>) => {
        console.log('next');
        console.log(v.body);
        this.updateTick(title, true);
        this.allImages.push({
          name: title,
          value: v.body.imageUrl,
        });
      },
      error: (e) => {
        console.log('error');
        console.log(e);
        console.error(e);
      },
      complete: () => console.info('complete'),
    });
  }

  async onSubmit(form: NgForm) {
    // console.log(form.value['hero-titre']);
    console.log(form.value);
    if (!form.value['site-titre']) return;
    if (
      !form.value['hero'] &&
      !form.value['section1'] &&
      !form.value['section2'] &&
      !form.value['section3'] &&
      !form.value['section4'] &&
      !form.value['hero']
    )
      return;
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token') || '')
      .set('Content-Type', 'application/json');
    const body = {
      name: form.value['site-titre'],
      template: {
        id: 1,
      },
    };
    const creersite = this.http
      .post(process.env.NG_APP_API + '/websites', body, {
        headers: headers,
        observe: 'response',
      })
      .pipe(shareReplay(1));

    const req1 = creersite.pipe(
      switchMap((result) => {
        if (form.value['hero'] === true) {
          const section = {
            sectionName: 'hero section',
            templateSectionID: 1,
            newContent: [
              {
                editableRegionsID: 1,
                content: form.value['hero-titre'],
              },
              {
                editableRegionsID: 2,
                content: form.value['hero-section1'],
              },
              {
                editableRegionsID: 3,
                content: form.value['hero-section3'],
              },
              {
                editableRegionsID: 4,
                content:
                  this.allImages.find((image) => image.name === 'herosection')
                    ?.value || '',
              },
            ],
          };
          if (result.body && 'id' in result.body)
            return this.http.post(
              process.env.NG_APP_API + '/sections/addSection/' + result.body.id,
              section,
              {
                headers: headers,
                observe: 'response',
              }
            );
          else return of(null);
        } else {
          return of(null);
        }
      })
    );

    const req2 = creersite.pipe(
      switchMap((result) => {
        if (form.value['section1'] === true) {
          const section = {
            sectionName: 'section1',
            templateSectionID: 2,
            newContent: [
              {
                editableRegionsID: 5,
                content: form.value['section1-titre'],
              },
              {
                editableRegionsID: 6,
                content: form.value['section1-description1'],
              },
              {
                editableRegionsID: 7,
                content: form.value['section1-description2'],
              },
              {
                editableRegionsID: 8,
                content:
                  this.allImages.find((image) => image.name === 'section1image')
                    ?.value || '',
              },
            ],
          };
          if (result.body && 'id' in result.body)
            return this.http.post(
              process.env.NG_APP_API + '/sections/addSection/' + result.body.id,
              section,
              {
                headers: headers,
                observe: 'response',
              }
            );
          else return of(null);
        } else {
          return of(null);
        }
      })
    );

    const req3 = creersite.pipe(
      switchMap((result) => {
        if (form.value['section2'] === true) {
          const section = {
            sectionName: 'section2',
            templateSectionID: 3,
            newContent: [
              {
                editableRegionsID: 9,
                content: form.value['section2-titre'],
              },
              {
                editableRegionsID: 10,
                content: form.value['section2-description1'],
              },
            ],
          };
          if (result.body && 'id' in result.body)
            return this.http.post(
              process.env.NG_APP_API + '/sections/addSection/' + result.body.id,
              section,
              {
                headers: headers,
                observe: 'response',
              }
            );
          else return of(null);
        } else {
          return of(null);
        }
      })
    );

    const req4 = creersite.pipe(
      switchMap((result) => {
        if (form.value['section3'] === true) {
          const section = {
            sectionName: 'section3',
            templateSectionID: 4,
            newContent: [
              {
                editableRegionsID: 11,
                content: form.value['section3-titre-carte1'],
              },
              {
                editableRegionsID: 12,
                content: form.value['section3-description-carte1'],
              },
              {
                editableRegionsID: 13,
                content:
                  this.allImages.find(
                    (image) => image.name === 'section3image1'
                  )?.value || '',
              },
              {
                editableRegionsID: 14,
                content: form.value['section3-titre-carte2'],
              },
              {
                editableRegionsID: 15,
                content: form.value['section3-description-carte2'],
              },
              {
                editableRegionsID: 16,
                content:
                  this.allImages.find(
                    (image) => image.name === 'section3image2'
                  )?.value || '',
              },
              {
                editableRegionsID: 17,
                content: form.value['section3-titre-carte3'],
              },
              {
                editableRegionsID: 18,
                content: form.value['section3-description-carte3'],
              },
              {
                editableRegionsID: 19,
                content:
                  this.allImages.find(
                    (image) => image.name === 'section3image3'
                  )?.value || '',
              },
              {
                editableRegionsID: 20,
                content: form.value['section3-titre-carte4'],
              },
              {
                editableRegionsID: 21,
                content: form.value['section3-description-carte4'],
              },
              {
                editableRegionsID: 22,
                content:
                  this.allImages.find(
                    (image) => image.name === 'section3image4'
                  )?.value || '',
              },
            ],
          };
          if (result.body && 'id' in result.body)
            return this.http.post(
              process.env.NG_APP_API + '/sections/addSection/' + result.body.id,
              section,
              {
                headers: headers,
                observe: 'response',
              }
            );
          else return of(null);
        } else {
          return of(null);
        }
      })
    );

    const req5 = creersite.pipe(
      switchMap((result) => {
        if (form.value['section4'] === true) {
          const section = {
            sectionName: 'section4',
            templateSectionID: 5,
            newContent: [
              {
                editableRegionsID: 23,
                content: form.value['section4-titre'],
              },
              {
                editableRegionsID: 24,
                content: form.value['section4-description1'],
              },
              {
                editableRegionsID: 25,
                content:
                  this.allImages.find(
                    (image) => image.name === 'section4image1'
                  )?.value || '',
              },
              {
                editableRegionsID: 26,
                content:
                  this.allImages.find(
                    (image) => image.name === 'section4image2'
                  )?.value || '',
              },
              {
                editableRegionsID: 27,
                content:
                  this.allImages.find(
                    (image) => image.name === 'section4image3'
                  )?.value || '',
              },
              {
                editableRegionsID: 28,
                content:
                  this.allImages.find(
                    (image) => image.name === 'section4image4'
                  )?.value || '',
              },
            ],
          };
          if (result.body && 'id' in result.body)
            return this.http.post(
              process.env.NG_APP_API + '/sections/addSection/' + result.body.id,
              section,
              {
                headers: headers,
                observe: 'response',
              }
            );
          else return of(null);
        } else {
          return of(null);
        }
      })
    );

    const req6 = creersite.pipe(
      switchMap((result) => {
        if (form.value['footer'] === true) {
          const section = {
            sectionName: 'footer',
            templateSectionID: 6,
            newContent: [
              {
                editableRegionsID: 29,
                content:
                  this.allImages.find((image) => image.name === 'footerimage')
                    ?.value || '',
              },
              {
                editableRegionsID: 30,
                content: form.value['footer-titre1'],
              },
              {
                editableRegionsID: 31,
                content: form.value['footer-soustitre1'],
              },
              {
                editableRegionsID: 32,
                content: form.value['footer-soustitre2'],
              },
              {
                editableRegionsID: 33,
                content: form.value['footer-soustitre3'],
              },
              {
                editableRegionsID: 34,
                content: form.value['footer-soustitre4'],
              },
              {
                editableRegionsID: 35,
                content: form.value['footer-soustitre5'],
              },
              {
                editableRegionsID: 36,
                content: form.value['footer-soustitre6'],
              },
              {
                editableRegionsID: 37,
                content: form.value['footer-titre2'],
              },
              {
                editableRegionsID: 38,
                content: form.value['footer-soustitre2-1'],
              },
              {
                editableRegionsID: 39,
                content: form.value['footer-soustitre2-2'],
              },
              {
                editableRegionsID: 40,
                content: form.value['footer-soustitre2-3'],
              },
              {
                editableRegionsID: 41,
                content: form.value['footer-titre3'],
              },
              {
                editableRegionsID: 42,
                content: form.value['footer-soustitre3-1'],
              },
            ],
          };
          if (result.body && 'id' in result.body)
            return this.http.post(
              process.env.NG_APP_API + '/sections/addSection/' + result.body.id,
              section,
              {
                headers: headers,
                observe: 'response',
              }
            );
          else return of(null);
        } else {
          return of(null);
        }
      })
    );

    forkJoin([req1, req2, req3, req4, req5, req6]).subscribe((results) => {
      console.log(results);
      this.router.navigate(['/profile']);
    });
  }
}
