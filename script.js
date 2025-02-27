// Function to generate random values
function randomValue(min, max) {
    return Math.random() * (max - min) + min;
}

// Create Bouncing Clutches
function createClutches(num) {
    const container = document.getElementById('clutches-container');
    for (let i = 0; i < num; i++) {
        let clutch = document.createElement('img');
        clutch.src = 'clutch.png';
        clutch.classList.add('clutch');
        clutch.style.left = `${randomValue(0, window.innerWidth - 100)}px`;
        clutch.style.top = `${randomValue(0, window.innerHeight - 100)}px`;

        let speedX = randomValue(-2, 2);
        let speedY = randomValue(-2, 2);

        function moveClutch() {
            let x = parseFloat(clutch.style.left);
            let y = parseFloat(clutch.style.top);

            if (x + speedX > window.innerWidth - 100 || x + speedX < 0) speedX *= -1;
            if (y + speedY > window.innerHeight - 100 || y + speedY < 0) speedY *= -1;

            clutch.style.left = `${x + speedX}px`;
            clutch.style.top = `${y + speedY}px`;

            requestAnimationFrame(moveClutch);
        }
        moveClutch();
        container.appendChild(clutch);
    }
}

// Create Bouncing Party Poppers
function createPoppers(num) {
    const container = document.getElementById('poppers-container');
    for (let i = 0; i < num; i++) {
        let popper = document.createElement('img');
        popper.src = 'poppers.png';
        popper.classList.add('popper');
        popper.style.left = `${randomValue(0, window.innerWidth - 100)}px`;
        popper.style.top = `${randomValue(0, window.innerHeight - 100)}px`;

        let speedX = randomValue(-3, 3);
        let speedY = randomValue(-3, 3);

        function movePopper() {
            let x = parseFloat(popper.style.left);
            let y = parseFloat(popper.style.top);

            if (x + speedX > window.innerWidth - 100 || x + speedX < 0) speedX *= -1;
            if (y + speedY > window.innerHeight - 100 || y + speedY < 0) speedY *= -1;

            popper.style.left = `${x + speedX}px`;
            popper.style.top = `${y + speedY}px`;

            requestAnimationFrame(movePopper);
        }
        movePopper();

        // Clicking a Popper
        popper.addEventListener('click', () => {
            popper.style.animation = 'pop 0.3s forwards';
            setTimeout(() => popper.remove(), 300);
        });

        container.appendChild(popper);
    }
}

// Initialize Page
window.onload = function () {
    createClutches(5);
    createPoppers(5);
};
