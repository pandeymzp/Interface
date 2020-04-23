// interface

interface pdtl{
    fname :string;
    lastname:string;
    age ?: number
}
function interfacefun(parameater : pdtl){

console.log(parameater.fname + parameater.lastname)

}

var psting = {
    fname : "sandeep",
    lastname : "pandey",
    }
interfacefun(psting)










