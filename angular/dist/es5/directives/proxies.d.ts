import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '@group-ui/group-ui';
import type { DatePickerInvalid as IGroupuiDatePickerDatePickerInvalid } from '@group-ui/group-ui';
import type { SelectedOptionsEvent as IGroupuiMultiselectSelectedOptionsEvent } from '@group-ui/group-ui';
import type { RangeSliderChangeEventDetails as IGroupuiRangeSliderRangeSliderChangeEventDetails } from '@group-ui/group-ui';
import type { OrderEvent as IGroupuiTableCellOrderEvent } from '@group-ui/group-ui';
import * as i0 from "@angular/core";
export declare class GroupuiAccordion {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiAccordion, "groupui-accordion", never, { "brand": "brand"; "disableContentPadding": "disableContentPadding"; "expanded": "expanded"; "first": "first"; "iconPosition": "iconPosition"; "indentation": "indentation"; "noSeparator": "noSeparator"; "size": "size"; }, {}, never, ["*"]>;
}
export declare interface GroupuiAccordion extends Components.GroupuiAccordion {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when expanded state changes, 'expanded' is true when accordion expands, false when it collapses
     */
    groupuiExpandedChanged: EventEmitter<CustomEvent<{
        expanded: boolean;
    }>>;
}
export declare class GroupuiActionArea {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiActionArea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiActionArea, "groupui-action-area", never, {}, {}, never, ["*"]>;
}
export declare interface GroupuiActionArea extends Components.GroupuiActionArea {
}
export declare class GroupuiActionAreaItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiActionAreaItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiActionAreaItem, "groupui-action-area-item", never, {}, {}, never, ["*"]>;
}
export declare interface GroupuiActionAreaItem extends Components.GroupuiActionAreaItem {
    /**
     * is dispatched when the action item will be clicked or on enter/space to call a custom function,
     */
    click: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiActionAreaPopoverItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiActionAreaPopoverItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiActionAreaPopoverItem, "groupui-action-area-popover-item", never, { "placement": "placement"; "theme": "theme"; "visible": "visible"; }, {}, never, ["*"]>;
}
export declare interface GroupuiActionAreaPopoverItem extends Components.GroupuiActionAreaPopoverItem {
}
export declare class GroupuiArgsTable {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiArgsTable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiArgsTable, "groupui-args-table", never, { "brand": "brand"; "component": "component"; "customElementsJson": "customElementsJson"; }, {}, never, ["*"]>;
}
export declare interface GroupuiArgsTable extends Components.GroupuiArgsTable {
    /**
     * is dispatched when a property within control is changed
     */
    groupuiControlChanged: EventEmitter<CustomEvent<{
        name: string;
        value: Function;
        component: string;
        isSlot: boolean;
    }>>;
}
export declare class GroupuiAvatar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiAvatar, "groupui-avatar", never, { "imageSource": "imageSource"; "initials": "initials"; "inverted": "inverted"; "size": "size"; }, {}, never, ["*"]>;
}
export declare interface GroupuiAvatar extends Components.GroupuiAvatar {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiBadge {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiBadge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiBadge, "groupui-badge", never, { "borderColor": "borderColor"; "brand": "brand"; "color": "color"; "display": "display"; "offsetX": "offsetX"; "offsetY": "offsetY"; "position": "position"; }, {}, never, ["*"]>;
}
export declare interface GroupuiBadge extends Components.GroupuiBadge {
}
export declare class GroupuiBreadcrumb {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiBreadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiBreadcrumb, "groupui-breadcrumb", never, { "first": "first"; "href": "href"; "inDropdown": "inDropdown"; "last": "last"; "target": "target"; }, {}, never, ["*"]>;
}
export declare interface GroupuiBreadcrumb extends Components.GroupuiBreadcrumb {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiBreadcrumbDropdown {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiBreadcrumbDropdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiBreadcrumbDropdown, "groupui-breadcrumb-dropdown", never, { "expanded": "expanded"; "first": "first"; "last": "last"; }, {}, never, ["*"]>;
}
export declare interface GroupuiBreadcrumbDropdown extends Components.GroupuiBreadcrumbDropdown {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiBreadcrumbs {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiBreadcrumbs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiBreadcrumbs, "groupui-breadcrumbs", never, { "breakpoint": "breakpoint"; "maxItems": "maxItems"; }, {}, never, ["*"]>;
}
export declare interface GroupuiBreadcrumbs extends Components.GroupuiBreadcrumbs {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiButton, "groupui-button", never, { "alignment": "alignment"; "autofocus": "autofocus"; "brand": "brand"; "disabled": "disabled"; "download": "download"; "fullwidth": "fullwidth"; "icon": "icon"; "iconOnly": "iconOnly"; "iconPosition": "iconPosition"; "iconSource": "iconSource"; "inverted": "inverted"; "rel": "rel"; "severity": "severity"; "size": "size"; "target": "target"; "type": "type"; "url": "url"; "value": "value"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiButton extends Components.GroupuiButton {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiButtonGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiButtonGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiButtonGroup, "groupui-button-group", never, { "brand": "brand"; "disabled": "disabled"; "fullwidth": "fullwidth"; "gap": "gap"; "iconOnly": "iconOnly"; "iconPosition": "iconPosition"; "inverted": "inverted"; "mode": "mode"; "name": "name"; "size": "size"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiButtonGroup extends Components.GroupuiButtonGroup {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiButtonGroupButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiButtonGroupButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiButtonGroupButton, "groupui-button-group-button", never, { "autofocus": "autofocus"; "brand": "brand"; "checked": "checked"; "disabled": "disabled"; "icon": "icon"; "iconOnly": "iconOnly"; "iconSource": "iconSource"; "inverted": "inverted"; "name": "name"; "samewidth": "samewidth"; "size": "size"; "spaced": "spaced"; "value": "value"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiButtonGroupButton extends Components.GroupuiButtonGroupButton {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiCard, "groupui-card", never, { "background": "background"; "border": "border"; "brand": "brand"; "elevation": "elevation"; "height": "height"; "highlightLeft": "highlightLeft"; "highlightRight": "highlightRight"; "interactive": "interactive"; "padding": "padding"; "selected": "selected"; }, {}, never, ["*"]>;
}
export declare interface GroupuiCard extends Components.GroupuiCard {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiCheckbox {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiCheckbox, "groupui-checkbox", never, { "autofocus": "autofocus"; "brand": "brand"; "checked": "checked"; "disabled": "disabled"; "hidelabel": "hidelabel"; "indeterminate": "indeterminate"; "name": "name"; "noValidation": "noValidation"; "pure": "pure"; "required": "required"; "severity": "severity"; "size": "size"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface GroupuiCheckbox extends Components.GroupuiCheckbox {
    /**
     * for react user only - is dispatched when the checked state is changed
     */
    groupuiChange: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
    /**
     * is dispatched when the value is invalid
     */
    groupuiInvalid: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiChip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiChip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiChip, "groupui-chip", never, { "color": "color"; "disabled": "disabled"; "dragged": "dragged"; "embedded": "embedded"; "href": "href"; "rel": "rel"; "selected": "selected"; "size": "size"; "target": "target"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiChip extends Components.GroupuiChip {
    /**
     * dispatched on end slot clicked
     */
    groupuiEndSlotClicked: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiCodeSnippet {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiCodeSnippet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiCodeSnippet, "groupui-code-snippet", never, { "brand": "brand"; "language": "language"; "selectedIndex": "selectedIndex"; "snippet": "snippet"; "tabs": "tabs"; }, {}, never, ["*"]>;
}
export declare interface GroupuiCodeSnippet extends Components.GroupuiCodeSnippet {
}
export declare class GroupuiCodeTemplate {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiCodeTemplate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiCodeTemplate, "groupui-code-template", never, { "brand": "brand"; }, {}, never, ["*"]>;
}
export declare interface GroupuiCodeTemplate extends Components.GroupuiCodeTemplate {
}
export declare class GroupuiDatePicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiDatePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiDatePicker, "groupui-date-picker", never, { "brand": "brand"; "dateFormat": "dateFormat"; "descriptionOnlyOnFocus": "descriptionOnlyOnFocus"; "disableWeekends": "disableWeekends"; "disabled": "disabled"; "locale": "locale"; "maxDate": "maxDate"; "minDate": "minDate"; "mode": "mode"; "name": "name"; "noValidation": "noValidation"; "placeholder": "placeholder"; "position": "position"; "rangeMode": "rangeMode"; "rangeSeparator": "rangeSeparator"; "required": "required"; "severity": "severity"; "showStatusIcon": "showStatusIcon"; "value": "value"; "weekNumbers": "weekNumbers"; }, {}, never, ["*"]>;
}
export declare interface GroupuiDatePicker extends Components.GroupuiDatePicker {
    /**
     * is dispatched when the value is changed
  i.e. 2022-02-02 for single selection mode,
  2022-02-02:2022-02-03 for date range mode and
  2022-W22 for week selection mode
     */
    change: EventEmitter<CustomEvent<void>>;
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<void>>;
    /**
     * for react user only - is dispatched when the value is invalid
     */
    groupuiInvalid: EventEmitter<CustomEvent<IGroupuiDatePickerDatePickerInvalid>>;
    /**
     * is dispatched when the datepicker will be opened => 'event.target.value' delivers the current date value
     */
    open: EventEmitter<CustomEvent<void>>;
    /**
     * is dispatched when the datepicker will be closed => 'event.target.value' delivers the current date value
     */
    close: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiDivider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiDivider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiDivider, "groupui-divider", never, { "brand": "brand"; "dashed": "dashed"; "intensity": "intensity"; "inverted": "inverted"; "vertical": "vertical"; }, {}, never, ["*"]>;
}
export declare interface GroupuiDivider extends Components.GroupuiDivider {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiFlyout {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiFlyout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiFlyout, "groupui-flyout", never, { "position": "position"; "visible": "visible"; }, {}, never, ["*"]>;
}
export declare interface GroupuiFlyout extends Components.GroupuiFlyout {
    /**
     * is dispatched when modal is closed
     */
    groupuiFlyoutClose: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiGrid {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiGrid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiGrid, "groupui-grid", never, { "brand": "brand"; "gutter": "gutter"; "gutterL": "gutterL"; "gutterM": "gutterM"; "gutterS": "gutterS"; "gutterXl": "gutterXl"; "gutterXs": "gutterXs"; "gutterXxl": "gutterXxl"; "margin": "margin"; "marginL": "marginL"; "marginM": "marginM"; "marginS": "marginS"; "marginType": "marginType"; "marginXl": "marginXl"; "marginXxl": "marginXxl"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface GroupuiGrid extends Components.GroupuiGrid {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiGridCol {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiGridCol, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiGridCol, "groupui-grid-col", never, { "brand": "brand"; "l": "l"; "m": "m"; "offsetL": "offsetL"; "offsetM": "offsetM"; "offsetS": "offsetS"; "offsetXl": "offsetXl"; "offsetXs": "offsetXs"; "offsetXxl": "offsetXxl"; "s": "s"; "xl": "xl"; "xs": "xs"; "xxl": "xxl"; }, {}, never, ["*"]>;
}
export declare interface GroupuiGridCol extends Components.GroupuiGridCol {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiGridRow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiGridRow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiGridRow, "groupui-grid-row", never, { "brand": "brand"; "gutter": "gutter"; "gutterL": "gutterL"; "gutterM": "gutterM"; "gutterS": "gutterS"; "gutterXl": "gutterXl"; "gutterXs": "gutterXs"; "gutterXxl": "gutterXxl"; "margin": "margin"; "marginL": "marginL"; "marginM": "marginM"; "marginS": "marginS"; "marginType": "marginType"; "marginXl": "marginXl"; "marginXs": "marginXs"; "marginXxl": "marginXxl"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface GroupuiGridRow extends Components.GroupuiGridRow {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiHeader, "groupui-header", never, { "brand": "brand"; }, {}, never, ["*"]>;
}
export declare interface GroupuiHeader extends Components.GroupuiHeader {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiHeadline {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiHeadline, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiHeadline, "groupui-headline", never, { "brand": "brand"; "fontVariant": "fontVariant"; "heading": "heading"; "marketing": "marketing"; "serif": "serif"; "weight": "weight"; }, {}, never, ["*"]>;
}
export declare interface GroupuiHeadline extends Components.GroupuiHeadline {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiIcon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiIcon, "groupui-icon", never, { "alt": "alt"; "brand": "brand"; "height": "height"; "name": "name"; "src": "src"; "width": "width"; }, {}, never, ["*"]>;
}
export declare interface GroupuiIcon extends Components.GroupuiIcon {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiIconStatic {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiIconStatic, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiIconStatic, "groupui-icon-static", never, { "brand": "brand"; "name": "name"; }, {}, never, ["*"]>;
}
export declare interface GroupuiIconStatic extends Components.GroupuiIconStatic {
}
export declare class GroupuiInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiInput, "groupui-input", never, { "autofocus": "autofocus"; "brand": "brand"; "descriptionOnlyOnFocus": "descriptionOnlyOnFocus"; "disabled": "disabled"; "htmlMaxlengthBehavior": "htmlMaxlengthBehavior"; "icon": "icon"; "iconColor": "iconColor"; "iconPosition": "iconPosition"; "iconSource": "iconSource"; "inverted": "inverted"; "max": "max"; "maxlength": "maxlength"; "min": "min"; "minlength": "minlength"; "name": "name"; "noValidation": "noValidation"; "pattern": "pattern"; "placeholder": "placeholder"; "readonly": "readonly"; "required": "required"; "severity": "severity"; "showClearIcon": "showClearIcon"; "showStatusIcon": "showStatusIcon"; "size": "size"; "textTransform": "textTransform"; "type": "type"; "typingInfoTemplate": "typingInfoTemplate"; "validity": "validity"; "value": "value"; }, {}, never, ["*"]>;
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
export declare class GroupuiItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiItem, "groupui-item", never, { "border": "border"; "brand": "brand"; "disabled": "disabled"; "indentation": "indentation"; "selected": "selected"; "size": "size"; }, {}, never, ["*"]>;
}
export declare interface GroupuiItem extends Components.GroupuiItem {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiLink, "groupui-link", never, { "brand": "brand"; "href": "href"; "inverted": "inverted"; "quiet": "quiet"; "rel": "rel"; "target": "target"; "variant": "variant"; "weight": "weight"; }, {}, never, ["*"]>;
}
export declare interface GroupuiLink extends Components.GroupuiLink {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiList, "groupui-list", never, { "brand": "brand"; "hover": "hover"; }, {}, never, ["*"]>;
}
export declare interface GroupuiList extends Components.GroupuiList {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiLoadingSpinner {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiLoadingSpinner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiLoadingSpinner, "groupui-loading-spinner", never, { "background": "background"; "brand": "brand"; "disableBackdrop": "disableBackdrop"; "displayed": "displayed"; "duration": "duration"; "labelPosition": "labelPosition"; "severity": "severity"; "size": "size"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiLoadingSpinner extends Components.GroupuiLoadingSpinner {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiModal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiModal, "groupui-modal", never, { "background": "background"; "brand": "brand"; "closeButton": "closeButton"; "disableBackdropClose": "disableBackdropClose"; "disableEscapeClose": "disableEscapeClose"; "displayed": "displayed"; "iconMargin": "iconMargin"; "l": "l"; "m": "m"; "margin": "margin"; "maxWidth": "maxWidth"; "overflow": "overflow"; "padding": "padding"; "s": "s"; "xl": "xl"; "xs": "xs"; "xxl": "xxl"; }, {}, never, ["*"]>;
}
export declare interface GroupuiModal extends Components.GroupuiModal {
    /**
     * is dispatched when modal is closed
     */
    groupuiModalClose: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiMultiselect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiMultiselect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiMultiselect, "groupui-multiselect", never, { "autofocus": "autofocus"; "brand": "brand"; "descriptionOnlyOnFocus": "descriptionOnlyOnFocus"; "disabled": "disabled"; "maxHeight": "maxHeight"; "name": "name"; "noValidation": "noValidation"; "placeholder": "placeholder"; "required": "required"; "severity": "severity"; "showChips": "showChips"; "showStatusIcon": "showStatusIcon"; "size": "size"; "summary": "summary"; }, {}, never, ["*"]>;
}
export declare interface GroupuiMultiselect extends Components.GroupuiMultiselect {
    /**
     * for react users only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<IGroupuiMultiselectSelectedOptionsEvent>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiMultiselectOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiMultiselectOption, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiMultiselectOption, "groupui-multiselect-option", never, { "checked": "checked"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface GroupuiMultiselectOption extends Components.GroupuiMultiselectOption {
    /**
     * dispatched on checked change
     */
    checkedChanged: EventEmitter<CustomEvent<HTMLElement>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiNotification {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiNotification, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiNotification, "groupui-notification", never, { "autoDismiss": "autoDismiss"; "brand": "brand"; "dismissible": "dismissible"; "elevation": "elevation"; "severity": "severity"; "type": "type"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiNotification extends Components.GroupuiNotification {
    /**
     * is dispatched when the notification is closed through click and/or autoDismiss.
  
  Hint: The notification itself just sets its CSS display value to 'none'.
  Use this event to e.g. remove element from the DOM inside your application.
     */
    groupuiClose: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiPagination {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiPagination, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiPagination, "groupui-pagination", never, { "brand": "brand"; "direction": "direction"; "displayedPageCount": "displayedPageCount"; "elementsPerPageLabel": "elementsPerPageLabel"; "nextButtonText": "nextButtonText"; "pageSize": "pageSize"; "pageSizeOptions": "pageSizeOptions"; "pageSizeOptionsSelectMaxHeight": "pageSizeOptionsSelectMaxHeight"; "previousButtonText": "previousButtonText"; "selectedPage": "selectedPage"; "totalElements": "totalElements"; "visibleElementsLabel": "visibleElementsLabel"; }, {}, never, ["*"]>;
}
export declare interface GroupuiPagination extends Components.GroupuiPagination {
    /**
     * dispatched when the page has changed => 'event.detail' delivers the current page and page size
     */
    groupuiPageChange: EventEmitter<CustomEvent<{
        page: number;
        size: number;
    }>>;
    /**
     * dispatched when the pageSize has changed => 'event.detail' delivers the current page size
     */
    groupuiPageSizeChange: EventEmitter<CustomEvent<{
        size: number;
    }>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiPopover {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiPopover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiPopover, "groupui-popover", never, { "brand": "brand"; "display": "display"; "fullWidth": "fullWidth"; "offset": "offset"; "placement": "placement"; "visible": "visible"; }, {}, never, ["*"]>;
}
export declare interface GroupuiPopover extends Components.GroupuiPopover {
}
export declare class GroupuiProgressCircle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiProgressCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiProgressCircle, "groupui-progress-circle", never, { "background": "background"; "brand": "brand"; "displayed": "displayed"; "progress": "progress"; "severity": "severity"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiProgressCircle extends Components.GroupuiProgressCircle {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiRadioButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiRadioButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiRadioButton, "groupui-radio-button", never, { "autofocus": "autofocus"; "brand": "brand"; "checked": "checked"; "disabled": "disabled"; "pure": "pure"; "required": "required"; "severity": "severity"; "size": "size"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface GroupuiRadioButton extends Components.GroupuiRadioButton {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiRadioGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiRadioGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiRadioGroup, "groupui-radio-group", never, { "brand": "brand"; "disabled": "disabled"; "name": "name"; "severity": "severity"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface GroupuiRadioGroup extends Components.GroupuiRadioGroup {
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiRangeSlider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiRangeSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiRangeSlider, "groupui-range-slider", never, { "disabled": "disabled"; "fromValue": "fromValue"; "max": "max"; "min": "min"; "name": "name"; "showDragTooltip": "showDragTooltip"; "showTickMarks": "showTickMarks"; "step": "step"; "thumbSize": "thumbSize"; "toValue": "toValue"; "valueTemplate": "valueTemplate"; }, {}, never, ["*"]>;
}
export declare interface GroupuiRangeSlider extends Components.GroupuiRangeSlider {
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<IGroupuiRangeSliderRangeSliderChangeEventDetails>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiSearchField {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSearchField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSearchField, "groupui-search-field", never, { "autofocus": "autofocus"; "descriptionOnlyOnFocus": "descriptionOnlyOnFocus"; "directlyOpen": "directlyOpen"; "disabled": "disabled"; "hideClearIcon": "hideClearIcon"; "hideSearchIcon": "hideSearchIcon"; "icon": "icon"; "iconSource": "iconSource"; "maxHeight": "maxHeight"; "maxlength": "maxlength"; "name": "name"; "noValidation": "noValidation"; "placeholder": "placeholder"; "required": "required"; "searchIconPosition": "searchIconPosition"; "severity": "severity"; "showStatusIcon": "showStatusIcon"; "size": "size"; "subStringHighlighting": "subStringHighlighting"; "suggestionsMaxHeight": "suggestionsMaxHeight"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSearchField extends Components.GroupuiSearchField {
    /**
     * is dispatched on keyboard enter or when search-icon is clicked
     */
    groupuiSearchStarted: EventEmitter<CustomEvent<{
        value: string;
    }>>;
    /**
     * is dispatched if a suggestion is selected. Emits the value of the suggestion if set, otherwise it's text content
     */
    groupuiSuggestionSelected: EventEmitter<CustomEvent<{
        value: string;
        content: string;
    }>>;
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<{
        value: string;
    }>>;
    /**
     * for react user only - is dispatched when the value is changed on key input
     */
    groupuiInput: EventEmitter<CustomEvent<void>>;
    /**
     * is dispatched when the value is invalid
     */
    groupuiInvalid: EventEmitter<CustomEvent<void>>;
    /**
     * is dispatched if the clear icon is clicked
     */
    groupuiClearClicked: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
    /**
     * is dispatched when the input field of this search input is focused
     */
    groupuiInputFocused: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiSearchSuggestion {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSearchSuggestion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSearchSuggestion, "groupui-search-suggestion", never, { "brand": "brand"; "hideIcon": "hideIcon"; "icon": "icon"; "iconSource": "iconSource"; "input": "input"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSearchSuggestion extends Components.GroupuiSearchSuggestion {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiSelect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSelect, "groupui-select", never, { "autofocus": "autofocus"; "brand": "brand"; "descriptionOnlyOnFocus": "descriptionOnlyOnFocus"; "disabled": "disabled"; "inverted": "inverted"; "maxHeight": "maxHeight"; "name": "name"; "noValidation": "noValidation"; "placeholder": "placeholder"; "required": "required"; "severity": "severity"; "showStatusIcon": "showStatusIcon"; "size": "size"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSelect extends Components.GroupuiSelect {
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
    /**
     * is dispatched when the value is invalid
     */
    groupuiInvalid: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiSelectOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSelectOption, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSelectOption, "groupui-select-option", never, { "brand": "brand"; "disabled": "disabled"; "inverted": "inverted"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSelectOption extends Components.GroupuiSelectOption {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiShowcase {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiShowcase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiShowcase, "groupui-showcase", never, { "brand": "brand"; "components": "components"; "customElementsJsonData": "customElementsJsonData"; "customElementsJsonPath": "customElementsJsonPath"; "direction": "direction"; }, {}, never, ["*"]>;
}
export declare interface GroupuiShowcase extends Components.GroupuiShowcase {
}
export declare class GroupuiSideNavigation {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSideNavigation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSideNavigation, "groupui-side-navigation", never, { "brand": "brand"; "divider": "divider"; "iconOnly": "iconOnly"; "inverted": "inverted"; "size": "size"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSideNavigation extends Components.GroupuiSideNavigation {
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiSideNavigationGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSideNavigationGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSideNavigationGroup, "groupui-side-navigation-group", never, { "active": "active"; "brand": "brand"; "divider": "divider"; "expanded": "expanded"; "icon": "icon"; "indented": "indented"; "inverted": "inverted"; "size": "size"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSideNavigationGroup extends Components.GroupuiSideNavigationGroup {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiSideNavigationItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSideNavigationItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSideNavigationItem, "groupui-side-navigation-item", never, { "active": "active"; "disabled": "disabled"; "href": "href"; "icon": "icon"; "iconOnly": "iconOnly"; "iconSource": "iconSource"; "inverted": "inverted"; "size": "size"; "target": "target"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSideNavigationItem extends Components.GroupuiSideNavigationItem {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiSimplePagination {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSimplePagination, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSimplePagination, "groupui-simple-pagination", never, { "brand": "brand"; "displayedPageCount": "displayedPageCount"; "nextButtonText": "nextButtonText"; "pageCount": "pageCount"; "previousButtonText": "previousButtonText"; "selectedPage": "selectedPage"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSimplePagination extends Components.GroupuiSimplePagination {
    /**
     * dispatched on page select => 'event.detail' contains the selected page
     */
    groupuiPageChange: EventEmitter<CustomEvent<number>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiSlider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSlider, "groupui-slider", never, { "disabled": "disabled"; "max": "max"; "min": "min"; "name": "name"; "showDragTooltip": "showDragTooltip"; "showTickMarks": "showTickMarks"; "step": "step"; "thumbSize": "thumbSize"; "value": "value"; "valueTemplate": "valueTemplate"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSlider extends Components.GroupuiSlider {
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiStep {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiStep, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiStep, "groupui-step", never, { "active": "active"; "disabled": "disabled"; "done": "done"; "icon": "icon"; "iconSource": "iconSource"; "loading": "loading"; "number": "number"; "severity": "severity"; }, {}, never, ["*"]>;
}
export declare interface GroupuiStep extends Components.GroupuiStep {
    /**
     * dispatched when step is getting active
     */
    groupuiStepActive: EventEmitter<CustomEvent<number>>;
    /**
     * dispatched when step is getting done
     */
    groupuiStepDone: EventEmitter<CustomEvent<number>>;
}
export declare class GroupuiStepVertical {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiStepVertical, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiStepVertical, "groupui-step-vertical", never, { "active": "active"; "disabled": "disabled"; "done": "done"; "icon": "icon"; "loading": "loading"; "number": "number"; "severity": "severity"; }, {}, never, ["*"]>;
}
export declare interface GroupuiStepVertical extends Components.GroupuiStepVertical {
    /**
     * dispatched when step vertical is getting active
     */
    groupuiStepActive: EventEmitter<CustomEvent<number>>;
    /**
     * dispatched when step vertical is getting done
     */
    groupuiStepDone: EventEmitter<CustomEvent<number>>;
}
export declare class GroupuiStepperHorizontal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiStepperHorizontal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiStepperHorizontal, "groupui-stepper-horizontal", never, { "condensed": "condensed"; }, {}, never, ["*"]>;
}
export declare interface GroupuiStepperHorizontal extends Components.GroupuiStepperHorizontal {
}
export declare class GroupuiStepperVertical {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiStepperVertical, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiStepperVertical, "groupui-stepper-vertical", never, {}, {}, never, ["*"]>;
}
export declare interface GroupuiStepperVertical extends Components.GroupuiStepperVertical {
}
export declare class GroupuiSwitch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiSwitch, "groupui-switch", never, { "autofocus": "autofocus"; "brand": "brand"; "checked": "checked"; "disabled": "disabled"; "name": "name"; "size": "size"; "success": "success"; "value": "value"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiSwitch extends Components.GroupuiSwitch {
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiTab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiTab, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiTab, "groupui-tab", never, { "brand": "brand"; "disabled": "disabled"; "disabledDescription": "disabledDescription"; "icon": "icon"; "iconSource": "iconSource"; "name": "name"; "tab": "tab"; }, {}, never, ["*"]>;
}
export declare interface GroupuiTab extends Components.GroupuiTab {
    /**
     * fired on tab change
     */
    tabChanged: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiTable {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiTable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiTable, "groupui-table", never, { "brand": "brand"; "columns": "columns"; "header": "header"; "indicator": "indicator"; "scrollX": "scrollX"; "scrollY": "scrollY"; "size": "size"; "sortable": "sortable"; "sticky": "sticky"; "striped": "striped"; "widths": "widths"; }, {}, never, ["*"]>;
}
export declare interface GroupuiTable extends Components.GroupuiTable {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiTableCell {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiTableCell, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiTableCell, "groupui-table-cell", never, { "alignment": "alignment"; "brand": "brand"; "colspan": "colspan"; "highlighted": "highlighted"; "indicator": "indicator"; "order": "order"; "sortable": "sortable"; }, {}, never, ["*"]>;
}
export declare interface GroupuiTableCell extends Components.GroupuiTableCell {
    /**
     * dispatched when the sort icon is clicked => 'event.details' delivers the property order and the index (HINT: on event dispatched sortable logic has to be implemented by yourself)
     */
    groupuiSortClick: EventEmitter<CustomEvent<IGroupuiTableCellOrderEvent>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiTabs {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiTabs, "groupui-tabs", never, { "activeTabId": "activeTabId"; "brand": "brand"; "fullWidth": "fullWidth"; "noPadding": "noPadding"; "showControls": "showControls"; "size": "size"; }, {}, never, ["*"]>;
}
export declare interface GroupuiTabs extends Components.GroupuiTabs {
    /**
     * dispatched when tab change has finished  => 'event.detail' delivers the current and previous tab
     */
    groupuiTabChange: EventEmitter<CustomEvent<{
        tab: string;
        previousTab: string;
    }>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiTag {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiTag, "groupui-tag", never, { "brand": "brand"; "disabled": "disabled"; "severity": "severity"; "size": "size"; "square": "square"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface GroupuiTag extends Components.GroupuiTag {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiText {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiText, "groupui-text", never, { "brand": "brand"; "fontVariant": "fontVariant"; "marketing": "marketing"; "size": "size"; "weight": "weight"; }, {}, never, ["*"]>;
}
export declare interface GroupuiText extends Components.GroupuiText {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiTextarea {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiTextarea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiTextarea, "groupui-textarea", never, { "autoExpand": "autoExpand"; "autofocus": "autofocus"; "brand": "brand"; "descriptionOnlyOnFocus": "descriptionOnlyOnFocus"; "disabled": "disabled"; "maxRows": "maxRows"; "maxlength": "maxlength"; "name": "name"; "noValidation": "noValidation"; "placeholder": "placeholder"; "readonly": "readonly"; "required": "required"; "resize": "resize"; "rows": "rows"; "severity": "severity"; "showStatusIcon": "showStatusIcon"; "typingInfoTemplate": "typingInfoTemplate"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface GroupuiTextarea extends Components.GroupuiTextarea {
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<void>>;
    /**
     * emits on input
     */
    groupuiInput: EventEmitter<CustomEvent<void>>;
    /**
     * is dispatched when the value is invalid
     */
    groupuiInvalid: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiTooltip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiTooltip, "groupui-tooltip", never, { "brand": "brand"; "display": "display"; "position": "position"; "sticky": "sticky"; "variant": "variant"; "visible": "visible"; "zIndex": "zIndex"; }, {}, never, ["*"]>;
}
export declare interface GroupuiTooltip extends Components.GroupuiTooltip {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiTopNavigation {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiTopNavigation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiTopNavigation, "groupui-top-navigation", never, { "alignment": "alignment"; "brand": "brand"; "embedded": "embedded"; "fullWidth": "fullWidth"; "iconOnly": "iconOnly"; "inverted": "inverted"; "noPadding": "noPadding"; "size": "size"; }, {}, never, ["*"]>;
}
export declare interface GroupuiTopNavigation extends Components.GroupuiTopNavigation {
    /**
     * for react user only - use this instead of the native change event
     */
    groupuiChange: EventEmitter<CustomEvent<void>>;
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
export declare class GroupuiTopNavigationItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupuiTopNavigationItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupuiTopNavigationItem, "groupui-top-navigation-item", never, { "active": "active"; "disabled": "disabled"; "embedded": "embedded"; "href": "href"; "icon": "icon"; "iconOnly": "iconOnly"; "iconSource": "iconSource"; "inverted": "inverted"; "noPadding": "noPadding"; "target": "target"; }, {}, never, ["*"]>;
}
export declare interface GroupuiTopNavigationItem extends Components.GroupuiTopNavigationItem {
    /**
     * dispatched when component finished loading
     */
    groupuiDidLoad: EventEmitter<CustomEvent<void>>;
}
