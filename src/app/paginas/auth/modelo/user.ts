export interface User {
    name: string,
    lastName: string,
    email: string,
    cellphone: number,
    password1: string,
    admin: boolean
}

export interface UserConID extends User {
    id: number;
}