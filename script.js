function toggleNavbar() {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');

    var navbar = document.getElementById("navbar");
        navbar.classList.toggle("responsive");

    // Check if the icon is in the hamburger state
    const isHamburger = line1.style.transform === 'rotate(-45deg) translateY(9px) translateX(-9px)' &&
                        line2.style.transform === 'translateX(40px)' &&
                        line3.style.transform === 'rotate(45deg) translateY(-9px) translateX(-9px)';

    // Toggle between hamburger and X
    if (isHamburger) {
        // If X is visible, switch back to hamburger
        line1.style.transform = '';
        line2.style.transform = '';
        line2.style.opacity = '1';
        line3.style.transform = '';
    } else {
        // If hamburger is visible, switch to X
        line1.style.transform = 'rotate(-45deg) translateY(9px) translateX(-9px)';
        line2.style.transform = 'translateX(40px)'; // Adjust the value based on your design
        line2.style.opacity = '0';
        line3.style.transform = 'rotate(45deg) translateY(-9px) translateX(-9px)';
    }
}
