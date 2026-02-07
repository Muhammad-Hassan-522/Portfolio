import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ServiceComponent } from '../../components/shared/service/service.component';
import { ExpertiseComponent } from '../../components/shared/expertise/expertise.component';
import { JourneyComponent } from '../../components/journey/journey.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, ServiceComponent, JourneyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Muhammad Hassan - Full Stack Web Developer');
    this.seoService.updateMetaTags({
      description:
        'Portfolio of Muhammad Hassan, a Full Stack Web Developer specializing in Angular, React, and Node.js.',
      keywords: 'Muhammad Hassan, Full Stack Developer, Angular, React, Software Engineer, Portfolio',
    });
  }
}
