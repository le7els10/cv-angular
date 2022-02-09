import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './block/block.component';
import { SpillComponent } from './spill/spill.component';
import { HabilitiesComponent } from './habilities/habilities.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [BlockComponent, SpillComponent, HabilitiesComponent, ProgressComponent],
  imports: [CommonModule],
  exports: [BlockComponent, HabilitiesComponent],
})
export class HvModule {}
