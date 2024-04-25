const body = document.querySelector('body');
let gridsize;
const button = document.createElement('button');
button.classList.add('btn');
button.textContent = 'Reset';

button.addEventListener('click', () => {
    gridsize = prompt('What grid size do you want?');
    if (gridsize > 99){
        alert('Size should be less than 100.');
    }
    else{
        document.querySelectorAll('div').forEach( (e) => e.remove())
        addGrid(gridsize);
    }
});
body.appendChild(button);

function addGrid(gridsize){
    const container = document.createElement('div');
    container.classList.add('container');

    for (let i=0; i<gridsize; i++){
        let parentDiv = document.createElement('div');
        parentDiv.classList.add('parentdiv');
    
        for (let j=0; j<gridsize; j++){
            let childDiv = document.createElement('div');
            childDiv.classList.add('childdiv');
            if (j === 0){
                childDiv.classList.add('firstchild');
            }
            else if (j === gridsize-1){
                childDiv.classList.add('lastchild');
            }
            childDiv.style.width = 640/gridsize + 'px';
            childDiv.style.height = 640/gridsize + 'px';
            parentDiv.appendChild(childDiv);
        }
        container.appendChild(parentDiv);
    }
    
    body.appendChild(container);

    let opaque_count = 0;
    let childs = document.querySelectorAll('.childdiv');
    childs.forEach(child => {
        let [rgb1, rgb2, rgb3] = retRandomRGB();

        // // Adding black color trail
        // child.addEventListener('mouseover', () => {
        //     child.style.backgroundColor = '#000';
        //     opaque_count += 10;
        //     child.style.opacity = opaque_count + '%';
        // });
        
        // Adding random RGB trail
        child.addEventListener('mouseover', () => {
            child.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
        });
});
}

function retRandomRGB(){
    let rgb1 = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
    let rgb2 = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
    let rgb3 = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
    return [rgb1, rgb2, rgb3];
}

addGrid(16);









