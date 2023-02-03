

action()

function  action() {

    fetch('https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json').then(resposta => {
        return resposta.json()
    }).then(corpo => {

        var urnas = document.getElementById("urnas")

        var name1 = document.getElementById("name1")
        var percentage1 = document.getElementById("percentage1")
        var amount1 = document.getElementById("amount1")
        var vice1 = document.getElementById("vice1")

        var name2 = document.getElementById("name2")
        var percentage2 = document.getElementById("percentage2")
        var amount2 = document.getElementById("amount2")
        var vice2 = document.getElementById("vice2")

        urnas.innerHTML = `Total de Urnas: ${corpo.pst}%` 


        name1.innerHTML = corpo.cand[1].nm
        percentage1.innerHTML = corpo.cand[1].pvap + "%"
        amount1.innerHTML = corpo.cand[1].vap + " votos"
        vice1.innerHTML = "Vice: " + corpo.cand[1].nv

        name2.innerHTML = corpo.cand[0].nm
        percentage2.innerHTML = corpo.cand[0].pvap + "%"
        amount2.innerHTML = corpo.cand[0].vap + " votos"
        vice2.innerHTML = "Vice: " + corpo.cand[0].nv

        console.log(corpo)
    })

}

setInterval(action,10000)

