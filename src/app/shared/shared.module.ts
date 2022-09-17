import { NgModule } from '@angular/core';
import { CustomIfDirective } from './directives/customIf.directive';
import { ErrorMsgDirective } from './directives/errorMsg.directive';

@NgModule({
  declarations: [ErrorMsgDirective, CustomIfDirective],
  exports: [ErrorMsgDirective, CustomIfDirective],
})
export class SharedModule {}
