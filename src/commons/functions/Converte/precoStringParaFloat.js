export default function precoStringParaFloat(dado) {

    if (!(typeof (dado) === "number")) {
        //se o dado for uma string ele chega na forma X.XXX,XX é preciso remover esse , pois a linguagem 
        //só aceita divisão decimal por ponto além de também remover o ponto pois na hora de transformar
        //a string em float ele vai pegar tudo que tem depois do ponto e contar como decimal, por exemplo
        //1.111.32 se eu converter essa string pra float direto ele vai ficar 1.111 e não 1111.32
        let numero = dado.replace('.', '')
        numero = numero.replace(',', '.')

        //pronto, agora é só usar o parseFloat para para transformar a string em float
        numero = parseFloat(numero)
        return numero
    }
    //se o dado de entrada for um número ele já retorna direto
    return dado
}
