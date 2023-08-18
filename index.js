var subCategories = {
    "Characters": [
        "Chris Reynolds",
        "Cathy Turner",
        "Jasmine Bennett",
        "Louise Montgomery",
        "Clare Parker",
        "Martyn Anderson",
        "Aaron Roberts",
        "Chloe Mitchell",
        "Emily Thompson (Servant)",
        "Victor Vanstone (Murder Victim)"
    ],
    "Character Descriptions": [
        "Physical Traits", 
        "Personality Traits", 
        "Background (history)", 
        "Occupation (skills)", 
        "Quirks (habits)"
    ],
    "Character Relationships": [
        "Partner", 
        "Friend", 
        "Sibling", 
        "Colleague", 
        "Stranger"
    ],
    "Clues": [
        "Written Messages", 
        "Physical Objects", 
        "Hidden Documents", 
        "Cryptic Symbols", 
        "Puzzle Pieces"
    ],
    "Evidence": [
        "Fingerprints", 
        "Footprints", 
        "DNA Samples", 
        "Surveilance Footage", 
        "Audio Recordings"
    ],
    "Motive": [
        "Greed", 
        "Revenge", 
        "Jealousy", 
        "Blackmail", 
        "Desire for Power"
    ],
    "Players": [
        "Player 1", 
        "Player 2", 
        "Player 3", 
        "Player 4", 
        "Player 5", 
        "Player 6", 
        "Player 7", 
        "Player 8"
    ],
    "Red Herons": [
        "Misleading Clues", 
        "False Alibis", 
        "Suspicious Behaviours", 
        "Contradictory Statements", 
        "Misinterpreted Evidence"
    ],
    "Theme": [
        "Historical Era", 
        "Fantasy World", 
        "Sci-Fi", 
        "Noir", 
        "Modern-Day"
    ],
};

var categorySelect = document.getElementById("category");
var subCategorySelect = document.getElementById("subcategory");

categorySelect.addEventListener("change", function() {
    var selectedCategory = categorySelect.value;
    subCategorySelect.innerHTML = ""; //clear existing options

    if (selectedCategory !== "") {
        var subCategoryOptions = subCategories[selectedCategory];
        if (subCategoryOptions) {
            subCategoryOptions.forEach(function(option) {
                var optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                subCategorySelect.appendChild(optionElement);
            });
        }
    }

    // Reset the sub-category dropdown if no category is selected
    if (selectedCategory === "") {
        var defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Choose a Sub-Category";
        subCategorySelect.appendChild(defaultOption);
    }
});