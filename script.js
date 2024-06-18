/**
 * Programa que recebe nome do héroi e quantidade de xp,
 * e retorna o tipo de acordo com a quantidade de xp;
 */
/** VARIAVEIS USADA
 * @var nomeHeroi string;
 * @var quantidadeXp number;
 * @var tipo string;
 * @var resultado string;
 */
var nomeHeroi = "Superman";
var quantidadeXp = 8555;
var tipo;
var resultado;

/**
 * Trecho de validação que atribui o valor a varivel tipo,
 * de acordo com a quantidade de xp do heroi;
 */
if(quantidadeXp < 1000){
    tipo = "ferro";
} else if(1001 < quantidadeXp > 2000){
    tipo = "Bronze";
}else if(2001 < quantidadeXp > 5000){
    tipo = "Prata";
}else if(5001 < quantidadeXp > 7000){
    tipo = "Ouro";
}else if(7001 < quantidadeXp > 8000){
    tipo = "Platina";
}else if(8001 < quantidadeXp > 9000){
    tipo = "Ascendente";
}else if(90001 < quantidadeXp > 10000){
    tipo = "Imortal";
}else{
    tipo = "Radiante";
};

/**
 * Saida do código,
 * exibe o nome do heroi e o tipo de acordo com 
 * quantidade de xp informada
 */
resultado = (`O Heroi de nome ${nomeHeroi} está no nível de ${tipo}`);
console.log(resultado);