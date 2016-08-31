import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MdMaterialModule } from 'ng2-material';
import { SiteAppComponent } from './site.component';
import { MdCoreModule } from '@angular2-material/core';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdInputModule } from '@angular2-material/input';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';



@NgModule({
  imports: [MdMaterialModule, MdCoreModule, MdCheckboxModule, MdCheckboxModule, MdProgressBarModule, MdProgressCircleModule,
            MdRadioModule, MdSidenavModule, MdTabsModule, MdToolbarModule, MdInputModule],
  declarations: [SiteAppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [SiteAppComponent]

})

export class SiteModule { }
