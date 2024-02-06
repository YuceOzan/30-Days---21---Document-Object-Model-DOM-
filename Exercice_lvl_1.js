//1. CREATE 4 P ELEMENTS IN INDEX FILE AND GET THE FIRST ONE USING TAG NAME

let firstParagraph = document.querySelector('p')
console.log(firstParagraph)

//2. GET EACH OF THE PARAGRAPH USING ID

let id1 = document.querySelector('#first')
console.log(id1)

let id2 = document.querySelector('#second')
console.log(id2)

let id3 = document.querySelector('#third')
console.log(id3)

let id4 = document.querySelector('#fourth')
console.log(id4)

//3. GET ALL P AS NODELIST USING THEIR TAG NAME

let paragraphs = document.querySelectorAll('p')
console.log(paragraphs)
console.log(paragraphs.length)


//4. LOOP THROUGH THE NODELIST AND GET THE CONTENT OF EACH PARAGRAPH

for (let i = 0 ; i < paragraphs.length ; i++) {
    console.log(paragraphs[i])
};

//5. SET A TEXT CONTENT TO PARAGRAPH FOURTH

paragraphs[3].textContent = 'Fifth Paragraph'

//6. SET ID AND CLASS ATTRIBUTE FOR ALL THE PARAGRAPHS USING DIFFERENT ATTRIBUTE SETTING METHODS

paragraphs[0].className = 'Paragraph'
paragraphs[0].id = 'First-Paragraph'
console.log(paragraphs)

paragraphs[1].setAttribute('class', 'Paragraph')
paragraphs[1].setAttribute('id', 'Second-Paragraph')
console.log(paragraphs)

paragraphs[2].classList.add('Paragraph')
paragraphs[2].id = 'Third-Paragraph'
console.log(paragraphs)

paragraphs[3].setAttribute('class', 'Paragraph')
paragraphs[3].setAttribute('id', 'Fourth-Paragraph')
console.log(paragraphs)

