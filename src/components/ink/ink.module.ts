import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdInk} from './ink'

@NgModule({
    imports: [CommonModule],
    exports: [MdInk],
    declarations: [MdInk]
})
export class MdInkModule { }
