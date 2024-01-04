"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUiModule = void 0;
var tslib_1 = require("tslib");
// DIRECTIVES
(0, tslib_1.__exportStar)(require("./directives/proxies"), exports);
(0, tslib_1.__exportStar)(require("./directives/text-value-accessor"), exports);
(0, tslib_1.__exportStar)(require("./directives/select-value-accessor"), exports);
(0, tslib_1.__exportStar)(require("./directives/boolean-value-accessor"), exports);
// PACKAGE MODULE
var group_ui_module_1 = require("./group-ui.module");
Object.defineProperty(exports, "GroupUiModule", { enumerable: true, get: function () { return group_ui_module_1.GroupUiModule; } });
