import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project.model';
@Component({
  selector: 'app-project-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.css',
})
export class ProjectFilterComponent {
  @Input() projects: Project[] = [];
  @Output() filterChange = new EventEmitter<string | 'ALL'>();

  selected: string | 'ALL' = 'ALL';

  select(slug: string | 'ALL') {
    this.selected = slug;
    this.filterChange.emit(slug);
  }
}
