function Nao(t){
    var button = t;
    button.style.position = 'absolute'
    button.style.bottom = RandomNumbers(10,80)
    button.style.left = RandomNumbers(10,80)

    console.log(button)
}

function RandomNumbers(min, max){
    return (Math.random()*(max-min) + min) + '%'
}