const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const tabs = document.querySelectorAll('nav ul li a');
const tabContents = document.querySelectorAll('.tab-content');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const toggleText = document.getElementById('toggle-text');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    sunIcon.style.display = body.classList.contains('dark-mode') ? 'none' : 'inline';
    moonIcon.style.display = body.classList.contains('dark-mode') ? 'inline' : 'none';
});

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        event.preventDefault();
        
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        tab.classList.add('active');
        const targetContent = document.getElementById(tab.getAttribute('data-tab'));
        targetContent.classList.add('active');
    });
});