/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@my-stencil-project';


@ProxyCmp({
  inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'htmlMaxlengthBehavior', 'iconColor', 'max', 'maxlength', 'min', 'minlength', 'name', 'noValidation', 'pattern', 'placeholder', 'readonly', 'required', 'severity', 'showClearIcon', 'showStatusIcon', 'type', 'typingInfoTemplate', 'validity', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'groupui-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'htmlMaxlengthBehavior', 'iconColor', 'max', 'maxlength', 'min', 'minlength', 'name', 'noValidation', 'pattern', 'placeholder', 'readonly', 'required', 'severity', 'showClearIcon', 'showStatusIcon', 'type', 'typingInfoTemplate', 'validity', 'value'],
})
export class GroupuiInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['groupuiChange', 'groupuiInvalid', 'groupuiDidLoad', 'groupuiClearClicked']);
  }
}


export declare interface GroupuiInput extends Components.GroupuiInput {
  /**
   * for react user only - use this instead of the native change event
   */
  groupuiChange: EventEmitter<CustomEvent<void>>;
  /**
   * is dispatched when the value is invalid
   */
  groupuiInvalid: EventEmitter<CustomEvent<ValidityState>>;
  /**
   * dispatched when component finished loading
   */
  groupuiDidLoad: EventEmitter<CustomEvent<void>>;
  /**
   * is dispatched if the clear icon is clicked
   */
  groupuiClearClicked: EventEmitter<CustomEvent<void>>;
}


