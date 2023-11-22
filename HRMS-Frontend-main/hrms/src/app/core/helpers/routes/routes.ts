import { BehaviorSubject } from 'rxjs';

export class routes {
  public static layoutDirection: BehaviorSubject<string> =
    new BehaviorSubject<string>(localStorage.getItem('rtl') || '');
  private static Url = '';
  static rtl = this.layoutDirection.subscribe((res: any) => {
    this.Url = res;
  });

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  public static get forgot_password(): string {
    return this.baseUrl + '/forgot-password';
  }
  public static get register(): string {
    return this.baseUrl + '/register';
  }
  public static get lock_screen(): string {
    return this.baseUrl + '/lock-screen';
  }
  public static get dashboard(): string {
    return this.baseUrl + '/dashboard';
  }
  public static get admin(): string {
    return this.baseUrl + '/dashboard/admin';
  }
  public static get employee(): string {
    return this.baseUrl + '/dashboard/employee';
  }
  public static get apps(): string {
    return this.baseUrl + '/apps';
  }
  public static get chat(): string {
    return this.baseUrl + '/apps/chats';
  }
  public static get voicecall(): string {
    return this.baseUrl + '/apps/voice-call';
  }
  public static get videocall(): string {
    return this.baseUrl + '/apps/video-call';
  }
  public static get outgoingcall(): string {
    return this.baseUrl + '/apps/outgoing-call';
  }
  public static get incomingcall(): string {
    return this.baseUrl + '/apps/incoming-call';
  }
  public static get contacts(): string {
    return this.baseUrl + '/apps/contacts';
  }
  public static get calendar(): string {
    return this.baseUrl + '/apps/calendar';
  }
  public static get email(): string {
    return this.baseUrl + '/apps/email';
  }
  public static get filemanager(): string {
    return this.baseUrl + '/apps/file-manager';
  }
  public static get employees(): string {
    return this.baseUrl + '/employees';
  }
  public static get employee_page(): string {
    return this.baseUrl + '/employees/employee-page';
  }
  public static get holidays(): string {
    return this.baseUrl + '/employees/holidays';
  }
  public static get leaveadmin(): string {
    return this.baseUrl + '/employees/leave-admin';
  }
  public static get leaveemployee(): string {
    return this.baseUrl + '/employees/leave-employee';
  }
  public static get leavesettings(): string {
    return this.baseUrl + '/employees/leave-settings';
  }
  public static get attendanceadmin(): string {
    return this.baseUrl + '/employees/attendance-admin';
  }
  public static get attendanceemployee(): string {
    return this.baseUrl + '/employees/attendance-employee';
  }
  public static get departments(): string {
    return this.baseUrl + '/employees/departments';
  }
  public static get designations(): string {
    return this.baseUrl + '/employees/designations';
  }
  public static get timesheet(): string {
    return this.baseUrl + '/employees/timesheet';
  }
  public static get shiftschedule(): string {
    return this.baseUrl + '/employees/shift-schedule';
  }
  public static get overtime(): string {
    return this.baseUrl + '/employees/overtime';
  }
  public static get clientpage(): string {
    return this.baseUrl + '/clients/client-page';
  }
  public static get projects(): string {
    return this.baseUrl + '/projects';
  }
  public static get projectpage(): string {
    return this.baseUrl + '/projects/project-page';
  }
  public static get tasks(): string {
    return this.baseUrl + '/projects/tasks';
  }
  public static get taskboard(): string {
    return this.baseUrl + '/projects/task-board';
  }
  public static get leads(): string {
    return this.baseUrl + '/leads/main';
  }
  public static get ticketpage(): string {
    return this.baseUrl + '/tickets/ticket-page';
  }
  public static get sales(): string {
    return this.baseUrl + '/sales';
  }
  public static get estimatepage(): string {
    return this.baseUrl + '/sales/estimate-page';
  }
  public static get invoicepage(): string {
    return this.baseUrl + '/sales/invoice-page';
  }
  public static get payments(): string {
    return this.baseUrl + '/sales/payments';
  }
  public static get expenses(): string {
    return this.baseUrl + '/sales/expenses';
  }
  public static get providentfund(): string {
    return this.baseUrl + '/sales/provident-fund';
  }
  public static get taxes(): string {
    return this.baseUrl + '/sales/taxes';
  }
  public static get accounting(): string {
    return this.baseUrl + '/accounting';
  }
  public static get category(): string {
    return this.baseUrl + '/accounting/category';
  }
  public static get budgets(): string {
    return this.baseUrl + '/accounting/budgets';
  }
  public static get budgetexpenses(): string {
    return this.baseUrl + '/accounting/budget-expenses';
  }
  public static get budgetrevenues(): string {
    return this.baseUrl + '/accounting/budget-revenues';
  }
  public static get payroll(): string {
    return this.baseUrl + '/payroll';
  }
  public static get employeesalary(): string {
    return this.baseUrl + '/payroll/employee-salary';
  }
  public static get payrollitems(): string {
    return this.baseUrl + '/payroll/payroll-items';
  }
  public static get salaryview(): string {
    return this.baseUrl + '/payroll/salary-view';
  }
  public static get policies(): string {
    return this.baseUrl + '/policies/main';
  }
  public static get reports(): string {
    return this.baseUrl + '/reports';
  }
  public static get expensereport(): string {
    return this.baseUrl + '/reports/expense-report';
  }
  public static get invoicereport(): string {
    return this.baseUrl + '/reports/invoice-report';
  }
  public static get paymentsreport(): string {
    return this.baseUrl + '/reports/payments-report';
  }
  public static get projectreport(): string {
    return this.baseUrl + '/reports/project-report';
  }
  public static get taskreport(): string {
    return this.baseUrl + '/reports/task-report';
  }
  public static get userreport(): string {
    return this.baseUrl + '/reports/user-report';
  }
  public static get employeereport(): string {
    return this.baseUrl + '/reports/employee-report';
  }
  public static get payslipreport(): string {
    return this.baseUrl + '/reports/payslip-report';
  }
  public static get attendancereport(): string {
    return this.baseUrl + '/reports/attendance-report';
  }
  public static get leavereport(): string {
    return this.baseUrl + '/reports/leave-report';
  }
  public static get dailyreport(): string {
    return this.baseUrl + '/reports/daily-report';
  }
  public static get performance(): string {
    return this.baseUrl + '/performance';
  }
  public static get appraisal(): string {
    return this.baseUrl + '/performance/appraisal';
  }
  public static get indicator(): string {
    return this.baseUrl + '/performance/indicator';
  }
  public static get review(): string {
    return this.baseUrl + '/performance/review';
  }
  public static get crosshairs(): string {
    return this.baseUrl + '/goals';
  }
  public static get list(): string {
    return this.baseUrl + '/goals/list';
  }
  public static get type(): string {
    return this.baseUrl + '/goals/type';
  }
  public static get training(): string {
    return this.baseUrl + '/training';
  }
  public static get lists(): string {
    return this.baseUrl + '/training/lists';
  }
  public static get types(): string {
    return this.baseUrl + '/training/types';
  }
  public static get trainer(): string {
    return this.baseUrl + '/training/trainer';
  }
  public static get promotion(): string {
    return this.baseUrl + '/promotion/views';
  }
  public static get resignation(): string {
    return this.baseUrl + '/resignation/res-main';
  }
  public static get termination(): string {
    return this.baseUrl + '/termination/term-main';
  }
  public static get assets(): string {
    return this.baseUrl + '/assets/mains';
  }
  public static get jobs(): string {
    return this.baseUrl + '/jobs';
  }
  public static get userdashboard(): string {
    return this.baseUrl + '/jobs/user-dashboard';
  }
  public static get jobsdashboard(): string {
    return this.baseUrl + '/jobs/jobs-dashboard';
  }
  public static get managejobs(): string {
    return this.baseUrl + '/jobs/manage-jobs';
  }
  public static get manageresumes(): string {
    return this.baseUrl + '/jobs/manage-resumes';
  }
  public static get shortlist(): string {
    return this.baseUrl + '/jobs/shortlist';
  }
  public static get interviewquestions(): string {
    return this.baseUrl + '/jobs/interview-questions';
  }
  public static get offerapproval(): string {
    return this.baseUrl + '/jobs/offer-approval';
  }
  public static get experiencelevel(): string {
    return this.baseUrl + '/jobs/experience-level';
  }
  public static get candidateslist(): string {
    return this.baseUrl + '/jobs/candidates-list';
  }
  public static get scheduletiming(): string {
    return this.baseUrl + '/jobs/schedule-timing';
  }
  public static get aptituderesult(): string {
    return this.baseUrl + '/jobs/aptitude-result';
  }
  public static get appliedcandidates(): string {
    return this.baseUrl + '/jobs/applied-candidates';
  }
  public static get knowledgebasemain(): string {
    return this.baseUrl + '/knowledgebase/main';
  }
  public static get activities(): string {
    return this.baseUrl + '/activities/activites-view';
  }
  public static get users(): string {
    return this.baseUrl + '/users/user-view';
  }
  public static get companysettings(): string {
    return this.baseUrl + '/settings/company-settings';
  }
  public static get profile(): string {
    return this.baseUrl + '/profile';
  }
  public static get employeeprofile(): string {
    return this.baseUrl + '/employees/employee-profile';
  }
  public static get clientprofile(): string {
    return this.baseUrl + '/clients/client-profile';
  }
  public static get loginpro(): string {
    return this.baseUrl + '/login';
  }
  public static get registers(): string {
    return this.baseUrl + '/register';
  }
  public static get forgotpassword(): string {
    return this.baseUrl + '/forgot-password';
  }
  public static get otp(): string {
    return this.baseUrl + '/otp';
  }
  public static get lockscreen(): string {
    return this.baseUrl + '/lock-screen';
  }
  public static get error(): string {
    return this.baseUrl + '/404';
  }
  public static get errors(): string {
    return this.baseUrl + '/500';
  }
  public static get subscriptions(): string {
    return this.baseUrl + '/subscriptions';
  }
  public static get subadmin(): string {
    return this.baseUrl + '/subscriptions/admins';
  }
  public static get company(): string {
    return this.baseUrl + '/subscriptions/company';
  }
  public static get subscribedcompanies(): string {
    return this.baseUrl + '/subscriptions/subscribed-companies';
  }
  public static get pages(): string {
    return this.baseUrl + '/pages';
  }
  public static get search(): string {
    return this.baseUrl + '/pages/search';
  }
  public static get faq(): string {
    return this.baseUrl + '/pages/faq';
  }
  public static get terms(): string {
    return this.baseUrl + '/pages/terms';
  }
  public static get privacy(): string {
    return this.baseUrl + '/pages/privacy-policy';
  }
  public static get blankpage(): string {
    return this.baseUrl + '/pages/blank-page';
  }
  public static get components(): string {
    return this.baseUrl + '/components';
  }
  public static get forms(): string {
    return this.baseUrl + '/forms';
  }
  public static get basicinput(): string {
    return this.baseUrl + '/forms/basic-input';
  }
  public static get inputgroups(): string {
    return this.baseUrl + '/forms/input-groups';
  }
  public static get horizontalform(): string {
    return this.baseUrl + '/forms/horizontal-form';
  }
  public static get verticalform(): string {
    return this.baseUrl + '/forms/vertical-form';
  }
  public static get formmask(): string {
    return this.baseUrl + '/forms/form-mask';
  }
  public static get formvalidation(): string {
    return this.baseUrl + '/forms/form-validation';
  }
  public static get tables(): string {
    return this.baseUrl + '/tables';
  }
  public static get basictables(): string {
    return this.baseUrl + '/tables/basic-tables';
  }
  public static get datatables(): string {
    return this.baseUrl + '/tables/data-tables';
  }
}
