import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdBackdropModule} from './components/backdrop/backdrop.module'
import {MdButtonModule} from './components/button/button.module'
import {MdCardModule} from './components/card/card.module'
import {MdContentModule} from './components/content/content.module'
import {MdTableModule} from './components/data-table/data_table.module'
import {MdDialogModule} from './components/dialog/dialog.module'
import {MdDividerModule} from './components/divider/divider.module'
import {MdMessagesModule} from './components/form/messages.module'
import {MdValidatorsModule} from './components/form/validators.module'
import {MdIconModule} from './components/icon/icon.module'
import {MdInkModule} from './components/ink/ink.module'
import {MdListModule} from './components/list/list.module'
import {MdPaginationModule} from './components/pagination/pagination.module'
import {MdPeekabooModule} from './components/peekaboo/peekaboo.module'
import {MdSubheaderModule} from './components/subheader/subheader.module'
import {MdSwitchModule} from './components/switch/switch.module'
import {PaginationService} from "./components/pagination/index";

import {Media} from "./core/util/media";
import {ViewportHelper, BrowserViewportHelper, NodeViewportHelper} from "./core/util/viewport";



const NGMATERIAL_MODULES = [
    MdBackdropModule, MdButtonModule, MdButtonModule, MdCardModule, MdContentModule,
    MdTableModule, MdDialogModule, MdDividerModule, MdMessagesModule, MdValidatorsModule, MdIconModule, MdInkModule,
    MdListModule, MdPaginationModule, MdPeekabooModule, MdSubheaderModule, MdSwitchModule
]


@NgModule({
    imports: [
        MdBackdropModule,
        MdButtonModule,
        MdButtonModule,
        MdCardModule,
        MdContentModule,
        MdTableModule,
        MdDialogModule,
        MdDividerModule,
        MdMessagesModule,
        MdValidatorsModule,
        MdIconModule,
        MdInkModule,
        MdListModule,
        MdPeekabooModule,
        MdSubheaderModule,
        MdSwitchModule,

        // These modules include providers.
        MdPaginationModule.forRoot()

    ],
    exports: NGMATERIAL_MODULES,
    providers: [Media, {provide: ViewportHelper, useClass: NodeViewportHelper}
]
})
export class Ng2MaterialRootModule { }


@NgModule({
    imports: NGMATERIAL_MODULES,
    exports: NGMATERIAL_MODULES,
})
export class Ng2MaterialModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: Ng2MaterialRootModule };
    }
}