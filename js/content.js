export default{
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
   tablaIngresos:{
    title:".l",
    costo:".",
   },
   tablaEgresos:{
    title:"uu",
    costo:"-",
   },
   dineroT:"00",
   seccion1(){
    document.querySelector("#seccion1").insertAdjacentHTML("beforeend", `
    <h2>${this.title.ti}</h2>
    <h1 id="dineroTotal " class="bg-gradient">${this.dineroT}</h1>
    <div class="container span mt-5 p-3 bg-primary">
        <span>${this.subt1.name}</span>
        <span id="ningresos">${this.subt1.dineroIn}
        </span>

    </div>
    <div class="container p-3 span mt-5 bg-warning">
        <span>${this.subt2.name}</span>
        <span id="ningresos">${this.subt2.dineroOut}</span>
        </span>

    </div>`)


   }
}