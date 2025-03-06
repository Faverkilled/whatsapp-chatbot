export interface User {
    id: string;
    name: string;
    phoneNumber: string;
}

export interface Message {
    userId: string;
    content: string;
    timestamp: Date;
}