export let wsContent={
    showContent(d1){
        let contentTitulo= `${d1.titulo}`
        let contentCaracter= `${d1.caracter}`
        let contentIngreso= `${d1.ingreso}`
        let contentEgreso= `${d1.egreso}`

        return [contentTitulo, contentCaracter, contentIngreso,contentEgreso]
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsContent[`${e.data.module}`](e.data.data))
})