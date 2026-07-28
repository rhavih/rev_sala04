function calcular(){
    var nome = document.getElementById('nome').value 
    var n1 = parseFloat(document.getElementById('nota1').value)
    var n2 = parseFloat(document.getElementById('nota2').value)
    var n3 = parseFloat(document.getElementById('nota3').value)
    // console.log(nome, n1, n2, n3)
    var media = (n1 + n2 + n3) / 3
    // console.log(media)
    var print = `Seu nome é ${nome}, sua notas foram ${n1}, ${n2} e ${n3} e a média entre elas é: ${media.toFixed(2)}`

    document.getElementById('resposta').textContent = print
}