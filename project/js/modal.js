//MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')
const openModal = ()=> {
    modal.style.display='block'
    document.body.style.overflow='hidden'
}

const closeModal =()=>{
    modal.style.display='none'
    document.body.style.overflow=''
}
modalTrigger. onclick=()=>{
    openModal()
}

modalCloseButton.onclick=()=>{
    closeModal()
}

modal.onclick = (event)=>{
    if(event.target===modal){
        closeModal()
    }
}

const lastScroll = ()=>{
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
}

const showModalScroll = ()=>{
    if(lastScroll()){
        openModal()
        window.removeEventListener("scroll", showModalScroll)
    }
}

window.addEventListener("scroll", showModalScroll)

setTimeout(()=> openModal(),10000)