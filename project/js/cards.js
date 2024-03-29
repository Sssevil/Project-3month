const cardsBlock = document.querySelector('.cards_inner')

const showCards = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json()
        result.forEach((data)=>{
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            card.innerHTML = `
                <div class="card_photo">
                    <img src="../images/3d-javascript-logo-design-free-png.webp" alt="${data.title}">
                </div>
                <h4>${data.title}</h4>
                <p>age: ${data.body}</p>
            `
            cardsBlock.append(card)
        })
    } catch (error) {
        console.log(error)
    }

}

showCards()