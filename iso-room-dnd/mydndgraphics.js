$.get("../navbar.html", function(data){
    $("#nav").replaceWith(data);
});

function windowWallPos (e) {
    e.style.left = "35%";
    e.style.top = "20%";
}

function artWallPos (e) {
    e.style.left = "30%";
    e.style.top = "17%";
}

function tvWallPos (e) {
    e.style.left = "30%";
    e.style.top = "20%";
}

function roomLeftDropNScale (e) {
    e.classList.add('dropped');
    console.log('child element appended to left dropzone');
    e.setAttribute("style", "transform: scaleY(1.157) skew(30deg) rotate(30deg);");
    e.setAttribute("src", e.src.replace("-rev.png", ".png"));
    e.style.position = "fixed";
}

function roomRightDropNScale (e) {
    e.classList.add('dropped');
    e.setAttribute("style", "transform: scaleY(1.157) skew(30deg) rotate(-90deg);");
    console.log('child element appended to right dropzone');
    e.setAttribute("src", e.src.replace(".png", "-rev.png")); // replace() doesn't modify the original string — it returns a new string with the replacement. setAttribute does.
    e.style.position = "fixed";
}

function roomBottomDropNScale (e) {
    e.classList.add('dropped');
    e.setAttribute("style", "transform: scaleY(1.157) skew(30deg) rotate(-210deg);");  // 1 / 0.864, you need to divide by 0.864 which is the same as multipling by 1 / 0.864
    e.style.position = "fixed";
}

function saveState() {
    const positions = {};
    document.querySelectorAll('.furniture').forEach(item => {
        positions[item.id] = item.parentElement.id; // create key value pair
    });
    localStorage.setItem('dragPositions', JSON.stringify(positions));
}

function addIsoStyles(){
    
}
const dropZones = document.getElementsByClassName("dropzone");
for (const zone of dropZones) {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault(); // Parentheses invoke function - browsers default to not allowing elements to be drop targets
        zone.classList.add("drag-over");
        console.log('started drag-over');
    });

    zone.addEventListener("dragleave", () => {
        zone.classList.remove("drag-over");
        console.log('removed drag-over');
    });

    zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("drag-over");
        console.log('removed drag-over');

    const draggedElement = document.querySelector(".dragging");
    if (draggedElement) {
        zone.appendChild(draggedElement);
        console.log(draggedElement);

            if (zone.id === "room-bottom" && draggedElement.id === "iso-bed") {
                console.log('child element appended to bottom dropzone');
                roomBottomDropNScale(draggedElement);
                draggedElement.style.left = "20%";
                draggedElement.style.top = "20%";
                saveState();
            }

            else if (zone.id === "room-bottom" && draggedElement.id === "iso-couch") {
                console.log('child element appended to bottom dropzone');
                roomBottomDropNScale(draggedElement);
                draggedElement.style.left = "20%";
                draggedElement.style.top = "50%";
                saveState();
            }
            
            else if (zone.id === "room-bottom" && draggedElement.id === "iso-desk") {
                console.log('child element appended to bottom dropzone');
                roomBottomDropNScale(draggedElement);
                draggedElement.style.left = "50%"; 
                draggedElement.style.top = "32%";
                saveState();
            }
            
            else if (zone.id === "room-bottom" && draggedElement.id === "iso-chair") {
                console.log('child element appended to bottom dropzone');
                roomBottomDropNScale(draggedElement);
                draggedElement.style.left = "60%"; // + = up left, - = down right
                draggedElement.style.top = "50%"; // + = up right, - = down left
                saveState();
            }

            else if (zone.id === "room-bottom" && draggedElement.id === "iso-lamp") {
                console.log('child element appended to bottom dropzone');
                roomBottomDropNScale(draggedElement);
                draggedElement.style.left = "30%";
                draggedElement.style.top = "65%";
                saveState();
            }


            else if (zone.id === "room-left") {
                if (draggedElement.classList.contains("bottom-deny") && draggedElement.id === "iso-art") {
                    roomLeftDropNScale(draggedElement);
                    artWallPos(draggedElement);
                    saveState();
                } 
                
                else if (draggedElement.classList.contains("bottom-deny") && draggedElement.id === "iso-window"){
                    roomLeftDropNScale(draggedElement);
                    windowWallPos(draggedElement);
                    saveState();
                }
                
                else if (draggedElement.classList.contains("bottom-deny") && draggedElement.id === "iso-tv"){
                    roomLeftDropNScale(draggedElement);
                    tvWallPos(draggedElement);
                    saveState();
                }
                
                else {
                    roomLeftDropNScale(draggedElement);
                    saveState();
                }
            }

            else if (zone.id === "room-right") {
                if (draggedElement.classList.contains("bottom-deny") && draggedElement.id === "iso-window") {
                    roomRightDropNScale(draggedElement);
                    windowWallPos(draggedElement);
                    saveState();
                } 
                
                else if (draggedElement.classList.contains("bottom-deny") && draggedElement.id === "iso-art") {
                    roomRightDropNScale(draggedElement);
                    artWallPos(draggedElement);
                    saveState();
                }
                
                else if (draggedElement.classList.contains("bottom-deny") && draggedElement.id === "iso-tv") {
                    roomRightDropNScale(draggedElement);
                    tvWallPos(draggedElement);
                    saveState();
                }
                
                else if (draggedElement.classList.contains("leftright-deny")){
                    console.log('leftright-deny initiated');
                    // zone.classList.remove("dragging");
                    saveState();
                }
            }


            else if (zone.classList.contains("furn-container") && zone.classList.contains("dropzone")) {
                console.log('child element appended to furn-container');
                draggedElement.classList.add('dropped');
                draggedElement.setAttribute("style", "transform: none;");
                saveState();
            }
        }


    });
}


/* Try adding the save state function here and calling it each time in each else if, note that they aren't in a class called draggable rn (equivalent is furniture)*/
window.addEventListener('load', () => {
    const positions = JSON.parse(localStorage.getItem('dragPositions')) || {};
    for (const [id, parent] of Object.entries(positions)) {
        const element = document.getElementById(id);
        const parentElement = document.getElementById(parent);
        if (parentElement) {
            parentElement.appendChild(element);
            // addIsoStyles(); needs to go in here
        }
    }
});

document.body.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("furniture")) {
        e.target.classList.add("dragging");
        console.log("dragging started");
    }
});

document.body.addEventListener("dragend", (e) => {
    if (e.target.classList.contains("furniture")) {
        e.target.classList.remove("dragging");
        console.log("dragging ended");
    }
});

document.body.addEventListener("touchstart", (e) => {
    if (e.target.classList.contains("furniture")) {
        e.target.classList.add("dragging");
        console.log("dragging started");
    }
});

document.body.addEventListener("touchend", (e) => {
    if (e.target.classList.contains("furniture")) {
        e.target.classList.remove("dragging");
        console.log("dragging ended");
    }
});

// May need to make this whole thing into a function and then reuse it for each side (that that draggble is accepted into)



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



/*Credit for saveState and restoreState is  https://blog.pixelfreestudio.com/advanced-techniques-for-using-html5-drag-and-drop/*/