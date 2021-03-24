let pecaDeXadrez = "torre";

switch (pecaDeXadrez) {
    case "rei":
        console.log("Move uma casa para qualquer direção");
        break;
    case "bispo":
        console.log("Move em diagonal");
        break;
    case "rainha":
        console.log("Move para qualquer lado, sem restrição de casa");
        break;
    case "torre":
        console.log("Move em linhas, horizontais e verticais sem restrição de casa");
        break;
    case "cavalo":
        console.log("Move em L");
        break;
    case "peão":
        console.log("Move uma casa em qualquer direção, para frente");
        break;
}