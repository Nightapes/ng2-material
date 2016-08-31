import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdDialog} from './dialog'
import {MdDialogActions} from './dialog-actions'
import {MdDialogPortal} from './dialog-portal'
import {MdDialogTitle} from './dialog-title'

@NgModule({
    imports: [CommonModule],
    exports: [MdDialog, MdDialogActions, MdDialogPortal, MdDialogTitle],
    declarations: [MdDialog, MdDialogActions, MdDialogPortal, MdDialogTitle]
})
export class MdDialogModule { }
