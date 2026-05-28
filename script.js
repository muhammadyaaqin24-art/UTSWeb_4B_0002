const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');

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

