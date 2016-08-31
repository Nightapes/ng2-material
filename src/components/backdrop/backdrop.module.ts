import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdBackdrop} from './backdrop'

@NgModule({
    imports: [CommonModule],
    exports: [MdBackdrop],
    declarations: [MdBackdrop]
})
export class MdBackdropModule { }
