import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'groupui-input[type=text], groupui-input[type=password], groupui-input[type=date], groupui-input[type=datetime-local], groupui-input[type=email], groupui-input[type=month], groupui-input[type=tel], groupui-input[type=time], groupui-input[type=url]',
  host: {
    '(input)': 'handleChangeEvent($event.target.value)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ]
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
