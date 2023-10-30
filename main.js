const cards = document.querySelectorAll('.card')
const container = document.querySelector('.container')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
        // loarded is not again show
    })
},
    // console.log(entries)
    {
        threshold: 1,// watit 100% into
        // rootMargin: "-100px"// margin space to display none
        // root: //point out element
    }
)
const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return
    loadNewCards()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector('.card:last-child'))
}, {
    rootMargin: "100px"
})

lastCardObserver.observe(document.querySelector('.card:last-child'))

cards.forEach(card => {
    observer.observe(card)
})

function loadNewCards() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('div')
        card.textContent = "New Card"
        card.classList.add('card')
        observer.observe(card)
        container.append(card)
    }
}