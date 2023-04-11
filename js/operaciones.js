import config from "../storage/config.js"

let seleccion = document.querySelector("#seleccion")
let dinero = document.querySelector("#dinero")
let divIngreso = document.querySelector("#divIngreso")
let divEgreso = document.querySelector("#divEgreso")
let descripcion = document.querySelector("#descripcion")
let valor = document.querySelector("#valor")
let entradas = document.querySelector("#entradas")
let salidas = document.querySelector("#salidas")
let cards_plus_content = []
let cards_less_content = []

export default{
    data:{ 
        entradas,
        salidas
    },
    
    render_local_cards(div, item) {
        if(!localStorage.getItem(item)) return 

        let cards = JSON.parse(localStorage.getItem(item))
        for(let x = 0; x < cards.length; x++){
            div.insertAdjacentHTML('beforeend', cards[x])
        }
    },

    mas(){
        const wsMas= new Worker('storage/wsIngresos.js', {type:"module"})
        console.log(valor)
        wsMas.postMessage({resources:[valor.value, descripcion.value,dinero.innerHTML]})
        wsMas.addEventListener("message",(e)=>{
            cards_plus_content.push(e.data[1])
            config.setLocal('cards_plus', cards_plus_content)
            dinero.innerHTML = e.data[0]
            divIngreso.innerHTML="Ingreso"+e.data[0]
            entradas.insertAdjacentHTML('beforeend', e.data[1])
        })
    },

    menos(){
        const wsMenos= new Worker ('storage/wsEgresos.js', {type:"module"})
        wsMenos.postMessage({resources:[
            valor.value, descripcion.value,dinero.innerHTML
        ]})
        wsMenos.addEventListener("message", (e)=>{
            cards_less_content.push(e.data[1])
            config.setLocal('cards_less', cards_less_content)
            dinero.innerHTML=e.data[0]
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