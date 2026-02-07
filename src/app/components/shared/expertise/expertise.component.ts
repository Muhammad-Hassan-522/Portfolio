import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expertise',
  imports: [],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css',
})
export class ExpertiseComponent {
  @Input() tech!: string;
  @Input() icon!: string; // Heroicons / FontAwesome
}
