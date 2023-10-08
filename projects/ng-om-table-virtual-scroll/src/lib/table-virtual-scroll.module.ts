import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableItemSizeDirective } from './table-item-size.directive';


@NgModule({
  declarations: [TableItemSizeDirective],
  imports: [CommonModule,],
  exports: [TableItemSizeDirective]
})
export class TableVirtualScrollModule {}
