import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SnotifyModule, SnotifyService, ToastDefaults } from "ng-snotify";    
import { NgxSpinnerModule } from "ngx-spinner";
import { MyProfileComponent } from "./my-profile.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { IntroComponent } from "./intro/intro.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component"; 
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    ProjectsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class MyProfileModule { }
