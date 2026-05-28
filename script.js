const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');
const form = document.getElementById('contactForm');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === ''){
        alert('Please complate all fields!');
    } else {
        alert('Message Sent successfully!');
        form.reset();
    }
}); 
