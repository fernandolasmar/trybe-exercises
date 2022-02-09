# int
a = 5
type(a)
print(type(a))

# float
a = 5.0
print(type(a))

# complex
3 + 4j
print(3 + 4j)

(3 + 4j) + 4
print((3 + 4j) + 4)

a = 5j
print(type(a))

fruits = ['orange', 'apple', 'grape', 'pineapple']

print(fruits[0]) # orange
print(fruits[-1]) # pineapple

fruits.append('banana') # adicionando uma nova fruta
print(fruits)

fruits.remove('pineapple') # remove uma fruta
print(fruits)

fruits.extend(['pear', 'melon', 'kiwi']) # add uma lista de frutas a lista original
print(fruits)

print(fruits.index('apple')) # retorna o indice
# print(fruits)

fruits.sort() # ordena a lista
print(fruits)

trybe_course = ['Introdução', 'Front-end', 'Back-end']

# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
trybe_course.append('Ciência da Computação')
print(trybe_course)

# Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course.remove('Introdução')
trybe_course.append('Fundamentos')
print(trybe_course)

# tuplas
user = ('Cássio', 'Botaro', 42)

print(user[0])

# conjuntos
permissions = {'member', 'group'}

permissions.add('root') # Add um novo
print(permissions)

permissions.add('member') # como o item ja existe nada acontece
print(permissions)

print(permissions.union({'user'})) # retorna a uniao

print(permissions.intersection({'user', 'member'})) # retorna a intersecção

print(permissions.difference({'user'})) # retorna a diferença

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.
var = set('Fernando')
print(var)

# Conjuntos imutaveis (frozenset)
permissions = frozenset(['member', 'group'])
print(permissions)

print(permissions.union({'user'}))
print(permissions.intersection({'user', 'member'}))
print(permissions.difference({'user'}))

# Dicionários (dict)
people_by_id = {1: 'Cássio', 2: 'João', 3: 'Felipe'}

people_by_name = {'Cássio': 1, 'João': 2, 'Felipe': 3}

print(people_by_id[1])

del people_by_id[1] # elementos podem ser removidos com a palavra chave del
print(people_by_id)

print(people_by_id.items()) # um conjunto é retornado com tuplas contendo chaves e valores


# ex 8, 9 e 10
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 8: O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando object.key ?

# Exercício 9: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
info.update({'recorrente': 'Sim'})
print(info)

# Exercício 10: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.
del info['origem']
print(info)

# definimos somente o valor de parada
print(list(range(5)))

# definimos o valor inicial e o de parada
print(list(range(1, 6)))

# definimos valor inicial, de parada e modificamos o passo para 2
print(list(range(1, 11, 2)))

# podemos utilizar valores negativos para as entradas também
print(list(range(10, 0, -1)))

# Exercício 11: Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.

# Exercício 12: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?
