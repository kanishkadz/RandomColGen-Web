// Get references to the DOM elements
const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');

// Function to generate a random hex color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Function to create a color box
function createColorBox(color) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;

    // Copy color code on click
    colorBox.addEventListener('click', () => {
        navigator.clipboard.writeText(color)
            .then(() => {
                alert(`🎉 Copied: ${color}`);
            })
            .catch(err => console.error('Failed to copy color:', err));
    });

    return colorBox;
}

// Function to generate a random color palette
function generatePalette() {
    palette.innerHTML = ''; // Clear the palette
    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = createColorBox(color);
        palette.appendChild(colorBox);
    }
}

// Generate a palette on page load and button click
generateBtn.addEventListener('click', generatePalette);
generatePalette();
