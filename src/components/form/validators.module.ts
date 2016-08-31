import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdMaxLengthValidator, MdMaxValueValidator, MdMinValueValidator, MdNumberRequiredValidator, MdPatternValidator} from './validators'

@NgModule({
    imports: [CommonModule],
    exports: [MdMaxLengthValidator, MdMaxValueValidator, MdMinValueValidator, MdNumberRequiredValidator, MdPatternValidator],
    declarations: [MdMaxLengthValidator, MdMaxValueValidator, MdMinValueValidator, MdNumberRequiredValidator, MdPatternValidator]
})
export class MdValidatorsModule { }
