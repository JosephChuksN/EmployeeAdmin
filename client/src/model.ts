export interface employeeData{
    firstname:string
    lastname:string
    phone:string | undefined
    birthday:string
    address:string
    city:string
    zipCode:number
}

export interface data extends employeeData{
    _id:string
}