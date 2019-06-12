import { NgModule } from '@angular/core';

import { KamertradeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [KamertradeSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [KamertradeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class KamertradeSharedCommonModule {}
