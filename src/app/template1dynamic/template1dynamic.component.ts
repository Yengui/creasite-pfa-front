import { Component, Input, OnInit } from '@angular/core';

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
  selector: 'app-template1dynamic',
  templateUrl: './template1dynamic.component.html',
  styleUrls: ['./template1dynamic.component.css'],
})
export class Template1dynamicComponent implements OnInit {
  openList: boolean = false;
  handleListClick() {
    this.openList = !this.openList;
  }

  @Input() data!: ApiResponse;
  @Input() websiteID: string = '';

  heroSectionDisplay: boolean = false;
  section1Display: boolean = false;
  section2Display: boolean = false;
  section3Display: boolean = false;
  section4Display: boolean = false;
  footerDisplay: boolean = false;

  heroSection!: Section | undefined;
  section1!: Section | undefined;
  section2!: Section | undefined;
  section3!: Section | undefined;
  section4!: Section | undefined;
  footer!: Section | undefined;

  //hero
  hero_nomsite!: string;
  hero_sect1!: string;
  hero_sect3!: string;
  hero_image!: string;
  //section 1
  section1_titre!: string;
  section1_description1!: string;
  section1_description2!: string;
  section1_image!: string;
  //section 2
  section2_titre!: string;
  section2_description!: string;
  //section 3
  section3_c1_titre!: string;
  section3_c1_description!: string;
  section3_c1_image!: string;
  section3_c2_titre!: string;
  section3_c2_description!: string;
  section3_c2_image!: string;
  section3_c3_titre!: string;
  section3_c3_description!: string;
  section3_c3_image!: string;
  section3_c4_titre!: string;
  section3_c4_description!: string;
  section3_c4_image!: string;
  //section 4
  section4_titre!: string;
  section4_description!: string;
  section4_image1!: string;
  section4_image2!: string;
  section4_image3!: string;
  section4_image4!: string;
  //footer
  footer_image!: string;
  footer_titre1!: string;
  footer_t1_soustitre1!: string;
  footer_t1_soustitre2!: string;
  footer_t1_soustitre3!: string;
  footer_t1_soustitre4!: string;
  footer_t1_soustitre5!: string;
  footer_t1_soustitre6!: string;
  footer_titre2!: string;
  footer_t2_soustitre1!: string;
  footer_t2_soustitre2!: string;
  footer_t2_soustitre3!: string;
  footer_titre3!: string;
  footer_t3_soustitre1!: string;

