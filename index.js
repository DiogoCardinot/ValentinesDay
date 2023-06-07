function Nao(){
    var buttonComputer = document.querySelector('.no-button-computer');
    buttonComputer.style.position = 'absolute'
    buttonComputer.style.bottom = RandomNumbers(10,90)
    buttonComputer.style.left = RandomNumbers(10,90)
    var buttonCelular = document.querySelector('.no-button-celular');
    buttonCelular.style.position = 'absolute'
    buttonCelular.style.bottom = RandomNumbers(10,50)
    buttonCelular.style.left = RandomNumbers(10,60)

}

function RandomNumbers(min, max){
    return (Math.random()*(max-min) + min) + '%'
}