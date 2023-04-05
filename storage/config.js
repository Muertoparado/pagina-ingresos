export default{
    dataContent(){
        localStorage.setItem("content", JSON.stringify({
            info:{
                titulo:"Presupuesto Disponible",
                caracter:"$0",
                entrada:"Ingresos",
                salida:"Egresos"
            }
        }));
    },
    dataIngresos(){
        localStorage.setItem("myIngresos", JSON.stringify({
            info:{
                titulo:"INGRESOS"
            }
        }));

    },
    dataEgresos(){
        localStorage.setItem("myEgresos", JSON.stringify({
            info:{
                titulo:"EGRESOS"
            }
        }));

    }
}