// criando função
function vailidarNumero(){
    //criando variavel numero
    let numero = document.getElementById("numero").value;

    let mensagem = document.getElementById("mensagem");

    //item 7.10.3
    if(numero === "") {
        //item 7.10.4
        mensagem.textContent="Por favor, insira um número";

        //item 7.10.5
        mensagem.style.color="red";

        //item 7.10.6
    } else{

            //item 7.10.7
            numero = parseInt(numero);

            //item 7.10.8
            if(numero>10){
                //item 7.10.9
                mensagem.textContent = "O número é maior do que 10";

                //item 7.10.10
                mensagem.style.color="purple" //vai ser roxo pq verde lembra o palmeiras

                //item 7.10.11
            }
            //item7.10.12
            else if(numero<5){
                //item 7.10.13
                mensagem.textContent= "O número é maior que 5, mas menor ou igual a 10.";
                //item 7.10.14
                mensagem.style.color="orange";
                //item 7.10.15
            } else{
                mensagem.textContent= "O número é 5 ou menor"
                mensagem.style.color = "blue"
            }
       
        }
}
