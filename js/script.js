// Contract address copy function
function copyAddress() {
    const address = document.getElementById('contractAddress').innerText;
    navigator.clipboard.writeText(address);

    // Temporarily change the button text to "Copied!"
    const btn = document.querySelector('.copy-btn');
    btn.innerText = 'Copied!';
    setTimeout(() => {
        btn.innerText = 'Copy';
    }, 2000);
}

// Activate navbar link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach((section, index) => {
        if (window.scrollY >= section.offsetTop - 50) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});


