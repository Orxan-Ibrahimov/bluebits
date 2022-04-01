import { User } from "@bluebits/my-users";
import { OrderItem } from "./order-item";

export interface Order{
    id:string,
    city:string,
    zip:string,
    country:string,
    phone:string,
    totalPrice:number,
    status:string,
    user:User,
    dateOrdered:Date,    
    orderItems:OrderItem[],
    shippingAddress1:string,
    shippingAddress2:string,
}