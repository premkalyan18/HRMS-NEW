import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { JobsDashboardComponent } from './jobs-dashboard/jobs-dashboard.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { ManageResumesComponent } from './manage-resumes/manage-resumes.component';
import { ShortlistCandidatesComponent } from './shortlist-candidates/shortlist-candidates.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { OfferApprovalsComponent } from './offer-approvals/offer-approvals.component';
import { ExperienceLevelComponent } from './experience-level/experience-level.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { ScheduleTimingComponent } from './schedule-timing/schedule-timing.component';
import { AptitudeResultsComponent } from './aptitude-results/aptitude-results.component';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { UserAllJobsComponent } from './job-user/user-all-jobs/user-all-jobs.component';
import { SavedJobsComponent } from './job-user/saved-jobs/saved-jobs.component';
import { AppliedJobsComponent } from './job-user/applied-jobs/applied-jobs.component';
import { InterviewingJobsComponent } from './job-user/interviewing-jobs/interviewing-jobs.component';
import { OfferedJobsComponent } from './job-user/offered-jobs/offered-jobs.component';
import { VisitedJobsComponent } from './job-user/visited-jobs/visited-jobs.component';
import { ArchivedJobsComponent } from './job-user/archived-jobs/archived-jobs.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobApplicantsComponent } from './job-applicants/job-applicants.component';



@NgModule({
  declarations: [
    JobsComponent,
    UserDashboardComponent,
    JobsDashboardComponent,
    ManageJobsComponent,
    ManageResumesComponent,
    ShortlistCandidatesComponent,
    InterviewQuestionsComponent,
    OfferApprovalsComponent,
    ExperienceLevelComponent,
    CandidatesListComponent,
    ScheduleTimingComponent,
    AptitudeResultsComponent,
    AppliedCandidatesComponent,
    UserAllJobsComponent,
    SavedJobsComponent,
    AppliedJobsComponent,
    InterviewingJobsComponent,
    OfferedJobsComponent,
    VisitedJobsComponent,
    ArchivedJobsComponent,
    JobDetailsComponent,
    JobApplicantsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    NgApexchartsModule,
    SharedModule
  ]
})
export class JobsModule { }
