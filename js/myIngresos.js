export default{
    showIngresos({obj}){
        const ws= new Worker("storage/wsIngresos.js", {type:"module"});
        ws.postMessage({module:"ingresos", data: obj});

        ws.addEventListener("message", (e)=>{
            document.querySelector("#divIngreso").innerHTML=e.data;
            ws.terminate();
        })
        
    }
}