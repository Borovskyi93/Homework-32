const buttonNodes = {
    nodes: document.querySelector('.buttons_container'),
}

buttonNodes.nodes.addEventListener('click', voteEmoji);

function voteEmoji (event) {
    let textCount = event.target;
    
    if (textCount.nodeName === 'I') {
        textCount.nextSibling.textContent++;
    }
}