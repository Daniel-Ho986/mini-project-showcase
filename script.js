const showcase = document.getElementById('showcase');

fetch('projects/projects.json')
    .then(results => results.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const project = document.createElement('div')
            project.classList.add('sub-container')

            project.innerHTML = 
            `
            <img src="/projects/images/${data[i].image_src}" alt="${data[i].image_alt}">
            <a class="title" href="projects/${data[i].demo}">${data[i].title}</a>
            <button class="btn">
                <a class="repo" href="https://github.com/Daniel-Ho986/50-mini-projects/tree/main/projects/${data[i].repo}">Repository</a>
            </button>
            `
            showcase.appendChild(project)
        }
        
    });
