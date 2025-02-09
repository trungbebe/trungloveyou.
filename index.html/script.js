let messages = [
    "Are you sure? 🥺",
    "Think again... 😢",
    "Please don't break my heart 💔",
    "I'll be so sad... 😭",
    "Last chance! 💖"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    // Đổi nội dung nút "No"
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Tăng kích thước nút "Yes"
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
