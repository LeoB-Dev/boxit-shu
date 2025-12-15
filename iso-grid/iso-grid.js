let x = 0;
while (x < 10) {
    const newSquare = document.createElement("div");
    newSquare.classList.add('row');
    document.body.appendChild(newSquare);
    x++;
    let y = 0;
}

for (let i=0; i < 10; i++) {
    const rowElement = document.getElementsByClassName("row");
    for (let i=0; i < 10; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add('cell');
    rowElement[i].appendChild(newCell);
    }
}


