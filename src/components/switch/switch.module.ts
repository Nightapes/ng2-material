import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdSwitch} from './switch'

@NgModule({
    imports: [CommonModule],
    exports: [MdSwitch],
    declarations: [MdSwitch]
})
export class MdSwitchModule {}
