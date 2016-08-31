import {MdAnchor, MdButton} from "./components/button/button";
import {MdContent} from "./components/content/content";
import {MdDataTable, MdDataTableHeaderSelectableRow, MdDataTableSelectableRow} from "./components/data-table/index";
import {MdDialog, MdDialogTitle, MdDialogActions, MdDialogPortal} from "./components/dialog/index";
import {MdDivider} from "./components/divider/divider";
import {MdIcon} from "./components/icon/icon";
import {MdInk} from "./components/ink/ink";
import {
  MdPatternValidator,
  MdMaxLengthValidator,
  MdMinValueValidator,
  MdMaxValueValidator,
  MdNumberRequiredValidator,
  INPUT_VALIDATORS
} from "./components/form/validators";
import {MdMessage, MdMessages} from "./components/form/messages";
import {MdList, MdListItem} from "./components/list/list";
import {
  MdPagination,
  MdPaginationControls,
  MdPaginationItemsPerPage,
  MdPaginationRange,
  PaginationService
} from "./components/pagination/index";
import {MdPeekaboo} from "./components/peekaboo/peekaboo";
import {MdSwitch} from "./components/switch/switch";
import {MdSubheader} from "./components/subheader/subheader";
import {Media} from "./core/util/media";
import {ViewportHelper, BrowserViewportHelper, NodeViewportHelper} from "./core/util/viewport";
import {MdBackdrop} from "./components/backdrop/backdrop";

export * from './components/button/button';
export * from './components/backdrop/backdrop';

export * from './components/content/content';

export * from './components/data-table/index';

export * from './components/dialog/index';
export * from './components/divider/divider';

export * from './components/icon/icon';

export * from './components/ink/ink';

export * from './components/form/validators';
export * from './components/form/messages';

export * from './components/list/list';

export * from './components/pagination/index';

export * from './components/peekaboo/peekaboo';

export * from './components/switch/switch';

export * from './components/subheader/subheader';

export * from './core/util/media';
export * from './core/util/ink';

export * from './core/util/viewport';
export * from './core/util/animate';




import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';


/**
 * Collection of Material Design component directives.
 */
const MATERIAL_DIRECTIVES: any[] = [
  MdAnchor, MdButton,
  MdContent,
  MdDataTable, MdDataTableHeaderSelectableRow, MdDataTableSelectableRow,
  MdDivider,
  MdBackdrop,
  MdDialog, MdDialogActions, MdDialogTitle, MdDialogPortal,
  MdIcon,
  MdInk,
  MdPatternValidator, MdMaxLengthValidator,
  MdMinValueValidator, MdMaxValueValidator,
  MdNumberRequiredValidator,
  MdMessage, MdMessages,
  MdList, MdListItem,
  MdPagination, MdPaginationControls, MdPaginationItemsPerPage, MdPaginationRange,
  MdPeekaboo,
  MdSubheader,
  MdSwitch
];


/**
 * Material Design component providers for use in a Node.JS environment.
 */
export const MATERIAL_NODE_PROVIDERS: any[] = [
  {provide: ViewportHelper, useClass: NodeViewportHelper},
  Media,
  PaginationService,
  ...INPUT_VALIDATORS
];


