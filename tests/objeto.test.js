//toMatchObject(): vai comparar as inforações de dentro de um obejto

const carroDesejado = {
    portas: 4,
    cor: 'preto',
    mecanica: {
        motorizacao: ['V8', 'turbo', '250cv']
    },
    tetoSolar: true,
}

const carroAVenda = {
    portas : 4,
    cor: 'grafite',
    mecanica: {
        motorizacao: ['V6','assipirado', '140cv']
    },
    tetoSolar: false,
    cambio: 'manual'
}
const carroOlx = {
    portas: 4,
    cor: 'preto',
    mecanica: {
        motorizacao: ['V8', 'turbo', '250cv'],
        cambio: 'automatico',
        tracao: '4x4'

    },
    tetoSolar: true,
    ano : 2022,
    wifi: true,
    assistenteDeRelacionamento: true,
    centralMultimidia: true,
    

}
test('Caracteristica do carro desejado', () => {
    expect(carroOlx).toMatchObject(carroDesejado)
    //ta comparando o carroOlx com o carro Desejado, ja que os dois tem as mesmas caractericas e o da olx tem mais, ele passa
    //se fosse o contrario, estaria comparando o carro desejado com o carro olx, so que o carro desejado não tem todos os dados do carroOlx com isso não passa
})