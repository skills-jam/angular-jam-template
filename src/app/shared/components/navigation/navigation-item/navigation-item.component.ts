import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
})
export class NavigationItemComponent implements OnInit {
  @Input() to: string;

  constructor() {}

  ngOnInit(): void {}
}
