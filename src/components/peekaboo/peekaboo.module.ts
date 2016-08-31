
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdPeekaboo} from './peekaboo'

@NgModule({
    imports: [CommonModule],
    exports: [MdPeekaboo],
    declarations: [MdPeekaboo]
})
export class MdPeekabooModule {}
