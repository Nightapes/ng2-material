import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Ng2MaterialModule } from 'ng2-material/module';
import { ButtonBasicUsageComponent } from './button-basic-usage.component';




@NgModule({
  imports: [Ng2MaterialModule],
  exports: [ButtonBasicUsageComponent],
  declarations: [ButtonBasicUsageComponent]

})

export class ButtonBasicUsageModule { }
