import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

type TicksTable = { [key: string]: boolean };

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component {
  herotitre = '';

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

  @ViewChild('herosection', { static: true }) fileInput_hero!: ElementRef;
  @ViewChild('section1image', { static: true }) fileInput_section1!: ElementRef;
  @ViewChild('section3image1', { static: true })
  fileInput_section3_1!: ElementRef;
  @ViewChild('section3image2', { static: true })
  fileInput_section3_2!: ElementRef;
  @ViewChild('section3image3', { static: true })
  fileInput_section3_3!: ElementRef;
  @ViewChild('section3image4', { static: true })
  fileInput_section3_4!: ElementRef;
  @ViewChild('section4image1', { static: true })
  fileInput_section4_1!: ElementRef;
  @ViewChild('section4image2', { static: true })
  fileInput_section4_2!: ElementRef;
  @ViewChild('section4image3', { static: true })
  fileInput_section4_3!: ElementRef;
  @ViewChild('section4image4', { static: true })
  fileInput_section4_4!: ElementRef;
  @ViewChild('footerimage', { static: true }) fileInput_footer!: ElementRef;

  constructor(private http: HttpClient) {}

  upload(title: string) {
    this.updateTick(title, false);
    let file;
    switch (title) {
      case 'herosection':
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
    const formData = new FormData();
    formData.append('image', file, file.name);
    this.http.post('/imageupload', formData).subscribe((response) => {
      this.updateTick(title, true);
    });
  }

  async onSubmit(form: NgForm) {
    console.log(form.value['hero-titre']);
    try {
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  }
}
