document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');
    const fireworks = document.createElement('div');
    fireworks.className = 'fireworks';
    document.body.appendChild(fireworks);

    // Event listener for "Yes" button
    yesButton.addEventListener('click', () => {
        message.classList.remove('hidden');
        message.style.opacity = 1;
        noButton.classList.add('hidden');
        fireworks.style.opacity = 1;
        setTimeout(() => {
            fireworks.style.opacity = 0;
        }, 3000); // Fireworks last for 3 seconds
    });

    // Event listener for "No" button
    noButton.addEventListener('mousedown', (event) => {
        const button = event.target;
        button.style.position = 'absolute';
        button.style.left = `${Math.random() * (window.innerWidth - button.offsetWidth)}px`;
        button.style.top = `${Math.random() * (window.innerHeight - button.offsetHeight)}px`;
    });
});
