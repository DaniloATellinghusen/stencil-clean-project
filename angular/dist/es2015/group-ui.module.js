import { NgModule } from '@angular/core';
import { defineCustomElements } from '@group-ui/group-ui/dist/loader';
import { TextValueAccessor } from './directives/text-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { GroupuiAccordion, GroupuiActionArea, GroupuiActionAreaPopoverItem, GroupuiAvatar, GroupuiBadge, GroupuiBreadcrumb, GroupuiBreadcrumbDropdown, GroupuiBreadcrumbs, GroupuiButton, GroupuiButtonGroup, GroupuiButtonGroupButton, GroupuiCard, GroupuiCheckbox, GroupuiChip, GroupuiDatePicker, GroupuiDivider, GroupuiSelect, GroupuiSelectOption, GroupuiGrid, GroupuiGridCol, GroupuiGridRow, GroupuiHeader, GroupuiHeadline, GroupuiIcon, GroupuiInput, GroupuiItem, GroupuiLink, GroupuiList, GroupuiLoadingSpinner, GroupuiModal, GroupuiMultiselect, GroupuiMultiselectOption, GroupuiNotification, GroupuiPagination, GroupuiProgressCircle, GroupuiRadioButton, GroupuiRadioGroup, GroupuiSearchField, GroupuiSearchSuggestion, GroupuiSideNavigation, GroupuiSideNavigationGroup, GroupuiSideNavigationItem, GroupuiSimplePagination, GroupuiSwitch, GroupuiTab, GroupuiTable, GroupuiTableCell, GroupuiTabs, GroupuiTag, GroupuiText, GroupuiTextarea, GroupuiTooltip, GroupuiTopNavigation, GroupuiTopNavigationItem, GroupuiStepperHorizontal, GroupuiStepperVertical, GroupuiStep, GroupuiActionAreaItem, GroupuiFlyout, GroupuiSlider, GroupuiPopover, GroupuiRangeSlider, GroupuiIconStatic, GroupuiShowcase, GroupuiCodeSnippet, GroupuiArgsTable, } from './directives/proxies';
import * as i0 from "@angular/core";
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
export class GroupUiModule {
}
GroupUiModule.ɵfac = function GroupUiModule_Factory(t) { return new (t || GroupUiModule)(); };
GroupUiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GroupUiModule });
GroupUiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupUiModule, [{
        type: NgModule,
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GroupUiModule, { declarations: [
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