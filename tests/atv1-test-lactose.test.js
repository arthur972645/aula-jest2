const receita1 = {
    ovo: 2,
    margarina: '100g',
    leite: true
}
const receita2 = {
    ovo: 2,
    margarina: '100g',
    leite: false
}

test('verificar se  tem lactose', () => {
    expect(receita1).not.toMatchObject(receita2)
})