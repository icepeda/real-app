import { Address } from "./address";
import { Company } from "./company";

export interface IUser {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export class User implements IUser {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  
    constructor(){}

}
