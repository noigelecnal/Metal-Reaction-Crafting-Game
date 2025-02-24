document.getElementById("check-reaction-button").addEventListener("click", checkReaction);

function checkReaction() {
    const elementMap = {
        "iron": "Fe",
        "oxygen": "O₂",
        "water": "H₂O",
        "aluminum": "Al",
        "copper": "Cu",
        "co2": "CO₂"
    };

    // Convert element IDs to their correct chemical symbols
    const selectedSymbols = selectedElements.map(id => elementMap[id]).filter(Boolean);
    const sortedElements = selectedSymbols.sort().join("+").trim();

    console.log("Selected Elements:", selectedElements);
    console.log("Converted Symbols:", selectedSymbols);
    console.log("Final Reaction Key:", sortedElements);

    if (reactions.hasOwnProperty(sortedElements)) {
        resultDiv.innerHTML = reactions[sortedElements];
    } else {
        resultDiv.innerHTML = `No reaction. Try different combinations! (${sortedElements})`;
    }
}
