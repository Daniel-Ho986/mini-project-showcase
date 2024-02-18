const showcase = document.getElementById('showcase');
const totalProjects = document.getElementById('totalProjects');
const searchInput = document.getElementById('searchInput');

fetch('projects/projects.json')
    .then(response => response.json())
    .then(data => {
        data.sort();

        totalProjects.textContent = `Total projects: ${data.length}`;

        data.forEach(title => {
            const dashedTitle = title.replaceAll(" ", "-");

            const projectElement = document.createElement('div');
            projectElement.classList.add('sub-container');

            projectElement.innerHTML = `
                <img src="../images/${dashedTitle}.png" alt="${title}">
                <a class="title" href="projects/${dashedTitle}">${title}</a>
                <button class="btn">
                    <a class="repo" href="https://github.com/Daniel-Ho986/mini-project-showcase/tree/main/projects/${dashedTitle}">Repository</a>
                </button>
            `;

            showcase.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));

function searchProjects() {
    const searchText = searchInput.value.toLowerCase();
    const projectTitles = document.querySelectorAll('.title');

    projectTitles.forEach(title => {
        const projectContainer = title.parentElement;
        const projectTitle = title.textContent.toLowerCase();

        if (projectTitle.includes(searchText)) {
            projectContainer.style.display = 'flex';
        } else {
            projectContainer.style.display = 'none';
        }
    });
}
