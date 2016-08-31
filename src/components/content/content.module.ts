import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdContent} from './content'

@NgModule({
    imports: [CommonModule],
    exports: [MdContent],
    declarations: [MdContent]
})
export class MdContentModule { }
