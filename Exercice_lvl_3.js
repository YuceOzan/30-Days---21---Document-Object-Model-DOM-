//1. DEVELOP AN APPLICATION THAT CHANGES STYLE AND FUNCTIONALITY USING 
//   JAVASCRIPT ONLY:
//   THE YEAR COLOR IS CHANGING EVERY 1 SECOND
//   THE DATE AND TIME BACKGROUND COLOR IS CHANGING EVERY 1 SECOND
//   COMPLETED CHALLEND HAS BACKGROUND GREEN
//   ONGOING CHALLENGE HAS BACKGROUND YELLOW
//   COMING CHALLENGES HAVE BACKGROUND RED


function changeStyleAndFunctionality() {
    // Change the color of the h1 element every 1 second
    const h1Element = document.querySelector('h1');
    setInterval(() => {
        h1Element.style.color = getRandomColor();
    }, 1000);

    // Change the background color of the h2 element every 1 second
    const h2Element = document.querySelector('h2');
    setInterval(() => {
        h2Element.style.backgroundColor = getRandomColor();
    }, 1000);

    // Check Status and change background color
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {

        if (item.textContent.toLowerCase().includes('done')) {
            
            item.style.backgroundColor = 'green';
        } else if ( item.textContent.toLowerCase().includes('ongoing')) {
            item.style.backgroundColor = 'yellow'
        } else {
            item.style.backgroundColor = 'red'
        }
    });
}

// Function to get a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

changeStyleAndFunctionality();