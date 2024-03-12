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

const parentBlock=document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY=0
let positionZ=parentBlock.offsetWidth - childBlock.offsetWidth
let positionC=parentBlock.offsetHeight- childBlock.offsetHeight


const maxOffsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxOffsetHeight = parentBlock.offsetHeight-childBlock.offsetHeight

const moveBlock = () => {
    if (positionX < maxOffsetWidth ){
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionY < maxOffsetHeight){
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    } else if (positionZ > 0){
        positionZ--
        childBlock.style.left = `${positionZ}px`
        requestAnimationFrame(moveBlock)
    } else if (positionC > 0){
        positionC--
        childBlock.style.top = `${positionC}px`
        requestAnimationFrame(moveBlock)
    }else {
        positionY = 0
        positionX = 0
        positionZ = parentBlock.offsetWidth - childBlock.offsetWidth
        positionC = parentBlock.offsetHeight - childBlock.offsetHeight
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()

// STOP WATCH

const seconds = document.querySelector('#seconds')

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let count = 0
let run = false
let interval = null
start.addEventListener('click', ()=>{
    if (run !== true){
        run=true
        interval = setInterval(()=> {
            count++
            seconds.innerHTML=`${count}`
        },1000)
    }

    stop.addEventListener('click',()=> {
        clearInterval(interval)
        run=false
    })

    reset.addEventListener('click', ()=> {
        clearInterval(interval)
        run=false
        count = 0
        seconds.innerHTML = `${count}`
    })
})



