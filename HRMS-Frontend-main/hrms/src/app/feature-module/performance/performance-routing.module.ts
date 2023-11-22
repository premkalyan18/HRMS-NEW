import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceAppraisalComponent } from './performance-appraisal/performance-appraisal.component';
import { PerformanceIndicatorComponent } from './performance-indicator/performance-indicator.component';
import { PerformanceReviewComponent } from './performance-review/performance-review.component';
import { PerformanceComponent } from './performance.component';

const routes: Routes = [
  { 
    path: '', 
    component: PerformanceComponent,
    children: [
      { path: "appraisal", component: PerformanceAppraisalComponent },
      { path: "indicator", component: PerformanceIndicatorComponent },
      { path: "review", component: PerformanceReviewComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
