function checkReaction() {
    const elementMap = {
        "iron": "Fe",
        "oxygen": "O₂",
        "water": "H₂O",
        "aluminum": "Al",
        "copper": "Cu",
        "co2": "CO₂"
    };

    // Convert IDs to chemical symbols
    const selectedSymbols = selectedElements.map(id => elementMap[id]);

    // Sort and join to match the key in reactions object
    const sortedElements = [...new Set(selectedSymbols)].sort().join("+");

    console.log("Selected Elements:", selectedElements);
    console.log("Converted Symbols:", selectedSymbols);
    console.log("Final Reaction Key:", sortedElements);

    if (reactions[sortedElements]) {
        resultDiv.innerHTML = reactions[sortedElements];
        selectedElements = []; // Reset after reaction
    } else {
        resultDiv.innerHTML = "No reaction. Try different combinations!";
    }
}
