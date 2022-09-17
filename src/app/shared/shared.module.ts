import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/errorMsg.directive';

@NgModule({
  declarations: [ErrorMsgDirective],
  exports: [ErrorMsgDirective],
})
export class SharedModule {}
