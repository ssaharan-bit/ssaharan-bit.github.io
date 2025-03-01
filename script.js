// Sidebar Toggle Functionality
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.createElement('button');
sidebarToggle.innerHTML = '&#9776;';
sidebarToggle.style.position = 'fixed';
sidebarToggle.style.top = '20px';
sidebarToggle.style.left = '20px';
sidebarToggle.style.backgroundColor = '#3498db';
sidebarToggle.style.color = '#fff';
sidebarToggle.style.border = 'none';
sidebarToggle.style.padding = '10px';
sidebarToggle.style.cursor = 'pointer';
sidebarToggle.style.borderRadius = '5px';
sidebarToggle.style.zIndex = '1000';
document.body.appendChild(sidebarToggle);

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
});

// Initial sidebar state
sidebar.classList.add('active');
sidebar.style.left = '0';

// Adjust main content margin
const mainContent = document.querySelector('.main-content');
mainContent.style.transition = 'margin-left 0.3s';
if (sidebar.classList.contains('active')) {
    mainContent.style.marginLeft = '260px';
} else {
    mainContent.style.marginLeft = '10px';
}

// Smooth Scrolling for navigation links
const navLinks = document.querySelectorAll('.sidebar nav ul li a');
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
