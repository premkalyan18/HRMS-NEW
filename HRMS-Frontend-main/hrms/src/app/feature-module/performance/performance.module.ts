import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { PerformanceAppraisalComponent } from './performance-appraisal/performance-appraisal.component';
import { PerformanceIndicatorComponent } from './performance-indicator/performance-indicator.component';
import { PerformanceReviewComponent } from './performance-review/performance-review.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PerformanceComponent,
    PerformanceAppraisalComponent,
    PerformanceIndicatorComponent,
    PerformanceReviewComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    SharedModule
  ]
})
export class PerformanceModule { }
