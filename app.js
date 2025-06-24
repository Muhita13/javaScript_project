let numberInShape = 1;

document.getElementById("button").onclick = () => {
    let count = parseInt(document.getElementById("number").value);
    const box = document.getElementById("box");
    const shapeType = document.querySelector('input[name="choice"]:checked').value;

    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number greater than 0");
        return;
    }

    for (let i = 0; i < count; i++) {
        const shape = document.createElement("div");
        shape.classList.add(shapeType);
        shape.textContent = numberInShape++;
        box.appendChild(shape);
    }
};
