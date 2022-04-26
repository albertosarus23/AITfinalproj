document.addEventListener('DOMContentLoaded',main);
function main(){
    let gamesArray = [1,2,3];
    gamesArray.map(
        function(i){
            const div = document.createElement('div');
            div.className = i;
            document.body.appendChild(div);
        }
    );
    
    // how many games did I complemented
    let implemented = 2;
    const gamesNodes = document.querySelectorAll("div");
    const gamesNodesArr = Array.from(gamesNodes);
    console.log(gamesNodesArr[0].className);
    const filteredArray = gamesNodesArr.filter(node => node.className <=implemented);
    console.log(filteredArray);

    let video = document.createElement("iframe");
    video.setAttribute("width","840");
    video.setAttribute("height","630");
    video.setAttribute("src","https://www.youtube.com/embed/KEp_XKUcVds");
    
    filteredArray[0].appendChild(video);

    let video1 = document.createElement("iframe");
    video1.setAttribute("width","840");
    video1.setAttribute("height","630");
    video1.setAttribute("src","https://www.youtube.com/embed/GqllAqUfBsI");
    
    filteredArray[1].appendChild(video1);
    // filteredArray[0].appendChild(<iframe width="840" height="630"
    // src="https://www.youtube.com/embed/9LpQcUGIgOM">
    // </iframe>);
}