const container = document.querySelector('.container');

function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';
    
    // Set the number of cells per side
    const totalCells = size * size;

    // Create cells
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // Add hover effect to change color
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'lightblue';
        });

        container.appendChild(cell);
    }
}

// Initial grid
createGrid(16);

// Button click event to create a new grid
document.getElementById('newGridButton').addEventListener('click', () => {
    let newSize = prompt("Enter the number of squares per side (max 100):");
    newSize = Math.min(Math.max(newSize, 1), 100); // Limit input to 1-100
    createGrid(newSize);
});