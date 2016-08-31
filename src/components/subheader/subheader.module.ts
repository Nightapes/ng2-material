import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdSubheader} from './subheader'

@NgModule({
    imports: [CommonModule],
    exports: [MdSubheader],
    declarations: [MdSubheader]
})
export class MdSubheaderModule {}
