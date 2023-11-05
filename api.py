import requests

#response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"delete from Compradores where id = ;"})
#print(response.json()['json'])

compradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""}).json()['json']
#totalCompradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Compradores;"""}).json()['json'][0][0]
ingressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Ingressos;"""}).json()['json']
totalIngressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Ingressos;"""}).json()['json'][0][0]
print('COMPRADORES\n', compradores, '\n')
print('INGRESSOS\n', ingressos, '\n')
print('TOTAL INGRESSOS: ', totalIngressos)

with open('output.txt', 'w', encoding='utf-8') as arquivo:
   print('COMPRADORES:\n')
   for linha in compradores:
      linha_unicode = [str(elemento) for elemento in linha]
      arquivo.write(' '.join(linha_unicode) + '\n')
   print('INGRESSOS:\n')
   for linha in ingressos:
      linha_unicode = [str(elemento) for elemento in linha]
      arquivo.write(' '.join(linha_unicode) + '\n')

# somaTotal = 0
# somaPaga = 0
# for c in compradores:
#    somaTotal += int(c[6])
#    if c[6] == 'pago':
#       somaPaga += int(c[6])
# print(somaTotal)

# for c in compradores:
#    if c[0] == '60':
#       print(c)
# print('\n')
# for i in ingressos:
#    if i[6] == 60:
#       print(i)