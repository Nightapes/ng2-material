
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdList, MdListItem} from './list'

@NgModule({
    imports: [CommonModule],
    exports: [MdList, MdListItem],
    declarations: [MdList, MdListItem]
})
export class MdListModule { }
