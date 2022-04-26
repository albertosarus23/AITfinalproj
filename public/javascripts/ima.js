document.addEventListener('DOMContentLoaded',main);
function main(){
    const h3Nodes = document.querySelector(".comment");
    const form = document.querySelector("#ima_form");
    const comment = document.querySelector("#leave_comment");
    // console.log(h3Nodes);
    const context = h3Nodes.textContent;
    let displaybutton = !(context>=3)
    console.log(displaybutton);
    console.log(form);
    if(!(displaybutton)){
        form.style.display = "none";
        const attention = document.createElement('div');
        attention.textContent = "You have Reach the maximun quick comment quota"
        comment.appendChild(attention);
    }
}