import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdMessage, MdMessages} from './messages'

@NgModule({
    imports: [CommonModule],
    exports: [MdMessage, MdMessages],
    declarations: [MdMessage, MdMessages]
})
export class MdMessagesModule { }
