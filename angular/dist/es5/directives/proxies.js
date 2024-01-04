"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupuiSideNavigationGroup = exports.GroupuiSideNavigation = exports.GroupuiShowcase = exports.GroupuiSelectOption = exports.GroupuiSelect = exports.GroupuiSearchSuggestion = exports.GroupuiSearchField = exports.GroupuiRangeSlider = exports.GroupuiRadioGroup = exports.GroupuiRadioButton = exports.GroupuiProgressCircle = exports.GroupuiPopover = exports.GroupuiPagination = exports.GroupuiNotification = exports.GroupuiMultiselectOption = exports.GroupuiMultiselect = exports.GroupuiModal = exports.GroupuiLoadingSpinner = exports.GroupuiList = exports.GroupuiLink = exports.GroupuiItem = exports.GroupuiInput = exports.GroupuiIconStatic = exports.GroupuiIcon = exports.GroupuiHeadline = exports.GroupuiHeader = exports.GroupuiGridRow = exports.GroupuiGridCol = exports.GroupuiGrid = exports.GroupuiFlyout = exports.GroupuiDivider = exports.GroupuiDatePicker = exports.GroupuiCodeTemplate = exports.GroupuiCodeSnippet = exports.GroupuiChip = exports.GroupuiCheckbox = exports.GroupuiCard = exports.GroupuiButtonGroupButton = exports.GroupuiButtonGroup = exports.GroupuiButton = exports.GroupuiBreadcrumbs = exports.GroupuiBreadcrumbDropdown = exports.GroupuiBreadcrumb = exports.GroupuiBadge = exports.GroupuiAvatar = exports.GroupuiArgsTable = exports.GroupuiActionAreaPopoverItem = exports.GroupuiActionAreaItem = exports.GroupuiActionArea = exports.GroupuiAccordion = void 0;
exports.GroupuiTopNavigationItem = exports.GroupuiTopNavigation = exports.GroupuiTooltip = exports.GroupuiTextarea = exports.GroupuiText = exports.GroupuiTag = exports.GroupuiTabs = exports.GroupuiTableCell = exports.GroupuiTable = exports.GroupuiTab = exports.GroupuiSwitch = exports.GroupuiStepperVertical = exports.GroupuiStepperHorizontal = exports.GroupuiStepVertical = exports.GroupuiStep = exports.GroupuiSlider = exports.GroupuiSimplePagination = exports.GroupuiSideNavigationItem = void 0;
var tslib_1 = require("tslib");
/* tslint:disable */
/* auto-generated angular directive proxies */
var core_1 = require("@angular/core");
var utils_1 = require("./angular-component-lib/utils");
var i0 = require("@angular/core");
var _c0 = ["*"];
var GroupuiAccordion = /** @class */ (function () {
    function GroupuiAccordion(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad', 'groupuiExpandedChanged']);
    }
    GroupuiAccordion.ɵfac = function GroupuiAccordion_Factory(t) { return new (t || GroupuiAccordion)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiAccordion.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiAccordion, selectors: [["groupui-accordion"]], inputs: { brand: "brand", disableContentPadding: "disableContentPadding", expanded: "expanded", first: "first", iconPosition: "iconPosition", indentation: "indentation", noSeparator: "noSeparator", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiAccordion_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiAccordion = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'disableContentPadding', 'expanded', 'first', 'iconPosition', 'indentation', 'noSeparator', 'size']
        })
    ], GroupuiAccordion);
    return GroupuiAccordion;
}());
exports.GroupuiAccordion = GroupuiAccordion;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiAccordion, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-accordion',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disableContentPadding', 'expanded', 'first', 'iconPosition', 'indentation', 'noSeparator', 'size'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiActionArea = /** @class */ (function () {
    function GroupuiActionArea(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiActionArea.ɵfac = function GroupuiActionArea_Factory(t) { return new (t || GroupuiActionArea)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiActionArea.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiActionArea, selectors: [["groupui-action-area"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiActionArea_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiActionArea = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({})
    ], GroupuiActionArea);
    return GroupuiActionArea;
}());
exports.GroupuiActionArea = GroupuiActionArea;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiActionArea, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-action-area',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: [],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiActionAreaItem = /** @class */ (function () {
    function GroupuiActionAreaItem(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['click']);
    }
    GroupuiActionAreaItem.ɵfac = function GroupuiActionAreaItem_Factory(t) { return new (t || GroupuiActionAreaItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiActionAreaItem.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiActionAreaItem, selectors: [["groupui-action-area-item"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiActionAreaItem_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiActionAreaItem = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({})
    ], GroupuiActionAreaItem);
    return GroupuiActionAreaItem;
}());
exports.GroupuiActionAreaItem = GroupuiActionAreaItem;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiActionAreaItem, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-action-area-item',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: [],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiActionAreaPopoverItem = /** @class */ (function () {
    function GroupuiActionAreaPopoverItem(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiActionAreaPopoverItem.ɵfac = function GroupuiActionAreaPopoverItem_Factory(t) { return new (t || GroupuiActionAreaPopoverItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiActionAreaPopoverItem.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiActionAreaPopoverItem, selectors: [["groupui-action-area-popover-item"]], inputs: { placement: "placement", theme: "theme", visible: "visible" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiActionAreaPopoverItem_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiActionAreaPopoverItem = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['placement', 'theme', 'visible']
        })
    ], GroupuiActionAreaPopoverItem);
    return GroupuiActionAreaPopoverItem;
}());
exports.GroupuiActionAreaPopoverItem = GroupuiActionAreaPopoverItem;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiActionAreaPopoverItem, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-action-area-popover-item',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['placement', 'theme', 'visible'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiArgsTable = /** @class */ (function () {
    function GroupuiArgsTable(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiControlChanged']);
    }
    GroupuiArgsTable.ɵfac = function GroupuiArgsTable_Factory(t) { return new (t || GroupuiArgsTable)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiArgsTable.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiArgsTable, selectors: [["groupui-args-table"]], inputs: { brand: "brand", component: "component", customElementsJson: "customElementsJson" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiArgsTable_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiArgsTable = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'component', 'customElementsJson']
        })
    ], GroupuiArgsTable);
    return GroupuiArgsTable;
}());
exports.GroupuiArgsTable = GroupuiArgsTable;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiArgsTable, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-args-table',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'component', 'customElementsJson'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiAvatar = /** @class */ (function () {
    function GroupuiAvatar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiAvatar.ɵfac = function GroupuiAvatar_Factory(t) { return new (t || GroupuiAvatar)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiAvatar.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiAvatar, selectors: [["groupui-avatar"]], inputs: { imageSource: "imageSource", initials: "initials", inverted: "inverted", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiAvatar_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiAvatar = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['imageSource', 'initials', 'inverted', 'size']
        })
    ], GroupuiAvatar);
    return GroupuiAvatar;
}());
exports.GroupuiAvatar = GroupuiAvatar;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiAvatar, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-avatar',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['imageSource', 'initials', 'inverted', 'size'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiBadge = /** @class */ (function () {
    function GroupuiBadge(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiBadge.ɵfac = function GroupuiBadge_Factory(t) { return new (t || GroupuiBadge)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiBadge.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiBadge, selectors: [["groupui-badge"]], inputs: { borderColor: "borderColor", brand: "brand", color: "color", display: "display", offsetX: "offsetX", offsetY: "offsetY", position: "position" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiBadge_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiBadge = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['borderColor', 'brand', 'color', 'display', 'offsetX', 'offsetY', 'position']
        })
    ], GroupuiBadge);
    return GroupuiBadge;
}());
exports.GroupuiBadge = GroupuiBadge;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiBadge, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-badge',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['borderColor', 'brand', 'color', 'display', 'offsetX', 'offsetY', 'position'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiBreadcrumb = /** @class */ (function () {
    function GroupuiBreadcrumb(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiBreadcrumb.ɵfac = function GroupuiBreadcrumb_Factory(t) { return new (t || GroupuiBreadcrumb)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiBreadcrumb.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiBreadcrumb, selectors: [["groupui-breadcrumb"]], inputs: { first: "first", href: "href", inDropdown: "inDropdown", last: "last", target: "target" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiBreadcrumb_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiBreadcrumb = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['first', 'href', 'inDropdown', 'last', 'target']
        })
    ], GroupuiBreadcrumb);
    return GroupuiBreadcrumb;
}());
exports.GroupuiBreadcrumb = GroupuiBreadcrumb;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiBreadcrumb, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-breadcrumb',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['first', 'href', 'inDropdown', 'last', 'target'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiBreadcrumbDropdown = /** @class */ (function () {
    function GroupuiBreadcrumbDropdown(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiBreadcrumbDropdown.ɵfac = function GroupuiBreadcrumbDropdown_Factory(t) { return new (t || GroupuiBreadcrumbDropdown)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiBreadcrumbDropdown.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiBreadcrumbDropdown, selectors: [["groupui-breadcrumb-dropdown"]], inputs: { expanded: "expanded", first: "first", last: "last" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiBreadcrumbDropdown_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiBreadcrumbDropdown = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['expanded', 'first', 'last']
        })
    ], GroupuiBreadcrumbDropdown);
    return GroupuiBreadcrumbDropdown;
}());
exports.GroupuiBreadcrumbDropdown = GroupuiBreadcrumbDropdown;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiBreadcrumbDropdown, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-breadcrumb-dropdown',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['expanded', 'first', 'last'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiBreadcrumbs = /** @class */ (function () {
    function GroupuiBreadcrumbs(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiBreadcrumbs.ɵfac = function GroupuiBreadcrumbs_Factory(t) { return new (t || GroupuiBreadcrumbs)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiBreadcrumbs.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiBreadcrumbs, selectors: [["groupui-breadcrumbs"]], inputs: { breakpoint: "breakpoint", maxItems: "maxItems" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiBreadcrumbs_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiBreadcrumbs = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['breakpoint', 'maxItems']
        })
    ], GroupuiBreadcrumbs);
    return GroupuiBreadcrumbs;
}());
exports.GroupuiBreadcrumbs = GroupuiBreadcrumbs;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiBreadcrumbs, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-breadcrumbs',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['breakpoint', 'maxItems'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiButton = /** @class */ (function () {
    function GroupuiButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiButton.ɵfac = function GroupuiButton_Factory(t) { return new (t || GroupuiButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiButton.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiButton, selectors: [["groupui-button"]], inputs: { alignment: "alignment", autofocus: "autofocus", brand: "brand", disabled: "disabled", download: "download", fullwidth: "fullwidth", icon: "icon", iconOnly: "iconOnly", iconPosition: "iconPosition", iconSource: "iconSource", inverted: "inverted", rel: "rel", severity: "severity", size: "size", target: "target", type: "type", url: "url", value: "value", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiButton_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiButton = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['alignment', 'autofocus', 'brand', 'disabled', 'download', 'fullwidth', 'icon', 'iconOnly', 'iconPosition', 'iconSource', 'inverted', 'rel', 'severity', 'size', 'target', 'type', 'url', 'value', 'variant']
        })
    ], GroupuiButton);
    return GroupuiButton;
}());
exports.GroupuiButton = GroupuiButton;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiButton, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-button',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['alignment', 'autofocus', 'brand', 'disabled', 'download', 'fullwidth', 'icon', 'iconOnly', 'iconPosition', 'iconSource', 'inverted', 'rel', 'severity', 'size', 'target', 'type', 'url', 'value', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiButtonGroup = /** @class */ (function () {
    function GroupuiButtonGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiButtonGroup.ɵfac = function GroupuiButtonGroup_Factory(t) { return new (t || GroupuiButtonGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiButtonGroup.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiButtonGroup, selectors: [["groupui-button-group"]], inputs: { brand: "brand", disabled: "disabled", fullwidth: "fullwidth", gap: "gap", iconOnly: "iconOnly", iconPosition: "iconPosition", inverted: "inverted", mode: "mode", name: "name", size: "size", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiButtonGroup_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiButtonGroup = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'disabled', 'fullwidth', 'gap', 'iconOnly', 'iconPosition', 'inverted', 'mode', 'name', 'size', 'variant']
        })
    ], GroupuiButtonGroup);
    return GroupuiButtonGroup;
}());
exports.GroupuiButtonGroup = GroupuiButtonGroup;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiButtonGroup, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-button-group',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'fullwidth', 'gap', 'iconOnly', 'iconPosition', 'inverted', 'mode', 'name', 'size', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiButtonGroupButton = /** @class */ (function () {
    function GroupuiButtonGroupButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiButtonGroupButton.ɵfac = function GroupuiButtonGroupButton_Factory(t) { return new (t || GroupuiButtonGroupButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiButtonGroupButton.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiButtonGroupButton, selectors: [["groupui-button-group-button"]], inputs: { autofocus: "autofocus", brand: "brand", checked: "checked", disabled: "disabled", icon: "icon", iconOnly: "iconOnly", iconSource: "iconSource", inverted: "inverted", name: "name", samewidth: "samewidth", size: "size", spaced: "spaced", value: "value", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiButtonGroupButton_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiButtonGroupButton = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autofocus', 'brand', 'checked', 'disabled', 'icon', 'iconOnly', 'iconSource', 'inverted', 'name', 'samewidth', 'size', 'spaced', 'value', 'variant']
        })
    ], GroupuiButtonGroupButton);
    return GroupuiButtonGroupButton;
}());
exports.GroupuiButtonGroupButton = GroupuiButtonGroupButton;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiButtonGroupButton, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-button-group-button',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'checked', 'disabled', 'icon', 'iconOnly', 'iconSource', 'inverted', 'name', 'samewidth', 'size', 'spaced', 'value', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiCard = /** @class */ (function () {
    function GroupuiCard(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiCard.ɵfac = function GroupuiCard_Factory(t) { return new (t || GroupuiCard)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiCard.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiCard, selectors: [["groupui-card"]], inputs: { background: "background", border: "border", brand: "brand", elevation: "elevation", height: "height", highlightLeft: "highlightLeft", highlightRight: "highlightRight", interactive: "interactive", padding: "padding", selected: "selected" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiCard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiCard = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['background', 'border', 'brand', 'elevation', 'height', 'highlightLeft', 'highlightRight', 'interactive', 'padding', 'selected']
        })
    ], GroupuiCard);
    return GroupuiCard;
}());
exports.GroupuiCard = GroupuiCard;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiCard, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-card',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['background', 'border', 'brand', 'elevation', 'height', 'highlightLeft', 'highlightRight', 'interactive', 'padding', 'selected'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiCheckbox = /** @class */ (function () {
    function GroupuiCheckbox(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiDidLoad', 'groupuiInvalid']);
    }
    GroupuiCheckbox.ɵfac = function GroupuiCheckbox_Factory(t) { return new (t || GroupuiCheckbox)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiCheckbox.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiCheckbox, selectors: [["groupui-checkbox"]], inputs: { autofocus: "autofocus", brand: "brand", checked: "checked", disabled: "disabled", hidelabel: "hidelabel", indeterminate: "indeterminate", name: "name", noValidation: "noValidation", pure: "pure", required: "required", severity: "severity", size: "size", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiCheckbox_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiCheckbox = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autofocus', 'brand', 'checked', 'disabled', 'hidelabel', 'indeterminate', 'name', 'noValidation', 'pure', 'required', 'severity', 'size', 'value'],
            methods: ['validate']
        })
    ], GroupuiCheckbox);
    return GroupuiCheckbox;
}());
exports.GroupuiCheckbox = GroupuiCheckbox;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiCheckbox, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-checkbox',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'checked', 'disabled', 'hidelabel', 'indeterminate', 'name', 'noValidation', 'pure', 'required', 'severity', 'size', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiChip = /** @class */ (function () {
    function GroupuiChip(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiEndSlotClicked']);
    }
    GroupuiChip.ɵfac = function GroupuiChip_Factory(t) { return new (t || GroupuiChip)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiChip.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiChip, selectors: [["groupui-chip"]], inputs: { color: "color", disabled: "disabled", dragged: "dragged", embedded: "embedded", href: "href", rel: "rel", selected: "selected", size: "size", target: "target", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiChip_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiChip = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['color', 'disabled', 'dragged', 'embedded', 'href', 'rel', 'selected', 'size', 'target', 'variant']
        })
    ], GroupuiChip);
    return GroupuiChip;
}());
exports.GroupuiChip = GroupuiChip;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiChip, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-chip',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['color', 'disabled', 'dragged', 'embedded', 'href', 'rel', 'selected', 'size', 'target', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiCodeSnippet = /** @class */ (function () {
    function GroupuiCodeSnippet(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiCodeSnippet.ɵfac = function GroupuiCodeSnippet_Factory(t) { return new (t || GroupuiCodeSnippet)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiCodeSnippet.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiCodeSnippet, selectors: [["groupui-code-snippet"]], inputs: { brand: "brand", language: "language", selectedIndex: "selectedIndex", snippet: "snippet", tabs: "tabs" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiCodeSnippet_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiCodeSnippet = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'language', 'selectedIndex', 'snippet', 'tabs']
        })
    ], GroupuiCodeSnippet);
    return GroupuiCodeSnippet;
}());
exports.GroupuiCodeSnippet = GroupuiCodeSnippet;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiCodeSnippet, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-code-snippet',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'language', 'selectedIndex', 'snippet', 'tabs'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiCodeTemplate = /** @class */ (function () {
    function GroupuiCodeTemplate(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiCodeTemplate.ɵfac = function GroupuiCodeTemplate_Factory(t) { return new (t || GroupuiCodeTemplate)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiCodeTemplate.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiCodeTemplate, selectors: [["groupui-code-template"]], inputs: { brand: "brand" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiCodeTemplate_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiCodeTemplate = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand']
        })
    ], GroupuiCodeTemplate);
    return GroupuiCodeTemplate;
}());
exports.GroupuiCodeTemplate = GroupuiCodeTemplate;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiCodeTemplate, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-code-template',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiDatePicker = /** @class */ (function () {
    function GroupuiDatePicker(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['change', 'groupuiChange', 'groupuiInvalid', 'open', 'close', 'groupuiDidLoad']);
    }
    GroupuiDatePicker.ɵfac = function GroupuiDatePicker_Factory(t) { return new (t || GroupuiDatePicker)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiDatePicker.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiDatePicker, selectors: [["groupui-date-picker"]], inputs: { brand: "brand", dateFormat: "dateFormat", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disableWeekends: "disableWeekends", disabled: "disabled", locale: "locale", maxDate: "maxDate", minDate: "minDate", mode: "mode", name: "name", noValidation: "noValidation", placeholder: "placeholder", position: "position", rangeMode: "rangeMode", rangeSeparator: "rangeSeparator", required: "required", severity: "severity", showStatusIcon: "showStatusIcon", value: "value", weekNumbers: "weekNumbers" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiDatePicker_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiDatePicker = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'dateFormat', 'descriptionOnlyOnFocus', 'disableWeekends', 'disabled', 'locale', 'maxDate', 'minDate', 'mode', 'name', 'noValidation', 'placeholder', 'position', 'rangeMode', 'rangeSeparator', 'required', 'severity', 'showStatusIcon', 'value', 'weekNumbers'],
            methods: ['validate']
        })
    ], GroupuiDatePicker);
    return GroupuiDatePicker;
}());
exports.GroupuiDatePicker = GroupuiDatePicker;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiDatePicker, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-date-picker',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'dateFormat', 'descriptionOnlyOnFocus', 'disableWeekends', 'disabled', 'locale', 'maxDate', 'minDate', 'mode', 'name', 'noValidation', 'placeholder', 'position', 'rangeMode', 'rangeSeparator', 'required', 'severity', 'showStatusIcon', 'value', 'weekNumbers'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiDivider = /** @class */ (function () {
    function GroupuiDivider(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiDivider.ɵfac = function GroupuiDivider_Factory(t) { return new (t || GroupuiDivider)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiDivider.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiDivider, selectors: [["groupui-divider"]], inputs: { brand: "brand", dashed: "dashed", intensity: "intensity", inverted: "inverted", vertical: "vertical" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiDivider_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiDivider = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'dashed', 'intensity', 'inverted', 'vertical']
        })
    ], GroupuiDivider);
    return GroupuiDivider;
}());
exports.GroupuiDivider = GroupuiDivider;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiDivider, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-divider',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'dashed', 'intensity', 'inverted', 'vertical'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiFlyout = /** @class */ (function () {
    function GroupuiFlyout(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiFlyoutClose']);
    }
    GroupuiFlyout.ɵfac = function GroupuiFlyout_Factory(t) { return new (t || GroupuiFlyout)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiFlyout.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiFlyout, selectors: [["groupui-flyout"]], inputs: { position: "position", visible: "visible" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiFlyout_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiFlyout = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['position', 'visible']
        })
    ], GroupuiFlyout);
    return GroupuiFlyout;
}());
exports.GroupuiFlyout = GroupuiFlyout;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiFlyout, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-flyout',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['position', 'visible'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiGrid = /** @class */ (function () {
    function GroupuiGrid(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiGrid.ɵfac = function GroupuiGrid_Factory(t) { return new (t || GroupuiGrid)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiGrid.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiGrid, selectors: [["groupui-grid"]], inputs: { brand: "brand", gutter: "gutter", gutterL: "gutterL", gutterM: "gutterM", gutterS: "gutterS", gutterXl: "gutterXl", gutterXs: "gutterXs", gutterXxl: "gutterXxl", margin: "margin", marginL: "marginL", marginM: "marginM", marginS: "marginS", marginType: "marginType", marginXl: "marginXl", marginXxl: "marginXxl", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiGrid_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiGrid = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'gutter', 'gutterL', 'gutterM', 'gutterS', 'gutterXl', 'gutterXs', 'gutterXxl', 'margin', 'marginL', 'marginM', 'marginS', 'marginType', 'marginXl', 'marginXxl', 'type']
        })
    ], GroupuiGrid);
    return GroupuiGrid;
}());
exports.GroupuiGrid = GroupuiGrid;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiGrid, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-grid',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'gutter', 'gutterL', 'gutterM', 'gutterS', 'gutterXl', 'gutterXs', 'gutterXxl', 'margin', 'marginL', 'marginM', 'marginS', 'marginType', 'marginXl', 'marginXxl', 'type'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiGridCol = /** @class */ (function () {
    function GroupuiGridCol(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiGridCol.ɵfac = function GroupuiGridCol_Factory(t) { return new (t || GroupuiGridCol)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiGridCol.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiGridCol, selectors: [["groupui-grid-col"]], inputs: { brand: "brand", l: "l", m: "m", offsetL: "offsetL", offsetM: "offsetM", offsetS: "offsetS", offsetXl: "offsetXl", offsetXs: "offsetXs", offsetXxl: "offsetXxl", s: "s", xl: "xl", xs: "xs", xxl: "xxl" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiGridCol_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiGridCol = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'l', 'm', 'offsetL', 'offsetM', 'offsetS', 'offsetXl', 'offsetXs', 'offsetXxl', 's', 'xl', 'xs', 'xxl']
        })
    ], GroupuiGridCol);
    return GroupuiGridCol;
}());
exports.GroupuiGridCol = GroupuiGridCol;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiGridCol, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-grid-col',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'l', 'm', 'offsetL', 'offsetM', 'offsetS', 'offsetXl', 'offsetXs', 'offsetXxl', 's', 'xl', 'xs', 'xxl'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiGridRow = /** @class */ (function () {
    function GroupuiGridRow(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiGridRow.ɵfac = function GroupuiGridRow_Factory(t) { return new (t || GroupuiGridRow)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiGridRow.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiGridRow, selectors: [["groupui-grid-row"]], inputs: { brand: "brand", gutter: "gutter", gutterL: "gutterL", gutterM: "gutterM", gutterS: "gutterS", gutterXl: "gutterXl", gutterXs: "gutterXs", gutterXxl: "gutterXxl", margin: "margin", marginL: "marginL", marginM: "marginM", marginS: "marginS", marginType: "marginType", marginXl: "marginXl", marginXs: "marginXs", marginXxl: "marginXxl", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiGridRow_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiGridRow = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'gutter', 'gutterL', 'gutterM', 'gutterS', 'gutterXl', 'gutterXs', 'gutterXxl', 'margin', 'marginL', 'marginM', 'marginS', 'marginType', 'marginXl', 'marginXs', 'marginXxl', 'type']
        })
    ], GroupuiGridRow);
    return GroupuiGridRow;
}());
exports.GroupuiGridRow = GroupuiGridRow;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiGridRow, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-grid-row',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'gutter', 'gutterL', 'gutterM', 'gutterS', 'gutterXl', 'gutterXs', 'gutterXxl', 'margin', 'marginL', 'marginM', 'marginS', 'marginType', 'marginXl', 'marginXs', 'marginXxl', 'type'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiHeader = /** @class */ (function () {
    function GroupuiHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiHeader.ɵfac = function GroupuiHeader_Factory(t) { return new (t || GroupuiHeader)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiHeader.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiHeader, selectors: [["groupui-header"]], inputs: { brand: "brand" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiHeader_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiHeader = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand']
        })
    ], GroupuiHeader);
    return GroupuiHeader;
}());
exports.GroupuiHeader = GroupuiHeader;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiHeader, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-header',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiHeadline = /** @class */ (function () {
    function GroupuiHeadline(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiHeadline.ɵfac = function GroupuiHeadline_Factory(t) { return new (t || GroupuiHeadline)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiHeadline.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiHeadline, selectors: [["groupui-headline"]], inputs: { brand: "brand", fontVariant: "fontVariant", heading: "heading", marketing: "marketing", serif: "serif", weight: "weight" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiHeadline_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiHeadline = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'fontVariant', 'heading', 'marketing', 'serif', 'weight']
        })
    ], GroupuiHeadline);
    return GroupuiHeadline;
}());
exports.GroupuiHeadline = GroupuiHeadline;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiHeadline, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-headline',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'fontVariant', 'heading', 'marketing', 'serif', 'weight'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiIcon = /** @class */ (function () {
    function GroupuiIcon(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiIcon.ɵfac = function GroupuiIcon_Factory(t) { return new (t || GroupuiIcon)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiIcon.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiIcon, selectors: [["groupui-icon"]], inputs: { alt: "alt", brand: "brand", height: "height", name: "name", src: "src", width: "width" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiIcon_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiIcon = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['alt', 'brand', 'height', 'name', 'src', 'width']
        })
    ], GroupuiIcon);
    return GroupuiIcon;
}());
exports.GroupuiIcon = GroupuiIcon;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiIcon, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-icon',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['alt', 'brand', 'height', 'name', 'src', 'width'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiIconStatic = /** @class */ (function () {
    function GroupuiIconStatic(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiIconStatic.ɵfac = function GroupuiIconStatic_Factory(t) { return new (t || GroupuiIconStatic)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiIconStatic.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiIconStatic, selectors: [["groupui-icon-static"]], inputs: { brand: "brand", name: "name" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiIconStatic_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiIconStatic = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'name']
        })
    ], GroupuiIconStatic);
    return GroupuiIconStatic;
}());
exports.GroupuiIconStatic = GroupuiIconStatic;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiIconStatic, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-icon-static',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'name'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiInput = /** @class */ (function () {
    function GroupuiInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiInvalid', 'groupuiDidLoad', 'groupuiClearClicked', 'value']);
    }
    GroupuiInput.ɵfac = function GroupuiInput_Factory(t) { return new (t || GroupuiInput)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiInput.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiInput, selectors: [["groupui-input"]], inputs: { autofocus: "autofocus", brand: "brand", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disabled: "disabled", htmlMaxlengthBehavior: "htmlMaxlengthBehavior", icon: "icon", iconColor: "iconColor", iconPosition: "iconPosition", iconSource: "iconSource", inverted: "inverted", max: "max", maxlength: "maxlength", min: "min", minlength: "minlength", name: "name", noValidation: "noValidation", pattern: "pattern", placeholder: "placeholder", readonly: "readonly", required: "required", severity: "severity", showClearIcon: "showClearIcon", showStatusIcon: "showStatusIcon", size: "size", textTransform: "textTransform", type: "type", typingInfoTemplate: "typingInfoTemplate", validity: "validity", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiInput_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiInput = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'htmlMaxlengthBehavior', 'icon', 'iconColor', 'iconPosition', 'iconSource', 'inverted', 'max', 'maxlength', 'min', 'minlength', 'name', 'noValidation', 'pattern', 'placeholder', 'readonly', 'required', 'severity', 'showClearIcon', 'showStatusIcon', 'size', 'textTransform', 'type', 'typingInfoTemplate', 'validity', 'value'],
            methods: ['validate']
        })
    ], GroupuiInput);
    return GroupuiInput;
}());
exports.GroupuiInput = GroupuiInput;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiInput, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-input',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'htmlMaxlengthBehavior', 'icon', 'iconColor', 'iconPosition', 'iconSource', 'inverted', 'max', 'maxlength', 'min', 'minlength', 'name', 'noValidation', 'pattern', 'placeholder', 'readonly', 'required', 'severity', 'showClearIcon', 'showStatusIcon', 'size', 'textTransform', 'type', 'typingInfoTemplate', 'validity', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiItem = /** @class */ (function () {
    function GroupuiItem(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiItem.ɵfac = function GroupuiItem_Factory(t) { return new (t || GroupuiItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiItem.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiItem, selectors: [["groupui-item"]], inputs: { border: "border", brand: "brand", disabled: "disabled", indentation: "indentation", selected: "selected", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiItem_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiItem = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['border', 'brand', 'disabled', 'indentation', 'selected', 'size']
        })
    ], GroupuiItem);
    return GroupuiItem;
}());
exports.GroupuiItem = GroupuiItem;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiItem, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-item',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['border', 'brand', 'disabled', 'indentation', 'selected', 'size'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiLink = /** @class */ (function () {
    function GroupuiLink(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiLink.ɵfac = function GroupuiLink_Factory(t) { return new (t || GroupuiLink)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiLink.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiLink, selectors: [["groupui-link"]], inputs: { brand: "brand", href: "href", inverted: "inverted", quiet: "quiet", rel: "rel", target: "target", variant: "variant", weight: "weight" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiLink_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiLink = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'href', 'inverted', 'quiet', 'rel', 'target', 'variant', 'weight']
        })
    ], GroupuiLink);
    return GroupuiLink;
}());
exports.GroupuiLink = GroupuiLink;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiLink, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-link',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'href', 'inverted', 'quiet', 'rel', 'target', 'variant', 'weight'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiList = /** @class */ (function () {
    function GroupuiList(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiList.ɵfac = function GroupuiList_Factory(t) { return new (t || GroupuiList)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiList.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiList, selectors: [["groupui-list"]], inputs: { brand: "brand", hover: "hover" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiList_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiList = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'hover']
        })
    ], GroupuiList);
    return GroupuiList;
}());
exports.GroupuiList = GroupuiList;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiList, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-list',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'hover'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiLoadingSpinner = /** @class */ (function () {
    function GroupuiLoadingSpinner(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiLoadingSpinner.ɵfac = function GroupuiLoadingSpinner_Factory(t) { return new (t || GroupuiLoadingSpinner)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiLoadingSpinner.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiLoadingSpinner, selectors: [["groupui-loading-spinner"]], inputs: { background: "background", brand: "brand", disableBackdrop: "disableBackdrop", displayed: "displayed", duration: "duration", labelPosition: "labelPosition", severity: "severity", size: "size", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiLoadingSpinner_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiLoadingSpinner = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['background', 'brand', 'disableBackdrop', 'displayed', 'duration', 'labelPosition', 'severity', 'size', 'variant']
        })
    ], GroupuiLoadingSpinner);
    return GroupuiLoadingSpinner;
}());
exports.GroupuiLoadingSpinner = GroupuiLoadingSpinner;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiLoadingSpinner, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-loading-spinner',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['background', 'brand', 'disableBackdrop', 'displayed', 'duration', 'labelPosition', 'severity', 'size', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiModal = /** @class */ (function () {
    function GroupuiModal(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiModalClose', 'groupuiDidLoad']);
    }
    GroupuiModal.ɵfac = function GroupuiModal_Factory(t) { return new (t || GroupuiModal)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiModal.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiModal, selectors: [["groupui-modal"]], inputs: { background: "background", brand: "brand", closeButton: "closeButton", disableBackdropClose: "disableBackdropClose", disableEscapeClose: "disableEscapeClose", displayed: "displayed", iconMargin: "iconMargin", l: "l", m: "m", margin: "margin", maxWidth: "maxWidth", overflow: "overflow", padding: "padding", s: "s", xl: "xl", xs: "xs", xxl: "xxl" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiModal_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiModal = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['background', 'brand', 'closeButton', 'disableBackdropClose', 'disableEscapeClose', 'displayed', 'iconMargin', 'l', 'm', 'margin', 'maxWidth', 'overflow', 'padding', 's', 'xl', 'xs', 'xxl']
        })
    ], GroupuiModal);
    return GroupuiModal;
}());
exports.GroupuiModal = GroupuiModal;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiModal, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-modal',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['background', 'brand', 'closeButton', 'disableBackdropClose', 'disableEscapeClose', 'displayed', 'iconMargin', 'l', 'm', 'margin', 'maxWidth', 'overflow', 'padding', 's', 'xl', 'xs', 'xxl'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiMultiselect = /** @class */ (function () {
    function GroupuiMultiselect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
    GroupuiMultiselect.ɵfac = function GroupuiMultiselect_Factory(t) { return new (t || GroupuiMultiselect)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiMultiselect.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiMultiselect, selectors: [["groupui-multiselect"]], inputs: { autofocus: "autofocus", brand: "brand", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disabled: "disabled", maxHeight: "maxHeight", name: "name", noValidation: "noValidation", placeholder: "placeholder", required: "required", severity: "severity", showChips: "showChips", showStatusIcon: "showStatusIcon", size: "size", summary: "summary" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiMultiselect_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiMultiselect = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'maxHeight', 'name', 'noValidation', 'placeholder', 'required', 'severity', 'showChips', 'showStatusIcon', 'size', 'summary'],
            methods: ['validate']
        })
    ], GroupuiMultiselect);
    return GroupuiMultiselect;
}());
exports.GroupuiMultiselect = GroupuiMultiselect;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiMultiselect, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-multiselect',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'maxHeight', 'name', 'noValidation', 'placeholder', 'required', 'severity', 'showChips', 'showStatusIcon', 'size', 'summary'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiMultiselectOption = /** @class */ (function () {
    function GroupuiMultiselectOption(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['checkedChanged', 'groupuiDidLoad']);
    }
    GroupuiMultiselectOption.ɵfac = function GroupuiMultiselectOption_Factory(t) { return new (t || GroupuiMultiselectOption)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiMultiselectOption.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiMultiselectOption, selectors: [["groupui-multiselect-option"]], inputs: { checked: "checked", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiMultiselectOption_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiMultiselectOption = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['checked', 'value']
        })
    ], GroupuiMultiselectOption);
    return GroupuiMultiselectOption;
}());
exports.GroupuiMultiselectOption = GroupuiMultiselectOption;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiMultiselectOption, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-multiselect-option',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['checked', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiNotification = /** @class */ (function () {
    function GroupuiNotification(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiClose', 'groupuiDidLoad']);
    }
    GroupuiNotification.ɵfac = function GroupuiNotification_Factory(t) { return new (t || GroupuiNotification)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiNotification.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiNotification, selectors: [["groupui-notification"]], inputs: { autoDismiss: "autoDismiss", brand: "brand", dismissible: "dismissible", elevation: "elevation", severity: "severity", type: "type", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiNotification_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiNotification = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autoDismiss', 'brand', 'dismissible', 'elevation', 'severity', 'type', 'variant']
        })
    ], GroupuiNotification);
    return GroupuiNotification;
}());
exports.GroupuiNotification = GroupuiNotification;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiNotification, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-notification',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autoDismiss', 'brand', 'dismissible', 'elevation', 'severity', 'type', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiPagination = /** @class */ (function () {
    function GroupuiPagination(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiPageChange', 'groupuiPageSizeChange', 'groupuiDidLoad']);
    }
    GroupuiPagination.ɵfac = function GroupuiPagination_Factory(t) { return new (t || GroupuiPagination)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiPagination.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiPagination, selectors: [["groupui-pagination"]], inputs: { brand: "brand", direction: "direction", displayedPageCount: "displayedPageCount", elementsPerPageLabel: "elementsPerPageLabel", nextButtonText: "nextButtonText", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", pageSizeOptionsSelectMaxHeight: "pageSizeOptionsSelectMaxHeight", previousButtonText: "previousButtonText", selectedPage: "selectedPage", totalElements: "totalElements", visibleElementsLabel: "visibleElementsLabel" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiPagination_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiPagination = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'direction', 'displayedPageCount', 'elementsPerPageLabel', 'nextButtonText', 'pageSize', 'pageSizeOptions', 'pageSizeOptionsSelectMaxHeight', 'previousButtonText', 'selectedPage', 'totalElements', 'visibleElementsLabel']
        })
    ], GroupuiPagination);
    return GroupuiPagination;
}());
exports.GroupuiPagination = GroupuiPagination;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiPagination, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-pagination',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'direction', 'displayedPageCount', 'elementsPerPageLabel', 'nextButtonText', 'pageSize', 'pageSizeOptions', 'pageSizeOptionsSelectMaxHeight', 'previousButtonText', 'selectedPage', 'totalElements', 'visibleElementsLabel'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiPopover = /** @class */ (function () {
    function GroupuiPopover(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiPopover.ɵfac = function GroupuiPopover_Factory(t) { return new (t || GroupuiPopover)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiPopover.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiPopover, selectors: [["groupui-popover"]], inputs: { brand: "brand", display: "display", fullWidth: "fullWidth", offset: "offset", placement: "placement", visible: "visible" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiPopover_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiPopover = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'display', 'fullWidth', 'offset', 'placement', 'visible']
        })
    ], GroupuiPopover);
    return GroupuiPopover;
}());
exports.GroupuiPopover = GroupuiPopover;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiPopover, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-popover',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'display', 'fullWidth', 'offset', 'placement', 'visible'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiProgressCircle = /** @class */ (function () {
    function GroupuiProgressCircle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiProgressCircle.ɵfac = function GroupuiProgressCircle_Factory(t) { return new (t || GroupuiProgressCircle)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiProgressCircle.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiProgressCircle, selectors: [["groupui-progress-circle"]], inputs: { background: "background", brand: "brand", displayed: "displayed", progress: "progress", severity: "severity", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiProgressCircle_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiProgressCircle = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['background', 'brand', 'displayed', 'progress', 'severity', 'variant']
        })
    ], GroupuiProgressCircle);
    return GroupuiProgressCircle;
}());
exports.GroupuiProgressCircle = GroupuiProgressCircle;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiProgressCircle, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-progress-circle',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['background', 'brand', 'displayed', 'progress', 'severity', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiRadioButton = /** @class */ (function () {
    function GroupuiRadioButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiRadioButton.ɵfac = function GroupuiRadioButton_Factory(t) { return new (t || GroupuiRadioButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiRadioButton.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiRadioButton, selectors: [["groupui-radio-button"]], inputs: { autofocus: "autofocus", brand: "brand", checked: "checked", disabled: "disabled", pure: "pure", required: "required", severity: "severity", size: "size", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiRadioButton_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiRadioButton = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autofocus', 'brand', 'checked', 'disabled', 'pure', 'required', 'severity', 'size', 'value']
        })
    ], GroupuiRadioButton);
    return GroupuiRadioButton;
}());
exports.GroupuiRadioButton = GroupuiRadioButton;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiRadioButton, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-radio-button',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'checked', 'disabled', 'pure', 'required', 'severity', 'size', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiRadioGroup = /** @class */ (function () {
    function GroupuiRadioGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
    GroupuiRadioGroup.ɵfac = function GroupuiRadioGroup_Factory(t) { return new (t || GroupuiRadioGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiRadioGroup.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiRadioGroup, selectors: [["groupui-radio-group"]], inputs: { brand: "brand", disabled: "disabled", name: "name", severity: "severity", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiRadioGroup_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiRadioGroup = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'disabled', 'name', 'severity', 'value']
        })
    ], GroupuiRadioGroup);
    return GroupuiRadioGroup;
}());
exports.GroupuiRadioGroup = GroupuiRadioGroup;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiRadioGroup, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-radio-group',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'name', 'severity', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiRangeSlider = /** @class */ (function () {
    function GroupuiRangeSlider(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
    GroupuiRangeSlider.ɵfac = function GroupuiRangeSlider_Factory(t) { return new (t || GroupuiRangeSlider)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiRangeSlider.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiRangeSlider, selectors: [["groupui-range-slider"]], inputs: { disabled: "disabled", fromValue: "fromValue", max: "max", min: "min", name: "name", showDragTooltip: "showDragTooltip", showTickMarks: "showTickMarks", step: "step", thumbSize: "thumbSize", toValue: "toValue", valueTemplate: "valueTemplate" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiRangeSlider_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiRangeSlider = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['disabled', 'fromValue', 'max', 'min', 'name', 'showDragTooltip', 'showTickMarks', 'step', 'thumbSize', 'toValue', 'valueTemplate']
        })
    ], GroupuiRangeSlider);
    return GroupuiRangeSlider;
}());
exports.GroupuiRangeSlider = GroupuiRangeSlider;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiRangeSlider, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-range-slider',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['disabled', 'fromValue', 'max', 'min', 'name', 'showDragTooltip', 'showTickMarks', 'step', 'thumbSize', 'toValue', 'valueTemplate'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSearchField = /** @class */ (function () {
    function GroupuiSearchField(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiSearchStarted', 'groupuiSuggestionSelected', 'groupuiChange', 'groupuiInput', 'groupuiInvalid', 'groupuiClearClicked', 'groupuiDidLoad', 'groupuiInputFocused']);
    }
    GroupuiSearchField.ɵfac = function GroupuiSearchField_Factory(t) { return new (t || GroupuiSearchField)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSearchField.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSearchField, selectors: [["groupui-search-field"]], inputs: { autofocus: "autofocus", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", directlyOpen: "directlyOpen", disabled: "disabled", hideClearIcon: "hideClearIcon", hideSearchIcon: "hideSearchIcon", icon: "icon", iconSource: "iconSource", maxHeight: "maxHeight", maxlength: "maxlength", name: "name", noValidation: "noValidation", placeholder: "placeholder", required: "required", searchIconPosition: "searchIconPosition", severity: "severity", showStatusIcon: "showStatusIcon", size: "size", subStringHighlighting: "subStringHighlighting", suggestionsMaxHeight: "suggestionsMaxHeight", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSearchField_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSearchField = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autofocus', 'descriptionOnlyOnFocus', 'directlyOpen', 'disabled', 'hideClearIcon', 'hideSearchIcon', 'icon', 'iconSource', 'maxHeight', 'maxlength', 'name', 'noValidation', 'placeholder', 'required', 'searchIconPosition', 'severity', 'showStatusIcon', 'size', 'subStringHighlighting', 'suggestionsMaxHeight', 'value'],
            methods: ['clear', 'validate']
        })
    ], GroupuiSearchField);
    return GroupuiSearchField;
}());
exports.GroupuiSearchField = GroupuiSearchField;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSearchField, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-search-field',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'descriptionOnlyOnFocus', 'directlyOpen', 'disabled', 'hideClearIcon', 'hideSearchIcon', 'icon', 'iconSource', 'maxHeight', 'maxlength', 'name', 'noValidation', 'placeholder', 'required', 'searchIconPosition', 'severity', 'showStatusIcon', 'size', 'subStringHighlighting', 'suggestionsMaxHeight', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSearchSuggestion = /** @class */ (function () {
    function GroupuiSearchSuggestion(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiSearchSuggestion.ɵfac = function GroupuiSearchSuggestion_Factory(t) { return new (t || GroupuiSearchSuggestion)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSearchSuggestion.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSearchSuggestion, selectors: [["groupui-search-suggestion"]], inputs: { brand: "brand", hideIcon: "hideIcon", icon: "icon", iconSource: "iconSource", input: "input", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSearchSuggestion_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSearchSuggestion = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'hideIcon', 'icon', 'iconSource', 'input', 'value']
        })
    ], GroupuiSearchSuggestion);
    return GroupuiSearchSuggestion;
}());
exports.GroupuiSearchSuggestion = GroupuiSearchSuggestion;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSearchSuggestion, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-search-suggestion',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'hideIcon', 'icon', 'iconSource', 'input', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSelect = /** @class */ (function () {
    function GroupuiSelect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiDidLoad', 'groupuiInvalid']);
    }
    GroupuiSelect.ɵfac = function GroupuiSelect_Factory(t) { return new (t || GroupuiSelect)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSelect.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSelect, selectors: [["groupui-select"]], inputs: { autofocus: "autofocus", brand: "brand", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disabled: "disabled", inverted: "inverted", maxHeight: "maxHeight", name: "name", noValidation: "noValidation", placeholder: "placeholder", required: "required", severity: "severity", showStatusIcon: "showStatusIcon", size: "size", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSelect_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSelect = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'inverted', 'maxHeight', 'name', 'noValidation', 'placeholder', 'required', 'severity', 'showStatusIcon', 'size', 'value'],
            methods: ['validate']
        })
    ], GroupuiSelect);
    return GroupuiSelect;
}());
exports.GroupuiSelect = GroupuiSelect;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSelect, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-select',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'inverted', 'maxHeight', 'name', 'noValidation', 'placeholder', 'required', 'severity', 'showStatusIcon', 'size', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSelectOption = /** @class */ (function () {
    function GroupuiSelectOption(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiSelectOption.ɵfac = function GroupuiSelectOption_Factory(t) { return new (t || GroupuiSelectOption)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSelectOption.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSelectOption, selectors: [["groupui-select-option"]], inputs: { brand: "brand", disabled: "disabled", inverted: "inverted", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSelectOption_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSelectOption = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'disabled', 'inverted', 'value']
        })
    ], GroupuiSelectOption);
    return GroupuiSelectOption;
}());
exports.GroupuiSelectOption = GroupuiSelectOption;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSelectOption, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-select-option',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'inverted', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiShowcase = /** @class */ (function () {
    function GroupuiShowcase(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiShowcase.ɵfac = function GroupuiShowcase_Factory(t) { return new (t || GroupuiShowcase)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiShowcase.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiShowcase, selectors: [["groupui-showcase"]], inputs: { brand: "brand", components: "components", customElementsJsonData: "customElementsJsonData", customElementsJsonPath: "customElementsJsonPath", direction: "direction" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiShowcase_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiShowcase = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'components', 'customElementsJsonData', 'customElementsJsonPath', 'direction']
        })
    ], GroupuiShowcase);
    return GroupuiShowcase;
}());
exports.GroupuiShowcase = GroupuiShowcase;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiShowcase, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-showcase',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'components', 'customElementsJsonData', 'customElementsJsonPath', 'direction'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSideNavigation = /** @class */ (function () {
    function GroupuiSideNavigation(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
    GroupuiSideNavigation.ɵfac = function GroupuiSideNavigation_Factory(t) { return new (t || GroupuiSideNavigation)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSideNavigation.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSideNavigation, selectors: [["groupui-side-navigation"]], inputs: { brand: "brand", divider: "divider", iconOnly: "iconOnly", inverted: "inverted", size: "size", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSideNavigation_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSideNavigation = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'divider', 'iconOnly', 'inverted', 'size', 'variant']
        })
    ], GroupuiSideNavigation);
    return GroupuiSideNavigation;
}());
exports.GroupuiSideNavigation = GroupuiSideNavigation;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSideNavigation, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-side-navigation',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'divider', 'iconOnly', 'inverted', 'size', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSideNavigationGroup = /** @class */ (function () {
    function GroupuiSideNavigationGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiSideNavigationGroup.ɵfac = function GroupuiSideNavigationGroup_Factory(t) { return new (t || GroupuiSideNavigationGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSideNavigationGroup.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSideNavigationGroup, selectors: [["groupui-side-navigation-group"]], inputs: { active: "active", brand: "brand", divider: "divider", expanded: "expanded", icon: "icon", indented: "indented", inverted: "inverted", size: "size", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSideNavigationGroup_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSideNavigationGroup = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['active', 'brand', 'divider', 'expanded', 'icon', 'indented', 'inverted', 'size', 'variant']
        })
    ], GroupuiSideNavigationGroup);
    return GroupuiSideNavigationGroup;
}());
exports.GroupuiSideNavigationGroup = GroupuiSideNavigationGroup;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSideNavigationGroup, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-side-navigation-group',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'brand', 'divider', 'expanded', 'icon', 'indented', 'inverted', 'size', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSideNavigationItem = /** @class */ (function () {
    function GroupuiSideNavigationItem(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiSideNavigationItem.ɵfac = function GroupuiSideNavigationItem_Factory(t) { return new (t || GroupuiSideNavigationItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSideNavigationItem.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSideNavigationItem, selectors: [["groupui-side-navigation-item"]], inputs: { active: "active", disabled: "disabled", href: "href", icon: "icon", iconOnly: "iconOnly", iconSource: "iconSource", inverted: "inverted", size: "size", target: "target", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSideNavigationItem_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSideNavigationItem = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['active', 'disabled', 'href', 'icon', 'iconOnly', 'iconSource', 'inverted', 'size', 'target', 'variant']
        })
    ], GroupuiSideNavigationItem);
    return GroupuiSideNavigationItem;
}());
exports.GroupuiSideNavigationItem = GroupuiSideNavigationItem;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSideNavigationItem, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-side-navigation-item',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'disabled', 'href', 'icon', 'iconOnly', 'iconSource', 'inverted', 'size', 'target', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSimplePagination = /** @class */ (function () {
    function GroupuiSimplePagination(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiPageChange', 'groupuiDidLoad']);
    }
    GroupuiSimplePagination.ɵfac = function GroupuiSimplePagination_Factory(t) { return new (t || GroupuiSimplePagination)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSimplePagination.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSimplePagination, selectors: [["groupui-simple-pagination"]], inputs: { brand: "brand", displayedPageCount: "displayedPageCount", nextButtonText: "nextButtonText", pageCount: "pageCount", previousButtonText: "previousButtonText", selectedPage: "selectedPage" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSimplePagination_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSimplePagination = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'displayedPageCount', 'nextButtonText', 'pageCount', 'previousButtonText', 'selectedPage']
        })
    ], GroupuiSimplePagination);
    return GroupuiSimplePagination;
}());
exports.GroupuiSimplePagination = GroupuiSimplePagination;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSimplePagination, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-simple-pagination',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'displayedPageCount', 'nextButtonText', 'pageCount', 'previousButtonText', 'selectedPage'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSlider = /** @class */ (function () {
    function GroupuiSlider(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
    GroupuiSlider.ɵfac = function GroupuiSlider_Factory(t) { return new (t || GroupuiSlider)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSlider.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSlider, selectors: [["groupui-slider"]], inputs: { disabled: "disabled", max: "max", min: "min", name: "name", showDragTooltip: "showDragTooltip", showTickMarks: "showTickMarks", step: "step", thumbSize: "thumbSize", value: "value", valueTemplate: "valueTemplate" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSlider_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSlider = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['disabled', 'max', 'min', 'name', 'showDragTooltip', 'showTickMarks', 'step', 'thumbSize', 'value', 'valueTemplate']
        })
    ], GroupuiSlider);
    return GroupuiSlider;
}());
exports.GroupuiSlider = GroupuiSlider;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSlider, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-slider',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['disabled', 'max', 'min', 'name', 'showDragTooltip', 'showTickMarks', 'step', 'thumbSize', 'value', 'valueTemplate'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiStep = /** @class */ (function () {
    function GroupuiStep(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiStepActive', 'groupuiStepDone']);
    }
    GroupuiStep.ɵfac = function GroupuiStep_Factory(t) { return new (t || GroupuiStep)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiStep.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiStep, selectors: [["groupui-step"]], inputs: { active: "active", disabled: "disabled", done: "done", icon: "icon", iconSource: "iconSource", loading: "loading", number: "number", severity: "severity" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiStep_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiStep = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['active', 'disabled', 'done', 'icon', 'iconSource', 'loading', 'number', 'severity']
        })
    ], GroupuiStep);
    return GroupuiStep;
}());
exports.GroupuiStep = GroupuiStep;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiStep, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-step',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'disabled', 'done', 'icon', 'iconSource', 'loading', 'number', 'severity'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiStepVertical = /** @class */ (function () {
    function GroupuiStepVertical(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiStepActive', 'groupuiStepDone']);
    }
    GroupuiStepVertical.ɵfac = function GroupuiStepVertical_Factory(t) { return new (t || GroupuiStepVertical)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiStepVertical.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiStepVertical, selectors: [["groupui-step-vertical"]], inputs: { active: "active", disabled: "disabled", done: "done", icon: "icon", loading: "loading", number: "number", severity: "severity" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiStepVertical_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiStepVertical = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['active', 'disabled', 'done', 'icon', 'loading', 'number', 'severity']
        })
    ], GroupuiStepVertical);
    return GroupuiStepVertical;
}());
exports.GroupuiStepVertical = GroupuiStepVertical;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiStepVertical, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-step-vertical',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'disabled', 'done', 'icon', 'loading', 'number', 'severity'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiStepperHorizontal = /** @class */ (function () {
    function GroupuiStepperHorizontal(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiStepperHorizontal.ɵfac = function GroupuiStepperHorizontal_Factory(t) { return new (t || GroupuiStepperHorizontal)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiStepperHorizontal.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiStepperHorizontal, selectors: [["groupui-stepper-horizontal"]], inputs: { condensed: "condensed" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiStepperHorizontal_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiStepperHorizontal = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['condensed']
        })
    ], GroupuiStepperHorizontal);
    return GroupuiStepperHorizontal;
}());
exports.GroupuiStepperHorizontal = GroupuiStepperHorizontal;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiStepperHorizontal, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-stepper-horizontal',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['condensed'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiStepperVertical = /** @class */ (function () {
    function GroupuiStepperVertical(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    GroupuiStepperVertical.ɵfac = function GroupuiStepperVertical_Factory(t) { return new (t || GroupuiStepperVertical)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiStepperVertical.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiStepperVertical, selectors: [["groupui-stepper-vertical"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiStepperVertical_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiStepperVertical = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({})
    ], GroupuiStepperVertical);
    return GroupuiStepperVertical;
}());
exports.GroupuiStepperVertical = GroupuiStepperVertical;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiStepperVertical, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-stepper-vertical',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: [],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiSwitch = /** @class */ (function () {
    function GroupuiSwitch(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
    GroupuiSwitch.ɵfac = function GroupuiSwitch_Factory(t) { return new (t || GroupuiSwitch)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiSwitch.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiSwitch, selectors: [["groupui-switch"]], inputs: { autofocus: "autofocus", brand: "brand", checked: "checked", disabled: "disabled", name: "name", size: "size", success: "success", value: "value", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSwitch_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiSwitch = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autofocus', 'brand', 'checked', 'disabled', 'name', 'size', 'success', 'value', 'variant']
        })
    ], GroupuiSwitch);
    return GroupuiSwitch;
}());
exports.GroupuiSwitch = GroupuiSwitch;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiSwitch, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-switch',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'checked', 'disabled', 'name', 'size', 'success', 'value', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiTab = /** @class */ (function () {
    function GroupuiTab(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['tabChanged', 'groupuiDidLoad']);
    }
    GroupuiTab.ɵfac = function GroupuiTab_Factory(t) { return new (t || GroupuiTab)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiTab.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiTab, selectors: [["groupui-tab"]], inputs: { brand: "brand", disabled: "disabled", disabledDescription: "disabledDescription", icon: "icon", iconSource: "iconSource", name: "name", tab: "tab" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTab_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiTab = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'disabled', 'disabledDescription', 'icon', 'iconSource', 'name', 'tab'],
            methods: ['setActive']
        })
    ], GroupuiTab);
    return GroupuiTab;
}());
exports.GroupuiTab = GroupuiTab;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiTab, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-tab',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'disabledDescription', 'icon', 'iconSource', 'name', 'tab'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiTable = /** @class */ (function () {
    function GroupuiTable(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiTable.ɵfac = function GroupuiTable_Factory(t) { return new (t || GroupuiTable)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiTable.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiTable, selectors: [["groupui-table"]], inputs: { brand: "brand", columns: "columns", header: "header", indicator: "indicator", scrollX: "scrollX", scrollY: "scrollY", size: "size", sortable: "sortable", sticky: "sticky", striped: "striped", widths: "widths" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTable_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiTable = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'columns', 'header', 'indicator', 'scrollX', 'scrollY', 'size', 'sortable', 'sticky', 'striped', 'widths']
        })
    ], GroupuiTable);
    return GroupuiTable;
}());
exports.GroupuiTable = GroupuiTable;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiTable, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-table',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'columns', 'header', 'indicator', 'scrollX', 'scrollY', 'size', 'sortable', 'sticky', 'striped', 'widths'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiTableCell = /** @class */ (function () {
    function GroupuiTableCell(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiSortClick', 'groupuiDidLoad']);
    }
    GroupuiTableCell.ɵfac = function GroupuiTableCell_Factory(t) { return new (t || GroupuiTableCell)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiTableCell.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiTableCell, selectors: [["groupui-table-cell"]], inputs: { alignment: "alignment", brand: "brand", colspan: "colspan", highlighted: "highlighted", indicator: "indicator", order: "order", sortable: "sortable" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTableCell_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiTableCell = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['alignment', 'brand', 'colspan', 'highlighted', 'indicator', 'order', 'sortable']
        })
    ], GroupuiTableCell);
    return GroupuiTableCell;
}());
exports.GroupuiTableCell = GroupuiTableCell;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiTableCell, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-table-cell',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['alignment', 'brand', 'colspan', 'highlighted', 'indicator', 'order', 'sortable'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiTabs = /** @class */ (function () {
    function GroupuiTabs(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiTabChange', 'groupuiDidLoad']);
    }
    GroupuiTabs.ɵfac = function GroupuiTabs_Factory(t) { return new (t || GroupuiTabs)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiTabs.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiTabs, selectors: [["groupui-tabs"]], inputs: { activeTabId: "activeTabId", brand: "brand", fullWidth: "fullWidth", noPadding: "noPadding", showControls: "showControls", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTabs_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiTabs = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['activeTabId', 'brand', 'fullWidth', 'noPadding', 'showControls', 'size'],
            methods: ['select', 'getSelected']
        })
    ], GroupuiTabs);
    return GroupuiTabs;
}());
exports.GroupuiTabs = GroupuiTabs;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiTabs, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-tabs',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['activeTabId', 'brand', 'fullWidth', 'noPadding', 'showControls', 'size'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiTag = /** @class */ (function () {
    function GroupuiTag(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiTag.ɵfac = function GroupuiTag_Factory(t) { return new (t || GroupuiTag)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiTag.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiTag, selectors: [["groupui-tag"]], inputs: { brand: "brand", disabled: "disabled", severity: "severity", size: "size", square: "square", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTag_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiTag = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'disabled', 'severity', 'size', 'square', 'variant']
        })
    ], GroupuiTag);
    return GroupuiTag;
}());
exports.GroupuiTag = GroupuiTag;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiTag, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-tag',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'severity', 'size', 'square', 'variant'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiText = /** @class */ (function () {
    function GroupuiText(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiText.ɵfac = function GroupuiText_Factory(t) { return new (t || GroupuiText)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiText.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiText, selectors: [["groupui-text"]], inputs: { brand: "brand", fontVariant: "fontVariant", marketing: "marketing", size: "size", weight: "weight" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiText_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiText = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'fontVariant', 'marketing', 'size', 'weight']
        })
    ], GroupuiText);
    return GroupuiText;
}());
exports.GroupuiText = GroupuiText;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiText, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-text',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'fontVariant', 'marketing', 'size', 'weight'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiTextarea = /** @class */ (function () {
    function GroupuiTextarea(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiInput', 'groupuiInvalid', 'groupuiDidLoad']);
    }
    GroupuiTextarea.ɵfac = function GroupuiTextarea_Factory(t) { return new (t || GroupuiTextarea)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiTextarea.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiTextarea, selectors: [["groupui-textarea"]], inputs: { autoExpand: "autoExpand", autofocus: "autofocus", brand: "brand", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disabled: "disabled", maxRows: "maxRows", maxlength: "maxlength", name: "name", noValidation: "noValidation", placeholder: "placeholder", readonly: "readonly", required: "required", resize: "resize", rows: "rows", severity: "severity", showStatusIcon: "showStatusIcon", typingInfoTemplate: "typingInfoTemplate", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTextarea_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiTextarea = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['autoExpand', 'autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'maxRows', 'maxlength', 'name', 'noValidation', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'severity', 'showStatusIcon', 'typingInfoTemplate', 'value'],
            methods: ['validate']
        })
    ], GroupuiTextarea);
    return GroupuiTextarea;
}());
exports.GroupuiTextarea = GroupuiTextarea;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiTextarea, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-textarea',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autoExpand', 'autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'maxRows', 'maxlength', 'name', 'noValidation', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'severity', 'showStatusIcon', 'typingInfoTemplate', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiTooltip = /** @class */ (function () {
    function GroupuiTooltip(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiTooltip.ɵfac = function GroupuiTooltip_Factory(t) { return new (t || GroupuiTooltip)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiTooltip.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiTooltip, selectors: [["groupui-tooltip"]], inputs: { brand: "brand", display: "display", position: "position", sticky: "sticky", variant: "variant", visible: "visible", zIndex: "zIndex" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTooltip_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiTooltip = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'display', 'position', 'sticky', 'variant', 'visible', 'zIndex']
        })
    ], GroupuiTooltip);
    return GroupuiTooltip;
}());
exports.GroupuiTooltip = GroupuiTooltip;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiTooltip, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-tooltip',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'display', 'position', 'sticky', 'variant', 'visible', 'zIndex'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiTopNavigation = /** @class */ (function () {
    function GroupuiTopNavigation(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
    GroupuiTopNavigation.ɵfac = function GroupuiTopNavigation_Factory(t) { return new (t || GroupuiTopNavigation)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiTopNavigation.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiTopNavigation, selectors: [["groupui-top-navigation"]], inputs: { alignment: "alignment", brand: "brand", embedded: "embedded", fullWidth: "fullWidth", iconOnly: "iconOnly", inverted: "inverted", noPadding: "noPadding", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTopNavigation_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiTopNavigation = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['alignment', 'brand', 'embedded', 'fullWidth', 'iconOnly', 'inverted', 'noPadding', 'size']
        })
    ], GroupuiTopNavigation);
    return GroupuiTopNavigation;
}());
exports.GroupuiTopNavigation = GroupuiTopNavigation;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiTopNavigation, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-top-navigation',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['alignment', 'brand', 'embedded', 'fullWidth', 'iconOnly', 'inverted', 'noPadding', 'size'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var GroupuiTopNavigationItem = /** @class */ (function () {
    function GroupuiTopNavigationItem(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        (0, utils_1.proxyOutputs)(this, this.el, ['groupuiDidLoad']);
    }
    GroupuiTopNavigationItem.ɵfac = function GroupuiTopNavigationItem_Factory(t) { return new (t || GroupuiTopNavigationItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    GroupuiTopNavigationItem.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupuiTopNavigationItem, selectors: [["groupui-top-navigation-item"]], inputs: { active: "active", disabled: "disabled", embedded: "embedded", href: "href", icon: "icon", iconOnly: "iconOnly", iconSource: "iconSource", inverted: "inverted", noPadding: "noPadding", target: "target" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTopNavigationItem_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    GroupuiTopNavigationItem = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['active', 'disabled', 'embedded', 'href', 'icon', 'iconOnly', 'iconSource', 'inverted', 'noPadding', 'target']
        })
    ], GroupuiTopNavigationItem);
    return GroupuiTopNavigationItem;
}());
exports.GroupuiTopNavigationItem = GroupuiTopNavigationItem;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupuiTopNavigationItem, [{
        type: core_1.Component,
        args: [{
                selector: 'groupui-top-navigation-item',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'disabled', 'embedded', 'href', 'icon', 'iconOnly', 'iconSource', 'inverted', 'noPadding', 'target'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
