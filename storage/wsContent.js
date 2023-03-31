export let wsContent={
    seccion1(dato){
      return  `<h2>${dato.title.ti}</h2>
        <h1 id="dineroTotal " class="bg-gradient">${dato.dineroT}</h1>
        <div class="container span mt-5 p-3 bg-primary">
            <span>${dato.subt1.name}</span>
            <span id="ningresos">${thi.subt1.dineroIn}
            </span>
    
        </div>
        <div class="container p-3 span mt-5 bg-warning">
            <span>${dato.subt2.name}</span>
            <span id="ningresos">${dato.subt2.dineroOut}</span>
            </span>
    
        </div>`;
    },

    seccion2(dato){
        return ` <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
        data-bs-toggle="dropdown" aria-expanded="false">
        ${this.seleccionar.name}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">${this.seleccionar.op1}</a></li>
        <li><a class="dropdown-item" href="#">${this.seleccionar.op2}</a></li>
    </ul>

    <input type="text" placeholder="Ingresar descripcion">
    <input type="number" name="numero">
    <button class="btn bg-primary"> ${this.btn}</button>

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
    </div>`
    }

}

    self.addEventListener("mesage", (e)=>{
        postMessage(wsContent[`e.data.modulo`])

    })
