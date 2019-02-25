document.addEventListener('DOMContentLoaded', function(){
    let newDiv = document.createElement('div');
    newDiv.className = 'header-container';
    
    let newH1 = document.createElement('h1');
    let h1Content = document.createTextNode('This is an h1');
    
    newH1.appendChild(h1Content);
    newDiv.appendChild(newH1);
    document.body.appendChild(newDiv);
});

