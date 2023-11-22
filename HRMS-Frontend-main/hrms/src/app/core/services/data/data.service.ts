import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, map } from 'rxjs';
import { routes } from '../../core.index';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {

  allAppliedCandidates: any;
  get(arg0: string): any {
    throw new Error('Method not implemented.');
  }
  messages: any = '';
  message: BehaviorSubject<String>;
  isAdmin:any;
  private _listners = new Subject<any>();

  constructor(private http: HttpClient) {
    this.message = new BehaviorSubject(this.messages);
  }
  ngOnInit(){
  }
  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  nextmessage(data: any) {
    this.message.next(data);
  }

  filter(filterBy: any) {
    this._listners.next(filterBy);
  }

  public getEmployees(): Observable<any> {
    return this.http.get('assets/JSON/employee.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getholidays(): Observable<any> {
    return this.http.get('assets/JSON/holidays.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getLeave(): Observable<any> {
    return this.http.get('assets/JSON/leave-admin.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getDepartment(): Observable<any> {
    return this.http.get('assets/JSON/department.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getDesignations(): Observable<any> {
    return this.http.get('assets/JSON/designation.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getTimeSheet(): Observable<any> {
    return this.http.get('assets/JSON/timesheet.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getShiftSchedule(): Observable<any> {
    return this.http.get('assets/JSON/shift.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getShiftList(): Observable<any> {
    return this.http.get('assets/JSON/shiftlist.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getOverTime(): Observable<any> {
    return this.http.get('assets/JSON/overtime.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getClient(): Observable<any> {
    return this.http.get('assets/JSON/clients.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getProjects(): Observable<any> {
    return this.http.get('assets/JSON/projects.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getLeads(): Observable<any> {
    return this.http.get('assets/JSON/leads.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getTickets(): Observable<any> {
    return this.http.get('assets/JSON/tickets.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getEstimate(): Observable<any> {
    return this.http.get('assets/JSON/estimates.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getInvoice(): Observable<any> {
    return this.http.get('assets/JSON/estimates.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPayment(): Observable<any> {
    return this.http.get('assets/JSON/payments.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getExpenses(): Observable<any> {
    return this.http.get('assets/JSON/expenses.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getProvidentFund(): Observable<any> {
    return this.http.get('assets/JSON/provident-fund.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getTaxes(): Observable<any> {
    return this.http.get('assets/JSON/taxes.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getCategories(): Observable<any> {
    return this.http.get('assets/JSON/categories.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getBudgets(): Observable<any> {
    return this.http.get('assets/JSON/budgets.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getEmployeeSalary(): Observable<any> {
    return this.http.get('assets/JSON/employee-salary.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAddPayroll(): Observable<any> {
    return this.http.get('assets/JSON/payroll-item.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPolicies(): Observable<any> {
    return this.http.get('assets/JSON/policies.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getExpenseReport(): Observable<any> {
    return this.http.get('assets/JSON/expense-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getInvoiceReport(): Observable<any> {
    return this.http.get('assets/JSON/invoice-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPaymentReport(): Observable<any> {
    return this.http.get('assets/JSON/payment-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getProjectReport(): Observable<any> {
    return this.http.get('assets/JSON/project-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  
  public getTaskReport(): Observable<any> {
    return this.http.get('assets/JSON/task-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getUserReport(): Observable<any> {
    return this.http.get('assets/JSON/user-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getEmployeeReport(): Observable<any> {
    return this.http.get('assets/JSON/employee-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPayslipReport(): Observable<any> {
    return this.http.get('assets/JSON/payslip-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAttendancepReport(): Observable<any> {
    return this.http.get('assets/JSON/attendance-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getLeaveReport(): Observable<any> {
    return this.http.get('assets/JSON/leave-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getDailyReport(): Observable<any> {
    return this.http.get('assets/JSON/daily-report.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPerformanceReport(): Observable<any> {
    return this.http.get('assets/JSON/performance-indicator.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPerformanceappraisal(): Observable<any> {
    return this.http.get('assets/JSON/performance-appraisal.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getGoalList(): Observable<any> {
    return this.http.get('assets/JSON/goal-list.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getGoalType(): Observable<any> {
    return this.http.get('assets/JSON/goal-type.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getTrainList(): Observable<any> {
    return this.http.get('assets/JSON/training-list.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getTrainType(): Observable<any> {
    return this.http.get('assets/JSON/training-type.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getTrainer(): Observable<any> {
    return this.http.get('assets/JSON/trainers.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPromotion(): Observable<any> {
    return this.http.get('assets/JSON/promotion.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getResignation(): Observable<any> {
    return this.http.get('assets/JSON/resignation.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getTermination(): Observable<any> {
    return this.http.get('assets/JSON/termination.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAssets(): Observable<any> {
    return this.http.get('assets/JSON/assets-page.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAllJobs(): Observable<any> {
    return this.http.get('assets/JSON/user-dashboard-all.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSavedJobs(): Observable<any> {
    return this.http.get('assets/JSON/user-dashboard-saved.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAppliedJobs(): Observable<any> {
    return this.http.get('assets/JSON/user-dashboard-applied.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getOfferedJobs(): Observable<any> {
    return this.http.get('assets/JSON/user-dashboard-offered.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getVisited(): Observable<any> {
    return this.http.get('assets/JSON/user-dashboard-visited.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getArchived(): Observable<any> {
    return this.http.get('assets/JSON/user-dashboard-archived.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getManageJobs(): Observable<any> {
    return this.http.get('assets/JSON/manage-jobs.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getManageResume(): Observable<any> {
    return this.http.get('assets/JSON/manage-resumes.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getShortList(): Observable<any> {
    return this.http.get('assets/JSON/shortlist-candidate.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getInterview(): Observable<any> {
    return this.http.get('assets/JSON/interview-questions.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getOffer(): Observable<any> {
    return this.http.get('assets/JSON/offer-approval.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getExpire(): Observable<any> {
    return this.http.get('assets/JSON/experience-level.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSchedule(): Observable<any> {
    return this.http.get('assets/JSON/schedule-timing.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getCandidate(): Observable<any> {
    return this.http.get('assets/JSON/candidates-list.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAptitudeResult(): Observable<any> {
    return this.http.get('assets/JSON/aptitude-result.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAptitudeResults(): Observable<any> {
    return this.http.get('assets/JSON/aptitude-result.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAptitudeCandidate(): Observable<any> {
    return this.http.get('assets/JSON/applied-candidate.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getUsers(): Observable<any> {
    return this.http.get('assets/JSON/users.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSubscribed(): Observable<any> {
    return this.http.get('assets/JSON/subscribed-company.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getDataTable(): Observable<any> {
    return this.http.get('assets/JSON/form-tables.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  
  public sideBar: any = [
    {
      tittle: 'Main',
      icon: 'airplay',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'dashboard',
          base: 'dashboard',
          materialicons: 'home',
          subMenus: [
            {
              menuValue: 'Admin Dashboard',
              route: routes.admin,
              base: 'admin',
            },
            // {
            //   menuValue: 'Employee Dashboard',
            //   route: routes.employee,
            //   base: 'employee',
            // },
          ],
        },
        {
          menuValue: 'Apps',
          route: routes.apps,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'cube',
          base: 'apps',
          materialicons: 'dashboard',
          subMenus: [
            { menuValue: 'Chats', route: routes.chat, base: 'chats' },
            {
              menuValue: 'Voice Call',
              route: routes.voicecall,
              base: 'voicecall',
            },
            {
              menuValue: 'Video Call',
              route: routes.videocall,
              base: 'videocall',
            },
            {
              menuValue: 'Outgoing Call',
              route: routes.outgoingcall,
              base: 'outgoingcall',
            },
            {
              menuValue: 'Incoming Call',
              route: routes.incomingcall,
              base: 'incomingcall',
            },
            { menuValue: 'Calendar', route: routes.calendar, base: 'calendar' },
            { menuValue: 'Contacts', route: routes.contacts, base: 'contacts' },
            { menuValue: 'Email', route: routes.email, base: 'email' },
            {
              menuValue: 'File Manager',
              route: routes.filemanager,
              base: 'file-manager',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Employees',
      icon: 'layers',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Employees',
          route: routes.employees,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'user',
          base: 'employees',
          materialicons: 'people',
          subMenus: [
            {
              menuValue: 'All Employees',
              route: routes.employee_page,
              base: 'employee-page',
              base2: 'employee-list',
            },
            { menuValue: 'Holidays', route: routes.holidays, base: 'holidays' },
            {
              menuValue: 'Leave (Admin)',
              route: routes.leaveadmin,
              base: 'leave-admin',
            },
            // {
            //   menuValue: 'Leave (Employee)',
            //   route: routes.leaveemployee,
            //   base: 'leave-employee',
            // },
            {
              menuValue: 'Leave Settings',
              route: routes.leavesettings,
              base: 'leave-settings',
            },
            // {
            //   menuValue: 'Attendance (Admin)',
            //   route: routes.attendanceadmin,
            //   base: 'attendance-admin',
            // },
            // {
            //   menuValue: 'Attendance (Employee)',
            //   route: routes.attendanceemployee,
            //   base: 'attendance-employee',
            // },
            {
              menuValue: 'Department',
              route: routes.departments,
              base: 'departments',
            },
            {
              menuValue: 'Designations',
              route: routes.designations,
              base: 'designations',
            },
            {
              menuValue: 'Timesheet',
              route: routes.timesheet,
              base: 'timesheet',
            },
            {
              menuValue: 'Shift & Schedule',
              route: routes.shiftschedule,
              base: 'shift-schedule',
            },
            { menuValue: 'Overtime', route: routes.overtime, base: 'overtime' },
          ],
        },
        {
          menuValue: 'Clients',
          route: routes.clientpage,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'users',
          base: 'clients',
          materialicons: 'person',
          subMenus: [],
        },
        {
          menuValue: 'Projects',
          route: routes.projects,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'rocket',
          base: 'projects',
          materialicons: 'topic',
          subMenus: [
            {
              menuValue: 'Projects',
              route: routes.projectpage,
              base: 'project-page',
              base2: 'project-list',
              base3: 'project-view',
            },
            { menuValue: 'Tasks', route: routes.tasks, base: 'tasks' },
            {
              menuValue: 'Task Board',
              route: routes.taskboard,
              base: 'task-board',
            },
          ],
        },
        {
          menuValue: 'Leads',
          route: routes.leads,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user-secret',
          base: 'leads',
          materialicons: 'leaderboard',
          subMenus: [],
        },
        {
          menuValue: 'Tickets',
          route: routes.ticketpage,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ticket',
          base: 'tickets',
          materialicons: 'confirmation_number',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'HR',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Sales',
          route: routes.sales,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'files-o',
          base: 'sales',
          materialicons: 'shopping_bag',
          subMenus: [
            {
              menuValue: 'Estimates',
              route: routes.estimatepage,
              base: 'estimate-page',
              base2: 'estimate-view',
              base3: 'create-estimate',
              base4: 'edit-estimate',
            },
            {
              menuValue: 'Invoices',
              route: routes.invoicepage,
              base: 'invoice-page',
              base2: 'invoice-view',
              base3: 'create-invoice',
              base4: 'edit-invoice?id=1',
            },
            { menuValue: 'Payments', route: routes.payments, base: 'payments' },
            { menuValue: 'Expenses', route: routes.expenses, base: 'expenses' },
            {
              menuValue: 'Provident Fund',
              route: routes.providentfund,
              base: 'provident-fund',
            },
            { menuValue: 'Taxes', route: routes.taxes, base: 'taxes' },
          ],
        },
        {
          menuValue: 'Accounting',
          route: routes.accounting,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'files-o',
          base: 'accounting',
          materialicons: 'account_balance_wallet',
          subMenus: [
            {
              menuValue: 'Categories',
              route: routes.category,
              base: 'category',
            },
            { menuValue: 'Budgets', route: routes.budgets, base: 'budgets' },
            {
              menuValue: 'Budget Expenses',
              route: routes.budgetexpenses,
              base: 'budget-expenses',
            },
            {
              menuValue: 'Budget Revenues',
              route: routes.budgetrevenues,
              base: 'budget-revenues',
            },
          ],
        },
        {
          menuValue: 'Payroll',
          route: routes.payroll,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'money',
          base: 'payroll',
          materialicons: 'request_quote',
          subMenus: [
            {
              menuValue: 'Employee Salary',
              route: routes.employeesalary,
              base: 'employee-salary',
            },
            {
              menuValue: 'Payslip',
              route: routes.salaryview,
              base: 'salary-view',
            },
            {
              menuValue: 'Payroll Items',
              route: routes.payrollitems,
              base: 'payroll-items',
            },
          ],
        },
        {
          menuValue: 'Policies',
          route: routes.policies,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'file-pdf-o',
          base: 'policies',
          materialicons: 'verified_user',
          subMenus: [],
        },
        {
          menuValue: 'Reports',
          route: routes.reports,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'pie-chart',
          base: 'reports',
          materialicons: 'report_gmailerrorred',
          subMenus: [
            {
              menuValue: 'Expense Report',
              route: routes.expensereport,
              base: 'expense-report',
            },
            {
              menuValue: 'Invoice Report',
              route: routes.invoicereport,
              base: 'invoice-report',
            },
            {
              menuValue: 'Payments Report',
              route: routes.paymentsreport,
              base: 'payments-report',
            },
            {
              menuValue: 'Project Report',
              route: routes.projectreport,
              base: 'project-report',
            },
            {
              menuValue: 'Task Report',
              route: routes.taskreport,
              base: 'task-report',
            },
            {
              menuValue: 'User Report',
              route: routes.userreport,
              base: 'user-report',
            },
            {
              menuValue: 'Employee Report',
              route: routes.employeereport,
              base: 'employee-report',
            },
            {
              menuValue: 'Payslip Report',
              route: routes.payslipreport,
              base: 'payslip-report',
            },
            {
              menuValue: 'Attendance Report',
              route: routes.attendancereport,
              base: 'attendance-report',
            },
            {
              menuValue: 'Leave Report',
              route: routes.leavereport,
              base: 'leave-report',
            },
            {
              menuValue: 'Daily Report',
              route: routes.dailyreport,
              base: 'daily-report',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Performance',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Performance',
          route: routes.performance,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'graduation-cap',
          base: 'performance',
          materialicons: 'shutter_speed',
          subMenus: [
            {
              menuValue: 'Performance Indicator',
              route: routes.indicator,
              base: 'indicator',
            },
            {
              menuValue: 'Performance Review',
              route: routes.review,
              base: 'review',
            },
            {
              menuValue: 'Performance Appraisal',
              route: routes.appraisal,
              base: 'appraisal',
            },
          ],
        },
        {
          menuValue: 'Goals',
          route: routes.crosshairs,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'box',
          base: 'goals',
          materialicons: 'track_changes',
          subMenus: [
            { menuValue: 'Goal List', route: routes.list, base: 'list' },
            { menuValue: 'Goal Type', route: routes.type, base: 'type' },
          ],
        },
        {
          menuValue: 'Training',
          route: routes.training,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'edit',
          base: 'training',
          materialicons: 'checklist_rtl',
          subMenus: [
            { menuValue: 'Training List', route: routes.lists, base: 'lists' },
            { menuValue: 'Trainers', route: routes.trainer, base: 'trainer' },
            { menuValue: 'Training Type', route: routes.types, base: 'types' },
          ],
        },
        {
          menuValue: 'Promotion',
          route: routes.promotion,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bullhorn',
          base: 'promotion',
          materialicons: 'auto_graph',
          subMenus: [],
        },
        {
          menuValue: 'Resignation',
          route: routes.resignation,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'external-link-square',
          base: 'resignation',
          materialicons: 'do_not_disturb_alt',
          subMenus: [],
        },
        {
          menuValue: 'Termination',
          route: routes.termination,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'times-circle',
          base: 'termination',
          materialicons: 'indeterminate_check_box',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Administration',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Assets',
          route: routes.assets,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'object-ungroup',
          base: 'assets',
          materialicons: 'web_asset',
          subMenus: [],
        },
        {
          menuValue: 'Jobs',
          route: routes.jobs,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'briefcase',
          base: 'jobs',
          materialicons: 'work_outline',
          subMenus: [
            {
              menuValue: 'User Dashboard',
              route: routes.userdashboard,
              base: 'user-dashboard', base2: 'user-all-jobs', base3: 'saved-jobs', base4: 'applied-jobs', base5: 'interview-jobs', base6: 'offered-jobs', base7: 'visited-jobs', base8: 'archived-jobs' 
            },
            {
              menuValue: 'Jobs Dashboard',
              route: routes.jobsdashboard,
              base: 'jobs-dashboard',
            },
            {
              menuValue: 'Manage Jobs',
              route: routes.managejobs,
              base: 'manage-jobs',
            },
            {
              menuValue: 'Manage Resumes',
              route: routes.manageresumes,
              base: 'manage-resumes',
            },
            {
              menuValue: 'Shortlist Candidates',
              route: routes.shortlist,
              base: 'shortlist',
            },
            {
              menuValue: 'Interview Questions',
              route: routes.interviewquestions,
              base: 'interview-questions',
            },
            {
              menuValue: 'Offer Approvals',
              route: routes.offerapproval,
              base: 'offer-approval',
            },
            {
              menuValue: 'Experience Level',
              route: routes.experiencelevel,
              base: 'experience-level',
            },
            {
              menuValue: 'Candidates List',
              route: routes.candidateslist,
              base: 'candidates-list',
            },
            {
              menuValue: 'Schedule Timing',
              route: routes.scheduletiming,
              base: 'schedule-timing',
            },
            {
              menuValue: 'Aptitude Results',
              route: routes.aptituderesult,
              base: 'aptitude-result',
            },
            {
              menuValue: 'Applied Candidates',
              route: routes.appliedcandidates,
              base: 'applied-candidates',
            },
          ],
        },
        {
          menuValue: 'Knowledgebase',
          route: routes.knowledgebasemain,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'question',
          base: 'knowledgebase',
          materialicons: 'school',
          subMenus: [],
        },
        {
          menuValue: 'Activities',
          route: routes.activities,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bell',
          base: 'activities',
          materialicons: 'toggle_off',
          subMenus: [],
        },
        {
          menuValue: 'Users',
          route: routes.users,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user-plus',
          base: 'users',
          materialicons: 'group_add',
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          route: routes.companysettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'cog',
          base: 'company-settings',
          materialicons: 'settings',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Pages',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Profile',
          route: routes.profile,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'user',
          base: 'profile',
          materialicons: 'manage_accounts',
          subMenus: [
            {
              menuValue: 'Employee Profile',
              route: routes.employeeprofile,
              base: 'employee-profile',
            },
            {
              menuValue: 'Client Profile',
              route: routes.clientprofile,
              base: 'client-profile',
            },
          ],
        },
        {
          menuValue: 'Authentication',
          route: routes.loginpro,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'key',
          base: 'login',
          materialicons: 'perm_contact_calendar',
          subMenus: [
            { menuValue: 'Login', route: routes.loginpro, base: 'login' },
            {
              menuValue: 'Register',
              route: routes.registers,
              base: 'register',
            },
            {
              menuValue: 'Forgot Password',
              route: routes.forgotpassword,
              base: 'forgot-password',
            },
            { menuValue: 'OTP', route: routes.otp, base: 'otp' },
            {
              menuValue: 'Lock Screen',
              route: routes.lockscreen,
              base: 'lock-screen',
            },
          ],
        },
        {
          menuValue: 'Error Page',
          route: routes.error,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'exclamation-triangle',
          base: '404',
          materialicons: 'announcement',
          subMenus: [
            { menuValue: '404 Error', route: routes.error, base: '404' },
            { menuValue: '500 Error', route: routes.errors, base: '500' },
          ],
        },
        {
          menuValue: 'Subscriptions',
          route: routes.subscriptions,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'hand-o-up',
          base: 'subscriptions',
          materialicons: 'loyalty',
          subMenus: [
            {
              menuValue: 'Subscriptions (Admin)',
              route: routes.subadmin,
              base: 'admins',
            },
            {
              menuValue: 'Subscriptions (Company)',
              route: routes.company,
              base: 'company',
            },
            {
              menuValue: 'Subscribed Companies',
              route: routes.subscribedcompanies,
              base: 'subscribed-companies',
            },
          ],
        },
        {
          menuValue: 'Pages',
          route: routes.pages,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'columns',
          base: 'pages',
          materialicons: 'layers',
          subMenus: [
            { menuValue: 'Search', route: routes.search, base: 'search' },
            { menuValue: 'FAQ', route: routes.faq, base: 'faq' },
            { menuValue: 'Terms', route: routes.terms, base: 'terms' },
            {
              menuValue: 'Privacy Policy',
              route: routes.privacy,
              base: 'privacy-policy',
            },
            {
              menuValue: 'Blank Page',
              route: routes.blankpage,
              base: 'blank-page',
            },
          ],
        },
      ],
    },
    {
      tittle: 'UI Interface',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Components',
          route: routes.components,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'puzzle-piece',
          base: 'components',
          materialicons: 'people',
          subMenus: [],
        },
        {
          menuValue: 'Forms',
          route: routes.forms,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'object-group',
          base: 'forms',
          materialicons: 'view_day',

          subMenus: [
            {
              menuValue: 'Basic Inputs',
              route: routes.basicinput,
              base: 'basic-input',
            },
            {
              menuValue: 'Inputs Groups',
              route: routes.inputgroups,
              base: 'input-groups',
            },
            {
              menuValue: 'Horizontal Form',
              route: routes.horizontalform,
              base: 'horizontal-form',
            },
            {
              menuValue: 'Vertical Form',
              route: routes.verticalform,
              base: 'vertical-form',
            },
            {
              menuValue: 'Form Mask',
              route: routes.formmask,
              base: 'form-mask',
            },
            {
              menuValue: 'Form Validation',
              route: routes.formvalidation,
              base: 'form-validation',
            },
          ],
        },
        {
          menuValue: 'Tables',
          route: routes.tables,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'table',
          base: 'tables',
          materialicons: 'table_rows',
          subMenus: [
            {
              menuValue: 'Basic Tables',
              route: routes.basictables,
              base: 'basic-tables',
            },
            {
              menuValue: 'Data Tables',
              route: routes.datatables,
              base: 'data-tables',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Extras',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Documentation',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'file-text',
          base: '1',
          materialicons: 'description',
          subMenus: [],
        },
        {
          menuValue: 'Change Log',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'info',
          base: '1',
          materialicons: 'sync_alt',
          subMenus: [],
        },
        {
          menuValue: 'Multi Level',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'share-alt',
          base: '1',
          materialicons: 'library_add_check',
          subMenus: [
            { menuValue: 'Level 1', base: '1' },
            { menuValue: 'Level 2', base: '1' },
          ],
        },
      ],
    },
  ];


  public sideBar1: any = [
    {
      tittle: 'Main',
      icon: 'airplay',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'dashboard',
          base: 'dashboard',
          materialicons: 'home',
          subMenus: [
            {
              menuValue: 'Employee Dashboard',
              route: routes.employee,
              base: 'employee',
            },
          ],
        },
        {
          menuValue: 'Apps',
          route: routes.apps,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'cube',
          base: 'apps',
          materialicons: 'dashboard',
          subMenus: [
            { menuValue: 'Chats', route: routes.chat, base: 'chats' },
            {
              menuValue: 'Voice Call',
              route: routes.voicecall,
              base: 'voicecall',
            },
            {
              menuValue: 'Video Call',
              route: routes.videocall,
              base: 'videocall',
            },
            {
              menuValue: 'Outgoing Call',
              route: routes.outgoingcall,
              base: 'outgoingcall',
            },
            {
              menuValue: 'Incoming Call',
              route: routes.incomingcall,
              base: 'incomingcall',
            },
            { menuValue: 'Calendar', route: routes.calendar, base: 'calendar' },
            { menuValue: 'Contacts', route: routes.contacts, base: 'contacts' },
            { menuValue: 'Email', route: routes.email, base: 'email' },
            {
              menuValue: 'File Manager',
              route: routes.filemanager,
              base: 'file-manager',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Employees',
      icon: 'layers',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Employees',
          route: routes.employees,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'user',
          base: 'employees',
          materialicons: 'people',
          subMenus: [
            {
              menuValue: 'All Employees',
              route: routes.employee_page,
              base: 'employee-page',
              base2: 'employee-list',
            },
            { menuValue: 'Holidays', route: routes.holidays, base: 'holidays' },
            {
              menuValue: 'Leave (Employee)',
              route: routes.leaveemployee,
              base: 'leave-employee',
            },
            {
              menuValue: 'Leave Settings',
              route: routes.leavesettings,
              base: 'leave-settings',
            },
            {
              menuValue: 'Attendance (Employee)',
              route: routes.attendanceemployee,
              base: 'attendance-employee',
            },
            {
              menuValue: 'Department',
              route: routes.departments,
              base: 'departments',
            },
            {
              menuValue: 'Designations',
              route: routes.designations,
              base: 'designations',
            },
            {
              menuValue: 'Timesheet',
              route: routes.timesheet,
              base: 'timesheet',
            },
            {
              menuValue: 'Shift & Schedule',
              route: routes.shiftschedule,
              base: 'shift-schedule',
            },
            { menuValue: 'Overtime', route: routes.overtime, base: 'overtime' },
          ],
        },
        {
          menuValue: 'Clients',
          route: routes.clientpage,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'users',
          base: 'clients',
          materialicons: 'person',
          subMenus: [],
        },
        {
          menuValue: 'Projects',
          route: routes.projects,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'rocket',
          base: 'projects',
          materialicons: 'topic',
          subMenus: [
            {
              menuValue: 'Projects',
              route: routes.projectpage,
              base: 'project-page',
              base2: 'project-list',
              base3: 'project-view',
            },
            { menuValue: 'Tasks', route: routes.tasks, base: 'tasks' },
            {
              menuValue: 'Task Board',
              route: routes.taskboard,
              base: 'task-board',
            },
          ],
        },
        {
          menuValue: 'Leads',
          route: routes.leads,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user-secret',
          base: 'leads',
          materialicons: 'leaderboard',
          subMenus: [],
        },
        {
          menuValue: 'Tickets',
          route: routes.ticketpage,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'ticket',
          base: 'tickets',
          materialicons: 'confirmation_number',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'HR',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Sales',
          route: routes.sales,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'files-o',
          base: 'sales',
          materialicons: 'shopping_bag',
          subMenus: [
            {
              menuValue: 'Estimates',
              route: routes.estimatepage,
              base: 'estimate-page',
              base2: 'estimate-view',
              base3: 'create-estimate',
              base4: 'edit-estimate',
            },
            {
              menuValue: 'Invoices',
              route: routes.invoicepage,
              base: 'invoice-page',
              base2: 'invoice-view',
              base3: 'create-invoice',
              base4: 'edit-invoice?id=1',
            },
            { menuValue: 'Payments', route: routes.payments, base: 'payments' },
            { menuValue: 'Expenses', route: routes.expenses, base: 'expenses' },
            {
              menuValue: 'Provident Fund',
              route: routes.providentfund,
              base: 'provident-fund',
            },
            { menuValue: 'Taxes', route: routes.taxes, base: 'taxes' },
          ],
        },
        {
          menuValue: 'Accounting',
          route: routes.accounting,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'files-o',
          base: 'accounting',
          materialicons: 'account_balance_wallet',
          subMenus: [
            {
              menuValue: 'Categories',
              route: routes.category,
              base: 'category',
            },
            { menuValue: 'Budgets', route: routes.budgets, base: 'budgets' },
            {
              menuValue: 'Budget Expenses',
              route: routes.budgetexpenses,
              base: 'budget-expenses',
            },
            {
              menuValue: 'Budget Revenues',
              route: routes.budgetrevenues,
              base: 'budget-revenues',
            },
          ],
        },
        {
          menuValue: 'Payroll',
          route: routes.payroll,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'money',
          base: 'payroll',
          materialicons: 'request_quote',
          subMenus: [
            {
              menuValue: 'Employee Salary',
              route: routes.employeesalary,
              base: 'employee-salary',
            },
            {
              menuValue: 'Payslip',
              route: routes.salaryview,
              base: 'salary-view',
            },
            {
              menuValue: 'Payroll Items',
              route: routes.payrollitems,
              base: 'payroll-items',
            },
          ],
        },
        {
          menuValue: 'Policies',
          route: routes.policies,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'file-pdf-o',
          base: 'policies',
          materialicons: 'verified_user',
          subMenus: [],
        },
        {
          menuValue: 'Reports',
          route: routes.reports,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'pie-chart',
          base: 'reports',
          materialicons: 'report_gmailerrorred',
          subMenus: [
            {
              menuValue: 'Expense Report',
              route: routes.expensereport,
              base: 'expense-report',
            },
            {
              menuValue: 'Invoice Report',
              route: routes.invoicereport,
              base: 'invoice-report',
            },
            {
              menuValue: 'Payments Report',
              route: routes.paymentsreport,
              base: 'payments-report',
            },
            {
              menuValue: 'Project Report',
              route: routes.projectreport,
              base: 'project-report',
            },
            {
              menuValue: 'Task Report',
              route: routes.taskreport,
              base: 'task-report',
            },
            {
              menuValue: 'User Report',
              route: routes.userreport,
              base: 'user-report',
            },
            {
              menuValue: 'Employee Report',
              route: routes.employeereport,
              base: 'employee-report',
            },
            {
              menuValue: 'Payslip Report',
              route: routes.payslipreport,
              base: 'payslip-report',
            },
            {
              menuValue: 'Attendance Report',
              route: routes.attendancereport,
              base: 'attendance-report',
            },
            {
              menuValue: 'Leave Report',
              route: routes.leavereport,
              base: 'leave-report',
            },
            {
              menuValue: 'Daily Report',
              route: routes.dailyreport,
              base: 'daily-report',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Performance',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Performance',
          route: routes.performance,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'graduation-cap',
          base: 'performance',
          materialicons: 'shutter_speed',
          subMenus: [
            {
              menuValue: 'Performance Indicator',
              route: routes.indicator,
              base: 'indicator',
            },
            {
              menuValue: 'Performance Review',
              route: routes.review,
              base: 'review',
            },
            {
              menuValue: 'Performance Appraisal',
              route: routes.appraisal,
              base: 'appraisal',
            },
          ],
        },
        {
          menuValue: 'Goals',
          route: routes.crosshairs,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'box',
          base: 'goals',
          materialicons: 'track_changes',
          subMenus: [
            { menuValue: 'Goal List', route: routes.list, base: 'list' },
            { menuValue: 'Goal Type', route: routes.type, base: 'type' },
          ],
        },
        {
          menuValue: 'Training',
          route: routes.training,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'edit',
          base: 'training',
          materialicons: 'checklist_rtl',
          subMenus: [
            { menuValue: 'Training List', route: routes.lists, base: 'lists' },
            { menuValue: 'Trainers', route: routes.trainer, base: 'trainer' },
            { menuValue: 'Training Type', route: routes.types, base: 'types' },
          ],
        },
        {
          menuValue: 'Promotion',
          route: routes.promotion,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bullhorn',
          base: 'promotion',
          materialicons: 'auto_graph',
          subMenus: [],
        },
        {
          menuValue: 'Resignation',
          route: routes.resignation,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'external-link-square',
          base: 'resignation',
          materialicons: 'do_not_disturb_alt',
          subMenus: [],
        },
        {
          menuValue: 'Termination',
          route: routes.termination,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'times-circle',
          base: 'termination',
          materialicons: 'indeterminate_check_box',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Administration',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Assets',
          route: routes.assets,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'object-ungroup',
          base: 'assets',
          materialicons: 'web_asset',
          subMenus: [],
        },
        {
          menuValue: 'Jobs',
          route: routes.jobs,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'briefcase',
          base: 'jobs',
          materialicons: 'work_outline',
          subMenus: [
            {
              menuValue: 'User Dashboard',
              route: routes.userdashboard,
              base: 'user-dashboard', base2: 'user-all-jobs', base3: 'saved-jobs', base4: 'applied-jobs', base5: 'interview-jobs', base6: 'offered-jobs', base7: 'visited-jobs', base8: 'archived-jobs' 
            },
            {
              menuValue: 'Jobs Dashboard',
              route: routes.jobsdashboard,
              base: 'jobs-dashboard',
            },
            {
              menuValue: 'Manage Jobs',
              route: routes.managejobs,
              base: 'manage-jobs',
            },
            {
              menuValue: 'Manage Resumes',
              route: routes.manageresumes,
              base: 'manage-resumes',
            },
            {
              menuValue: 'Shortlist Candidates',
              route: routes.shortlist,
              base: 'shortlist',
            },
            {
              menuValue: 'Interview Questions',
              route: routes.interviewquestions,
              base: 'interview-questions',
            },
            {
              menuValue: 'Offer Approvals',
              route: routes.offerapproval,
              base: 'offer-approval',
            },
            {
              menuValue: 'Experience Level',
              route: routes.experiencelevel,
              base: 'experience-level',
            },
            {
              menuValue: 'Candidates List',
              route: routes.candidateslist,
              base: 'candidates-list',
            },
            {
              menuValue: 'Schedule Timing',
              route: routes.scheduletiming,
              base: 'schedule-timing',
            },
            {
              menuValue: 'Aptitude Results',
              route: routes.aptituderesult,
              base: 'aptitude-result',
            },
            {
              menuValue: 'Applied Candidates',
              route: routes.appliedcandidates,
              base: 'applied-candidates',
            },
          ],
        },
        {
          menuValue: 'Knowledgebase',
          route: routes.knowledgebasemain,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'question',
          base: 'knowledgebase',
          materialicons: 'school',
          subMenus: [],
        },
        {
          menuValue: 'Activities',
          route: routes.activities,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bell',
          base: 'activities',
          materialicons: 'toggle_off',
          subMenus: [],
        },
        {
          menuValue: 'Users',
          route: routes.users,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user-plus',
          base: 'users',
          materialicons: 'group_add',
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          route: routes.companysettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'cog',
          base: 'company-settings',
          materialicons: 'settings',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Pages',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Profile',
          route: routes.profile,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'user',
          base: 'profile',
          materialicons: 'manage_accounts',
          subMenus: [
            {
              menuValue: 'Employee Profile',
              route: routes.employeeprofile,
              base: 'employee-profile',
            },
            {
              menuValue: 'Client Profile',
              route: routes.clientprofile,
              base: 'client-profile',
            },
          ],
        },
        {
          menuValue: 'Authentication',
          route: routes.loginpro,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'key',
          base: 'login',
          materialicons: 'perm_contact_calendar',
          subMenus: [
            { menuValue: 'Login', route: routes.loginpro, base: 'login' },
            {
              menuValue: 'Register',
              route: routes.registers,
              base: 'register',
            },
            {
              menuValue: 'Forgot Password',
              route: routes.forgotpassword,
              base: 'forgot-password',
            },
            { menuValue: 'OTP', route: routes.otp, base: 'otp' },
            {
              menuValue: 'Lock Screen',
              route: routes.lockscreen,
              base: 'lock-screen',
            },
          ],
        },
        {
          menuValue: 'Error Page',
          route: routes.error,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'exclamation-triangle',
          base: '404',
          materialicons: 'announcement',
          subMenus: [
            { menuValue: '404 Error', route: routes.error, base: '404' },
            { menuValue: '500 Error', route: routes.errors, base: '500' },
          ],
        },
        {
          menuValue: 'Subscriptions',
          route: routes.subscriptions,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'hand-o-up',
          base: 'subscriptions',
          materialicons: 'loyalty',
          subMenus: [
            {
              menuValue: 'Subscriptions (Admin)',
              route: routes.subadmin,
              base: 'admins',
            },
            {
              menuValue: 'Subscriptions (Company)',
              route: routes.company,
              base: 'company',
            },
            {
              menuValue: 'Subscribed Companies',
              route: routes.subscribedcompanies,
              base: 'subscribed-companies',
            },
          ],
        },
        {
          menuValue: 'Pages',
          route: routes.pages,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'columns',
          base: 'pages',
          materialicons: 'layers',
          subMenus: [
            { menuValue: 'Search', route: routes.search, base: 'search' },
            { menuValue: 'FAQ', route: routes.faq, base: 'faq' },
            { menuValue: 'Terms', route: routes.terms, base: 'terms' },
            {
              menuValue: 'Privacy Policy',
              route: routes.privacy,
              base: 'privacy-policy',
            },
            {
              menuValue: 'Blank Page',
              route: routes.blankpage,
              base: 'blank-page',
            },
          ],
        },
      ],
    },
    {
      tittle: 'UI Interface',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Components',
          route: routes.components,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'puzzle-piece',
          base: 'components',
          materialicons: 'people',
          subMenus: [],
        },
        {
          menuValue: 'Forms',
          route: routes.forms,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'object-group',
          base: 'forms',
          materialicons: 'view_day',

          subMenus: [
            {
              menuValue: 'Basic Inputs',
              route: routes.basicinput,
              base: 'basic-input',
            },
            {
              menuValue: 'Inputs Groups',
              route: routes.inputgroups,
              base: 'input-groups',
            },
            {
              menuValue: 'Horizontal Form',
              route: routes.horizontalform,
              base: 'horizontal-form',
            },
            {
              menuValue: 'Vertical Form',
              route: routes.verticalform,
              base: 'vertical-form',
            },
            {
              menuValue: 'Form Mask',
              route: routes.formmask,
              base: 'form-mask',
            },
            {
              menuValue: 'Form Validation',
              route: routes.formvalidation,
              base: 'form-validation',
            },
          ],
        },
        {
          menuValue: 'Tables',
          route: routes.tables,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'table',
          base: 'tables',
          materialicons: 'table_rows',
          subMenus: [
            {
              menuValue: 'Basic Tables',
              route: routes.basictables,
              base: 'basic-tables',
            },
            {
              menuValue: 'Data Tables',
              route: routes.datatables,
              base: 'data-tables',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Extras',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Documentation',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'file-text',
          base: '1',
          materialicons: 'description',
          subMenus: [],
        },
        {
          menuValue: 'Change Log',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'info',
          base: '1',
          materialicons: 'sync_alt',
          subMenus: [],
        },
        {
          menuValue: 'Multi Level',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'share-alt',
          base: '1',
          materialicons: 'library_add_check',
          subMenus: [
            { menuValue: 'Level 1', base: '1' },
            { menuValue: 'Level 2', base: '1' },
          ],
        },
      ],
    },
  ];
  
  public getSideBarData: BehaviorSubject<Array<any>> = new BehaviorSubject<
    Array<any>
  >(this.sideBar);
  public getSideBarData2: BehaviorSubject<Array<any>> = new BehaviorSubject<
    Array<any>
  >(this.sideBar1);
 
  public resetData(): void {
    this.sideBar.map((res: any) => {
      res.showAsTab = false;
      res.menu.map((menus: any) => {
        menus.showSubRoute = false;
      });
    });
  }
  public resetData2(): void {
    this.sideBar1.map((res: any) => {
      res.showAsTab = false;
      res.menu.map((menus: any) => {
        menus.showSubRoute = false;
      });
    });
  }
  allCustomPolicy = [
    {
      id: 1,
      name: 'John deo',
      days: 5,
    },
    {
      id: 2,
      name: 'John Mclaren',
      days: 6,
    },
    {
      id: 3,
      name: 'Kennedy',
      days: 8,
    },
    {
      id: 4,
      name: 'Barry cuda',
      days: 9,
    },
  ];

  companiesList = [
    {
      id: 1,
      company: 'Delta Infotech',
    },
    {
      id: 1,
      company: 'Delta Infotech',
    },
    {
      id: 1,
      company: 'Delta Infotech',
    },
    {
      id: 1,
      company: 'Delta Infotech',
    },
    {
      id: 1,
      company: 'Delta Infotech',
    },
  ];

  clientsDatas = [
    {
      name: 'Barry Cuda',
      role: 'CEO',
      company: 'Global Technologies',
      image: 'avatar-19',
      clientId: 'CLT-0008',
      email: 'barrycuda@example.com',
      phone: '9876543210',
      status: 'Active',
      id: 1,
    },
    {
      name: 'Tressa Wexler',
      role: 'Manager',
      company: 'Delta Infotech',
      image: 'avatar-29',
      clientId: 'CLT-0003',
      email: 'tressawexler@example.com',
      phone: '9876543211',
      status: 'Inactive',
      id: 2,
    },
    {
      name: 'Ruby Bartlett ',
      role: 'CEO',
      company: 'Cream Inc',
      image: 'avatar-07',
      clientId: 'CLT-0002',
      email: 'rubybartlett@example.com',
      phone: '9876543212',
      status: 'Inactive',
      id: 3,
    },
    {
      name: 'misty Tison',
      role: 'CEO',
      company: 'Wellware Company',
      image: 'avatar-06',
      clientId: 'CLT-0001',
      email: 'tisonmisty@example.com',
      phone: '9876543213',
      status: 'Inactive',
      id: 4,
    },
    {
      name: 'Daniel Deacon',
      role: 'CEO',
      company: 'Mustang Technologies',
      image: 'avatar-14',
      clientId: 'CLT-0006',
      email: 'danieldeacon@example.com',
      phone: '9876543214',
      status: 'Active',
      id: 5,
    },
    {
      name: 'Walter  Weaver',
      role: 'CEO',
      company: 'International Software',
      image: 'avatar-18',
      clientId: 'CLT-0007',
      email: 'walterweaver@example.com',
      phone: '9876543215',
      status: 'Active',
      id: 6,
    },
    {
      name: 'Amanda Warren',
      role: 'CEO',
      company: 'Mercury Software Inc',
      image: 'avatar-28',
      clientId: 'CLT-0005',
      email: 'amandawarren@example.com',
      phone: '9876543216',
      status: 'Active',
      id: 7,
    },
    {
      name: 'Bretty Carlson',
      role: 'CEO',
      company: 'Carlson Technologies',
      image: 'avatar-13',
      clientId: 'CLT-0004',
      email: 'bettycarlson@example.com',
      phone: '9876543217',
      status: 'Inactive',
      id: 8,
    },
    {
      name: 'Barry Cuda',
      role: 'CEO',
      company: 'Global Technologies',
      image: 'avatar-19',
      clientId: 'CLT-0008',
      email: 'barrycuda@example.com',
      phone: '9876543210',
      status: 'Active',
      id: 9,
    },
    {
      name: 'Walter  Weaver',
      role: 'CEO',
      company: 'International Software',
      image: 'avatar-18',
      clientId: 'CLT-0007',
      email: 'walterweaver@example.com',
      phone: '9876543215',
      status: 'Active',
      id: 10,
    },
  ];

  projects = [
    {
      name: 'Office Management',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...',
      endDate: '17-04-2019',
      startDate: '17-04-2019',
      priority: 'High',
      projectleader: 'Aravind',
      teamMember: 'Prakash',
      projectId: 'PRO-001',
      id: 1,
    },
    {
      name: 'Hospital Administration',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...',
      endDate: '17-04-2019',
      startDate: '17-04-2019',
      priority: 'High',
      projectleader: 'Ashok',
      teamMember: 'Aravind',
      projectId: 'PRO-001',
      id: 2,
    },
    {
      name: 'Project Management',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...',
      endDate: '17-08-2019',
      startDate: '17-07-2019',
      priority: 'High',
      projectleader: 'vijay',
      teamMember: 'prakash',
      projectId: 'PRO-001',
      id: 3,
    },
    {
      name: 'Video Calling App',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...',
      endDate: '17-04-2019',
      startDate: '17-03-2019',
      priority: 'High',
      projectleader: 'Ashok',
      teamMember: 'Aravind',
      projectId: 'PRO-001',
      id: 4,
    },
    {
      name: 'Project Management',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...',
      endDate: '17-08-2019',
      startDate: '17-07-2019',
      priority: 'High',
      projectleader: 'vijay',
      teamMember: 'prakash',
      projectId: 'PRO-001',
      id: 5,
    },
    {
      name: 'Office Management',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...',
      endDate: '17-04-2019',
      startDate: '17-04-2019',
      priority: 'High',
      projectleader: 'Aravind',
      teamMember: 'Prakash',
      projectId: 'PRO-001',
      id: 6,
    },
  ];

  allKnowledgeBase = [
    {
      title: 'Installation & Activation',
      list1: 'Sed ut perspiciatis unde omnis?',
      list2: 'Sed ut perspiciatis unde omnis?',
      list3: 'Sed ut perspiciatis unde omnis?',
      list4: 'Sed ut perspiciatis unde omnis?',
      list5: 'Sed ut perspiciatis unde omnis?',
      id: 1,
    },
    {
      title: 'Premium Members Features',
      list1: 'Sed ut perspiciatis unde omnis?',
      list2: 'Sed ut perspiciatis unde omnis?',
      list3: 'Sed ut perspiciatis unde omnis?',
      list4: 'Sed ut perspiciatis unde omnis?',
      list5: 'Sed ut perspiciatis unde omnis?',
      id: 2,
    },
    {
      title: 'API Usage & Guide lines',
      list1: 'Sed ut perspiciatis unde omnis?',
      list2: 'Sed ut perspiciatis unde omnis?',
      list3: 'Sed ut perspiciatis unde omnis?',
      list4: 'Sed ut perspiciatis unde omnis?',
      list5: 'Sed ut perspiciatis unde omnis?',
      id: 3,
    },
    {
      title: 'Getting Started',
      list1: 'Sed ut perspiciatis unde omnis?',
      list2: 'Sed ut perspiciatis unde omnis?',
      list3: 'Sed ut perspiciatis unde omnis?',
      list4: 'Sed ut perspiciatis unde omnis?',
      list5: 'Sed ut perspiciatis unde omnis?',
      id: 4,
    },
    {
      title: 'Lorem ipsum dolor',
      list1: 'Sed ut perspiciatis unde omnis?',
      list2: 'Sed ut perspiciatis unde omnis?',
      list3: 'Sed ut perspiciatis unde omnis?',
      list4: 'Sed ut perspiciatis unde omnis?',
      list5: 'Sed ut perspiciatis unde omnis?',
      id: 5,
    },
    {
      title: 'Lorem ipsum dolor',
      list1: 'Sed ut perspiciatis unde omnis?',
      list2: 'Sed ut perspiciatis unde omnis?',
      list3: 'Sed ut perspiciatis unde omnis?',
      list4: 'Sed ut perspiciatis unde omnis?',
      list5: 'Sed ut perspiciatis unde omnis?',
      id: 6,
    },
    {
      title: 'Lorem ipsum dolor',
      list1: 'Sed ut perspiciatis unde omnis?',
      list2: 'Sed ut perspiciatis unde omnis?',
      list3: 'Sed ut perspiciatis unde omnis?',
      list4: 'Sed ut perspiciatis unde omnis?',
      list5: 'Sed ut perspiciatis unde omnis?',
      id: 7,
    },
    {
      title: 'Lorem ipsum dolor',
      list1: 'Sed ut perspiciatis unde omnis?',
      list2: 'Sed ut perspiciatis unde omnis?',
      list3: 'Sed ut perspiciatis unde omnis?',
      list4: 'Sed ut perspiciatis unde omnis?',
      list5: 'Sed ut perspiciatis unde omnis?',
      id: 8,
    },
    {
      title: 'Lorem ipsum dolor',
      list1: 'Sed ut perspiciatis unde omnis?',
      list2: 'Sed ut perspiciatis unde omnis?',
      list3: 'Sed ut perspiciatis unde omnis?',
      list4: 'Sed ut perspiciatis unde omnis?',
      list5: 'Sed ut perspiciatis unde omnis?',
      id: 9,
    },
  ];



  allroles = [
    {
      roleName: 'Administrator',
      id: 1,
    },
    {
      roleName: 'CEO',
      id: 2,
    },
    {
      roleName: 'Manager',
      id: 3,
    },
    {
      roleName: 'Team Leader',
      id: 4,
    },
    {
      roleName: 'Accountant',
      id: 5,
    },
    {
      roleName: 'Web Developer',
      id: 6,
    },
    {
      roleName: 'Web Designer',
      id: 7,
    },
    {
      roleName: 'HR',
      id: 8,
    },
    {
      roleName: 'UI/UX Developer',
      id: 9,
    },
    {
      roleName: 'SEO Analyst',
      id: 10,
    },
  ];

  allLeaveType = [
    {
      leaveType: 'Casual Leave',
      leaveDays: '12 Days',
      id: 1,
    },
    {
      leaveType: 'Medical Leave',
      leaveDays: '12 Days',
      id: 2,
    },
    {
      leaveType: 'Loss of Pay',
      leaveDays: '10 Days',
      id: 3,
    },
    {
      leaveType: 'Medical Leave',
      leaveDays: '1 Days',
      id: 4,
    },
    {
      leaveType: 'Casual Leave',
      leaveDays: '15 Days',
      id: 5,
    },
    {
      leaveType: 'Loss of Pay',
      leaveDays: '10 Days',
      id: 6,
    },
  ];
  lstEmployee = [
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 1,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Front end Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 2,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "UI/Ux Designer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-05-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 3,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 4,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 5,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 6,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 7,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 8,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 9,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 10,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 11,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 12,
    },
    {
      firstname: "Catherine Manseau",
      lastname: "Manseau",
      username: "Manseau",
      password: "123445",
      confirmpassword: "123456",
      department: "software",
      designation: "Web  Developer",
      phone: "9842354254",
      email: "catherine@example.com",
      mobile: "9876543210",
      joindate: "18-04-2013",
      role: "Web Developer",
      employeeId: "FT-0001",
      company: "FT-0001",
      id: 13,
    },

  ]
}
