const personsBlock= document.querySelector('.persons_block')

const request = new XMLHttpRequest()
request.open("GET","persons.json")
request.setRequestHeader("Content-type","application/json")
request.send()
request.addEventListener('load', ()=>{
    const objPersons = JSON.parse(request.response)
    console.log(objPersons)
    objPersons.forEach((person)=>{
        const personCard = document.createElement('div')
        personCard.setAttribute('class', 'person_card')
        personCard.innerHTML = `
           <div class="person_photo">
               <img src="${person.photo}" alt="${person.name}">
           </div>
           <h3>${person.name}</h3>
           <span>age: ${person.age}</span>
        `
        personsBlock.append(personCard)
    })
})