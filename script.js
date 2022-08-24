const showcase = document.getElementById('showcase');

const images = 
[
    {
        "image_src": "1-expanding-cards.png",
        "image_alt": "expanding-cards",
    },
    {
        "image_src": "2-progress-steps.png",
        "image_alt": "progress-steps",
    },
    {
        "image_src": "3-rotating-navigation.png",
        "image_alt": "rotating-navigation",
    }
]

fetch('projects/projects.json')
    .then(results => results.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const project = document.createElement('div')
            project.classList.add('sub-container')

            project.innerHTML = 
            `
            <img src="/projects/images/${images[i].image_src}" alt="${images[i].image_alt}"></img>
            <a class="title" href="projects/${data[i].demo}">${data[i].title}</a>
            <button class="btn">
                <a class="repo" href="https://github.com/Daniel-Ho986/50-mini-projects/tree/main/projects/${data[i].repo}">Repository</a>
            </button>
            `
            showcase.appendChild(project)
        }
        
    });
