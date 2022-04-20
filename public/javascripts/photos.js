document.addEventListener('DOMContentLoaded',main);

function main(){
    //click photo so introduction is made. Click introduction, introduction disappears.
    const photo0 = document.getElementsByClassName('box')[0];
    //console.log(photo1);
    photo0.addEventListener('click',p0clicked);

    // photo1
    const photo1 = document.getElementsByClassName('box')[1];
    photo1.addEventListener('click',p1clicked);

    // photo2
    const photo2 = document.getElementsByClassName('box')[2];
    photo2.addEventListener('click',p1clicked);

    // photo3
    const photo3 = document.getElementsByClassName('box')[3];
    photo3.addEventListener('click',p1clicked);

    // photo4
    const photo4 = document.getElementsByClassName('box')[4];
    photo4.addEventListener('click',p1clicked);

    // photo5
    const photo5 = document.getElementsByClassName('box')[5];
    photo5.addEventListener('click',p1clicked);
}

function p1clicked(evt){
    let console_box = document.createElement('div');
    console_box.setAttribute('width','400');
    console_box.setAttribute('height','80');
    console_box.setAttribute('position','absolute');
    console_box.setAttribute('left','0');
    console_box.setAttribute('top','300px');
    console_box.setAttribute('background-color','white');
    console_box.setAttribute('z-index','2');
    console_box.setAttribute('display','inline');
    console_box.textContent = 'This is the picture I took in 2020 Fall at a live house in Shanghai. \n The band is called Brownie, and this photo was adapted by the band as their social account cover';
    console_box.addEventListener('click', function(evt){
        evt.target.parentNode.removeChild(evt.target);
        disapper(evt.target);
    });
    evt.target.appendChild(console_box);
}
function p0clicked(evt){
    let console_box = document.createElement('div');
    console_box.setAttribute('width','400');
    console_box.setAttribute('height','200');
    console_box.setAttribute('background-color','white');
    console_box.setAttribute('z-index','2');
    console_box.textContent = 'This is the picture I took in 2020 Fall at a live house in Shanghai. \n The band is called Brownie, and this photo was adapted by the band as their social account cover';
    console_box.addEventListener('click', function(evt){
        evt.target.parentNode.removeChild(evt.target);
        disapper(evt.target);
        // removeItem(evt.target);
    });
    evt.target.appendChild(console_box);
}
function disapper(node){
    node.style.display = "none";
}