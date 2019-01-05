import { Directive, ElementRef, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

import createFocusTrap, { FocusTrap, Options } from 'focus-trap';

@Directive({
  selector: '[ngxFocusTrap]',
  exportAs: 'ngxFocusTrap'
})
export class NgxFocusTrapDirective implements OnInit {
  @Input() public escapeDeactivates: boolean = true;
  @Input() public clickOutsideDeactivates: boolean = false;
  @Input() public returnFocusOnDeactivate: boolean = true;
  @Input() public initialFocus: string | HTMLElement;
  @Input() public fallbackFocus: string | HTMLElement;
  @Input() public initActivated: boolean = true;

  @Output() public activate = new EventEmitter();
  @Output() public deactivate = new EventEmitter();

  private focusTrap: FocusTrap;
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    const options: Options = {
      onActivate: () => this.activate.emit(),
      onDeactivate: () => this.deactivate.emit(),
      escapeDeactivates: this.escapeDeactivates,
      clickOutsideDeactivates: this.clickOutsideDeactivates,
      returnFocusOnDeactivate: this.returnFocusOnDeactivate,
      initialFocus: this.initialFocus,
      fallbackFocus: this.fallbackFocus
    };
    const focusTrap: FocusTrap = this.focusTrap = createFocusTrap(
      this.elementRef.nativeElement,
      options
    );
    if (this.initActivated) focusTrap.activate();
  }

  public activateFocusTrap() {
    this.focusTrap.activate();
  }

  public deactivateFocusTrap() {
    this.focusTrap.deactivate();
  }

  public pause() {
    this.focusTrap.pause();
  }

  public unpause() {
    this.focusTrap.unpause();
  }
}
