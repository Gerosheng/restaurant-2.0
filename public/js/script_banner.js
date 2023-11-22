function showCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    if (!localStorage.getItem('cookies_accepted')) {
        cookieBanner.style.display = 'block';
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 100);
    }
}

// Function to hide the cookie banner when the "Accept" button is clicked
function acceptCookies() {
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.classList.remove('show');
    setTimeout(() => {
        cookieBanner.style.display = 'none';
    }, 500);
    localStorage.setItem('cookies_accepted', 'true');
}

// Event listener for the "Accept" button
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);

// Show the cookie banner when the page loads
document.addEventListener('DOMContentLoaded', showCookieBanner);