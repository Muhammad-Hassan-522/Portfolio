import { Component, OnInit } from '@angular/core';
import { SkillDescriptionCardComponent } from "../../components/shared/skill-description-card/skill-description-card.component";
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-skills',
  imports: [SkillDescriptionCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('My Skills - Muhammad Hassan');
    this.seoService.updateMetaTags({
      description: 'Explore the technical skills and expertise of Muhammad Hassan, including frontend and backend technologies.',
      keywords: 'Skills, Angular, React, Node.js, TypeScript, JavaScript',
    });
  }
}
