window.onload = function(){
let receber = document.getElementById("receber");
let calcular = document.getElementById("calcular");
let limpar = document.getElementById("limpar");
let copy = document.querySelector(".copy");

    limpar.onclick = () =>{
        let nome = document.getElementById("nome").value = innerHTML = "";
        let altura = Number(document.getElementById("altura").value = innerHTML = ""); 
        let peso = Number( document.getElementById("peso").value = innerHTML = "");  
    }
    calcular.onclick = () =>{ 
        let nome = document.getElementById("nome").value;
        let altura = Number(document.getElementById("altura").value); 
        let peso = Number( document.getElementById("peso").value);   
        if(nome == "" ||altura == "" ||peso ==""){
            window.alert("Preencha os campos corretamente!!");
        }
        else{
            let imc = (peso / (altura * altura));
            let classificacao = ""
            if(imc < 18.5){
                classificacao = "Abaixo do peso";
            }
            else if(imc <= 24.99){   
                classificacao= "Peso ideal";
            }
            else if(imc <= 29.99){
                classificacao = "Sobrepeso";
            }
            else if(imc <=34.99){
                classificacao= "Obesidade grau 1";
            }
            else if(imc <=39.9){
                classificacao = "Obesidade grau 2";
            }
            else{
                classificacao = "Obesidade grau 3";
            }
            receber.innerHTML = nome +", seu imc é: " +imc + " e sua classificação é: " +classificacao;
        }     
    }
    copy.onmouseover = ()=>{
        copy.innerHTML = "Direitos reservados";
    }
    copy.onmouseout = ()=>{
        copy.innerHTML = "&copy;Antunes";
    }
}