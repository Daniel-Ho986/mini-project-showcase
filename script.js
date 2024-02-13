const showcase = document.getElementById('showcase');

fetch('projects/projects.json')
    .then(response => response.json())
    .then(data => {
        data.sort();
        
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
