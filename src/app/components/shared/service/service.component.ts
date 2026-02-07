import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string; // use Heroicons or FontAwesome icon class
}
