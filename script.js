const reactions = {
    "iron+oxygen+water": "Rust Formation: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃",
    "iron+oxygen": "Iron Oxide: 4Fe + 3O₂ → 2Fe₂O₃",
    "iron+aluminum": "Thermite Reaction: Fe₂O₃ + 2Al → 2Fe + Al₂O₃",
    "copper+co2+oxygen+water": "Copper Patina: 2Cu + CO₂ + O₂ + H₂O → Cu₂(OH)₂CO₃"
};

let selectedElements = [];
const elements = document.querySelectorAll(".element");
const dropzone = document.getElementById("dropzone");
const resultDiv = document.getElementById("reaction-result");

// Allow dragging elements
elements.forEach(element => {
    element.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id);
    });
});

// Allow elements to be dropped
dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
});

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    const elementId = e.dataTransfer.getData("text");

    if (!selectedElements.includes(elementId)) {
        selectedElements.push(elementId);
    }

    checkReaction();
});

// Check if the combination forms a reaction
function checkReaction() {
    const sortedElements = selectedElements.sort().join("+");
    
    if (reactions[sortedElements]) {
        resultDiv.innerHTML = reactions[sortedElements];
        selectedElements = []; // Reset after reaction
    } else {
        resultDiv.innerHTML = "No reaction. Try different combinations!";
    }
}
