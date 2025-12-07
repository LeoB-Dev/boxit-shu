$.get("../navbar.html", function(data){
    $("#nav").replaceWith(data);
});


// CodePen drag and drop version (need to change room elements to id's not classes), thus I am temporarily only selecting this class https://codepen.io/BitsPls/pen/XWvwVpE
const dropZones = document.getElementsByClassName("dropzone");

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

            if (zone.id === "room-bottom") {
                console.log('child element appended to bottom dropzone');
                draggedElement.setAttribute("style", "transform: scaleY(1.157) skew(30deg) rotate(-210deg);");  // 1 / 0.864, you need to divide by 0.864 which is the same as multipling by 1 / 0.864
                draggedElement.style.left = "20%";
                draggedElement.style.top = "20%";
            }
            else if (zone.id === "room-left") {
                console.log('child element appended to left dropzone');
                draggedElement.setAttribute("style", "transform: scaleY(1.157) skew(30deg) rotate(30deg);");
                draggedElement.style.left = "35%";
                draggedElement.style.top = "10%";

            } 
            else if (zone.id === "room-right") {
                console.log('child element appended to right dropzone');
                draggedElement.setAttribute("style", "transform: scaleY(1.157) skew(30deg) rotate(-90deg);");

            }
            
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



