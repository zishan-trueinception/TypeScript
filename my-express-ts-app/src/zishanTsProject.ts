
// export
export{
    addition,
    substract,
    info
}



// addition function 
function addition(a:number, b:number):number{
    return a + b
}

// substraction function
function substract(a:number, b:number):number{
    return a + b
}

// aliases for parameters
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