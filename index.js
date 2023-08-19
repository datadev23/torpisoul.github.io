var categorySelect = document.getElementById("category");
var subcategorySelect = document.getElementById("subcategory");

categorySelect.addEventListener("change", function () {
    var selectedCategory = categorySelect.value;
    subCategorySelect.innerHTML = ""; //clear existing options

    if (selectedCategory !== "") {
        var subcategoryOptions = subcategories[selectedCategory];
        if (subcategoryOptions) {
            subcategoryOptions.forEach(function (option) {
                var optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                subcategorySelect.appendChild(optionElement);
            });
        }
    }

    // Reset the sub-category dropdown if no category is selected
    if (selectedCategory === "") {
        var defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Choose a Sub-Category";
        subcategorySelect.appendChild(defaultOption);
    }
});

//button collapse onclick
document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category-button");
    const resetButton = document.querySelector(".category-reset-button");
    const subcategoryContainer = document.getElementById("subcategory");

    //the subCategories variable should import data from the database, when functional.
    var subcategories = {
        "characters": [
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
        "characterTraits": [
            "Physical Traits",
            "Personality Traits",
            "Background (history)",
            "Occupation (skills)",
            "Quirks (habits)"
        ],
        "relationships": [
            "Partner",
            "Friend",
            "Sibling",
            "Colleague",
            "Stranger"
        ],
        "clues": [
            "Written Messages",
            "Physical Objects",
            "Hidden Documents",
            "Cryptic Symbols",
            "Puzzle Pieces"
        ],
        "evidence": [
            "Fingerprints",
            "Footprints",
            "DNA Samples",
            "Surveilance Footage",
            "Audio Recordings"
        ],
        "motive": [
            "Greed",
            "Revenge",
            "Jealousy",
            "Blackmail",
            "Desire for Power"
        ],
        "players": [
            "Player 1",
            "Player 2",
            "Player 3",
            "Player 4",
            "Player 5",
            "Player 6",
            "Player 7",
            "Player 8"
        ],
        "redHerons": [
            "Misleading Clues",
            "False Alibis",
            "Suspicious Behaviours",
            "Contradictory Statements",
            "Misinterpreted Evidence"
        ],
        "theme": [
            "Historical Era",
            "Fantasy World",
            "Sci-Fi",
            "Noir",
            "Modern-Day"
        ],
    };

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const categoryValue = button.getAttribute("data-value");
            const subcategoryOptions = subcategories[categoryValue];

            if (subcategoryOptions) {
                subcategoryContainer.innerHTML = ""; //clear existing subcategories

                subcategoryOptions.forEach(subcategoryOption => {
                    const subcategoryButton = document.createElement("button");
                    subcategoryButton.textContent = subcategoryOption;
                    subcategoryButton.classList.add("subcategory-button");
                    subcategoryContainer.appendChild(subcategoryButton);
                });

                resetButton.removeAttribute("disabled");

                subcategoryContainer.scrollIntoView({
                    behavior: "smooth",
                    block: "end"
                });
            }

            categoryButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.add("collapsed");
                    resetButton.removeAttribute("disabled");
                }
            });
            button.classList.remove("collapsed");
        });
    });

    resetButton.addEventListener("click", () => {
        categoryButtons.forEach(otherButton => {
            otherButton.classList.remove("collapsed");
        });
        resetButton.setAttribute("disabled", "disabled");
        
        subcategoryContainer.innerHTML = ""; //clear existing subcategories
    });
});

