import { __decorate } from 'tslib';
import { ɵɵdirectiveInject, ChangeDetectorRef, ElementRef, NgZone, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Directive, HostListener, ɵɵdefineDirective, ɵɵlistener, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { fromEvent } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { defineCustomElements } from '@group-ui/group-ui/dist/loader';

/* eslint-disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

const _c0 = ["*"];
let GroupuiAccordion = class GroupuiAccordion {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad', 'groupuiExpandedChanged']);
    }
};
GroupuiAccordion.ɵfac = function GroupuiAccordion_Factory(t) { return new (t || GroupuiAccordion)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiAccordion.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiAccordion, selectors: [["groupui-accordion"]], inputs: { brand: "brand", disableContentPadding: "disableContentPadding", expanded: "expanded", first: "first", iconPosition: "iconPosition", indentation: "indentation", noSeparator: "noSeparator", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiAccordion_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiAccordion = __decorate([
    ProxyCmp({
        inputs: ['brand', 'disableContentPadding', 'expanded', 'first', 'iconPosition', 'indentation', 'noSeparator', 'size']
    })
], GroupuiAccordion);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiAccordion, [{
        type: Component,
        args: [{
                selector: 'groupui-accordion',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disableContentPadding', 'expanded', 'first', 'iconPosition', 'indentation', 'noSeparator', 'size'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiActionArea = class GroupuiActionArea {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiActionArea.ɵfac = function GroupuiActionArea_Factory(t) { return new (t || GroupuiActionArea)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiActionArea.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiActionArea, selectors: [["groupui-action-area"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiActionArea_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiActionArea = __decorate([
    ProxyCmp({})
], GroupuiActionArea);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiActionArea, [{
        type: Component,
        args: [{
                selector: 'groupui-action-area',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: [],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiActionAreaItem = class GroupuiActionAreaItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['click']);
    }
};
GroupuiActionAreaItem.ɵfac = function GroupuiActionAreaItem_Factory(t) { return new (t || GroupuiActionAreaItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiActionAreaItem.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiActionAreaItem, selectors: [["groupui-action-area-item"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiActionAreaItem_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiActionAreaItem = __decorate([
    ProxyCmp({})
], GroupuiActionAreaItem);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiActionAreaItem, [{
        type: Component,
        args: [{
                selector: 'groupui-action-area-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: [],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiActionAreaPopoverItem = class GroupuiActionAreaPopoverItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiActionAreaPopoverItem.ɵfac = function GroupuiActionAreaPopoverItem_Factory(t) { return new (t || GroupuiActionAreaPopoverItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiActionAreaPopoverItem.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiActionAreaPopoverItem, selectors: [["groupui-action-area-popover-item"]], inputs: { placement: "placement", theme: "theme", visible: "visible" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiActionAreaPopoverItem_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiActionAreaPopoverItem = __decorate([
    ProxyCmp({
        inputs: ['placement', 'theme', 'visible']
    })
], GroupuiActionAreaPopoverItem);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiActionAreaPopoverItem, [{
        type: Component,
        args: [{
                selector: 'groupui-action-area-popover-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['placement', 'theme', 'visible'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiArgsTable = class GroupuiArgsTable {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiControlChanged']);
    }
};
GroupuiArgsTable.ɵfac = function GroupuiArgsTable_Factory(t) { return new (t || GroupuiArgsTable)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiArgsTable.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiArgsTable, selectors: [["groupui-args-table"]], inputs: { brand: "brand", component: "component", customElementsJson: "customElementsJson" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiArgsTable_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiArgsTable = __decorate([
    ProxyCmp({
        inputs: ['brand', 'component', 'customElementsJson']
    })
], GroupuiArgsTable);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiArgsTable, [{
        type: Component,
        args: [{
                selector: 'groupui-args-table',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'component', 'customElementsJson'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiAvatar = class GroupuiAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiAvatar.ɵfac = function GroupuiAvatar_Factory(t) { return new (t || GroupuiAvatar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiAvatar.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiAvatar, selectors: [["groupui-avatar"]], inputs: { imageSource: "imageSource", initials: "initials", inverted: "inverted", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiAvatar_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiAvatar = __decorate([
    ProxyCmp({
        inputs: ['imageSource', 'initials', 'inverted', 'size']
    })
], GroupuiAvatar);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiAvatar, [{
        type: Component,
        args: [{
                selector: 'groupui-avatar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['imageSource', 'initials', 'inverted', 'size'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiBadge = class GroupuiBadge {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiBadge.ɵfac = function GroupuiBadge_Factory(t) { return new (t || GroupuiBadge)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiBadge.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiBadge, selectors: [["groupui-badge"]], inputs: { borderColor: "borderColor", brand: "brand", color: "color", display: "display", offsetX: "offsetX", offsetY: "offsetY", position: "position" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiBadge_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiBadge = __decorate([
    ProxyCmp({
        inputs: ['borderColor', 'brand', 'color', 'display', 'offsetX', 'offsetY', 'position']
    })
], GroupuiBadge);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiBadge, [{
        type: Component,
        args: [{
                selector: 'groupui-badge',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['borderColor', 'brand', 'color', 'display', 'offsetX', 'offsetY', 'position'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiBreadcrumb = class GroupuiBreadcrumb {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiBreadcrumb.ɵfac = function GroupuiBreadcrumb_Factory(t) { return new (t || GroupuiBreadcrumb)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiBreadcrumb.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiBreadcrumb, selectors: [["groupui-breadcrumb"]], inputs: { first: "first", href: "href", inDropdown: "inDropdown", last: "last", target: "target" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiBreadcrumb_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiBreadcrumb = __decorate([
    ProxyCmp({
        inputs: ['first', 'href', 'inDropdown', 'last', 'target']
    })
], GroupuiBreadcrumb);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiBreadcrumb, [{
        type: Component,
        args: [{
                selector: 'groupui-breadcrumb',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['first', 'href', 'inDropdown', 'last', 'target'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiBreadcrumbDropdown = class GroupuiBreadcrumbDropdown {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiBreadcrumbDropdown.ɵfac = function GroupuiBreadcrumbDropdown_Factory(t) { return new (t || GroupuiBreadcrumbDropdown)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiBreadcrumbDropdown.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiBreadcrumbDropdown, selectors: [["groupui-breadcrumb-dropdown"]], inputs: { expanded: "expanded", first: "first", last: "last" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiBreadcrumbDropdown_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiBreadcrumbDropdown = __decorate([
    ProxyCmp({
        inputs: ['expanded', 'first', 'last']
    })
], GroupuiBreadcrumbDropdown);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiBreadcrumbDropdown, [{
        type: Component,
        args: [{
                selector: 'groupui-breadcrumb-dropdown',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['expanded', 'first', 'last'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiBreadcrumbs = class GroupuiBreadcrumbs {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiBreadcrumbs.ɵfac = function GroupuiBreadcrumbs_Factory(t) { return new (t || GroupuiBreadcrumbs)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiBreadcrumbs.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiBreadcrumbs, selectors: [["groupui-breadcrumbs"]], inputs: { breakpoint: "breakpoint", maxItems: "maxItems" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiBreadcrumbs_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiBreadcrumbs = __decorate([
    ProxyCmp({
        inputs: ['breakpoint', 'maxItems']
    })
], GroupuiBreadcrumbs);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiBreadcrumbs, [{
        type: Component,
        args: [{
                selector: 'groupui-breadcrumbs',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['breakpoint', 'maxItems'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiButton = class GroupuiButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiButton.ɵfac = function GroupuiButton_Factory(t) { return new (t || GroupuiButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiButton.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiButton, selectors: [["groupui-button"]], inputs: { alignment: "alignment", autofocus: "autofocus", brand: "brand", disabled: "disabled", download: "download", fullwidth: "fullwidth", icon: "icon", iconOnly: "iconOnly", iconPosition: "iconPosition", iconSource: "iconSource", inverted: "inverted", rel: "rel", severity: "severity", size: "size", target: "target", type: "type", url: "url", value: "value", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiButton_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiButton = __decorate([
    ProxyCmp({
        inputs: ['alignment', 'autofocus', 'brand', 'disabled', 'download', 'fullwidth', 'icon', 'iconOnly', 'iconPosition', 'iconSource', 'inverted', 'rel', 'severity', 'size', 'target', 'type', 'url', 'value', 'variant']
    })
], GroupuiButton);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiButton, [{
        type: Component,
        args: [{
                selector: 'groupui-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['alignment', 'autofocus', 'brand', 'disabled', 'download', 'fullwidth', 'icon', 'iconOnly', 'iconPosition', 'iconSource', 'inverted', 'rel', 'severity', 'size', 'target', 'type', 'url', 'value', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiButtonGroup = class GroupuiButtonGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiButtonGroup.ɵfac = function GroupuiButtonGroup_Factory(t) { return new (t || GroupuiButtonGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiButtonGroup.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiButtonGroup, selectors: [["groupui-button-group"]], inputs: { brand: "brand", disabled: "disabled", fullwidth: "fullwidth", gap: "gap", iconOnly: "iconOnly", iconPosition: "iconPosition", inverted: "inverted", mode: "mode", name: "name", size: "size", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiButtonGroup_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiButtonGroup = __decorate([
    ProxyCmp({
        inputs: ['brand', 'disabled', 'fullwidth', 'gap', 'iconOnly', 'iconPosition', 'inverted', 'mode', 'name', 'size', 'variant']
    })
], GroupuiButtonGroup);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiButtonGroup, [{
        type: Component,
        args: [{
                selector: 'groupui-button-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'fullwidth', 'gap', 'iconOnly', 'iconPosition', 'inverted', 'mode', 'name', 'size', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiButtonGroupButton = class GroupuiButtonGroupButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiButtonGroupButton.ɵfac = function GroupuiButtonGroupButton_Factory(t) { return new (t || GroupuiButtonGroupButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiButtonGroupButton.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiButtonGroupButton, selectors: [["groupui-button-group-button"]], inputs: { autofocus: "autofocus", brand: "brand", checked: "checked", disabled: "disabled", icon: "icon", iconOnly: "iconOnly", iconSource: "iconSource", inverted: "inverted", name: "name", samewidth: "samewidth", size: "size", spaced: "spaced", value: "value", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiButtonGroupButton_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiButtonGroupButton = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'brand', 'checked', 'disabled', 'icon', 'iconOnly', 'iconSource', 'inverted', 'name', 'samewidth', 'size', 'spaced', 'value', 'variant']
    })
], GroupuiButtonGroupButton);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiButtonGroupButton, [{
        type: Component,
        args: [{
                selector: 'groupui-button-group-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'checked', 'disabled', 'icon', 'iconOnly', 'iconSource', 'inverted', 'name', 'samewidth', 'size', 'spaced', 'value', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiCard = class GroupuiCard {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiCard.ɵfac = function GroupuiCard_Factory(t) { return new (t || GroupuiCard)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiCard.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiCard, selectors: [["groupui-card"]], inputs: { background: "background", border: "border", brand: "brand", elevation: "elevation", height: "height", highlightLeft: "highlightLeft", highlightRight: "highlightRight", interactive: "interactive", padding: "padding", selected: "selected" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiCard_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiCard = __decorate([
    ProxyCmp({
        inputs: ['background', 'border', 'brand', 'elevation', 'height', 'highlightLeft', 'highlightRight', 'interactive', 'padding', 'selected']
    })
], GroupuiCard);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiCard, [{
        type: Component,
        args: [{
                selector: 'groupui-card',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['background', 'border', 'brand', 'elevation', 'height', 'highlightLeft', 'highlightRight', 'interactive', 'padding', 'selected'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiCheckbox = class GroupuiCheckbox {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiDidLoad', 'groupuiInvalid']);
    }
};
GroupuiCheckbox.ɵfac = function GroupuiCheckbox_Factory(t) { return new (t || GroupuiCheckbox)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiCheckbox.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiCheckbox, selectors: [["groupui-checkbox"]], inputs: { autofocus: "autofocus", brand: "brand", checked: "checked", disabled: "disabled", hidelabel: "hidelabel", indeterminate: "indeterminate", name: "name", noValidation: "noValidation", pure: "pure", required: "required", severity: "severity", size: "size", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiCheckbox_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiCheckbox = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'brand', 'checked', 'disabled', 'hidelabel', 'indeterminate', 'name', 'noValidation', 'pure', 'required', 'severity', 'size', 'value'],
        methods: ['validate']
    })
], GroupuiCheckbox);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiCheckbox, [{
        type: Component,
        args: [{
                selector: 'groupui-checkbox',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'checked', 'disabled', 'hidelabel', 'indeterminate', 'name', 'noValidation', 'pure', 'required', 'severity', 'size', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiChip = class GroupuiChip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiEndSlotClicked']);
    }
};
GroupuiChip.ɵfac = function GroupuiChip_Factory(t) { return new (t || GroupuiChip)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiChip.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiChip, selectors: [["groupui-chip"]], inputs: { color: "color", disabled: "disabled", dragged: "dragged", embedded: "embedded", href: "href", rel: "rel", selected: "selected", size: "size", target: "target", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiChip_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiChip = __decorate([
    ProxyCmp({
        inputs: ['color', 'disabled', 'dragged', 'embedded', 'href', 'rel', 'selected', 'size', 'target', 'variant']
    })
], GroupuiChip);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiChip, [{
        type: Component,
        args: [{
                selector: 'groupui-chip',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['color', 'disabled', 'dragged', 'embedded', 'href', 'rel', 'selected', 'size', 'target', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiCodeSnippet = class GroupuiCodeSnippet {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiCodeSnippet.ɵfac = function GroupuiCodeSnippet_Factory(t) { return new (t || GroupuiCodeSnippet)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiCodeSnippet.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiCodeSnippet, selectors: [["groupui-code-snippet"]], inputs: { brand: "brand", language: "language", selectedIndex: "selectedIndex", snippet: "snippet", tabs: "tabs" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiCodeSnippet_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiCodeSnippet = __decorate([
    ProxyCmp({
        inputs: ['brand', 'language', 'selectedIndex', 'snippet', 'tabs']
    })
], GroupuiCodeSnippet);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiCodeSnippet, [{
        type: Component,
        args: [{
                selector: 'groupui-code-snippet',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'language', 'selectedIndex', 'snippet', 'tabs'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiCodeTemplate = class GroupuiCodeTemplate {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiCodeTemplate.ɵfac = function GroupuiCodeTemplate_Factory(t) { return new (t || GroupuiCodeTemplate)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiCodeTemplate.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiCodeTemplate, selectors: [["groupui-code-template"]], inputs: { brand: "brand" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiCodeTemplate_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiCodeTemplate = __decorate([
    ProxyCmp({
        inputs: ['brand']
    })
], GroupuiCodeTemplate);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiCodeTemplate, [{
        type: Component,
        args: [{
                selector: 'groupui-code-template',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiDatePicker = class GroupuiDatePicker {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['change', 'groupuiChange', 'groupuiInvalid', 'open', 'close', 'groupuiDidLoad']);
    }
};
GroupuiDatePicker.ɵfac = function GroupuiDatePicker_Factory(t) { return new (t || GroupuiDatePicker)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiDatePicker.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiDatePicker, selectors: [["groupui-date-picker"]], inputs: { brand: "brand", dateFormat: "dateFormat", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disableWeekends: "disableWeekends", disabled: "disabled", locale: "locale", maxDate: "maxDate", minDate: "minDate", mode: "mode", name: "name", noValidation: "noValidation", placeholder: "placeholder", position: "position", rangeMode: "rangeMode", rangeSeparator: "rangeSeparator", required: "required", severity: "severity", showStatusIcon: "showStatusIcon", value: "value", weekNumbers: "weekNumbers" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiDatePicker_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiDatePicker = __decorate([
    ProxyCmp({
        inputs: ['brand', 'dateFormat', 'descriptionOnlyOnFocus', 'disableWeekends', 'disabled', 'locale', 'maxDate', 'minDate', 'mode', 'name', 'noValidation', 'placeholder', 'position', 'rangeMode', 'rangeSeparator', 'required', 'severity', 'showStatusIcon', 'value', 'weekNumbers'],
        methods: ['validate']
    })
], GroupuiDatePicker);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiDatePicker, [{
        type: Component,
        args: [{
                selector: 'groupui-date-picker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'dateFormat', 'descriptionOnlyOnFocus', 'disableWeekends', 'disabled', 'locale', 'maxDate', 'minDate', 'mode', 'name', 'noValidation', 'placeholder', 'position', 'rangeMode', 'rangeSeparator', 'required', 'severity', 'showStatusIcon', 'value', 'weekNumbers'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiDivider = class GroupuiDivider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiDivider.ɵfac = function GroupuiDivider_Factory(t) { return new (t || GroupuiDivider)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiDivider.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiDivider, selectors: [["groupui-divider"]], inputs: { brand: "brand", dashed: "dashed", intensity: "intensity", inverted: "inverted", vertical: "vertical" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiDivider_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiDivider = __decorate([
    ProxyCmp({
        inputs: ['brand', 'dashed', 'intensity', 'inverted', 'vertical']
    })
], GroupuiDivider);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiDivider, [{
        type: Component,
        args: [{
                selector: 'groupui-divider',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'dashed', 'intensity', 'inverted', 'vertical'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiFlyout = class GroupuiFlyout {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiFlyoutClose']);
    }
};
GroupuiFlyout.ɵfac = function GroupuiFlyout_Factory(t) { return new (t || GroupuiFlyout)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiFlyout.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiFlyout, selectors: [["groupui-flyout"]], inputs: { position: "position", visible: "visible" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiFlyout_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiFlyout = __decorate([
    ProxyCmp({
        inputs: ['position', 'visible']
    })
], GroupuiFlyout);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiFlyout, [{
        type: Component,
        args: [{
                selector: 'groupui-flyout',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['position', 'visible'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiGrid = class GroupuiGrid {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiGrid.ɵfac = function GroupuiGrid_Factory(t) { return new (t || GroupuiGrid)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiGrid.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiGrid, selectors: [["groupui-grid"]], inputs: { brand: "brand", gutter: "gutter", gutterL: "gutterL", gutterM: "gutterM", gutterS: "gutterS", gutterXl: "gutterXl", gutterXs: "gutterXs", gutterXxl: "gutterXxl", margin: "margin", marginL: "marginL", marginM: "marginM", marginS: "marginS", marginType: "marginType", marginXl: "marginXl", marginXxl: "marginXxl", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiGrid_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiGrid = __decorate([
    ProxyCmp({
        inputs: ['brand', 'gutter', 'gutterL', 'gutterM', 'gutterS', 'gutterXl', 'gutterXs', 'gutterXxl', 'margin', 'marginL', 'marginM', 'marginS', 'marginType', 'marginXl', 'marginXxl', 'type']
    })
], GroupuiGrid);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiGrid, [{
        type: Component,
        args: [{
                selector: 'groupui-grid',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'gutter', 'gutterL', 'gutterM', 'gutterS', 'gutterXl', 'gutterXs', 'gutterXxl', 'margin', 'marginL', 'marginM', 'marginS', 'marginType', 'marginXl', 'marginXxl', 'type'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiGridCol = class GroupuiGridCol {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiGridCol.ɵfac = function GroupuiGridCol_Factory(t) { return new (t || GroupuiGridCol)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiGridCol.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiGridCol, selectors: [["groupui-grid-col"]], inputs: { brand: "brand", l: "l", m: "m", offsetL: "offsetL", offsetM: "offsetM", offsetS: "offsetS", offsetXl: "offsetXl", offsetXs: "offsetXs", offsetXxl: "offsetXxl", s: "s", xl: "xl", xs: "xs", xxl: "xxl" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiGridCol_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiGridCol = __decorate([
    ProxyCmp({
        inputs: ['brand', 'l', 'm', 'offsetL', 'offsetM', 'offsetS', 'offsetXl', 'offsetXs', 'offsetXxl', 's', 'xl', 'xs', 'xxl']
    })
], GroupuiGridCol);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiGridCol, [{
        type: Component,
        args: [{
                selector: 'groupui-grid-col',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'l', 'm', 'offsetL', 'offsetM', 'offsetS', 'offsetXl', 'offsetXs', 'offsetXxl', 's', 'xl', 'xs', 'xxl'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiGridRow = class GroupuiGridRow {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiGridRow.ɵfac = function GroupuiGridRow_Factory(t) { return new (t || GroupuiGridRow)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiGridRow.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiGridRow, selectors: [["groupui-grid-row"]], inputs: { brand: "brand", gutter: "gutter", gutterL: "gutterL", gutterM: "gutterM", gutterS: "gutterS", gutterXl: "gutterXl", gutterXs: "gutterXs", gutterXxl: "gutterXxl", margin: "margin", marginL: "marginL", marginM: "marginM", marginS: "marginS", marginType: "marginType", marginXl: "marginXl", marginXs: "marginXs", marginXxl: "marginXxl", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiGridRow_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiGridRow = __decorate([
    ProxyCmp({
        inputs: ['brand', 'gutter', 'gutterL', 'gutterM', 'gutterS', 'gutterXl', 'gutterXs', 'gutterXxl', 'margin', 'marginL', 'marginM', 'marginS', 'marginType', 'marginXl', 'marginXs', 'marginXxl', 'type']
    })
], GroupuiGridRow);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiGridRow, [{
        type: Component,
        args: [{
                selector: 'groupui-grid-row',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'gutter', 'gutterL', 'gutterM', 'gutterS', 'gutterXl', 'gutterXs', 'gutterXxl', 'margin', 'marginL', 'marginM', 'marginS', 'marginType', 'marginXl', 'marginXs', 'marginXxl', 'type'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiHeader = class GroupuiHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiHeader.ɵfac = function GroupuiHeader_Factory(t) { return new (t || GroupuiHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiHeader.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiHeader, selectors: [["groupui-header"]], inputs: { brand: "brand" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiHeader_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiHeader = __decorate([
    ProxyCmp({
        inputs: ['brand']
    })
], GroupuiHeader);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiHeader, [{
        type: Component,
        args: [{
                selector: 'groupui-header',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiHeadline = class GroupuiHeadline {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiHeadline.ɵfac = function GroupuiHeadline_Factory(t) { return new (t || GroupuiHeadline)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiHeadline.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiHeadline, selectors: [["groupui-headline"]], inputs: { brand: "brand", fontVariant: "fontVariant", heading: "heading", marketing: "marketing", serif: "serif", weight: "weight" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiHeadline_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiHeadline = __decorate([
    ProxyCmp({
        inputs: ['brand', 'fontVariant', 'heading', 'marketing', 'serif', 'weight']
    })
], GroupuiHeadline);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiHeadline, [{
        type: Component,
        args: [{
                selector: 'groupui-headline',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'fontVariant', 'heading', 'marketing', 'serif', 'weight'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiIcon = class GroupuiIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiIcon.ɵfac = function GroupuiIcon_Factory(t) { return new (t || GroupuiIcon)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiIcon.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiIcon, selectors: [["groupui-icon"]], inputs: { alt: "alt", brand: "brand", height: "height", name: "name", src: "src", width: "width" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiIcon_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiIcon = __decorate([
    ProxyCmp({
        inputs: ['alt', 'brand', 'height', 'name', 'src', 'width']
    })
], GroupuiIcon);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiIcon, [{
        type: Component,
        args: [{
                selector: 'groupui-icon',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['alt', 'brand', 'height', 'name', 'src', 'width'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiIconStatic = class GroupuiIconStatic {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiIconStatic.ɵfac = function GroupuiIconStatic_Factory(t) { return new (t || GroupuiIconStatic)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiIconStatic.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiIconStatic, selectors: [["groupui-icon-static"]], inputs: { brand: "brand", name: "name" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiIconStatic_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiIconStatic = __decorate([
    ProxyCmp({
        inputs: ['brand', 'name']
    })
], GroupuiIconStatic);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiIconStatic, [{
        type: Component,
        args: [{
                selector: 'groupui-icon-static',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'name'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiInput = class GroupuiInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiInvalid', 'groupuiDidLoad', 'groupuiClearClicked', 'value']);
    }
};
GroupuiInput.ɵfac = function GroupuiInput_Factory(t) { return new (t || GroupuiInput)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiInput.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiInput, selectors: [["groupui-input"]], inputs: { autofocus: "autofocus", brand: "brand", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disabled: "disabled", htmlMaxlengthBehavior: "htmlMaxlengthBehavior", icon: "icon", iconColor: "iconColor", iconPosition: "iconPosition", iconSource: "iconSource", inverted: "inverted", max: "max", maxlength: "maxlength", min: "min", minlength: "minlength", name: "name", noValidation: "noValidation", pattern: "pattern", placeholder: "placeholder", readonly: "readonly", required: "required", severity: "severity", showClearIcon: "showClearIcon", showStatusIcon: "showStatusIcon", size: "size", textTransform: "textTransform", type: "type", typingInfoTemplate: "typingInfoTemplate", validity: "validity", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiInput_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiInput = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'htmlMaxlengthBehavior', 'icon', 'iconColor', 'iconPosition', 'iconSource', 'inverted', 'max', 'maxlength', 'min', 'minlength', 'name', 'noValidation', 'pattern', 'placeholder', 'readonly', 'required', 'severity', 'showClearIcon', 'showStatusIcon', 'size', 'textTransform', 'type', 'typingInfoTemplate', 'validity', 'value'],
        methods: ['validate']
    })
], GroupuiInput);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiInput, [{
        type: Component,
        args: [{
                selector: 'groupui-input',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'htmlMaxlengthBehavior', 'icon', 'iconColor', 'iconPosition', 'iconSource', 'inverted', 'max', 'maxlength', 'min', 'minlength', 'name', 'noValidation', 'pattern', 'placeholder', 'readonly', 'required', 'severity', 'showClearIcon', 'showStatusIcon', 'size', 'textTransform', 'type', 'typingInfoTemplate', 'validity', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiItem = class GroupuiItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiItem.ɵfac = function GroupuiItem_Factory(t) { return new (t || GroupuiItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiItem.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiItem, selectors: [["groupui-item"]], inputs: { border: "border", brand: "brand", disabled: "disabled", indentation: "indentation", selected: "selected", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiItem_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiItem = __decorate([
    ProxyCmp({
        inputs: ['border', 'brand', 'disabled', 'indentation', 'selected', 'size']
    })
], GroupuiItem);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiItem, [{
        type: Component,
        args: [{
                selector: 'groupui-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['border', 'brand', 'disabled', 'indentation', 'selected', 'size'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiLink = class GroupuiLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiLink.ɵfac = function GroupuiLink_Factory(t) { return new (t || GroupuiLink)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiLink.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiLink, selectors: [["groupui-link"]], inputs: { brand: "brand", href: "href", inverted: "inverted", quiet: "quiet", rel: "rel", target: "target", variant: "variant", weight: "weight" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiLink_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiLink = __decorate([
    ProxyCmp({
        inputs: ['brand', 'href', 'inverted', 'quiet', 'rel', 'target', 'variant', 'weight']
    })
], GroupuiLink);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiLink, [{
        type: Component,
        args: [{
                selector: 'groupui-link',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'href', 'inverted', 'quiet', 'rel', 'target', 'variant', 'weight'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiList = class GroupuiList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiList.ɵfac = function GroupuiList_Factory(t) { return new (t || GroupuiList)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiList.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiList, selectors: [["groupui-list"]], inputs: { brand: "brand", hover: "hover" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiList_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiList = __decorate([
    ProxyCmp({
        inputs: ['brand', 'hover']
    })
], GroupuiList);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiList, [{
        type: Component,
        args: [{
                selector: 'groupui-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'hover'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiLoadingSpinner = class GroupuiLoadingSpinner {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiLoadingSpinner.ɵfac = function GroupuiLoadingSpinner_Factory(t) { return new (t || GroupuiLoadingSpinner)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiLoadingSpinner.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiLoadingSpinner, selectors: [["groupui-loading-spinner"]], inputs: { background: "background", brand: "brand", disableBackdrop: "disableBackdrop", displayed: "displayed", duration: "duration", labelPosition: "labelPosition", severity: "severity", size: "size", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiLoadingSpinner_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiLoadingSpinner = __decorate([
    ProxyCmp({
        inputs: ['background', 'brand', 'disableBackdrop', 'displayed', 'duration', 'labelPosition', 'severity', 'size', 'variant']
    })
], GroupuiLoadingSpinner);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiLoadingSpinner, [{
        type: Component,
        args: [{
                selector: 'groupui-loading-spinner',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['background', 'brand', 'disableBackdrop', 'displayed', 'duration', 'labelPosition', 'severity', 'size', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiModal = class GroupuiModal {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiModalClose', 'groupuiDidLoad']);
    }
};
GroupuiModal.ɵfac = function GroupuiModal_Factory(t) { return new (t || GroupuiModal)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiModal.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiModal, selectors: [["groupui-modal"]], inputs: { background: "background", brand: "brand", closeButton: "closeButton", disableBackdropClose: "disableBackdropClose", disableEscapeClose: "disableEscapeClose", displayed: "displayed", iconMargin: "iconMargin", l: "l", m: "m", margin: "margin", maxWidth: "maxWidth", overflow: "overflow", padding: "padding", s: "s", xl: "xl", xs: "xs", xxl: "xxl" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiModal_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiModal = __decorate([
    ProxyCmp({
        inputs: ['background', 'brand', 'closeButton', 'disableBackdropClose', 'disableEscapeClose', 'displayed', 'iconMargin', 'l', 'm', 'margin', 'maxWidth', 'overflow', 'padding', 's', 'xl', 'xs', 'xxl']
    })
], GroupuiModal);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiModal, [{
        type: Component,
        args: [{
                selector: 'groupui-modal',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['background', 'brand', 'closeButton', 'disableBackdropClose', 'disableEscapeClose', 'displayed', 'iconMargin', 'l', 'm', 'margin', 'maxWidth', 'overflow', 'padding', 's', 'xl', 'xs', 'xxl'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiMultiselect = class GroupuiMultiselect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
};
GroupuiMultiselect.ɵfac = function GroupuiMultiselect_Factory(t) { return new (t || GroupuiMultiselect)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiMultiselect.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiMultiselect, selectors: [["groupui-multiselect"]], inputs: { autofocus: "autofocus", brand: "brand", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disabled: "disabled", maxHeight: "maxHeight", name: "name", noValidation: "noValidation", placeholder: "placeholder", required: "required", severity: "severity", showChips: "showChips", showStatusIcon: "showStatusIcon", size: "size", summary: "summary" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiMultiselect_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiMultiselect = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'maxHeight', 'name', 'noValidation', 'placeholder', 'required', 'severity', 'showChips', 'showStatusIcon', 'size', 'summary'],
        methods: ['validate']
    })
], GroupuiMultiselect);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiMultiselect, [{
        type: Component,
        args: [{
                selector: 'groupui-multiselect',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'maxHeight', 'name', 'noValidation', 'placeholder', 'required', 'severity', 'showChips', 'showStatusIcon', 'size', 'summary'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiMultiselectOption = class GroupuiMultiselectOption {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['checkedChanged', 'groupuiDidLoad']);
    }
};
GroupuiMultiselectOption.ɵfac = function GroupuiMultiselectOption_Factory(t) { return new (t || GroupuiMultiselectOption)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiMultiselectOption.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiMultiselectOption, selectors: [["groupui-multiselect-option"]], inputs: { checked: "checked", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiMultiselectOption_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiMultiselectOption = __decorate([
    ProxyCmp({
        inputs: ['checked', 'value']
    })
], GroupuiMultiselectOption);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiMultiselectOption, [{
        type: Component,
        args: [{
                selector: 'groupui-multiselect-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['checked', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiNotification = class GroupuiNotification {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiClose', 'groupuiDidLoad']);
    }
};
GroupuiNotification.ɵfac = function GroupuiNotification_Factory(t) { return new (t || GroupuiNotification)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiNotification.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiNotification, selectors: [["groupui-notification"]], inputs: { autoDismiss: "autoDismiss", brand: "brand", dismissible: "dismissible", elevation: "elevation", severity: "severity", type: "type", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiNotification_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiNotification = __decorate([
    ProxyCmp({
        inputs: ['autoDismiss', 'brand', 'dismissible', 'elevation', 'severity', 'type', 'variant']
    })
], GroupuiNotification);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiNotification, [{
        type: Component,
        args: [{
                selector: 'groupui-notification',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autoDismiss', 'brand', 'dismissible', 'elevation', 'severity', 'type', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiPagination = class GroupuiPagination {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiPageChange', 'groupuiPageSizeChange', 'groupuiDidLoad']);
    }
};
GroupuiPagination.ɵfac = function GroupuiPagination_Factory(t) { return new (t || GroupuiPagination)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiPagination.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiPagination, selectors: [["groupui-pagination"]], inputs: { brand: "brand", direction: "direction", displayedPageCount: "displayedPageCount", elementsPerPageLabel: "elementsPerPageLabel", nextButtonText: "nextButtonText", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", pageSizeOptionsSelectMaxHeight: "pageSizeOptionsSelectMaxHeight", previousButtonText: "previousButtonText", selectedPage: "selectedPage", totalElements: "totalElements", visibleElementsLabel: "visibleElementsLabel" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiPagination_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiPagination = __decorate([
    ProxyCmp({
        inputs: ['brand', 'direction', 'displayedPageCount', 'elementsPerPageLabel', 'nextButtonText', 'pageSize', 'pageSizeOptions', 'pageSizeOptionsSelectMaxHeight', 'previousButtonText', 'selectedPage', 'totalElements', 'visibleElementsLabel']
    })
], GroupuiPagination);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiPagination, [{
        type: Component,
        args: [{
                selector: 'groupui-pagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'direction', 'displayedPageCount', 'elementsPerPageLabel', 'nextButtonText', 'pageSize', 'pageSizeOptions', 'pageSizeOptionsSelectMaxHeight', 'previousButtonText', 'selectedPage', 'totalElements', 'visibleElementsLabel'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiPopover = class GroupuiPopover {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiPopover.ɵfac = function GroupuiPopover_Factory(t) { return new (t || GroupuiPopover)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiPopover.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiPopover, selectors: [["groupui-popover"]], inputs: { brand: "brand", display: "display", fullWidth: "fullWidth", offset: "offset", placement: "placement", visible: "visible" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiPopover_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiPopover = __decorate([
    ProxyCmp({
        inputs: ['brand', 'display', 'fullWidth', 'offset', 'placement', 'visible']
    })
], GroupuiPopover);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiPopover, [{
        type: Component,
        args: [{
                selector: 'groupui-popover',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'display', 'fullWidth', 'offset', 'placement', 'visible'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiProgressCircle = class GroupuiProgressCircle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiProgressCircle.ɵfac = function GroupuiProgressCircle_Factory(t) { return new (t || GroupuiProgressCircle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiProgressCircle.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiProgressCircle, selectors: [["groupui-progress-circle"]], inputs: { background: "background", brand: "brand", displayed: "displayed", progress: "progress", severity: "severity", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiProgressCircle_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiProgressCircle = __decorate([
    ProxyCmp({
        inputs: ['background', 'brand', 'displayed', 'progress', 'severity', 'variant']
    })
], GroupuiProgressCircle);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiProgressCircle, [{
        type: Component,
        args: [{
                selector: 'groupui-progress-circle',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['background', 'brand', 'displayed', 'progress', 'severity', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiRadioButton = class GroupuiRadioButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiRadioButton.ɵfac = function GroupuiRadioButton_Factory(t) { return new (t || GroupuiRadioButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiRadioButton.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiRadioButton, selectors: [["groupui-radio-button"]], inputs: { autofocus: "autofocus", brand: "brand", checked: "checked", disabled: "disabled", pure: "pure", required: "required", severity: "severity", size: "size", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiRadioButton_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiRadioButton = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'brand', 'checked', 'disabled', 'pure', 'required', 'severity', 'size', 'value']
    })
], GroupuiRadioButton);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiRadioButton, [{
        type: Component,
        args: [{
                selector: 'groupui-radio-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'checked', 'disabled', 'pure', 'required', 'severity', 'size', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiRadioGroup = class GroupuiRadioGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
};
GroupuiRadioGroup.ɵfac = function GroupuiRadioGroup_Factory(t) { return new (t || GroupuiRadioGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiRadioGroup.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiRadioGroup, selectors: [["groupui-radio-group"]], inputs: { brand: "brand", disabled: "disabled", name: "name", severity: "severity", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiRadioGroup_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiRadioGroup = __decorate([
    ProxyCmp({
        inputs: ['brand', 'disabled', 'name', 'severity', 'value']
    })
], GroupuiRadioGroup);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiRadioGroup, [{
        type: Component,
        args: [{
                selector: 'groupui-radio-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'name', 'severity', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiRangeSlider = class GroupuiRangeSlider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
};
GroupuiRangeSlider.ɵfac = function GroupuiRangeSlider_Factory(t) { return new (t || GroupuiRangeSlider)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiRangeSlider.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiRangeSlider, selectors: [["groupui-range-slider"]], inputs: { disabled: "disabled", fromValue: "fromValue", max: "max", min: "min", name: "name", showDragTooltip: "showDragTooltip", showTickMarks: "showTickMarks", step: "step", thumbSize: "thumbSize", toValue: "toValue", valueTemplate: "valueTemplate" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiRangeSlider_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiRangeSlider = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'fromValue', 'max', 'min', 'name', 'showDragTooltip', 'showTickMarks', 'step', 'thumbSize', 'toValue', 'valueTemplate']
    })
], GroupuiRangeSlider);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiRangeSlider, [{
        type: Component,
        args: [{
                selector: 'groupui-range-slider',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['disabled', 'fromValue', 'max', 'min', 'name', 'showDragTooltip', 'showTickMarks', 'step', 'thumbSize', 'toValue', 'valueTemplate'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSearchField = class GroupuiSearchField {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiSearchStarted', 'groupuiSuggestionSelected', 'groupuiChange', 'groupuiInput', 'groupuiInvalid', 'groupuiClearClicked', 'groupuiDidLoad', 'groupuiInputFocused']);
    }
};
GroupuiSearchField.ɵfac = function GroupuiSearchField_Factory(t) { return new (t || GroupuiSearchField)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSearchField.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSearchField, selectors: [["groupui-search-field"]], inputs: { autofocus: "autofocus", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", directlyOpen: "directlyOpen", disabled: "disabled", hideClearIcon: "hideClearIcon", hideSearchIcon: "hideSearchIcon", icon: "icon", iconSource: "iconSource", maxHeight: "maxHeight", maxlength: "maxlength", name: "name", noValidation: "noValidation", placeholder: "placeholder", required: "required", searchIconPosition: "searchIconPosition", severity: "severity", showStatusIcon: "showStatusIcon", size: "size", subStringHighlighting: "subStringHighlighting", suggestionsMaxHeight: "suggestionsMaxHeight", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSearchField_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSearchField = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'descriptionOnlyOnFocus', 'directlyOpen', 'disabled', 'hideClearIcon', 'hideSearchIcon', 'icon', 'iconSource', 'maxHeight', 'maxlength', 'name', 'noValidation', 'placeholder', 'required', 'searchIconPosition', 'severity', 'showStatusIcon', 'size', 'subStringHighlighting', 'suggestionsMaxHeight', 'value'],
        methods: ['clear', 'validate']
    })
], GroupuiSearchField);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSearchField, [{
        type: Component,
        args: [{
                selector: 'groupui-search-field',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'descriptionOnlyOnFocus', 'directlyOpen', 'disabled', 'hideClearIcon', 'hideSearchIcon', 'icon', 'iconSource', 'maxHeight', 'maxlength', 'name', 'noValidation', 'placeholder', 'required', 'searchIconPosition', 'severity', 'showStatusIcon', 'size', 'subStringHighlighting', 'suggestionsMaxHeight', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSearchSuggestion = class GroupuiSearchSuggestion {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiSearchSuggestion.ɵfac = function GroupuiSearchSuggestion_Factory(t) { return new (t || GroupuiSearchSuggestion)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSearchSuggestion.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSearchSuggestion, selectors: [["groupui-search-suggestion"]], inputs: { brand: "brand", hideIcon: "hideIcon", icon: "icon", iconSource: "iconSource", input: "input", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSearchSuggestion_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSearchSuggestion = __decorate([
    ProxyCmp({
        inputs: ['brand', 'hideIcon', 'icon', 'iconSource', 'input', 'value']
    })
], GroupuiSearchSuggestion);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSearchSuggestion, [{
        type: Component,
        args: [{
                selector: 'groupui-search-suggestion',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'hideIcon', 'icon', 'iconSource', 'input', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSelect = class GroupuiSelect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiDidLoad', 'groupuiInvalid']);
    }
};
GroupuiSelect.ɵfac = function GroupuiSelect_Factory(t) { return new (t || GroupuiSelect)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSelect.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSelect, selectors: [["groupui-select"]], inputs: { autofocus: "autofocus", brand: "brand", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disabled: "disabled", inverted: "inverted", maxHeight: "maxHeight", name: "name", noValidation: "noValidation", placeholder: "placeholder", required: "required", severity: "severity", showStatusIcon: "showStatusIcon", size: "size", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSelect_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSelect = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'inverted', 'maxHeight', 'name', 'noValidation', 'placeholder', 'required', 'severity', 'showStatusIcon', 'size', 'value'],
        methods: ['validate']
    })
], GroupuiSelect);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSelect, [{
        type: Component,
        args: [{
                selector: 'groupui-select',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'inverted', 'maxHeight', 'name', 'noValidation', 'placeholder', 'required', 'severity', 'showStatusIcon', 'size', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSelectOption = class GroupuiSelectOption {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiSelectOption.ɵfac = function GroupuiSelectOption_Factory(t) { return new (t || GroupuiSelectOption)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSelectOption.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSelectOption, selectors: [["groupui-select-option"]], inputs: { brand: "brand", disabled: "disabled", inverted: "inverted", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSelectOption_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSelectOption = __decorate([
    ProxyCmp({
        inputs: ['brand', 'disabled', 'inverted', 'value']
    })
], GroupuiSelectOption);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSelectOption, [{
        type: Component,
        args: [{
                selector: 'groupui-select-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'inverted', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiShowcase = class GroupuiShowcase {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiShowcase.ɵfac = function GroupuiShowcase_Factory(t) { return new (t || GroupuiShowcase)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiShowcase.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiShowcase, selectors: [["groupui-showcase"]], inputs: { brand: "brand", components: "components", customElementsJsonData: "customElementsJsonData", customElementsJsonPath: "customElementsJsonPath", direction: "direction" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiShowcase_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiShowcase = __decorate([
    ProxyCmp({
        inputs: ['brand', 'components', 'customElementsJsonData', 'customElementsJsonPath', 'direction']
    })
], GroupuiShowcase);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiShowcase, [{
        type: Component,
        args: [{
                selector: 'groupui-showcase',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'components', 'customElementsJsonData', 'customElementsJsonPath', 'direction'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSideNavigation = class GroupuiSideNavigation {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
};
GroupuiSideNavigation.ɵfac = function GroupuiSideNavigation_Factory(t) { return new (t || GroupuiSideNavigation)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSideNavigation.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSideNavigation, selectors: [["groupui-side-navigation"]], inputs: { brand: "brand", divider: "divider", iconOnly: "iconOnly", inverted: "inverted", size: "size", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSideNavigation_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSideNavigation = __decorate([
    ProxyCmp({
        inputs: ['brand', 'divider', 'iconOnly', 'inverted', 'size', 'variant']
    })
], GroupuiSideNavigation);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSideNavigation, [{
        type: Component,
        args: [{
                selector: 'groupui-side-navigation',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'divider', 'iconOnly', 'inverted', 'size', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSideNavigationGroup = class GroupuiSideNavigationGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiSideNavigationGroup.ɵfac = function GroupuiSideNavigationGroup_Factory(t) { return new (t || GroupuiSideNavigationGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSideNavigationGroup.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSideNavigationGroup, selectors: [["groupui-side-navigation-group"]], inputs: { active: "active", brand: "brand", divider: "divider", expanded: "expanded", icon: "icon", indented: "indented", inverted: "inverted", size: "size", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSideNavigationGroup_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSideNavigationGroup = __decorate([
    ProxyCmp({
        inputs: ['active', 'brand', 'divider', 'expanded', 'icon', 'indented', 'inverted', 'size', 'variant']
    })
], GroupuiSideNavigationGroup);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSideNavigationGroup, [{
        type: Component,
        args: [{
                selector: 'groupui-side-navigation-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'brand', 'divider', 'expanded', 'icon', 'indented', 'inverted', 'size', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSideNavigationItem = class GroupuiSideNavigationItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiSideNavigationItem.ɵfac = function GroupuiSideNavigationItem_Factory(t) { return new (t || GroupuiSideNavigationItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSideNavigationItem.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSideNavigationItem, selectors: [["groupui-side-navigation-item"]], inputs: { active: "active", disabled: "disabled", href: "href", icon: "icon", iconOnly: "iconOnly", iconSource: "iconSource", inverted: "inverted", size: "size", target: "target", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSideNavigationItem_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSideNavigationItem = __decorate([
    ProxyCmp({
        inputs: ['active', 'disabled', 'href', 'icon', 'iconOnly', 'iconSource', 'inverted', 'size', 'target', 'variant']
    })
], GroupuiSideNavigationItem);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSideNavigationItem, [{
        type: Component,
        args: [{
                selector: 'groupui-side-navigation-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'disabled', 'href', 'icon', 'iconOnly', 'iconSource', 'inverted', 'size', 'target', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSimplePagination = class GroupuiSimplePagination {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiPageChange', 'groupuiDidLoad']);
    }
};
GroupuiSimplePagination.ɵfac = function GroupuiSimplePagination_Factory(t) { return new (t || GroupuiSimplePagination)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSimplePagination.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSimplePagination, selectors: [["groupui-simple-pagination"]], inputs: { brand: "brand", displayedPageCount: "displayedPageCount", nextButtonText: "nextButtonText", pageCount: "pageCount", previousButtonText: "previousButtonText", selectedPage: "selectedPage" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSimplePagination_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSimplePagination = __decorate([
    ProxyCmp({
        inputs: ['brand', 'displayedPageCount', 'nextButtonText', 'pageCount', 'previousButtonText', 'selectedPage']
    })
], GroupuiSimplePagination);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSimplePagination, [{
        type: Component,
        args: [{
                selector: 'groupui-simple-pagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'displayedPageCount', 'nextButtonText', 'pageCount', 'previousButtonText', 'selectedPage'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSlider = class GroupuiSlider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
};
GroupuiSlider.ɵfac = function GroupuiSlider_Factory(t) { return new (t || GroupuiSlider)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSlider.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSlider, selectors: [["groupui-slider"]], inputs: { disabled: "disabled", max: "max", min: "min", name: "name", showDragTooltip: "showDragTooltip", showTickMarks: "showTickMarks", step: "step", thumbSize: "thumbSize", value: "value", valueTemplate: "valueTemplate" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSlider_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSlider = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'max', 'min', 'name', 'showDragTooltip', 'showTickMarks', 'step', 'thumbSize', 'value', 'valueTemplate']
    })
], GroupuiSlider);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSlider, [{
        type: Component,
        args: [{
                selector: 'groupui-slider',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['disabled', 'max', 'min', 'name', 'showDragTooltip', 'showTickMarks', 'step', 'thumbSize', 'value', 'valueTemplate'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiStep = class GroupuiStep {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiStepActive', 'groupuiStepDone']);
    }
};
GroupuiStep.ɵfac = function GroupuiStep_Factory(t) { return new (t || GroupuiStep)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiStep.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiStep, selectors: [["groupui-step"]], inputs: { active: "active", disabled: "disabled", done: "done", icon: "icon", iconSource: "iconSource", loading: "loading", number: "number", severity: "severity" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiStep_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiStep = __decorate([
    ProxyCmp({
        inputs: ['active', 'disabled', 'done', 'icon', 'iconSource', 'loading', 'number', 'severity']
    })
], GroupuiStep);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiStep, [{
        type: Component,
        args: [{
                selector: 'groupui-step',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'disabled', 'done', 'icon', 'iconSource', 'loading', 'number', 'severity'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiStepVertical = class GroupuiStepVertical {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiStepActive', 'groupuiStepDone']);
    }
};
GroupuiStepVertical.ɵfac = function GroupuiStepVertical_Factory(t) { return new (t || GroupuiStepVertical)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiStepVertical.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiStepVertical, selectors: [["groupui-step-vertical"]], inputs: { active: "active", disabled: "disabled", done: "done", icon: "icon", loading: "loading", number: "number", severity: "severity" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiStepVertical_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiStepVertical = __decorate([
    ProxyCmp({
        inputs: ['active', 'disabled', 'done', 'icon', 'loading', 'number', 'severity']
    })
], GroupuiStepVertical);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiStepVertical, [{
        type: Component,
        args: [{
                selector: 'groupui-step-vertical',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'disabled', 'done', 'icon', 'loading', 'number', 'severity'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiStepperHorizontal = class GroupuiStepperHorizontal {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiStepperHorizontal.ɵfac = function GroupuiStepperHorizontal_Factory(t) { return new (t || GroupuiStepperHorizontal)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiStepperHorizontal.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiStepperHorizontal, selectors: [["groupui-stepper-horizontal"]], inputs: { condensed: "condensed" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiStepperHorizontal_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiStepperHorizontal = __decorate([
    ProxyCmp({
        inputs: ['condensed']
    })
], GroupuiStepperHorizontal);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiStepperHorizontal, [{
        type: Component,
        args: [{
                selector: 'groupui-stepper-horizontal',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['condensed'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiStepperVertical = class GroupuiStepperVertical {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
GroupuiStepperVertical.ɵfac = function GroupuiStepperVertical_Factory(t) { return new (t || GroupuiStepperVertical)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiStepperVertical.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiStepperVertical, selectors: [["groupui-stepper-vertical"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiStepperVertical_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiStepperVertical = __decorate([
    ProxyCmp({})
], GroupuiStepperVertical);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiStepperVertical, [{
        type: Component,
        args: [{
                selector: 'groupui-stepper-vertical',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: [],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiSwitch = class GroupuiSwitch {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
};
GroupuiSwitch.ɵfac = function GroupuiSwitch_Factory(t) { return new (t || GroupuiSwitch)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiSwitch.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiSwitch, selectors: [["groupui-switch"]], inputs: { autofocus: "autofocus", brand: "brand", checked: "checked", disabled: "disabled", name: "name", size: "size", success: "success", value: "value", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiSwitch_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiSwitch = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'brand', 'checked', 'disabled', 'name', 'size', 'success', 'value', 'variant']
    })
], GroupuiSwitch);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiSwitch, [{
        type: Component,
        args: [{
                selector: 'groupui-switch',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autofocus', 'brand', 'checked', 'disabled', 'name', 'size', 'success', 'value', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiTab = class GroupuiTab {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['tabChanged', 'groupuiDidLoad']);
    }
};
GroupuiTab.ɵfac = function GroupuiTab_Factory(t) { return new (t || GroupuiTab)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiTab.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiTab, selectors: [["groupui-tab"]], inputs: { brand: "brand", disabled: "disabled", disabledDescription: "disabledDescription", icon: "icon", iconSource: "iconSource", name: "name", tab: "tab" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTab_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiTab = __decorate([
    ProxyCmp({
        inputs: ['brand', 'disabled', 'disabledDescription', 'icon', 'iconSource', 'name', 'tab'],
        methods: ['setActive']
    })
], GroupuiTab);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiTab, [{
        type: Component,
        args: [{
                selector: 'groupui-tab',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'disabledDescription', 'icon', 'iconSource', 'name', 'tab'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiTable = class GroupuiTable {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiTable.ɵfac = function GroupuiTable_Factory(t) { return new (t || GroupuiTable)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiTable.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiTable, selectors: [["groupui-table"]], inputs: { brand: "brand", columns: "columns", header: "header", indicator: "indicator", scrollX: "scrollX", scrollY: "scrollY", size: "size", sortable: "sortable", sticky: "sticky", striped: "striped", widths: "widths" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTable_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiTable = __decorate([
    ProxyCmp({
        inputs: ['brand', 'columns', 'header', 'indicator', 'scrollX', 'scrollY', 'size', 'sortable', 'sticky', 'striped', 'widths']
    })
], GroupuiTable);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiTable, [{
        type: Component,
        args: [{
                selector: 'groupui-table',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'columns', 'header', 'indicator', 'scrollX', 'scrollY', 'size', 'sortable', 'sticky', 'striped', 'widths'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiTableCell = class GroupuiTableCell {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiSortClick', 'groupuiDidLoad']);
    }
};
GroupuiTableCell.ɵfac = function GroupuiTableCell_Factory(t) { return new (t || GroupuiTableCell)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiTableCell.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiTableCell, selectors: [["groupui-table-cell"]], inputs: { alignment: "alignment", brand: "brand", colspan: "colspan", highlighted: "highlighted", indicator: "indicator", order: "order", sortable: "sortable" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTableCell_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiTableCell = __decorate([
    ProxyCmp({
        inputs: ['alignment', 'brand', 'colspan', 'highlighted', 'indicator', 'order', 'sortable']
    })
], GroupuiTableCell);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiTableCell, [{
        type: Component,
        args: [{
                selector: 'groupui-table-cell',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['alignment', 'brand', 'colspan', 'highlighted', 'indicator', 'order', 'sortable'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiTabs = class GroupuiTabs {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiTabChange', 'groupuiDidLoad']);
    }
};
GroupuiTabs.ɵfac = function GroupuiTabs_Factory(t) { return new (t || GroupuiTabs)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiTabs.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiTabs, selectors: [["groupui-tabs"]], inputs: { activeTabId: "activeTabId", brand: "brand", fullWidth: "fullWidth", noPadding: "noPadding", showControls: "showControls", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTabs_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiTabs = __decorate([
    ProxyCmp({
        inputs: ['activeTabId', 'brand', 'fullWidth', 'noPadding', 'showControls', 'size'],
        methods: ['select', 'getSelected']
    })
], GroupuiTabs);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiTabs, [{
        type: Component,
        args: [{
                selector: 'groupui-tabs',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['activeTabId', 'brand', 'fullWidth', 'noPadding', 'showControls', 'size'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiTag = class GroupuiTag {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiTag.ɵfac = function GroupuiTag_Factory(t) { return new (t || GroupuiTag)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiTag.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiTag, selectors: [["groupui-tag"]], inputs: { brand: "brand", disabled: "disabled", severity: "severity", size: "size", square: "square", variant: "variant" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTag_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiTag = __decorate([
    ProxyCmp({
        inputs: ['brand', 'disabled', 'severity', 'size', 'square', 'variant']
    })
], GroupuiTag);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiTag, [{
        type: Component,
        args: [{
                selector: 'groupui-tag',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'severity', 'size', 'square', 'variant'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiText = class GroupuiText {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiText.ɵfac = function GroupuiText_Factory(t) { return new (t || GroupuiText)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiText.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiText, selectors: [["groupui-text"]], inputs: { brand: "brand", fontVariant: "fontVariant", marketing: "marketing", size: "size", weight: "weight" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiText_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiText = __decorate([
    ProxyCmp({
        inputs: ['brand', 'fontVariant', 'marketing', 'size', 'weight']
    })
], GroupuiText);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiText, [{
        type: Component,
        args: [{
                selector: 'groupui-text',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'fontVariant', 'marketing', 'size', 'weight'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiTextarea = class GroupuiTextarea {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiInput', 'groupuiInvalid', 'groupuiDidLoad']);
    }
};
GroupuiTextarea.ɵfac = function GroupuiTextarea_Factory(t) { return new (t || GroupuiTextarea)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiTextarea.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiTextarea, selectors: [["groupui-textarea"]], inputs: { autoExpand: "autoExpand", autofocus: "autofocus", brand: "brand", descriptionOnlyOnFocus: "descriptionOnlyOnFocus", disabled: "disabled", maxRows: "maxRows", maxlength: "maxlength", name: "name", noValidation: "noValidation", placeholder: "placeholder", readonly: "readonly", required: "required", resize: "resize", rows: "rows", severity: "severity", showStatusIcon: "showStatusIcon", typingInfoTemplate: "typingInfoTemplate", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTextarea_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiTextarea = __decorate([
    ProxyCmp({
        inputs: ['autoExpand', 'autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'maxRows', 'maxlength', 'name', 'noValidation', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'severity', 'showStatusIcon', 'typingInfoTemplate', 'value'],
        methods: ['validate']
    })
], GroupuiTextarea);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiTextarea, [{
        type: Component,
        args: [{
                selector: 'groupui-textarea',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['autoExpand', 'autofocus', 'brand', 'descriptionOnlyOnFocus', 'disabled', 'maxRows', 'maxlength', 'name', 'noValidation', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'severity', 'showStatusIcon', 'typingInfoTemplate', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiTooltip = class GroupuiTooltip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiTooltip.ɵfac = function GroupuiTooltip_Factory(t) { return new (t || GroupuiTooltip)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiTooltip.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiTooltip, selectors: [["groupui-tooltip"]], inputs: { brand: "brand", display: "display", position: "position", sticky: "sticky", variant: "variant", visible: "visible", zIndex: "zIndex" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTooltip_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiTooltip = __decorate([
    ProxyCmp({
        inputs: ['brand', 'display', 'position', 'sticky', 'variant', 'visible', 'zIndex']
    })
], GroupuiTooltip);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiTooltip, [{
        type: Component,
        args: [{
                selector: 'groupui-tooltip',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'display', 'position', 'sticky', 'variant', 'visible', 'zIndex'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiTopNavigation = class GroupuiTopNavigation {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiChange', 'groupuiDidLoad']);
    }
};
GroupuiTopNavigation.ɵfac = function GroupuiTopNavigation_Factory(t) { return new (t || GroupuiTopNavigation)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiTopNavigation.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiTopNavigation, selectors: [["groupui-top-navigation"]], inputs: { alignment: "alignment", brand: "brand", embedded: "embedded", fullWidth: "fullWidth", iconOnly: "iconOnly", inverted: "inverted", noPadding: "noPadding", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTopNavigation_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiTopNavigation = __decorate([
    ProxyCmp({
        inputs: ['alignment', 'brand', 'embedded', 'fullWidth', 'iconOnly', 'inverted', 'noPadding', 'size']
    })
], GroupuiTopNavigation);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiTopNavigation, [{
        type: Component,
        args: [{
                selector: 'groupui-top-navigation',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['alignment', 'brand', 'embedded', 'fullWidth', 'iconOnly', 'inverted', 'noPadding', 'size'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let GroupuiTopNavigationItem = class GroupuiTopNavigationItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['groupuiDidLoad']);
    }
};
GroupuiTopNavigationItem.ɵfac = function GroupuiTopNavigationItem_Factory(t) { return new (t || GroupuiTopNavigationItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
GroupuiTopNavigationItem.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: GroupuiTopNavigationItem, selectors: [["groupui-top-navigation-item"]], inputs: { active: "active", disabled: "disabled", embedded: "embedded", href: "href", icon: "icon", iconOnly: "iconOnly", iconSource: "iconSource", inverted: "inverted", noPadding: "noPadding", target: "target" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function GroupuiTopNavigationItem_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
GroupuiTopNavigationItem = __decorate([
    ProxyCmp({
        inputs: ['active', 'disabled', 'embedded', 'href', 'icon', 'iconOnly', 'iconSource', 'inverted', 'noPadding', 'target']
    })
], GroupuiTopNavigationItem);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupuiTopNavigationItem, [{
        type: Component,
        args: [{
                selector: 'groupui-top-navigation-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['active', 'disabled', 'embedded', 'href', 'icon', 'iconOnly', 'iconSource', 'inverted', 'noPadding', 'target'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();

class ValueAccessor {
    constructor(el) {
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    }
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }
    _handleBlurEvent() {
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
}
ValueAccessor.ɵfac = function ValueAccessor_Factory(t) { return new (t || ValueAccessor)(ɵɵdirectiveInject(ElementRef)); };
ValueAccessor.ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: ValueAccessor, hostBindings: function ValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("focusout", function ValueAccessor_focusout_HostBindingHandler() { return ctx._handleBlurEvent(); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ValueAccessor, [{
        type: Directive,
        args: [{}]
    }], function () { return [{ type: ElementRef }]; }, { _handleBlurEvent: [{
            type: HostListener,
            args: ['focusout']
        }] }); })();

class TextValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
}
TextValueAccessor.ɵfac = function TextValueAccessor_Factory(t) { return new (t || TextValueAccessor)(ɵɵdirectiveInject(ElementRef)); };
TextValueAccessor.ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: TextValueAccessor, selectors: [["groupui-input", "type", "text"], ["groupui-input", "type", "password"], ["groupui-input", "type", "date"], ["groupui-input", "type", "datetime-local"], ["groupui-input", "type", "email"], ["groupui-input", "type", "month"], ["groupui-input", "type", "tel"], ["groupui-input", "type", "time"], ["groupui-input", "type", "url"], ["groupui-textarea"], ["groupui-date-picker"], ["groupui-search-field"], ["groupui-date-picker"], ["groupui-search-field"]], hostBindings: function TextValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function TextValueAccessor_input_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); })("groupuiChange", function TextValueAccessor_groupuiChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
    } }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: TextValueAccessor,
                multi: true
            }
        ]), ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TextValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'groupui-input[type=text], groupui-input[type=password], groupui-input[type=date], groupui-input[type=datetime-local], groupui-input[type=email], groupui-input[type=month], groupui-input[type=tel], groupui-input[type=time], groupui-input[type=url], groupui-textarea, groupui-date-picker, groupui-search-field, groupui-date-picker, groupui-search-field',
                host: {
                    '(input)': 'handleChangeEvent($event.target.value)',
                    '(groupuiChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: TextValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

class SelectValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
}
SelectValueAccessor.ɵfac = function SelectValueAccessor_Factory(t) { return new (t || SelectValueAccessor)(ɵɵdirectiveInject(ElementRef)); };
SelectValueAccessor.ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: SelectValueAccessor, selectors: [["groupui-dropdown"], ["groupui-select"], ["groupui-radio-group"], ["groupui-slider"], ["groupui-button-group", "variant", "radio"]], hostBindings: function SelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("groupuiChange", function SelectValueAccessor_groupuiChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
    } }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectValueAccessor,
                multi: true
            }
        ]), ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SelectValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'groupui-dropdown, groupui-select, groupui-radio-group, groupui-slider, groupui-button-group[variant="radio"]',
                host: {
                    '(groupuiChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: SelectValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

class BooleanValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    }
}
BooleanValueAccessor.ɵfac = function BooleanValueAccessor_Factory(t) { return new (t || BooleanValueAccessor)(ɵɵdirectiveInject(ElementRef)); };
BooleanValueAccessor.ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: BooleanValueAccessor, selectors: [["groupui-checkbox"], ["groupui-switch"], ["groupui-button-group", "variant", "checkbox"], ["groupui-button-group", "variant", "button"]], hostBindings: function BooleanValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("groupuiChange", function BooleanValueAccessor_groupuiChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.checked); });
    } }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: BooleanValueAccessor,
                multi: true
            }
        ]), ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BooleanValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'groupui-checkbox, groupui-switch, groupui-button-group[variant="checkbox"], groupui-button-group[variant="button"]',
                host: {
                    '(groupuiChange)': 'handleChangeEvent($event.target.checked)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: BooleanValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

defineCustomElements(window);
const DECLARATIONS = [
    // proxies
    GroupuiAccordion,
    GroupuiActionArea,
    GroupuiActionAreaPopoverItem,
    GroupuiAvatar,
    GroupuiBadge,
    GroupuiBreadcrumb,
    GroupuiBreadcrumbDropdown,
    GroupuiBreadcrumbs,
    GroupuiButton,
    GroupuiButtonGroup,
    GroupuiButtonGroupButton,
    GroupuiCard,
    GroupuiCheckbox,
    GroupuiChip,
    GroupuiDatePicker,
    GroupuiDivider,
    GroupuiSelect,
    GroupuiGrid,
    GroupuiGridCol,
    GroupuiGridRow,
    GroupuiSelectOption,
    GroupuiHeader,
    GroupuiHeadline,
    GroupuiIcon,
    GroupuiInput,
    GroupuiItem,
    GroupuiLink,
    GroupuiList,
    GroupuiLoadingSpinner,
    GroupuiModal,
    GroupuiNotification,
    GroupuiPagination,
    GroupuiProgressCircle,
    GroupuiRadioButton,
    GroupuiRadioGroup,
    GroupuiSearchField,
    GroupuiSearchSuggestion,
    GroupuiSideNavigation,
    GroupuiSideNavigationGroup,
    GroupuiSideNavigationItem,
    GroupuiSimplePagination,
    GroupuiSwitch,
    GroupuiTable,
    GroupuiTableCell,
    GroupuiTab,
    GroupuiTabs,
    GroupuiTag,
    GroupuiText,
    GroupuiTextarea,
    GroupuiTooltip,
    GroupuiTopNavigation,
    GroupuiTopNavigationItem,
    GroupuiMultiselect,
    GroupuiMultiselectOption,
    GroupuiStepperHorizontal,
    GroupuiStepperVertical,
    GroupuiStep,
    GroupuiSlider,
    GroupuiPopover,
    GroupuiRangeSlider,
    GroupuiActionAreaItem,
    GroupuiFlyout,
    GroupuiIconStatic,
    GroupuiShowcase,
    GroupuiCodeSnippet,
    GroupuiArgsTable,
    // Value Accessors
    TextValueAccessor,
    SelectValueAccessor,
    BooleanValueAccessor,
];
class GroupUiModule {
}
GroupUiModule.ɵfac = function GroupUiModule_Factory(t) { return new (t || GroupUiModule)(); };
GroupUiModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: GroupUiModule });
GroupUiModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ providers: [], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GroupUiModule, [{
        type: NgModule,
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GroupUiModule, { declarations: [
        // proxies
        GroupuiAccordion,
        GroupuiActionArea,
        GroupuiActionAreaPopoverItem,
        GroupuiAvatar,
        GroupuiBadge,
        GroupuiBreadcrumb,
        GroupuiBreadcrumbDropdown,
        GroupuiBreadcrumbs,
        GroupuiButton,
        GroupuiButtonGroup,
        GroupuiButtonGroupButton,
        GroupuiCard,
        GroupuiCheckbox,
        GroupuiChip,
        GroupuiDatePicker,
        GroupuiDivider,
        GroupuiSelect,
        GroupuiGrid,
        GroupuiGridCol,
        GroupuiGridRow,
        GroupuiSelectOption,
        GroupuiHeader,
        GroupuiHeadline,
        GroupuiIcon,
        GroupuiInput,
        GroupuiItem,
        GroupuiLink,
        GroupuiList,
        GroupuiLoadingSpinner,
        GroupuiModal,
        GroupuiNotification,
        GroupuiPagination,
        GroupuiProgressCircle,
        GroupuiRadioButton,
        GroupuiRadioGroup,
        GroupuiSearchField,
        GroupuiSearchSuggestion,
        GroupuiSideNavigation,
        GroupuiSideNavigationGroup,
        GroupuiSideNavigationItem,
        GroupuiSimplePagination,
        GroupuiSwitch,
        GroupuiTable,
        GroupuiTableCell,
        GroupuiTab,
        GroupuiTabs,
        GroupuiTag,
        GroupuiText,
        GroupuiTextarea,
        GroupuiTooltip,
        GroupuiTopNavigation,
        GroupuiTopNavigationItem,
        GroupuiMultiselect,
        GroupuiMultiselectOption,
        GroupuiStepperHorizontal,
        GroupuiStepperVertical,
        GroupuiStep,
        GroupuiSlider,
        GroupuiPopover,
        GroupuiRangeSlider,
        GroupuiActionAreaItem,
        GroupuiFlyout,
        GroupuiIconStatic,
        GroupuiShowcase,
        GroupuiCodeSnippet,
        GroupuiArgsTable,
        // Value Accessors
        TextValueAccessor,
        SelectValueAccessor,
        BooleanValueAccessor], exports: [
        // proxies
        GroupuiAccordion,
        GroupuiActionArea,
        GroupuiActionAreaPopoverItem,
        GroupuiAvatar,
        GroupuiBadge,
        GroupuiBreadcrumb,
        GroupuiBreadcrumbDropdown,
        GroupuiBreadcrumbs,
        GroupuiButton,
        GroupuiButtonGroup,
        GroupuiButtonGroupButton,
        GroupuiCard,
        GroupuiCheckbox,
        GroupuiChip,
        GroupuiDatePicker,
        GroupuiDivider,
        GroupuiSelect,
        GroupuiGrid,
        GroupuiGridCol,
        GroupuiGridRow,
        GroupuiSelectOption,
        GroupuiHeader,
        GroupuiHeadline,
        GroupuiIcon,
        GroupuiInput,
        GroupuiItem,
        GroupuiLink,
        GroupuiList,
        GroupuiLoadingSpinner,
        GroupuiModal,
        GroupuiNotification,
        GroupuiPagination,
        GroupuiProgressCircle,
        GroupuiRadioButton,
        GroupuiRadioGroup,
        GroupuiSearchField,
        GroupuiSearchSuggestion,
        GroupuiSideNavigation,
        GroupuiSideNavigationGroup,
        GroupuiSideNavigationItem,
        GroupuiSimplePagination,
        GroupuiSwitch,
        GroupuiTable,
        GroupuiTableCell,
        GroupuiTab,
        GroupuiTabs,
        GroupuiTag,
        GroupuiText,
        GroupuiTextarea,
        GroupuiTooltip,
        GroupuiTopNavigation,
        GroupuiTopNavigationItem,
        GroupuiMultiselect,
        GroupuiMultiselectOption,
        GroupuiStepperHorizontal,
        GroupuiStepperVertical,
        GroupuiStep,
        GroupuiSlider,
        GroupuiPopover,
        GroupuiRangeSlider,
        GroupuiActionAreaItem,
        GroupuiFlyout,
        GroupuiIconStatic,
        GroupuiShowcase,
        GroupuiCodeSnippet,
        GroupuiArgsTable,
        // Value Accessors
        TextValueAccessor,
        SelectValueAccessor,
        BooleanValueAccessor] }); })();

export { BooleanValueAccessor, GroupUiModule, GroupuiAccordion, GroupuiActionArea, GroupuiActionAreaItem, GroupuiActionAreaPopoverItem, GroupuiArgsTable, GroupuiAvatar, GroupuiBadge, GroupuiBreadcrumb, GroupuiBreadcrumbDropdown, GroupuiBreadcrumbs, GroupuiButton, GroupuiButtonGroup, GroupuiButtonGroupButton, GroupuiCard, GroupuiCheckbox, GroupuiChip, GroupuiCodeSnippet, GroupuiCodeTemplate, GroupuiDatePicker, GroupuiDivider, GroupuiFlyout, GroupuiGrid, GroupuiGridCol, GroupuiGridRow, GroupuiHeader, GroupuiHeadline, GroupuiIcon, GroupuiIconStatic, GroupuiInput, GroupuiItem, GroupuiLink, GroupuiList, GroupuiLoadingSpinner, GroupuiModal, GroupuiMultiselect, GroupuiMultiselectOption, GroupuiNotification, GroupuiPagination, GroupuiPopover, GroupuiProgressCircle, GroupuiRadioButton, GroupuiRadioGroup, GroupuiRangeSlider, GroupuiSearchField, GroupuiSearchSuggestion, GroupuiSelect, GroupuiSelectOption, GroupuiShowcase, GroupuiSideNavigation, GroupuiSideNavigationGroup, GroupuiSideNavigationItem, GroupuiSimplePagination, GroupuiSlider, GroupuiStep, GroupuiStepVertical, GroupuiStepperHorizontal, GroupuiStepperVertical, GroupuiSwitch, GroupuiTab, GroupuiTable, GroupuiTableCell, GroupuiTabs, GroupuiTag, GroupuiText, GroupuiTextarea, GroupuiTooltip, GroupuiTopNavigation, GroupuiTopNavigationItem, SelectValueAccessor, TextValueAccessor };
