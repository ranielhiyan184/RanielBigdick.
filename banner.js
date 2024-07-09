document.addEventListener('DOMContentLoaded', () => {
    const donateBanner = document.getElementById('donateBanner');
    const donateButton = document.getElementById('donateButton');
    const closeButton = document.getElementById('closeButton');
    let deferredPrompt;
    setTimeout(() => {
        donateBanner.style.display = 'block';
    }, 500);
    donateButton.addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com/profile.php?id=61555221003228';
    });
    closeButton.addEventListener('click', () => {
        donateBanner.style.display = '';
    });
});