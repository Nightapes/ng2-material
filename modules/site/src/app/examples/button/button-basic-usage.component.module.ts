import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MdMaterialModule } from 'ng2-material';
import { ButtonBasicUsageComponent } from './button-basic-usage.component';




@NgModule({
  imports: [MdMaterialModule],
  exports: [ButtonBasicUsageComponent],
  declarations: [ButtonBasicUsageComponent]

})

export class ButtonBasicUsageModule { }
