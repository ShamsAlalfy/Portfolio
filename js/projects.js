document.addEventListener("DOMContentLoaded", () => {

    const projectsData = [
        {
            title: "Knowledge Vault",
            description: "A Node.js + Express backend for managing a digital library. It supports user accounts, subscriptions, and book management.",
            link: "https://github.com/ShamsAlalfy/Knowledge-Vault.git"
        },
        {
            title: "E-Commerce Platform",
            description: "A Laravel-based e-commerce platform with role-based dashboards. Users can browse, buy, and manage products, while admins handle full system management and CSV operations.",
            link: "https://github.com/ShamsAlalfy/E-Commerce.git"
        },
        {
            title: "Hogwarts for Programming",
            description: "A PHP & MySQL platform where users can register, enroll in courses, take quizzes, track their progress, and manage magical items. Admins and professors can manage users, courses, and leaderboards.",
            link: "https://github.com/ShamsAlalfy/Hogwarts-for-programming.git"
        },
        {
            title: "Contact Book Manager",
            description: "A C++ application for managing contacts with add, search, update, and delete features. Supports classification (Friends, Family, Work, Favorites), file storage, and reversing/clearing the contact list.",
            link: "https://github.com/ShamsAlalfy/Contact-Book-Manager.git"
        },
        {
            title: "Quran Playlist Manager",
            description: "A C++ application for creating and managing Quran playlists using a custom Doubly Linked List. Supports adding, updating, deleting, and reordering Surahs, audio playback controls, and saving/loading playlists to files.",
            link: "https://github.com/ShamsAlalfy/Quran-Playlist.git"
        }
    ];

    const projectsWrapper = document.getElementById("projects-wrapper");

    projectsData.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;

        projectsWrapper.appendChild(card);
    });

});
