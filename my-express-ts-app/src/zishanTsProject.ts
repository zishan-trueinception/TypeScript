
// export
export{
    add,
    add2,
    info
}




function add(a:number, b:number):number{
    return a + b
}

function add2(a:number, b:number):number{
    return a + b
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