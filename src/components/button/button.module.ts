import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdAnchor, MdButton} from './button'

@NgModule({
    imports: [CommonModule],
    exports: [MdButton, MdAnchor],
    declarations: [MdButton, MdAnchor]
})
export class MdButtonModule { }
