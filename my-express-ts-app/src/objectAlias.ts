// aliases for parameters

export{
    info,
    info2
}
type Person = {
    name:string;
    age?:number;
    email:string;
    address?:string;
}
const info:Person = {
    name: 'zishan',
    email: 'zishan@qq.com',
    address: 'Ashok Marg',
    age: 23
}

const info2:Person = {
    name: 'mustakim',
    email: 'mustakim@qq.com',
    address: 'Ashok Marg',
    age: 23
}