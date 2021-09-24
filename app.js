const board = document.querySelector('#board')
const colors = ['#04d9ff', '#39ff14', '#bc13fe', '#cfff04', '#fe59c2']
const figureTypes = ['circle', 'square']
const figureQuantity = [200, 300, 400, 500]

setRandomBoard() // click on figure to random board

function activeBoard(figureType, number) {
    board.innerHTML = ''
    for (let i = 0; i < number; i++) {
        const figure = document.createElement('div')
        figure.classList.add(figureType)
    
        figure.addEventListener('mouseover', () => {
            setColor(figure)
        })
    
        figure.addEventListener('mouseleave', () => {
            removeColor(figure)
        })

        figure.addEventListener('click', () => {
            const arr = getRandomBoard()
            activeBoard(arr[0], arr[1])
        })
    
        board.append(figure)
    }
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#dfdfdf'
    element.style.boxShadow = `0 0 2px #fff`
}

function getRandomColor() {
    const i = Math.floor(Math.random() * colors.length)

    return colors[i]
}

function getRandomBoard() {
    const type = Math.floor(Math.random() * figureTypes.length)
    const quantity = Math.floor(Math.random() * figureQuantity.length)

    return Array(figureTypes[type], figureQuantity[quantity])
}

function setRandomBoard() {
    const arr = getRandomBoard()
    activeBoard(arr[0], arr[1])
}