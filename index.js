document.addEventListener('DOMContentLoaded', () => {
    const emojiContainer = document.querySelector('.emoji-container');
    const emojis = document.querySelectorAll('.emoji');
    const sendButton = document.querySelector('.send-button');
    const feedbackContent = document.querySelector('.feedback-content');
    const thankYouContent = document.querySelector('.thank-you');
    const selectedRatingText = document.getElementById('selected-rating');

    let selectedRating = '';

    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            emojis.forEach(e => e.classList.remove('selected'));
            emoji.classList.add('selected');
            sendButton.disabled = false;
            selectedRating = emoji.dataset.rating;
        });
    });

    sendButton.addEventListener('click', () => {
        feedbackContent.classList.add('hide');
        thankYouContent.classList.add('show');
        selectedRatingText.textContent = selectedRating;
        console.log('Feedback sent:', selectedRating);
    });
});

