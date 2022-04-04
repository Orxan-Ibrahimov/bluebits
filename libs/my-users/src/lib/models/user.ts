export interface User{
    [x: string]: any;
    name:string,
    id:string,
    email:string,
    passwordHash:string,
    street:string,
    apartment:string,
    country:string,
    zip:string,
    phone:string,
    city:string,
    isAdmin:boolean
}