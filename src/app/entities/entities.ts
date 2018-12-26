export class User {
    userId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
}

export class Company {
    companyId: number;
    companyName: string;
    address: string;
    phoneNumber: string;
    paymentSheets: PaymentSheet[];
}

export class Job {
    jobId: number;
    jobName: string;
    address: string;
    startDate: Date;
    endDate: Date;
    costEstimate: number;
    client: Client;
    timeSheets: TimeSheet[];
    employeeJobs: EmployeeJob[];
    subContractorJobs: SubContractorJob[];
    supplierJobs: SupplierJob[];
}

export class Client extends User {
    address: string;
    jobs: Job[];
}

export class Employee extends User {
    role: string;
    employeeJobs: EmployeeJob[];
    timesheets: TimeSheet[];
}

export class SubContractor extends Company {
    subContractorJobs: SubContractorJob[];
}

export class Supplier extends Company {
    supplierJobs: SupplierJob[];
}

export class TimeSheet {
    timeSheetId: number;
    weekEndingDate: Date;
    payRate: number;
    jobId: number;
    employee: Employee;
}

export class TimeSheetDetail {
    timeSheetDetailId: number;
    workDate: Date;
    dayOfWeek: number;
    hours: number;
    timeSheetId: number;
    timeSheet: TimeSheet;
}

export class PaymentSheet {
    paymentsheetId: number;
    weekEndingDate: Date;
    jobId: number;
    companyId: number;
    job: Job;
    company: Company;
    paymentsheetdetails: PaymentSheetDetail[];
}

export class PaymentSheetDetail {
    paymentSheetDetailId: number;
    workDate: Date;
    dayOfWeek: number;
    payOut: number;
    paymentSheetId: number;
    paymentSheet: PaymentSheet;
}

export class EmployeeJob {
    userId: number;
    jobId: number;
    employee: Employee;
    job: Job;
}

export class SubContractorJob {
    companyId: number;
    jobId: number;
    subContractor: SubContractor;
    job: Job;
}

export class SupplierJob {
    companyId: number;
    jobId: number;
    supplier: Supplier;
    job: Job;
}

export class Year {
    yearId: number;
    yearDate: number;
    months: Month[];
}

export class Month {
    monthId: number;
    monthName: string;
    yearId: number;
    year: Year;
}

export class Week {
    weekId: number;
    weekName: string;
    endOfWeekDate: Date;
    daysInWeek: number;
    weekEndingMonth: boolean;
    monthId: number;
    month: Month;
}