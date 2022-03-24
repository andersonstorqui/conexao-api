// const { db } = require("../mock/db.json")
// console.log(db)

function criandoDOM() {
    
    fetch(`http://localhost:3000/MV/empresasListadas`).then(res => res.json()).then(listaEmpresas => {
        const section__details = document.querySelector('.section__details')
        let newArray = listaEmpresas.Empresas
        
        newArray.forEach((element, index) => {
            let nomesEmpresas = element._nome.nome
            let chavesObjetos = element._nome
            let valoresObjetos = element._nome
            const details = document.createElement('details')
            const summary = document.createElement('summary')
            const table = document.createElement('table')
            const th = document.createElement('th')
            const tr = document.createElement('tr')
            const td = document.createElement('td')
            const trbody = document.createElement('tr')


            for(let i in chavesObjetos){
                tr.innerText += Object.keys(chavesObjetos[i])
            }


            summary.innerText += nomesEmpresas

            for(let i in valoresObjetos){
                trbody.innerText += Object.values(valoresObjetos[i])
            }


            details.appendChild(summary)
            details.appendChild(table)
            th.appendChild(tr)
            td.appendChild(trbody)
            table.appendChild(th)
            table.appendChild(td)
            section__details.appendChild(details)




            // const h5 = document.createElement('h5')
            // const table = document.createElement('table')
            // const th = document.createElement('th')
            // const tr = document.createElement('tr')
            // const trh5 = document.createElement('tr')
            // const td = document.createElement('td')
            // let detalhesEmpresas;
            // const p = document.createElement('p')
            // for(let i in valoresObjetos){
            //     detalhesEmpresas = Object.values(valoresObjetos[i])
            //     p.innerText += detalhesEmpresas
            // }
            // const details = document.createElement('details')
            // const summary = document.createElement('summary')
            // h5.innerText = chavesObjetos
            // tr.appendChild(p)
            // trh5.appendChild(h5)

            // th.appendChild(trh5)
            // td.appendChild(tr)
            // table.appendChild(th)
            // table.appendChild(td)
            // summary.innerText += nomesEmpresas
            // details.appendChild(summary)
            // details.appendChild(table)
            
            // section__details.appendChild(details)
        })

    })
}
criandoDOM()


export {criandoDOM}