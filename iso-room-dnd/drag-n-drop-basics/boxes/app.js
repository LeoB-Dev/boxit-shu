// Selecr the item element
const item = document.querySelector('.item');

// Attch the dragstart event handler
item.addEventListener('dragstart', dragStart);

// Handle the dragstart
function dragStart(e) {
    console.log('drag starts...');
    e.dataTransfer.setData('text/plain', e.target.id); // ?
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0); // ? what is this?
}