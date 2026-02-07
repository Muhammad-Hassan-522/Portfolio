import { Component } from '@angular/core';
import { SkillCardComponent } from '../shared/skill-card/skill-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journey',
  imports: [SkillCardComponent, CommonModule],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.css',
})
export class JourneyComponent {
  frontendSkills = [
    { icon: 'fab fa-angular', label: 'Angular' },
    { icon: 'fab fa-react', label: 'React' },
    { icon: 'fab fa-js', label: 'TypeScript' },
    { icon: 'fab fa-html5', label: 'HTML5' },
    { icon: 'fab fa-js', label: 'Next.js' },
    { icon: 'fab fa-css3-alt', label: 'CSS / Tailwind' },
  ];

  backendSkills = [
    { icon: 'fab fa-python', label: 'Python' },
    { icon: 'fas fa-database', label: 'MySQL' },
    { icon: 'fas fa-leaf', label: 'MongoDB' },
    { icon: 'fab fa-node-js', label: 'Next.js' },
    { icon: 'fas fa-fire', label: 'Firebase' },
    { icon: 'fas fa-database', label: 'Supabase' },
    { icon: 'fab fa-java', label: 'Java' },
    { icon: 'fas fa-code', label: 'C# / .NET' },
    { icon: 'fas fa-server', label: 'REST APIs' },
    { icon: 'fas fa-shield-alt', label: 'Auth & Security' },
  ];
}
