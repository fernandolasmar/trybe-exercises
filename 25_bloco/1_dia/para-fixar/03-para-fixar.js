// 01-Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_history"
    },
  },
])
// 02-Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    }
  },
  { $limit: 4 }
]);
// 03-Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas
db.clients.aggregate([
  { $match: { State: "Florida" } },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    }
  }
]);
