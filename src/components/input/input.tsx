import {
  Component,
  Element,
  Event,
  EventEmitter,
  getMode,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';

/**
 * @nativeEvent click - dispatched when input was clicked => 'event.target.value' delivers the current value
 * @nativeEvent change - dispatched when input has changed => 'event.target.value' delivers the current value
 * @nativeEvent invalid - dispatched when input is invalid => 'event.target.value' delivers the invalid value
 *
 * @slot description - named slot 'description', here is any HTML content allowed.
 * @slot label - named slot 'label', here is any HTML content allowed.
 */
@Component({
  tag: 'groupui-input',
  styleUrls: {
    vwag: 'themes/vwag/input.vwag.scss'
  },
  shadow: { delegatesFocus: true },
})
export class Input {
  /**
   * style attribute
   */
  @Prop({ reflect: true, mutable: true }) severity;

  /**
   * color of the icon
   */
  @Prop({ reflect: true }) readonly iconColor: string;

  /**
   * toggles readonly mode
   */
  @Prop({ reflect: true }) readonly readonly: boolean;

  /**
   * placeholder of the input-field<br>
   * ❗❗ applicable only to: VWAG
   */
  @Prop({ reflect: true }) readonly placeholder: string;

  /**
   * value of the input-field
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * sets input-field to readonly
   */
  @Prop({ reflect: true }) readonly disabled: boolean;

  /**
   * sets the maximum amount of characters of the input-field
   */
  @Prop({ reflect: true }) readonly maxlength: number;

  /**
   * determines whether maxlength should prevent input of any more characters (html default behavior)
   */
  @Prop({ reflect: true }) readonly htmlMaxlengthBehavior: boolean = false;

  /**
   * sets the minimum amount of characters of the input-field
   */
  @Prop({ reflect: true }) readonly minlength: number;

  /**
   * a pattern which will be covered by validity
   */
  @Prop({ reflect: true }) readonly pattern: string;

  /**
   * returns the element's current validityState state (readonly value)
   * @deprecated use the validity state returned in `groupuiInvalid` event
   */
  @Prop({ reflect: true, mutable: true }) validity: ValidityState;

  /**
   * specifies the type of input element
   */
  @Prop({ reflect: true }) readonly type: string = 'text';

  /**
   * name of the input element to support forms
   */
  @Prop({ reflect: true }) readonly name: string;

  /**
   * minimum value to accept for this input. To be used with type=number
   */
  @Prop({ reflect: true }) readonly min: number | string;

  /**
   * maximum value to accept for this input. To be used with type=number
   */
  @Prop({ reflect: true }) readonly max: number | string;

  /**
   * specifies that an input must be filled out before submitting the form
   */
  @Prop({ reflect: true }) readonly required: boolean = false;

  /**
   * sets focus automatically
   */
  @Prop({ reflect: true }) readonly autofocus: boolean;

  /**
   * show status icon on severity danger, warning, success
   */
  @Prop({ reflect: true }) readonly showStatusIcon: boolean = false;

  /**
   * a string with placeholder about count of available and used characters. Works only
   *  in combination with maxlength.
   * Possible values:
   *  {characters-used}
   *  {characters-left}
   *  {characters-max}
   * e.g.:
   *    '{characters-used} characters used'
   *    '{characters-left} characters left'
   *    '{characters-used}/{characters-max}'
   */
  @Prop({ reflect: true }) readonly typingInfoTemplate: string;

  /**
   * shows the description only when the component has focus
   */
  @Prop({ reflect: true }) readonly descriptionOnlyOnFocus: boolean = false;

  /**
   * determines which brand to use.
   */
  @Prop({ reflect: true }) readonly brand: string;

  /**
   * disable internal validation
   */
  @Prop({ reflect: true }) readonly noValidation: boolean = false;

  /**
   * show clear icon to clear the input field
   */
  @Prop({ reflect: true }) readonly showClearIcon: boolean = false;

  @State() hasFocus: boolean;

  @State() validityState: ValidityState;

  /**
   * for react user only - use this instead of the native change event
   */
  @Event({ bubbles: false }) groupuiChange: EventEmitter<void>;

  /**
   * is dispatched when the value is invalid
   */
  @Event({ bubbles: false }) groupuiInvalid: EventEmitter<ValidityState>;

  /**
   * dispatched when component finished loading
   */
  @Event({ bubbles: false }) groupuiDidLoad: EventEmitter<void>;

  /**
   * is dispatched if the clear icon is clicked
   */
  @Event({ bubbles: false }) groupuiClearClicked: EventEmitter<void>;

  @Element() host: HTMLElement;

  @Listen('blur')
  onBlur() {
    this.hasFocus = false;
  }

  @Listen('focus')
  onFocus() {
    this.hasFocus = true;
    this.delegateFocusToNativeInput();
  }

  @Listen('click')
  onClick() {
    this.delegateFocusToNativeInput();
  }

  /**
   * function to trigger component validation manually
   */
  @Method()
  async validate() {
    this.updateValidityState({ force: true });
  }

  componentDidLoad() {
    this.autofocus && this.host.focus && this.host.focus();
    this.groupuiDidLoad.emit();

    this.initFormEvent();
  }

  private initFormEvent() {
    const form = this.host.closest('form');
    if (form == null) return;

    form.addEventListener('formdata', (event: FormDataEvent) => {
      event.formData.append(this.name, this.value);
    });

    form.addEventListener('submit', (event) => {
      this.updateValidityState();
      if (!this.validityState || !this.validityState.valid) {
        event.preventDefault();
      }
    });
  }

  private delegateFocusToNativeInput() {
    this.host.shadowRoot.querySelector('input').focus();
  }

  private validateRequired(): boolean {
    if (this.required) {
      return this.value !== undefined && this.value.length > 0;
    }
    return true;
  }

  private validatePattern(): boolean {
    if (this.pattern !== undefined) {
      const regex = new RegExp(this.pattern);
      return regex.test(this.value);
    }
    return true;
  }

  private validateMinLength(): boolean {
    if (this.minlength !== undefined) {
      return this.value?.length >= this.minlength || this.minlength === 0;
    }
    return true;
  }

  private validateMaxLength(): boolean {
    if (this.maxlength !== undefined && this.value !== undefined) {
      return this.value?.length <= this.maxlength;
    }
    return true;
  }

  private validateMin(): boolean {
    if (this.isValidMinMaxInputValue(this.min) && this.type === 'number') {
      const minInt = typeof this.min === 'string' ? parseInt(this.min) : this.min;

      return parseInt(this.value) >= minInt;
    }
    return true;
  }

  private validateMax(): boolean {
    if (this.isValidMinMaxInputValue(this.max) && this.type === 'number') {
      const maxInt = typeof this.max === 'string' ? parseInt(this.max) : this.max;

      return parseInt(this.value) <= maxInt;
    }
    return true;
  }

  private isValidMinMaxInputValue(value) {
    return value !== undefined && value !== '';
  }

  private handleInput = (event: InputEvent) => {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.value = input.value;
  };

  private handleChange = () => {
    this.host.dispatchEvent(new window.Event('change'));
    this.groupuiChange.emit();
  };

  private handleBlur = () => {
    this.updateValidityState();
  };

  @Watch('validityState')
  onValidityStateChanged() {
    this.severity = this.validityState && this.validityState.valid ? 'none' : 'danger';
    if (!this.validityState || !this.validityState.valid) {
      this.dispatchInvalidEvent();
    }
  }

  private dispatchInvalidEvent() {
    this.host.dispatchEvent(new window.Event('invalid'));
    this.groupuiInvalid.emit(this.validityState);
  }

  private updateValidityState({ force = false }: { force?: boolean } = {}) {
    if (!force && this.noValidation) return;

    const validity = {
      badInput: false,
      customError: false,
      patternMismatch: !this.validatePattern(),
      rangeOverflow: !this.validateMax(),
      rangeUnderflow: !this.validateMin(),
      stepMismatch: false,
      tooLong: !this.validateMaxLength(),
      tooShort: !this.validateMinLength(),
      typeMismatch: false,
      valid: this.isValid(),
      valueMissing: !this.validateRequired(),
    };
    this.validityState = validity;
    this.validity = validity;
  }

  private isValid() {
    return (
      this.validateRequired() &&
      this.validatePattern() &&
      this.validateMinLength() &&
      this.validateMaxLength() &&
      this.validateMin() &&
      this.validateMax()
    );
  }

  private getInputType(): string {
    return this.type === 'datetimeLocal' ? 'datetime-local' : this.type;
  }

  private showTypingInfo() {
    return this.hasFocus && this.typingInfoTemplate;
  }

  private showDescription() {
    if (!this.descriptionOnlyOnFocus) {
      return true;
    } else {
      return this.hasFocus;
    }
  }

  private applyTypingInfo() {
    if (!this.maxlength) {
      return this.typingInfoTemplate;
    }

    const length = this.value ? this.value.length : 0;
    return this.typingInfoTemplate
      .replace('{characters-left}', String(this.maxlength - length))
      .replace('{characters-used}', String(length))
      .replace('{characters-max}', String(this.maxlength));
  }

  private isReadonly(): boolean {
    return this.disabled || this.readonly;
  }

  private isLabelSlotProvided(): boolean {
    return !!this.host.querySelector('[slot="label"]');
  }

  private isDescriptionSlotProvided(): boolean {
    return !!this.host.querySelector('[slot="description"]');
  }

  private getIconSize(): number | undefined {
    switch (getMode(this)) {
      default:
        return undefined;
    }
  }

  useStatusIcon() {
    return this.showStatusIcon && this.severity && this.severity !== 'none';
  }

  getStatusIcon() {
    switch (this.severity) {
      case 'warning':
        return 'warning-filled-24';
      case 'danger':
        return 'error-filled-24';
      case 'success':
        return 'success-filled-24';
    }
  }

  isShowClearIcon() {
    return this.value && !this.disabled && this.showClearIcon;
  }

  private clearInput = (event) => {
    this.value = '';
    this.groupuiClearClicked.emit();
    event.preventDefault();
  };

  render() {
    return (
      <Host tabIndex={this.disabled ? -1 : 0}>
        <div>
          {this.isLabelSlotProvided() && (
            <div id="label" class={{ inline: !this.value && !this.hasFocus }}>
              <slot name="label" />
            </div>
          )}
          <div id="input-wrapper">
            <input
              type={this.getInputType()}
              tabIndex={this.disabled ? -1 : 0}
              placeholder={this.placeholder}
              onBlur={this.handleBlur}
              onInput={this.handleInput}
              onChange={this.handleChange}
              value={this.value}
              readOnly={this.isReadonly()}
              autoFocus={this.autofocus}
              maxlength={this.htmlMaxlengthBehavior ? this.maxlength : undefined}
            />
            {this.useStatusIcon() && (
              <groupui-icon
                brand={getMode(this)}
                name={this.getStatusIcon()}
                width={this.getIconSize()}
                height={this.getIconSize()}
                class="status-icon"
              />
            )}
            {this.isShowClearIcon() && (
              <groupui-icon
                onMouseDown={this.clearInput}
                id="clear"
                name="close-24"
                class="clear-icon"
                width={this.getIconSize()}
                height={this.getIconSize()}
                brand={getMode(this)}
              />
            )}
          </div>
          {this.isInfoContainerNeeded() && (
            <div id="info">
              {this.isDescriptionSlotProvided() && this.showDescription() && (
                <div id="description">
                  <slot name="description" />
                </div>
              )}
              {this.showTypingInfo() && <div id="typing-info">{this.applyTypingInfo()}</div>}
            </div>
          )}
        </div>
      </Host>
    );
  }

  private isInfoContainerNeeded() {
    return (this.isDescriptionSlotProvided() && this.showDescription()) || this.showTypingInfo();
  }
}
