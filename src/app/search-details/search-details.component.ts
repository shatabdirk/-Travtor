import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDetailsComponent {

  @Input() 
  searchInfo: any;

  constructor() { }
}
