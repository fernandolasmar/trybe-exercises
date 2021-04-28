const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

//console.log(`Meu nome é ${firstName}, minha idade é ${age},  e sou ${job}`);

const customer1 = {
  firstName: "Fernando",
  age: 18,
  job: "Pai",
};
//console.log(customer1);

customer1.lastName = "Lasmar";
console.log(`Meu nome è ${customer1} ('firstName')`);

const customer2 = {
  firstName: "Georg Victor",
  age: 4,
  job: "Filho",
};
customer2["lastName"] = "Lasmar Scchirm";
console.table(customer2);
