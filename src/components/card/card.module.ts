import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCard} from './card'

@NgModule({
    imports: [CommonModule],
    exports: [MdCard],
    declarations: [MdCard]
})
export class MdCardModule { }
