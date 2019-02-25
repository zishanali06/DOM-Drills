//add listender to document to listen for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
    //create new div
    let newDiv = document.createElement('div');
    newDiv.className = 'header-container';
    
    //create new h1
    let newH1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');
    newH1.className = 'h1';

    let newColors = ['red', 'blue', 'green', 'white', 'aqua', 'purple', 'pink', 'yellow'];

    //funtion to generate a random number to select color from array
    function getRndInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    
    //place h1 in div and div inside the body
    newH1.appendChild(h1Text);
    newDiv.appendChild(newH1);
    document.body.appendChild(newDiv);

    //create a h2 element with text and add to head-container div
    let newH2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    newH2.appendChild(h2Text);
    newDiv.appendChild(newH2);
    newH2.className = 'h2';

    //create a h3 element with text and add to head-container div
    let newH3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    newH3.appendChild(h3Text);
    newDiv.appendChild(newH3);
    newH3.className = 'h3';

    //create a h4 element with text and add to head-container div
    let newH4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    newH4.appendChild(h4Text);
    newDiv.appendChild(newH4);
    newH4.className = 'h4';

    //create a h5 element with text and add to head-container div
    let newH5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    newH5.appendChild(h5Text);
    newDiv.appendChild(newH5);
    newH5.className = 'h5';

    //create a h6 element with text and add to head-container div
    let newH6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    newH6.appendChild(h6Text);
    newDiv.appendChild(newH6);
    newH6.className = 'h6';
});



