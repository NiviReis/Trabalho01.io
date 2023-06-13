var contador = 0;
var topicos = [
  "<h3>Planejamento (1/4)</h3> <b>1.</b> Identifique o propósito do site.<br> <br> <b>2.</b> Determine o modelo de testes escolhido e explique-o <br> <br> <b>3.</b> Defina seus <b>objetivos</b> e <b>tarefas</b> para teste e os documente abaixo. <br> <br> <b>4.</b> Relate e especifique os recursos usados nos testes (equipamento, equipe, etc.) <br><br> <input id='input_Planejamento' placeholder='Digite aqui...'></input>",
  "<h3>Elaboração (2/4)</h3> <b>1.</b> Escreva de forma organizada, todos os testes escolhidos: <br> <br> <input id='input_Elaboracao'></input>",
  "<h3>Execução (3/4)</h3> <b>1.</b> Digite os testes <b>bem-sucedidos</b> na esquerda, os <b>regulares</b> no meio e os <b>falhos</b> na direita <br> <br> <input id='input_Aprovado' placeholder='Aprovado' class='input_exec'></input> <input id='input_Regular' placeholder='Regular' class='input_exec'></input>  <input id='input_Reprovado' placeholder='Reprovado' class='input_exec'></input> ",
  "<h3>Conclusão (4/4)</h3> <b>1.</b> Descreva o resultado geral dos testes. <br> <br> <b>2.</b> Dê o Feedback final. <br> <br> <input id='input_Conclusao'></input>"
];

var inputs = [];

function avancar() {

    if (contador===1){
    armazenar_inputs0();
    }
    
    if (contador===2){
        armazenar_inputs1();
    }

    if (contador===3){
        armazenar_inputs2();
   
        
    }

    if (contador===4){
        armazenar_inputs5();
    }

  if (contador >= 0 && contador < topicos.length) {
    console.log(contador);
    var texto = document.getElementById("txtTopico");
    texto.innerHTML = topicos[contador];
    contador++;
    console.log(contador);
  }
}

function voltar() {
  contador = contador - 2;
  console.log(contador);
  var texto = document.getElementById("txtTopico");
  texto.innerHTML = topicos[contador];
  console.log(contador);
  contador++;
}

function armazenar_inputs0() {
    var input_Planejamento = document.getElementById("input_Planejamento").value;
    inputs[0] = input_Planejamento;
    document.getElementById("input0").innerText = input_Planejamento;
  }
  
  function armazenar_inputs1() {
    var input_Elaboracao = document.getElementById("input_Elaboracao").value;
    inputs[1] = input_Elaboracao;
    document.getElementById("input1").innerText = input_Elaboracao;
  }
  
  function armazenar_inputs2() {
    var input_Aprovado = document.getElementById("input_Aprovado").value;
    inputs[2] = input_Aprovado;
    document.getElementById("input2").innerText = input_Aprovado;
    var input_Regular = document.getElementById("input_Regular").value;
    inputs[3] = input_Regular;
    document.getElementById("input3").innerText = input_Regular;
    var input_Reprovado = document.getElementById("input_Reprovado").value;
    inputs[4] = input_Reprovado;
    document.getElementById("input4").innerText = input_Reprovado;
  }   
  
  function armazenar_inputs5() {
    var input_Conclusao = document.getElementById("input_Conclusao").value;
    inputs[5] = input_Conclusao;
    document.getElementById("input5").innerText = input_Conclusao;
  }