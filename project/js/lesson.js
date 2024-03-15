//  PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp=/^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click',()=> {
    if (regExp.test(phoneInput.value.trim())){
        phoneSpan.innerHTML='ok'
        phoneSpan.style.color='green'
    } else  {
        phoneSpan.innerHTML='not ok'
        phoneSpan.style.color='red'
    }
})

//TAB SLIDER

const tabContents = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent =document.querySelector('.tab_content_items')


const hideContent = () => {
    tabContents.forEach((content)=>{
        content.style.display='none'
    })

    tabs.forEach((tab)=> {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent=(index=0)=>{
    tabContents[index].style.display='block'
    tabs[index].classList.add('tab_content_item_active')
}

hideContent()
showTabContent()

tabsParent.onclick=(event)=>{
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab,tabIndex)=>{
            if(event.target===tab){
                hideContent()
                showTabContent(tabIndex)
            }
        })
    }
}

let interval

const autoTabs =(i=0)=> {
    interval = setInterval(()=>{
        i++
        if( i > tabContents.length-1){
            i=0
        }
        hideContent()
        showTabContent(i)
    },3000)
}
autoTabs()

tabs.forEach((tab)=>{
    tab.onclick=(e)=>{
        clearInterval(interval)
        autoTabs(Array.from(tabs).indexOf(e.target))
    }
})















