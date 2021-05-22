import { Geo } from "./geo";

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export class Address implements IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
    constructor(){}
  
}
