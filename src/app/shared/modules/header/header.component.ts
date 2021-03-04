import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() city = new EventEmitter<string>();

  public cityName: string;

  constructor() { }

  ngOnInit(): void {
  }

  setCityName(): void {
    if (this.cityName) {
      this.city.emit(this.cityName);
      this.cityName = '';
    }
  }
}
