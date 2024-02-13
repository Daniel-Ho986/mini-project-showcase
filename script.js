const showcase = document.getElementById('showcase');


fetch('projects/projects.json')
    .then(results => results.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const project = document.createElement('div')
            project.classList.add('sub-container')

            const title = data[i].title
            const dashedTitle = title.replace(" ", "-")

            project.innerHTML = 
            `
            <img src="/projects/images/${dashedTitle}.png" alt="${data[i].title}"></img>
            <a class="title" href="projects/${data[i].demo}">${data[i].title}</a>
            <button class="btn">
                <a class="repo" href="https://github.com/Daniel-Ho986/mini-project-showcase/tree/main/projects/${data[i].repo}">Repository</a>
            </button>
            `
            showcase.appendChild(project)
        }
        
    });
