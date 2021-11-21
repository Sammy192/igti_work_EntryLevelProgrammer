

function calcQtdMeses(qtdAnos) {
  return qtdAnos * 12;
}

let jurosAcumuladosCampo = document.getElementById('jurosAcumulados');
function simular() {
  let valorSimulado = document.getElementById('valorSimulado').valueAsNumber;
  let prazoAnos = document.getElementById('prazoAnos').valueAsNumber;
  let jurosAno = document.getElementById('jurosAno').valueAsNumber;

  let prazoMesesCampo = document.getElementById('prazoMeses');
  let jurosMes = document.getElementById('jurosMes');


  //let tabela = document.getElementById('tabela');

  let tabelaTbody = document.getElementById('tabela-tbody');
  let prazoEmMeses = calcQtdMeses(prazoAnos);
  prazoMesesCampo.value = prazoEmMeses;

  let taxaMensal = (1 + jurosAno) ** (1 / 12) - 1;
  jurosMes.value = taxaMensal.toFixed(5)

  let valorParcelas = valorSimulado / prazoEmMeses
  let jurosAcumulados = 0

  for (let i = 0; i < prazoEmMeses; i++) {
    let saldoDevedor = valorSimulado - valorParcelas * i;
    let jurosPrestacao = saldoDevedor * taxaMensal;
    let totalPrestacao = jurosPrestacao + valorParcelas;
    jurosAcumulados += jurosPrestacao;


    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = i +1;

    let td2 = document.createElement("td");
    td2.textContent = valorParcelas.toFixed(2);

    let td3 = document.createElement("td");
    td3.textContent = jurosPrestacao.toFixed(2);

    let td4 = document.createElement("td");
    td4.textContent = totalPrestacao.toFixed(2);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tabelaTbody.appendChild(tr);
   
  }

  jurosAcumuladosCampo.value = jurosAcumulados.toFixed(2)

}



