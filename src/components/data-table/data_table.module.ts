import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdDataTable, MdDataTableHeaderSelectableRow, MdDataTableSelectableRow} from './data_table'

@NgModule({
    imports: [CommonModule],
    exports: [MdDataTable, MdDataTableHeaderSelectableRow, MdDataTableSelectableRow],
    declarations: [MdDataTable, MdDataTableHeaderSelectableRow, MdDataTableSelectableRow]
})
export class MdTableModule { }
