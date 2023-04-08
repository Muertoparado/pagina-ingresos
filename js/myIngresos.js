import config from "../storage/config.js"
export default{
    showIngresos(){
        config.myIngresos(info);
        Object.assign(this, JSON.parse(localStorage.getItem("myIngresos")));

        const ws= new Worker("storage/wsIngresos.js", {type:"module"});
        ws.postMessage({module:"ingresos", data:this.data});

        ws.addEventListener("message", (e)=>{
            document.querySelector("#ingreso").innerHTML=e.data;

            ws.terminate();
        })
        
    }
}