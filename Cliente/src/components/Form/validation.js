export default (data) =>{
    let erorrs = {}

        if (!data.email.includes("@")){
            erorrs.e1 = "Email is not valid";            
        }
        if(!data.email){
            erorrs.e2 = "Inser Email"
        }
        if(data.email.length > 35){
            erorrs.e3 = "Menos de 35 caracteres"
        }
        if(!/\d/.test(data.password)){
            erorrs.p1 = "Al menos debe tener un numero"
        }
        if(data.password.length < 6 || data.password.length > 10){
            erorrs.p2 = "Debe tener al mas de 6 caracteres y menos de 10"
        }
        return erorrs    
}