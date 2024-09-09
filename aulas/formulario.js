let proximoid = 1

function adcionarlinha (){
    // entrada de valores para o formulario
    const nome = document.getElementById  ("nome") .value;
    const idde = document.getElementById ("idade") .value;
    const admissao = document.getElementById("admissao").value;
    const demissao = document.getElementById ("demissao").value;

    // se for preenchido vazio 
if(nome === '' || idade === '' || admissao ==='' || demissao === '' )
    alert ("preencha os valores do formulario")

// crie uma tabela se não existir
const tabela = document.getElementById("tabeladados").getElementsByTagName('tbody')(0) ; 

//inserindo uma nova linha
const novalinha = tabela.insertRow; 

//inserindo valores da linha
const celid = novalinha.insertcell(0);
const cellnome = novalinha.insertcell(1);
const cellidade = novalinha.insertcell(2);
const celadmissao = novalinha.insertcell(3);
const celdemissao = novalinha.insertcell(4);

//inserindo osm valores dentro das celulas
celid.innerhtml = proximoid;
cellnome.innerhtml = nome;
celIdade.innerhtml = idade;
celadmissao.innerhtml = admissao;
celdemissao.innerhtml = demissao;
 


}