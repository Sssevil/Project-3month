// GMAIL BLOCK

const gmailInput=document.querySelector('#gmail_input')
const gmailButton= document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp=/^[a-zA-Z0-9._-]{3,}@gmail\.com$/

gmailButton.addEventListener('click',()=> {
    if (regExp.test(gmailInput.value.trim())){
        gmailResult.innerHTML='Почта валидна'
        gmailResult.style.color='green'
    } else  {
        gmailResult.innerHTML='Почта не валидна'
        gmailResult.style.color='red'
    }

})


// Move Block

const childBlock = document.querySelector('.child_block')

let positionChild = 0

const moveBlock = () => {
    if (positionChild < 448){
        positionChild++
        childBlock.style.left = `${positionChild}px`
         requestAnimationFrame(moveBlock)
    }
}
moveBlock()