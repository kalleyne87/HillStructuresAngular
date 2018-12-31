export class User {
    userID: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
}

export class Company {
    companyID: number;
    companyName: string;
    address: string;
    phoneNumber: string;
    paymentSheets: PaymentSheet[];
}

export class Job {
    jobID: number;
    jobName: string;
    address: string;
    startDate: Date;
    endDate: Date;
    costEstimate: number;
    clientID: number;
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
    timeSheetID: number;
    weekEndingDate: Date;
    payRate: number;
    jobId: number;
    employee: Employee;
}

export class TimeSheetDetail {
    timeSheetDetailID: number;
    workDate: Date;
    dayOfWeek: number;
    hours: number;
    timeSheetID: number;
    timeSheet: TimeSheet;
}

export class PaymentSheet {
    paymentsheetID: number;
    weekEndingDate: Date;
    jobID: number;
    companyID: number;
    job: Job;
    company: Company;
    paymentsheetdetails: PaymentSheetDetail[];
}

export class PaymentSheetDetail {
    paymentSheetDetailID: number;
    workDate: Date;
    dayOfWeek: number;
    payOut: number;
    paymentSheetID: number;
    paymentSheet: PaymentSheet;
}

export class EmployeeJob {
    userID: number;
    jobID: number;
    employee: Employee;
    job: Job;
}

export class SubContractorJob {
    companyId: number;
    jobID: number;
    subContractor: SubContractor;
    job: Job;
}

export class SupplierJob {
    companyID: number;
    jobID: number;
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