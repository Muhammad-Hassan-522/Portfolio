import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project!: Project;

  play(video: HTMLVideoElement) {
    video.play();
  }

  pause(video: HTMLVideoElement) {
    video.pause();
  }
}
