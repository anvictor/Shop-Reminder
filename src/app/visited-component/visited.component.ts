import {
  Component,
  Input, OnChanges, OnInit,
} from '@angular/core';


@Component({
  selector: 'app-visited-counter',
  templateUrl: './visited.component.html',
  styleUrls: ['./visited.component.css'],
  })
export class VisitedComponent {
  @Input() counter: string; // ответ от php. количество посетивших
}
