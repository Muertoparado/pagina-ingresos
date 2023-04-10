let seleccion = document.querySelector("#seleccion")
let dinero = document.querySelector("#dinero")
let divIngreso = document.querySelector("#divIngreso")
let divEgreso = document.querySelector("#divEgreso")
let descripcion = document.querySelector("#descripcion")
let valor = document.querySelector("#valor")
let entradas = document.querySelector("#entradas")
let salidas = document.querySelector("#salidas")

export default{
    mas(){
        const wsMas= new Worker('storage/wsIngresos.js', {type:"module"})
        wsMas.postMessage({resources:[valor.value, descripcion.value,divIngreso.innerHTML]})
        wsMas.addEventListener("message",(e)=>{
            descripcion.innerHTML=e.data[0]
            divIngreso.innerHTML="Ingreso"+e.data[0]
            entradas.insertAdjacentHTML('beforeend', e.data[1])
        })
    },

    menos(){
        const wsMenos= new Worker ('storage/wsEgresos.js', {type:"module"})
        wsMenos.postMessage({resources:[
            valor.value, descripcion.value,divEgreso.innerHTML
        ]})
        wsMenos.addEventListener("message", (e)=>{
            descripcion.innerHTML=e.data[0]
            divEgreso.innerHTML="Egreso"+e.data[0]
            salidas.insertAdjacentHTML('beforeend', e.data[1])

        })
    },

    selOp(seleccion){
        seleccion=="op1" ?this.mas() : this.menos()
    },

    operacion(){
        document.querySelector("#btn").addEventListener("click",()=>{
            this.selOp(seleccion.value)
        })
    }

}