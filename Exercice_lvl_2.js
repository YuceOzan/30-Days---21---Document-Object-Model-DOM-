//1. CHANGE STYLE OF EACH PARAGRAPH USING JAVASCRIPT (color, background, border, font-size, font-family)

//2. SELECT ALL PARAGRAPHS AND LOOP THROUGH EACH ELEMENTS AND GIVE FIRST AND THIRD PARAGRAPH A COLOR OF GREEN, 
//   AND SECOND AND FOURTH THE RED COLOR

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((paragraph, i) => {
    paragraph.style.fontFamily = "'Times New Roman', Times, serif";
    paragraph.style.border = "solid, black, 1px";
    
    paragraph.style.fontSize = "20px";
    if(i%2 ===0) {
        paragraph.style.color = "green";
        paragraph.style.background = "pink";
    }else{
        paragraph.style.color = "red";
        paragraph.style.background = "black";
    }
})

//3. SET TEXT CONTENT, ID AND CLASS TO EACH PARAGRAPH

paragraphs[0].setAttribute('class', 'Example')
paragraphs[0].setAttribute('id', 'P1')
paragraphs[0].textContent = 'Paragraph The First'

paragraphs[1].setAttribute('class', 'Example')
paragraphs[1].setAttribute('id', 'P2')
paragraphs[1].textContent = 'Paragraph The Second'

paragraphs[2].setAttribute('class', 'Example')
paragraphs[2].setAttribute('id', 'P3')
paragraphs[2].textContent = 'Paragraph The Third'

paragraphs[3].setAttribute('class', 'Example')
paragraphs[3].setAttribute('id', 'P4')
paragraphs[3].textContent = 'Paragraph The Fourth'


