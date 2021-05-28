/*A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
*/
const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0)
    return 'Vazio!';
  const technologyList = arrayTechnologies.sort().map((technology) => ({
    tech: technology,
    name,
  }));
  return technologyList;  
};

module.exports = techList;
