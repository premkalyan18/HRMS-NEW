import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { AptitudeResultsComponent } from './aptitude-results/aptitude-results.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { ExperienceLevelComponent } from './experience-level/experience-level.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { JobsDashboardComponent } from './jobs-dashboard/jobs-dashboard.component';
import { JobsComponent } from './jobs.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { ManageResumesComponent } from './manage-resumes/manage-resumes.component';
import { OfferApprovalsComponent } from './offer-approvals/offer-approvals.component';
import { ScheduleTimingComponent } from './schedule-timing/schedule-timing.component';
import { ShortlistCandidatesComponent } from './shortlist-candidates/shortlist-candidates.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAllJobsComponent } from './job-user/user-all-jobs/user-all-jobs.component';
import { SavedJobsComponent } from './job-user/saved-jobs/saved-jobs.component';
import { AppliedJobsComponent } from './job-user/applied-jobs/applied-jobs.component';
import { InterviewingJobsComponent } from './job-user/interviewing-jobs/interviewing-jobs.component';
import { VisitedJobsComponent } from './job-user/visited-jobs/visited-jobs.component';
import { OfferedJobsComponent } from './job-user/offered-jobs/offered-jobs.component';
import { ArchivedJobsComponent } from './job-user/archived-jobs/archived-jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobApplicantsComponent } from './job-applicants/job-applicants.component';

const routes: Routes = [
  { 
    path: '', 
    component: JobsComponent,
    children: [
      { path: "user-dashboard", component: UserDashboardComponent },
      { path: "jobs-dashboard", component: JobsDashboardComponent },
      { path: "manage-jobs", component: ManageJobsComponent },
      { path: "manage-resumes", component: ManageResumesComponent },
      { path: "shortlist", component: ShortlistCandidatesComponent },
      { path: "interview-questions", component: InterviewQuestionsComponent },
      { path: "offer-approval", component: OfferApprovalsComponent },
      { path: "experience-level", component: ExperienceLevelComponent },
      { path: "candidates-list", component: CandidatesListComponent },
      { path: "schedule-timing", component: ScheduleTimingComponent },
      { path: "aptitude-result", component: AptitudeResultsComponent },
      { path: "applied-candidates", component: AppliedCandidatesComponent },
      { path: "user-all-jobs", component: UserAllJobsComponent },
      { path: "saved-jobs", component: SavedJobsComponent },
      { path: "applied-jobs", component: AppliedJobsComponent },
      { path: "interview-jobs", component: InterviewingJobsComponent },
      { path: "offered-jobs", component: OfferedJobsComponent },
      { path: "visited-jobs", component: VisitedJobsComponent },
      { path: "archived-jobs", component: ArchivedJobsComponent },
      { path: "jobs-details", component: JobDetailsComponent },
      { path: "jobs-applicants", component: JobApplicantsComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
