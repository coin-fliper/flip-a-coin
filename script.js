const flipButton = document.getElementById('flip-button');
const coin = document.getElementById('coin');
const resultText = document.getElementById('result');

flipButton.addEventListener('click', flipCoin);

function flipCoin() {
    // Reset the result text and hide it initially
    resultText.textContent = 'Flipping...';
    resultText.style.visibility = 'hidden';

    // Add the flip effect by rotating the coin
    coin.style.transition = 'transform 1s ease-in-out';
    coin.style.transform = 'rotateY(720deg)'; // Rotate the coin to simulate a flip

    // Randomly choose heads or tails
    setTimeout(() => {
        const result = Math.random() > 0.5 ? 'Heads' : 'Tails';

        // Ensure the correct side shows after the flip
        if (result === 'Heads') {
            coin.style.transform = 'rotateY(0deg)';  // Show Heads side
        } else {
            coin.style.transform = 'rotateY(180deg)';  // Show Tails side
        }

        // Wait for the flip animation to complete before displaying the result
        setTimeout(() => {
            resultText.textContent = `Result: ${result}`;
            resultText.style.visibility = 'visible'; // Show the result text after flip is done
        }, 1000); // Delay the result display until after the flip (1000ms)
        
        // Reset the transition for smooth future flips
        setTimeout(() => {
            coin.style.transition = 'transform 1s ease-in-out';
        }, 50);
    }, 1000);  // Duration of flip animation
}
