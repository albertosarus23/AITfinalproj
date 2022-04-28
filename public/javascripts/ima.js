document.addEventListener('DOMContentLoaded',main);
function main(){
    const submitBotton = document.querySelector('#submit_button');
    submitBotton.addEventListener('click', handleClick);
    // init
    if (document.limit === undefined){
        document.limit = 0;
    }
    loadComments();
}
async function handleClick(evt){
    evt.preventDefault();
    const quickComment = document.querySelector('#quickComment').value;
    if (quickComment === undefined || quickComment == null){
        alert('invaild');
    }else{
        const config = {
            method: 'POST',
            headers: {
            "Content-Type": 'application/json'
            },
            body: JSON.stringify({quickComment: quickComment})
        };
        const res = await fetch("ima/api/comment/create", config);
        const msg = await res.json;
        addCommentstoArea([msg]);
        loadComments();
        // each time post, add one toward limitation
        const h3Nodes = document.querySelector(".comment");
        const form = document.querySelector("#ima_form");
        const comment = document.querySelector("#leave_comment");
        document.limit = document.limit+1;
        h3Nodes.textContent = document.limit;
        console.log(h3Nodes.textContent);
        let displaybutton = !(h3Nodes.textContent>=3)
        console.log(displaybutton);
        if(!(displaybutton)){
            form.style.display = "none";
            const attention = document.createElement('div');
            attention.textContent = "You have Reach the maximun quick comment quota"
            comment.appendChild(attention);
        }
    }
}
async function loadComments(){
    const res = await fetch('ima/api/comment');
    const data = await res.json();
    const commentsArea = document.querySelector('#show_comments');
    removeAllChildNodes(commentsArea);
    addCommentstoArea(data);
    console.log(data);
}

function addCommentstoArea(comments){
    const commentsArea = document.querySelector('#show_comments');
    for(const c of comments){
        const comment = document.createElement('div');
        comment.textContent = c.quickComment;
        commentsArea.appendChild(comment);
    }
}
function removeAllChildNodes(parent) {
    if (parent!==null){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}