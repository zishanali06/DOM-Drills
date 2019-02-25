//add listender to document to listen for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    let newColors = ['red', 'blue', 'green', 'maroon', 'aqua', 'purple', 'pink', 'yellow'];

    //funtion to generate a random number to select color from array
    function getRndInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    //create new div
    let newDiv = document.createElement('div');
    newDiv.className = 'header-container';

    //create new h1
    let newH1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');
    newH1.className = 'h1';

    //place h1 in div and div inside the body
    newH1.appendChild(h1Text);
    newDiv.appendChild(newH1);
    document.body.appendChild(newDiv);

    //funtion to change color of element
    function changeColorToNew(element) {
        //add eventlistener to the element to change to random color
        element.addEventListener('dblclick', function () {
            //creating random number to select a color in the newColors array
            let colorSelection = getRndInt(0, 8);

            //changed color of text to random selected color
            element.style.color = newColors[colorSelection];
        });
    };

    //calling funtion to change h1 color on doubleclick
    changeColorToNew(newH1);

    //create a h2 element with text and add to head-container div
    let newH2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    newH2.appendChild(h2Text);
    newDiv.appendChild(newH2);
    newH2.className = 'h2';
    changeColorToNew(newH2);

    //create a h3 element with text and add to head-container div
    let newH3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    newH3.appendChild(h3Text);
    newDiv.appendChild(newH3);
    newH3.className = 'h3';
    changeColorToNew(newH3);

    //create a h4 element with text and add to head-container div
    let newH4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    newH4.appendChild(h4Text);
    newDiv.appendChild(newH4);
    newH4.className = 'h4';
    changeColorToNew(newH4);

    //create a h5 element with text and add to head-container div
    let newH5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    newH5.appendChild(h5Text);
    newDiv.appendChild(newH5);
    newH5.className = 'h5';
    changeColorToNew(newH5);

    //create a h6 element with text and add to head-container div
    let newH6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    newH6.appendChild(h6Text);
    newDiv.appendChild(newH6);
    newH6.className = 'h6';
    changeColorToNew(newH6);
});



