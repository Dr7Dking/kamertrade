import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { KamertradeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [KamertradeSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [KamertradeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KamertradeSharedModule {
  static forRoot() {
    return {
      ngModule: KamertradeSharedModule
    };
  }
}
