//  PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')
const blockPhone = document.querySelector('.inner_phone_block')

const regExp=/^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click',()=> {
    if (regExp.test(phoneInput.value.trim())){
        phoneSpan.innerHTML='ok'
        phoneSpan.style.color='green'
        blockPhone.style.boxShadow='rgba(38, 246, 82, 0.25) 0px 30px 60px -18px inset, rgba(10, 114, 3, 0.3) 0px 50px 100px -20px inset'
    } else  {
        phoneSpan.innerHTML='not ok'
        phoneSpan.style.color='red'
        blockPhone.style.boxShadow='rgba(243, 70, 70, 0.25) 0px 30px 60px -18px inset, rgba(243, 21, 2, 0.3) 0px 50px 100px -20px inset'
    }
})

//TAB SLIDER

const tabContents = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent =document.querySelectorAll('.tab_content_items')


const hideContent = () => {
    tabContents.forEach((content)=>{
        content.style.display='none'
    })

    tabs.forEach((tab)=> {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent=(index=0)=>{
    tabContents[index].style.display='flex'
    tabs[index].classList.add('tab_content_item_active')
}

hideContent()
showTabContent()

tabsParent.forEach((parent)=>{
    parent.onclick=(event)=>{
        if(event.target.classList.contains('tab_content_item')){
            tabs.forEach((tab,tabIndex)=>{
                if(event.target===tab){
                    hideContent()
                    showTabContent(tabIndex)
                }
            })
        }
    }
})

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

//CONVERTER

const somInput=document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = (element,targetElem,secondTargetElem,current) =>{
    element.oninput= async ()=>{
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()

            switch (current) {
                case 'som':
                    targetElem.value=(element.value / data.usd).toFixed(2)
                    secondTargetElem.value=(element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElem.value=(element.value * data.usd).toFixed(2)
                    secondTargetElem.value=(element.value * data.usdEur).toFixed(2)
                    break
                case 'eur':
                    targetElem.value=(element.value * data.eur).toFixed(2)
                    secondTargetElem.value=(element.value / data.usdEur).toFixed(2)
                    break
                default:
                    break
            }
            element.value === '' && (targetElem.value = '' || (secondTargetElem.value =''))
        } catch (error) {
            console.log(error)
        }

    }
}

converter(somInput,usdInput,eurInput,'som')
converter(usdInput,somInput,eurInput,'usd')
converter(eurInput,somInput,usdInput,'eur')

// CARD SWITCHER

const cardBlock = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 1

const showCard = async ()=> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        cardBlock.innerHTML= `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
        <span>${data.id}</span>
        `
    } catch (error) {
        console.log(error)
    }

}
showCard()

btnNext.onclick = ()=> {
    count++
    if( count > 200){
        count=1
    }
    showCard()
}

btnPrev.onclick = ()=> {
    count--
    if( count < 1){
        count=200
    }
    showCard()
}

// WEATHER

const searchInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const URL='http://api.openweathermap.org/data/2.5/weather'
const citySearch = () =>{
    searchInput.oninput = async (event) =>{
        try {
            const response = await fetch(`${URL}?q=${event.target.value}&appid=${API_KEY}`)
            const data = await response.json()
            city.innerHTML= data.name ? data.name : 'город не найден...'
            temp.innerHTML= data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'
        } catch (error){
            console.log(error)
        }
    }
}
citySearch()








