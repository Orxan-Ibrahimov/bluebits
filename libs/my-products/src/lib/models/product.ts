import { Category } from "./category";

export interface Product{
    id:string;
    name:string;
    description:string;
    richDescription:string;    
    brand:string;    
    price:number;    
    rating:number;    
    numReviews:number;    
    createdDate:Date;    
    isFeatured:boolean;    
    category:Category;    
    image:string;    
    images:string[];    
    countInStock:number;    
}