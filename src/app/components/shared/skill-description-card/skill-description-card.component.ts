import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-description-card',
  imports: [CommonModule],
  templateUrl: './skill-description-card.component.html',
  styleUrl: './skill-description-card.component.css',
})
export class SkillDescriptionCardComponent {
  @Input() icon!: string; // FontAwesome icon name (e.g., "angular", "react")
  @Input() title!: string; // Skill title
  @Input() description!: string; // Skill description

  getIconClass(icon: string) {
    // list of brand icons
    const brands = [
      'angular',
      'react',
      'js',
      'flutter',
      'html5',
      'css3-alt',
      'python',
      'java',
    ];
    const prefix = brands.includes(icon) ? 'fab' : 'fas';
    return `${prefix} fa-${icon}`;
  }
}
