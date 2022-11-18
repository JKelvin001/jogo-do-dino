let personagem = document.querySelector('#personagem')
let hitbox = document.querySelector('#hitbox')

function jump(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }
    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500);
}
var colisao = setInterval(function(){
    
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var esquerdaHitbox = parseInt(
        window.getComputedStyle(hitbox).getPropertyValue('left')
    )
        if(esquerdaHitbox < 20 && esquerdaHitbox > 0 && topoPersonagem >= 230){
            hitbox.style.animation = 'none'
            hitbox.style.display = 'none'
            alert('Você Mamou!!!')
        }
}, 10)