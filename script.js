const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createColorBox(color) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;

    colorBox.addEventListener('click', () => {
        navigator.clipboard.writeText(color)
            .then(() => {
                alert(`🎉 Copied: ${color}`);
            })
            .catch(err => console.error('Failed to copy color:', err));
    });

    return colorBox;
}

function generatePalette() {
    palette.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = createColorBox(color);
        palette.appendChild(colorBox);
    }
}

generateBtn.addEventListener('click', generatePalette);
generatePalette();
