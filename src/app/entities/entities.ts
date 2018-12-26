export class User {
    userId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
}

export class Client extends User {
    address: string;
}