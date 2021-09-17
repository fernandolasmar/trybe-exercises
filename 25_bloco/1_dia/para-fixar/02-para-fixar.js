// Utilizando o banco de dados agg_example e a coleção transactions , faça os exercícios:
// 01-Selecione todos os bancos, ou seja, valores do campo bank ;
// _id: "$bank", pega o que estiver no campo bank
db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        total_de_bank: { $sum: 1 }
      }
    }
  ]
);

// 02-Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        total_transações: { $sum: "$value" },
        soma_de_transações: { $sum: 1 }
      }
    }
  ]
);
// 03-Selecione o valor total de transações por banco;
db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        total_transações: { $sum: "$value" },        
      }
    }
  ]
);
// 04-Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        total_transações: { $sum: "$value" }             
      }
    },
    { $match: { "total_transações": { $gt: 1000 } } },
  ]
);