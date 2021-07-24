import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() src: string;
  @Input() size = 8;

  constructor() {}

  ngOnInit(): void {
    if (!this.src) {
      throw Error(`AvatarComponent: Property size is not defined`);
    }
  }
}
