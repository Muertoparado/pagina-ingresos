export let wsIngresos = {
    showIngreso(titulo,valor){
             
        return`
    <div class="card" style ="width: 18rem;">
        <div class="card-body text-danger">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">${valor}</p>        
        <a href="#" class="btn btn-danger">Eliminar</a>
        </div>
    </div>
        `
       /*  let plantilla = "";
        d1.forEach((val, id) => {
            plantilla += `div class="container mt-5">
            
                        <tbody>
                            <tr>
                                <td>${val.titulo}</td>
                                <td>${val.dinero}</td>
                            </tr>
                        </tbody>
                    `
        });
        return `<div class="row">
        <div class="col-6 modal-dialog">
            <table class="ctable table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="row text-center">Ing</th>
                    </tr>
                </thead>
                ${plantilla}
                </table>
                </div>` */
    },
    parseString(total) {
        let convertion = total.split('')
        convertion.shift('$')
        return convertion.join('')
    },

    operationPlus(entrada, saldo) {
        let total_parse = this.parseString(saldo)
        let total = parseInt(total_parse) + parseInt(entrada)
        let convertion = String(total).split('')
        convertion.unshift('$')
        return convertion.join('')
    }
}

self.addEventListener("message", (e)=>{
    console.log(e.data.resources[0])
    postMessage(
        [
            wsIngresos.operationPlus(e.data.resources[0], e.data.resources[2]),
            wsIngresos.showIngreso(e.data.resources[0],e.data.resources[1])
        ]);
})