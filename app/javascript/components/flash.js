const flash = document.getElementById('flash');

/**
 *
 * @param type
 * @param message
 */
export function renderFlash(id, message) {
    if (flash) {
        emptyNode(flash)
        let el = document.createElement('div');
        el.setAttribute("id", id);
        el.innerHTML = message;
        flash.appendChild(el)
    }
}

function emptyNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
