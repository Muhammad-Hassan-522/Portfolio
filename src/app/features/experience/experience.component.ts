import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

interface Experience {
  title: string;
  organization: string;
  date: string;
  description: string[];
  tags?: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  imports: [CommonModule],
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('My Experience - Muhammad Hassan');
    this.seoService.updateMetaTags({
      description: 'Professional experience of Muhammad Hassan, including roles as Full-Stack Engineer and Teaching Assistant.',
      keywords: 'Experience, Resume, Career, Software Engineer, Teaching Assistant',
    });
  }
  experiences: Experience[] = [
    {
      title: 'Full-Stack Engineer',
      organization: 'Startup (Stealth Mode) — VyntraCare, Lahore',
      date: 'December 2025 – Present',
      description: [
        'Sole engineer responsible for end-to-end system architecture, frontend, backend, and data integrity.',
        'Designed and built a healthcare procurement and inventory management platform from scratch.',
        'Implemented secure, role-based workflows for admins and healthcare facilities using RBAC.',
        'Developed transactional ordering, approval flows, inventory analytics, and compliance document verification.',
        'Ensured production-grade reliability through rollback-safe database transactions and integration testing.',
      ],
      tags: [
        'Full-Stack Development',
        'System Architecture',
        'RBAC',
        'Healthcare Tech',
        'Transactional Systems',
        'Integration Testing',
      ],
    },
    {
      title: 'Teaching Assistant',
      organization: 'PUCIT, Lahore',
      date: 'February 2023 – Present',
      description: [
        'Selected as Teaching Assistant for 5 semesters based on strong academic performance.',
        'Assisted courses including Introduction to Economics, Probability & Statistics, OOP & OOP Lab, and Mobile App Development & Lab.',
        'Conducted lab sessions, grading, and student mentoring for programming and quantitative subjects.',
        'Helped students debug code, understand core OOP principles, and apply statistical reasoning effectively.',
        'Supported faculty in managing coursework and improving student learning outcomes.',
      ],
      tags: [
        'Teaching',
        'Mentorship',
        'Object-Oriented Programming',
        'Debugging',
        'Statistics',
        'Mobile Development',
      ],
    },
  ];
}
