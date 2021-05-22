export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export class Company implements ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
    constructor(){}
}
