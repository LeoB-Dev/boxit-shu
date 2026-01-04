for (let i=0; i < 10; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add('row');
    const gridContainer = document.getElementById("grid-container");
    gridContainer.appendChild(newSquare);
}

for (let i=0; i < 10; i++) {
    const rowElement = document.getElementsByClassName("row");
    for (let i=0; i < 10; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add('cell');
        rowElement[i].appendChild(newCell);
    }
}

const dropZones = document.getElementsByClassName("cell");

for (const zone of dropZones) {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault(); 
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
            draggedElement.classList.add('dropped');
            draggedElement.setAttribute("style", "transform: scaleY(1.157) skew(30deg) rotate(-210deg);");
            draggedElement.style.position = "fixed";
        }
    });
}

document.body.addEventListener("dragstart", (e) => {
    if (e.target.id === "player") {
        e.target.classList.add("dragging");
        console.log("dragging started");
    }
});

document.body.addEventListener("dragend", (e) => {
    if (e.target.id === "player") {
        e.target.classList.remove("dragging");
        console.log("dragging ended");
    }
});


// Bottom origin point needs to be made into a variable
// When item is dragged onto a certain cell, the bottom origin point needs to snap onto bottom origin point of the cell

// It's not appending a new class to the dropzone when dropped