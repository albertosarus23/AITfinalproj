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
    photo2.addEventListener('click',p2clicked);

    // photo3
    const photo3 = document.getElementsByClassName('box')[3];
    photo3.addEventListener('click',p3clicked);

    // photo4
    const photo4 = document.getElementsByClassName('box')[4];
    photo4.addEventListener('click',p4clicked);

    // photo5
    const photo5 = document.getElementsByClassName('box')[5];
    photo5.addEventListener('click',p5clicked);
}

function p1clicked(evt){
    let console_box = document.createElement('div');
    nodeSet(console_box);
    console_box.textContent = 'This is Maijishan Grottoes. It is famous for its 7200 Buddhist stone-craved sculptures. \n It was located in Tianshu, Gansu Province, on a sandstone mountain. It was constructed in Later Qin era(384-417 Ce).\n So amazed that such many beautiful and delicates sculptures were carved by artisans with simple tools';
    console_box.addEventListener('click', function(evt){
        evt.target.parentNode.removeChild(evt.target);
        //disapper(evt.target);
    });
    evt.target.appendChild(console_box);
    console.log(evt.target);
}
function p0clicked(evt){
    let console_box = document.createElement('div');
    nodeSet(console_box);
    console_box.textContent = 'This is the picture I took in 2020 Fall at a live house in Shanghai. \n The band is called Brownie, and this photo was adapted by the band as their social account cover.';
    console_box.addEventListener('click', function(evt){
        evt.target.parentNode.removeChild(evt.target);
        disapper(evt.target);
        // removeItem(evt.target);
    });
    evt.target.appendChild(console_box);
}

function p2clicked(evt){
    let console_box = document.createElement('div');
    nodeSet(console_box);
    console_box.textContent = 'This is the picture I took in a national reserve park. \n It was a small waterfall located at a unhabitated forest.';
    console_box.addEventListener('click', function(evt){
        evt.target.parentNode.removeChild(evt.target);
        disapper(evt.target);
        // removeItem(evt.target);
    });
    evt.target.appendChild(console_box);
}

function p3clicked(evt){
    let console_box = document.createElement('div');
    nodeSet(console_box);
    console_box.textContent = 'This is a photo of Garzê Tibetan Autonomous Prefecture.\n The town is located in a col at altitude of 3000 meters\n the majority of the residence there are Tibetan.';
    console_box.addEventListener('click', function(evt){
        evt.target.parentNode.removeChild(evt.target);
        disapper(evt.target);
        // removeItem(evt.target);
    });
    evt.target.appendChild(console_box);
}

function p4clicked(evt){
    let console_box = document.createElement('div');
    nodeSet(console_box);
    console_box.textContent = 'This is a photo I took in the capitial city of North Korean, Pyongyang.\n The country is a myth, and I am very luck to have a chance to visit in 2019 summer.\n The city is actually clean and peaceful. It looks like 70s China before Reform and Opening.\n The photo is a couple of bride and groom offering flowers to their beloved supreme leaders\' statue.';
    console_box.addEventListener('click', function(evt){
        evt.target.parentNode.removeChild(evt.target);
        disapper(evt.target);
        // removeItem(evt.target);
    });
    evt.target.appendChild(console_box);
}

function p4clicked(evt){
    let console_box = document.createElement('div');
    nodeSet(console_box);
    console_box.textContent = 'This is a photo I took in the capitial city of North Korean, Pyongyang.\n The country is a myth, and I am very luck to have a chance to visit in 2019 summer.\n The city is actually clean and peaceful. It looks like 70s China before Reform and Opening.\n The photo is a couple of bride and groom offering flowers to their beloved supreme leaders\' statue.';
    console_box.addEventListener('click', function(evt){
        evt.target.parentNode.removeChild(evt.target);
        disapper(evt.target);
        // removeItem(evt.target);
    });
    evt.target.appendChild(console_box);
}

function p5clicked(evt){
    let console_box = document.createElement('div');
    nodeSet(console_box);
    console_box.textContent = 'This is the photo I took at my freshman dormitory, Founder Hall.\n This is the dusk period of New York City.';
    console_box.addEventListener('click', function(evt){
        evt.target.parentNode.removeChild(evt.target);
        disapper(evt.target);
        // removeItem(evt.target);
    });
    evt.target.appendChild(console_box);
}
function nodeSet(node){
    node.setAttribute('width','400');
    node.setAttribute('height','200');
    node.setAttribute('background-color','white');
    node.setAttribute('z-index','2');
}
function disapper(node){
    node.style.display = "none";
}