$.get("../navbar.html", function(data){
    $("#nav").replaceWith(data);
});


// CodePen drag and drop version (need to change room elements to id's not classes), thus I am temporarily only selecting this class https://codepen.io/BitsPls/pen/XWvwVpE
const dropZones = document.getElementsByClassName("room-bottom");

for (const zone of dropZones) {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault(); // Parentheses invoke function - browsers default to not allowing elements to be drop targets
        zone.classList.add("drag-over");
        console.log('dragged over');
    });

    zone.addEventListener("dragleave", () => {
        zone.classList.remove("drag-over");
        console.log('drag left');
    });

    zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("drag-over");
        console.log('dropped');

        const draggedElement = document.querySelector(".dragging");
        if (draggedElement) {
            zone.appendChild(draggedElement);
            console.log('child element appended to dropzone');
            draggedElement.setAttribute("style", "transform: scaleY(1.157) skew(30deg) rotate(-210deg);");  // 1 / 0.864, you need to divide by 0.864 which is the same as multipling by 1/0.864
        }
    });
}

document.body.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("furniture")) {
        e.target.classList.add("dragging");
        console.log("dragging started");
    }
});

document.body.addEventListener("dragend", (e) => {
    if (e.target.classList.contains("furniture")) {
        e.target.classList.remove("dragging");
        console.log("dragging stopped");
    }
});





// Drag and drop to anywhere on the screen original code:

// let newX = 0, newY = 0, startX = 0, startY = 0;

// const furniture = document.getElementsByClassName('furniture')[1];

// furniture.addEventListener('mousedown', mouseDown)

// function mouseDown(e){
//     startX = e.clientX
//     startY = e.clientY

//     document.addEventListener('mousemove', mouseMove)
//     document.addEventListener('mouseup', mouseUp)
// }

// function mouseMove(e){
//     newX = startX - e.clientX 
//     newY = startY - e.clientY 
  
//     startX = e.clientX
//     startY = e.clientY

//     furniture.style.top = (furniture.offsetTop - newY) + 'px'
//     furniture.style.left = (furniture.offsetLeft - newX) + 'px'
// }

// function mouseUp(e){
//     document.removeEventListener('mousemove', mouseMove)
// }


function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';

    const mainNavItems = document.querySelectorAll('.hideOnMobile');
    for (const navItem of mainNavItems) {
        navItem.style.display = 'none';
    }
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    
    const mainNavItems = document.querySelectorAll('.hideOnMobile');
    for (const navItem of mainNavItems) {
        navItem.style.display = 'flex';
    }
}



