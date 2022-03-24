// function popUP() {
//     const button = document.querySelectorAll('.popUp')
//     const classAbrirPopup = document.querySelector('.popUpClicado')

//     button.forEach((element, index) => {
//         element.addEventListener('click', e => {
//             let btnClicado = e.target.name
//             if(btnClicado == element.name){
//                 classAbrirPopup.style.display = "block"
//             }
//         })
//     })
//     fecharPopUP()
//     redirecionamentoParaTS()
// }
// popUP()

// function fecharPopUP() {
//     const btnFechar = document.querySelector('.btnFechar')
//     const classAbrirPopup = document.querySelector('.popUpClicado')

//     btnFechar.addEventListener('click', e => {
//         classAbrirPopup.style.display = "none"
//     })
// }

// function redirecionamentoParaTS() {
//     const abrirTS = document.querySelector(".abrirTS")

//     abrirTS.addEventListener('click', e => {
//     //     if (true) {
//     //         try{
//     //             window.location.href = "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Accessories\\Remote Desktop Connection.lnk"

//     //             mstcsApp.Visible = true; 
//     //        }catch(e){
//     //             alert(e.mensagem); 
//     //        } 
//     //    }else{
//     //         alert( "Seu navegador não suporta este exemplo."); 
//     //    } 
//     // })
//         let teste = document.location.href = "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Accessories"
//         console.log(teste)
//         // let mstcsApp = new ActiveXObject( "mstsc.exe" ); 
//         // let shell = new ActiveXObject( "mstsc.exe" );
//         // shell.run( '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Accessories\\Remote Desktop Connection.lnk"', 1, true);
//     // })

// })
// }

// export{popUP}
