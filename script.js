function checkReaction() {
    // Map element IDs to their symbols
    const elementMap = {
        "iron": "Fe",
        "oxygen": "O₂",
        "water": "H₂O",
        "aluminum": "Al",
        "copper": "Cu",
        "co2": "CO₂"
    };

    // Convert selected element IDs to their symbols
    const selectedSymbols = selectedElements.map(id => elementMap[id]);

    // Sort and join to form the key for reaction lookup
    const sortedElements = [...new Set(selectedSymbols)].sort().join("+");

    // Check if the combination exists in the reactions object
    if (reactions[sortedElements]) {
        resultDiv.innerHTML = reactions[sortedElements];
        selectedElements = []; // Reset after reaction
    } else {
        resultDiv.innerHTML = "No reaction. Try different combinations!";
    }
}
