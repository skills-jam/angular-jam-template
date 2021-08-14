import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import tippy, { Placement, Props, roundArrow } from 'tippy.js';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input() options: Props;

  @Input('tooltip') name: string;
  @Input() placement: Placement = 'top';
  @Input() theme: string = null;

  tippyInstance = null;

  constructor(private el: ElementRef) {}

  public ngOnInit() {
    if (this.name) {
      const tippyInstance = tippy(this.el.nativeElement, {
        ...this.options,
        animation: 'shift-toward-subtle',
        content: this.name,
        arrow: roundArrow,
        placement: this.placement,
        theme: this.theme,
      });
      this.tippyInstance = tippyInstance;
      this.tippyInstance.show();
    }
  }

  public ngOnDestroy() {
    this.tippyInstance?.destroy();
  }
}
