export default{
    dataContent(){
        localStorage.setItem("content", JSON.stringify({
            title:{
                ti:"Presupuesto disponible"
            },
            btn:"Ingresar",
           subt1:{
            name:"Ingresos ",
            dineroIn:"33",
           },
           subt2:{
            name:"Egresos ",
            dineroOut:"-"
           },
           seleccionar:{
            name:"seleccionar",
            op1:"+",
            op2:"-",
           },
           tablaIngresos:{
            name:"Ingresos ",
            title:".l",
            costo:".",
           },
           tablaEgresos:{
            name:"Egresos ",
            title:"uu",
            costo:"-",
           },
           dineroT:"00",
        }))
    }
}