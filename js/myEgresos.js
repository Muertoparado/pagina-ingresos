import config from "../storage/config.js"
export default{
    showEgresos(){
        config.myEgresos(info);
        Object.assign(this, JSON.parse(localStorage.getItem("myEgresos")));

        const ws= new Worker("storage/wsEgresos.js", {type:"module"});
        ws.postMessage({module:"egresos", data:this.data});

        ws.addEventListener("message", (e)=>{
            document.querySelector("#egreso").innerHTML=e.data;

            ws.terminate();
        })
        
    }
}