//add listender to document to listen for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
    //create new div
    let newDiv = document.createElement('div');
    newDiv.className = 'header-container';
    
    //create new h1
    let newH1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');
    
    //place h1 in div and div inside the body
    newH1.appendChild(h1Text);
    newDiv.appendChild(newH1);
    document.body.appendChild(newDiv);

    //create a h2 element with text and add to head-container div
    let newH2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    newH2.appendChild(h2Text);
    newDiv.appendChild(newH2);

    
});

