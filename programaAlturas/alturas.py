# Inicialize as variáveis
soma_alturas = 0
menor_altura = float('inf')  # Inicializado com um valor infinito
maior_altura = float('-inf')  # Inicializado com um valor negativo infinito

# Solicita o número de pessoas
num_pessoas = int(input("Digite o número de pessoas: "))

for i in range(num_pessoas):
    # Solicita a altura da pessoa
    altura = float(input(f"Digite a altura da pessoa {i + 1} (em centímetros): "))
    
    # Atualiza as variáveis
    soma_alturas += altura
    
    if altura < menor_altura:
        menor_altura = altura
    
    if altura > maior_altura:
        maior_altura = altura

# Verifica se foram inseridas alturas
if num_pessoas > 0:
    # Calcula a média das alturas
    media_alturas = soma_alturas / num_pessoas
    
    # Calcula o percentual das alturas
    percentual_menor = (menor_altura / media_alturas) * 100
    percentual_maior = (maior_altura / media_alturas) * 100
    
    # Exibe os resultados
    print(f"Menor altura: {menor_altura} cm ")
    print(f"Maior altura: {maior_altura} cm ")
    print(f"Média das alturas: {media_alturas:.2f} cm")
    print(f"Percentual da menor altura em relação à média: {percentual_menor:.2f}%")
    print(f"Percentual da maior altura em relação à média: {percentual_maior:.2f}%")
else:
    print("Nenhuma altura foi inserida.")

