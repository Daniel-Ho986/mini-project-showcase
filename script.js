const showcase = document.getElementById('showcase');


fetch('projects/projects.json')
    .then(results => results.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const project = document.createElement('div')
            project.classList.add('sub-container')

            const title = data[i].title
            const dashedTitle = title.replaceAll(" ", "-")

            project.innerHTML = 
            `
            <img src="/projects/images/${dashedTitle}.png" alt="${title}"></img>
            <a class="title" href="projects/${dashedTitle}">${title}</a>
            <button class="btn">
                <a class="repo" href="https://github.com/Daniel-Ho986/mini-project-showcase/tree/main/projects/${dashedTitle}">Repository</a>
            </button>
            `
            showcase.appendChild(project)
        }
        
    });
