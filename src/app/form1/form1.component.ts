import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Injectable,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor(private http: HttpClient) {}

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
    const formData = new FormData();
    formData.append('imageFile', file);
    this.http
      .post(process.env.NG_APP_API + '/ManageImages', formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token') || '',
          'Content-Type': 'multipart/form-data',
        },
      })
      .subscribe((response) => {
        console.log(response.toString());
        this.updateTick(title, true);
        this.allImages.push({
          name: title,
          value: response.toString(),
        });
        console.log(response);
      });
  }

  async onSubmit(form: NgForm) {
    // console.log(form.value['hero-titre']);
    console.log(form.value);
    try {
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  }
}
