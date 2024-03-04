//CODIGO PRICIPAL: npm rum test
//vai servir para testasr e ver se ta correto ou não
test("Verificar palavra dentro de  um array", () => {
    const cestaDeFrutas = ['pera', 'Uva', 'Maçã', 'Manga', 'Melancai']
    //esse teste vai verificar se tem uma determinada palavra dentro de um array
    //.toContain serve para verificar em um array se tem determindo dado dentro de um array

    expect(cestaDeFrutas).toContain('Uva')
})


test("Verificat se não cargo de gerente entre os  funcionario", () => {
    const cargos = ['Auxliar', 'assstente', 'analista']
    //o not é para veriricar se não tem algum dado, uma negação
    expect(cargos).not.toContain('Gerente')
})
test("Verificar se há palavra 'Senai",() => {
    const frase = "O senai é o melhor lugar do mundo para passar nossas manhãs!"

    //transforma a variavel frase em tudo maiusculo 
    const fraseMaiuscula = frase.toUpperCase()
    //to.Match vai servir para verificar se tem alguma palavra(sting) dentro de uma variavel
    expect(fraseMaiuscula).toMatch(/SENAI É O MELHOR/)
})