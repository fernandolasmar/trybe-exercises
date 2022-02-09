# Caso o salário seja menor que "R$2.000,00", a pessoa será considerada como estagiária, para salários entre R$2.000,00 e R$5.800,00 júnior, entre R$5.800,00 e R$7.500,00 pleno, entre R$7.500,00 e R$10.500,00 será sênior e qualquer valor acima disto consideraremos líder.

position = ''
salary = 18000

if salary <= 2000:
    position = 'estagiário'
elif 2000 < salary <= 5800:
    position = 'júnior'
elif 5800 < salary <= 7500:
    position = 'pleno'
elif 7500 < salary <= 10500:
    position = 'senior'
else:
    position = 'líder'

print(position)

key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]
