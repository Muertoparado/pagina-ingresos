export default {
  
}

/* let dinero=document.querySelector("button")
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
    },
    seccion2(){
        document.querySelector("#seccion2").insertAdjacentHTML("beforeend", `
        <select id="seleccion">
        <option value="op1">${this.seleccionar.op1}</option>
        <option value="op2">${this.seleccionar.op2}</option>
       
      </select>

    <input type="text" name="descripcion" placeholder="Ingresar descripcion">
    <input type="number" name="numero">
    <button class="btn bg-primary" type="submit" > ${this.btn}</button>

</div>
<div class="container mt-5">
    <div class="row">
        <div class="col-6 modal-dialog">
            <table class="ctable table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="row text-center">${this.tablaIngresos.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${this.tablaIngresos.title}</td>
                        <td>${this.tablaIngresos.costo}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-6  align-items-center">
            <table class="ctable table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="row text-center">${this.tablaEgresos.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${this.tablaEgresos.title}</td>
                        <td>${this.tablaEgresos.costo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`)


   },

   fragShow(){
    const ws = new Worker("./storage/wsContent.js", {type:"module"});

    ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
    })
   }
   suma(){
    console.log("esto es suma");
    var dataMas={
        "descripcion":descripcion,
        "numero":numero,
    };
    localStorage.setItem("dataMas",JSON.stringify(dataMas))
   },
   resta(){
    console.log("esto es resta");
    var dataMenos={
        "descripcion":descripcion,
        "numero":numero,
    };
    localStorage.setItem("dataMas",JSON.stringify(dataMenos))
   },


    

} */
/* dinero.addEventListener("submit",(e)=>{
    var descripcion= document.getElementsByName('descripcion').value;
    var numero= document.getElementsByName('numero').value;

    (seleccion=='+') ? this.suma(): this.resta();

}) */