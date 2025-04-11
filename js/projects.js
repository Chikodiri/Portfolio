// Projects data
const projects = [
    {
        id: 1,
        title: 'Catalogue Design –KOD BLOOM Organic',
        images: [
            'images/catalogue/catalogue1.png',
            'images/catalogue/catalogue2.png',
            'images/catalogue/catalogue3.png',
            'images/catalogue/catalogue4.png',
            'images/catalogue/catalogue5.png',
            'images/catalogue/catalogue6.png'
        ],
        currentImageIndex: 0,
        description: `
            <p>A thoughtfully designed multi-page seed catalogue created to balance visual interest with readability. The project involved designing consistent layouts, establishing a clear typographic hierarchy, and integrating botanical illustrations to enhance product presentation.</p>
            <p>Key features:</p>
            <ul>
                <li>Multi-page layout design</li>
                <li>Consistent visual hierarchy</li>
                <li>Botanical illustrations integration</li>
                <li>Clear typographic system</li>
                <li>Product-focused presentation</li>
            </ul>
        `
    },
    {
        id: 2,
        title: 'Heinz Halloween Campaign – "Unleash the Haunted Flavour"',
        images: [
            'images/heinz/heinz1.png',
            'images/heinz/heinz2.png',
            'images/heinz/heinz3.png',
            'images/heinz/heinz4.png',
            'images/heinz/heinz5.png',
            'images/heinz/heinz6.png'
        ],
        currentImageIndex: 0,
        description: `
            <p>A seasonal promotional poster concept for Heinz ketchup, themed around Halloween. This piece combines eerie imagery such as jack-o'-lanterns and a haunted house backdrop with playful horror-inspired typography to engage a youthful audience while maintaining brand recognition.</p>
            <p>Tools Used:</p>
            <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
            </ul>
        `
    },
    {
        id: 3,
        title: 'Kordi Wordmark Logo',
        images: [
            'images/kordi/kordi1.png',
            'images/kordi/kordi2.png',
            'images/kordi/kordi3.png',
            'images/kordi/kordi4.png',
            'images/kordi/kordi5.png',
            'images/kordi/kordi6.png',
            'images/kordi/kordi7.png'
        ],
        currentImageIndex: 0,
        description: `
            <p>A typographic logo design for a fictional brand, "Kordi," focused on simplicity and modernity. The custom wordmark explores form and balance, utilizing clean geometry and subtle curves to craft a timeless visual identity.</p>
        `
    },
    {
        id: 4,
        title: 'Overloading – Album Artwork & Branding',
        images: [
            'images/overloading/overloading1.png',
            'images/overloading/overloading2.jpg',
            'images/overloading/overloading3.jpg',
            'images/overloading/overloading4.jpg',
            'images/overloading/overloading5.jpg',
            'images/overloading/overloading6.jpg',
            'images/overloading/overloading7.jpg',
            'images/overloading/overloading8.jpg',
            'images/overloading/overloading9.jpg',
            'images/overloading/overloading10.jpg',
            'images/overloading/overloading11.jpg',
            'images/overloading/overloading12.jpg',
            'images/overloading/overloading13.jpg',
            'images/overloading/overloading14.jpg',
            'images/overloading/overloading15.jpg',
            'images/overloading/overloading16.jpg',
            'images/overloading/overloading17.jpg',
            'images/overloading/overloading18.jpg',
            'images/overloading/overloading19.jpg',
            'images/overloading/overloading20.jpg',
            'images/overloading/overloading21.jpg',
            'images/overloading/overloading22.jpg'
        ],
        currentImageIndex: 0,
        description: `
            <p>Visual identity for a fictional Nigerian music label's debut album, Overloading. The project reflects Afrobeat culture and streetwear influences, incorporating bold colors, expressive textures, and layered compositions to create a compelling cover and promotional assets.</p>
            <p>Design Elements:</p>
            <ul>
                <li>Bold color palette inspired by Afrobeat culture</li>
                <li>Expressive textures and patterns</li>
                <li>Layered compositions</li>
                <li>Streetwear-inspired typography</li>
                <li>Promotional material design</li>
            </ul>
        `
    },
    {
        id: 5,
        title: 'Pop Can Packaging – Kordi Fizz',
        images: [
            'images/popcan/popcan1.png',
            'images/popcan/popcan2.png',
            'images/popcan/popcan3.png',
            'images/popcan/popcan4.png'
        ],
        currentImageIndex: 0,
        description: `
            <p>Designed a dynamic soda can concept that combines bold graphics, product flavor cues, and nutritional information. The visual identity evokes freshness and energy, ideal for an on-the-go audience seeking something fun and flavorful.</p>
        `
    },
    {
        id: 6,
        title: 'Tea Box Packaging – Ginger Tea',
        images: [
            'images/teabox/teabox1.png',
            'images/teabox/teabox2.png'
        ],
        currentImageIndex: 0,
        description: `
            <p>Packaging design for a conceptual herbal tea brand emphasizing tranquility and wellness. The box features delicate botanical motifs, a harmonious color palette, and refined typography to create an elegant unboxing experience.</p>
        `
    }
];

// Initialize projects grid
function initializeProjects() {
    const projectsGrid = document.querySelector('#projectsGrid');
    
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'col-md-4 col-sm-6';
        projectItem.innerHTML = `
            <div class="project-item" data-id="${project.id}">
                <div class="project-overlay">
                    <span class="view-text">Click to View</span>
                </div>
                <img src="${project.images[0]}" alt="${project.title}" class="img-fluid rounded">
                <div class="project-info p-3">
                    <h5>${project.title}</h5>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectItem);
    });
}

// Handle project item click
document.querySelector('#projectsGrid').addEventListener('click', (e) => {
    const projectItem = e.target.closest('.project-item');
    if (!projectItem) return;

    const projectId = parseInt(projectItem.dataset.id);
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
        updateModalContent(project);
        const modal = new bootstrap.Modal(document.querySelector('#projectModal'));
        modal.show();
    }
});

// Update modal content
function updateModalContent(project) {
    const modalImage = document.querySelector('#modalImage');
    const modalTitle = document.querySelector('#modalTitle');
    const modalDescription = document.querySelector('#modalDescription');
    
    modalImage.src = project.images[project.currentImageIndex];
    modalTitle.textContent = project.title;
    modalDescription.innerHTML = project.description;
}

// Handle gallery navigation
document.querySelector('#prevImage').addEventListener('click', () => {
    const currentProject = projects.find(project => project.title === document.querySelector('#modalTitle').textContent);
    if (currentProject) {
        currentProject.currentImageIndex = (currentProject.currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
        updateModalContent(currentProject);
    }
});

document.querySelector('#nextImage').addEventListener('click', () => {
    const currentProject = projects.find(project => project.title === document.querySelector('#modalTitle').textContent);
    if (currentProject) {
        currentProject.currentImageIndex = (currentProject.currentImageIndex + 1) % currentProject.images.length;
        updateModalContent(currentProject);
    }
});

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
}); 