  ngOnInit() {
    console.log(this.data);
    console.log(this.websiteID);

    this.heroSectionDisplay = this.data.sections.some(
      (section) => section.templatesection.id === 1
    );
    this.section1Display = this.data.sections.some(
      (section) => section.templatesection.id === 2
    );
    this.section2Display = this.data.sections.some(
      (section) => section.templatesection.id === 3
    );
    this.section3Display = this.data.sections.some(
      (section) => section.templatesection.id === 4
    );
    this.section4Display = this.data.sections.some(
      (section) => section.templatesection.id === 5
    );
    this.footerDisplay = this.data.sections.some(
      (section) => section.templatesection.id === 6
    );

    if (this.heroSectionDisplay) {
      this.heroSection = this.data.sections.find(
        (section) => section.templatesection.id === 1
      );
      if (this.heroSection) {
        const content: Content | undefined = this.heroSection.contents.find(
          (content) => content.editableRegion.id === 1
        );
        this.hero_nomsite = content?.content || '';
        const content2: Content | undefined = this.heroSection.contents.find(
          (content) => content.editableRegion.id === 2
        );
        this.hero_sect1 = content2?.content || '';
        const content3: Content | undefined = this.heroSection.contents.find(
          (content) => content.editableRegion.id === 3
        );
        this.hero_sect3 = content3?.content || '';
        const content4: Content | undefined = this.heroSection.contents.find(
          (content) => content.editableRegion.id === 4
        );
        this.hero_image =
          process.env.NG_APP_API + '/ManageImages' + content4?.content || '';
      }
    }
    if (this.section1Display) {
      this.section1 = this.data.sections.find(
        (section) => section.templatesection.id === 2
      );
      if (this.section1) {
        const content5: Content | undefined = this.section1.contents.find(
          (content) => content.editableRegion.id === 5
        );
        this.section1_titre = content5?.content || '';
        const content6: Content | undefined = this.section1.contents.find(
          (content) => content.editableRegion.id === 6
        );
        this.section1_description1 = content6?.content || '';
        const content7: Content | undefined = this.section1.contents.find(
          (content) => content.editableRegion.id === 7
        );
        this.section1_description2 = content7?.content || '';
        const content8: Content | undefined = this.section1.contents.find(
          (content) => content.editableRegion.id === 8
        );
        this.section1_image =
          process.env.NG_APP_API + '/ManageImages' + content8?.content || '';
      }
    }
    if (this.section2Display) {
      this.section2 = this.data.sections.find(
        (section) => section.templatesection.id === 3
      );
      if (this.section2) {
        const content9: Content | undefined = this.section2.contents.find(
          (content) => content.editableRegion.id === 9
        );
        this.section2_titre = content9?.content || '';
        const content10: Content | undefined = this.section2.contents.find(
          (content) => content.editableRegion.id === 10
        );
        this.section2_description = content10?.content || '';
      }
    }
    if (this.section3Display) {
      this.section3 = this.data.sections.find(
        (section) => section.templatesection.id === 4
      );
      if (this.section3) {
        const content11: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 11
        );
        this.section3_c1_titre = content11?.content || '';
        const content12: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 12
        );
        this.section3_c1_description = content12?.content || '';
        const content13: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 13
        );
        this.section3_c1_image =
          process.env.NG_APP_API + '/ManageImages' + content13?.content || '';
        const content14: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 14
        );
        this.section3_c2_titre = content14?.content || '';
        const content15: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 15
        );
        this.section3_c2_description = content15?.content || '';
        const content16: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 16
        );
        this.section3_c2_image =
          process.env.NG_APP_API + '/ManageImages' + content16?.content || '';
        const content17: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 17
        );
        this.section3_c3_titre = content17?.content || '';
        const content18: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 18
        );
        this.section3_c3_description = content18?.content || '';
        const content19: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 19
        );
        this.section3_c3_image =
          process.env.NG_APP_API + '/ManageImages' + content19?.content || '';
        const content20: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 20
        );
        this.section3_c4_titre = content20?.content || '';
        const content21: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 21
        );
        this.section3_c4_description = content21?.content || '';
        const content22: Content | undefined = this.section3.contents.find(
          (content) => content.editableRegion.id === 22
        );
        this.section3_c4_image =
          process.env.NG_APP_API + '/ManageImages' + content22?.content || '';
      }
    }
    if (this.section4Display) {
      this.section4 = this.data.sections.find(
        (section) => section.templatesection.id === 5
      );
      if (this.section4) {
        const content23: Content | undefined = this.section4.contents.find(
          (content) => content.editableRegion.id === 23
        );
        this.section4_titre = content23?.content || '';
        const content24: Content | undefined = this.section4.contents.find(
          (content) => content.editableRegion.id === 24
        );
        this.section4_description = content24?.content || '';
        const content25: Content | undefined = this.section4.contents.find(
          (content) => content.editableRegion.id === 25
        );
        this.section4_image1 =
          process.env.NG_APP_API + '/ManageImages' + content25?.content || '';
        const content26: Content | undefined = this.section4.contents.find(
          (content) => content.editableRegion.id === 26
        );
        this.section4_image2 =
          process.env.NG_APP_API + '/ManageImages' + content26?.content || '';
        const content27: Content | undefined = this.section4.contents.find(
          (content) => content.editableRegion.id === 27
        );
        this.section4_image3 =
          process.env.NG_APP_API + '/ManageImages' + content27?.content || '';
        const content28: Content | undefined = this.section4.contents.find(
          (content) => content.editableRegion.id === 28
        );
        this.section4_image4 =
          process.env.NG_APP_API + '/ManageImages' + content28?.content || '';
      }
    }
    if (this.footerDisplay) {
      this.footer = this.data.sections.find(
        (section) => section.templatesection.id === 6
      );
      if (this.footer) {
        const content29: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 29
        );
        this.footer_image =
          process.env.NG_APP_API + '/ManageImages' + content29?.content || '';
        const content30: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 30
        );
        this.footer_titre1 = content30?.content || '';
        const content31: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 31
        );
        this.footer_t1_soustitre1 = content31?.content || '';
        const content32: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 32
        );
        this.footer_t1_soustitre2 = content32?.content || '';
        const content33: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 33
        );
        this.footer_t1_soustitre3 = content33?.content || '';
        const content34: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 34
        );
        this.footer_t1_soustitre4 = content34?.content || '';
        const content35: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 35
        );
        this.footer_t1_soustitre5 = content35?.content || '';
        const content36: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 36
        );
        this.footer_t1_soustitre6 = content36?.content || '';
        const content37: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 37
        );
        this.footer_titre2 = content37?.content || '';
        const content38: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 38
        );
        this.footer_t2_soustitre1 = content38?.content || '';
        const content39: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 39
        );
        this.footer_t2_soustitre2 = content39?.content || '';
        const content40: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 40
        );
        this.footer_t2_soustitre3 = content40?.content || '';
        const content41: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 41
        );
        this.footer_titre3 = content41?.content || '';
        const content42: Content | undefined = this.footer.contents.find(
          (content) => content.editableRegion.id === 42
        );
        this.footer_t3_soustitre1 = content42?.content || '';
      }
    }
  }
}
