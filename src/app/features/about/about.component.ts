import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('About Me - Muhammad Hassan');
    this.seoService.updateMetaTags({
      description: 'Learn more about Muhammad Hassan, his background, education, and journey as a Software Engineer.',
      keywords: 'About Muhammad Hassan, Biography, Education, Experience',
    });
  }
}
