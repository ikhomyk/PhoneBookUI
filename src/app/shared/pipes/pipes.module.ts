import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from './initials.pipe';
import { TimeAgoPipe } from './time-ago.pipe';
import { TableFilterPipe } from './table-filter.pipe';

@NgModule({
  declarations: [
    InitialsPipe,
    TimeAgoPipe,
    TableFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InitialsPipe,
    TimeAgoPipe
  ]
})

export class PipesModule {
}
