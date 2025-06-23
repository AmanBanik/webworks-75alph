// Simple fade-in effects for header links on scroll
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header ul li a');

    links.forEach((link, index) => {
        link.style.opacity = 0;
        setTimeout(() => {
            link.style.transition = "opacity 0.5s ease";
            link.style.opacity = 1;
        }, index * 200); // Stagger animation
    });
});

// Add enter key detection for the input field
const searchInput = document.querySelector('main input');

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Searching for "${searchInput.value}"...`);
        }
    });
}
