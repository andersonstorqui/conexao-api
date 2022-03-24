function filtro() {
    const form = document.querySelector("form")
    const tbody__filtro = document.querySelectorAll(".tbody__filtro")
    let valoresDaTabela = Object.values(tbody__filtro)
    
    form.addEventListener('submit', e => {
        e.preventDefault()
        let nomePesquisado      = buscaPorNome.value
        let cpfPesquisado       = buscaPorCpfCnpj.value
        let statusSelecionado   = buscaPorStatus.value
        let estadoSelecionado   = buscaPorEstado.value
        
        

        let empresasFiltradas = valoresDaTabela.filter( linhaTabela => {
            let nomeEmpresa = linhaTabela.getAttribute('name')
            let cpfCnpj = linhaTabela.getAttribute('cpf')
            let status = linhaTabela.getAttribute('status')
            let uf = linhaTabela.getAttribute('estado')
             console.log(nomeEmpresa == nomePesquisado.toLowerCase() || cpfCnpj == cpfPesquisado || status == statusSelecionado || uf == estadoSelecionado)
        })

    })

}

filtro()

export{ filtro }

/**
 * pegar campo input
 *  pegar valor do campo
 * percorrer tbody
 *  verificar dentro do loop
 */