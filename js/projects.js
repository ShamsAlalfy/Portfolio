document.addEventListener("DOMContentLoaded", () => {
  const projectsData = [
    {
      title: "Helton Hotel",
      description:
        "A responsive hotel booking website with an interactive multi-step reservation system and smooth user experience.",
      category: "Frontend",
      github:
        "https://github.com/ShamsAlalfy/NTI-Web-Design/tree/main/Helton%20Hotel",
      live: "https://helton-hotel.netlify.app",
    },
    {
      title: "Knowledge Vault",
      description:
        "A Node.js + Express backend for managing a digital library. It supports user accounts, subscriptions, and book management.",
      category: "Backend",
      link: "https://github.com/ShamsAlalfy/Knowledge-Vault.git",
    },
    {
      title: "OmniFood",
      description:
        "A responsive food subscription landing page inspired by Omnifood with modern UI and structured sections for meals, testimonials, and pricing.",
      category: "Frontend",
      github:
        "https://github.com/ShamsAlalfy/NTI-Web-Design/tree/main/OmniFood",
      live: "https://oomni-foodd.netlify.app",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A Laravel-based e-commerce platform with role-based dashboards. Users can browse, buy, and manage products, while admins handle full system management and CSV operations.",
      category: "Backend",
      link: "https://github.com/ShamsAlalfy/E-Commerce.git",
    },
    {
      title: "Fitness",
      description:
        "A simple Gym landing page built with HTML and CSS showcasing services, features, and membership info in a clean design.",
      category: "Frontend",
      github: "https://github.com/ShamsAlalfy/NTI-Web-Design/tree/main/Fitness",
      live: "https://fiitnesssss.netlify.app/",
    },
    {
      title: "Hogwarts for Programming",
      description:
        "A PHP & MySQL platform where users can register, enroll in courses, take quizzes, track their progress, and manage magical items. Admins and professors can manage users, courses, and leaderboards.",
      category: "Backend",
      link: "https://github.com/ShamsAlalfy/Hogwarts-for-programming.git",
    },
    {
      title: "Contact Book Manager",
      description:
        "A C++ application for managing contacts with add, search, update, and delete features. Supports classification (Friends, Family, Work, Favorites), file storage, and reversing/clearing the contact list.",
      category: "Basics",
      link: "https://github.com/ShamsAlalfy/Contact-Book-Manager.git",
    },
    {
      title: "Quran Playlist Manager",
      description:
        "A C++ application for creating and managing Quran playlists using a custom Doubly Linked List. Supports adding, updating, deleting, and reordering Surahs, audio playback controls, and saving/loading playlists to files.",
      category: "Basics",
      link: "https://github.com/ShamsAlalfy/Quran-Playlist.git",
    },
  ];

  const projectsWrapper = document.getElementById("projects-wrapper");

  projectsData.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            `;
    if (project.category == "Frontend") {
      card.innerHTML += `
                <div>
                    <a href="${project.github}" target="_blank" class="left">View on GitHub</a>
                    <a href="${project.live}" target="_blank" class="right">Link</a>
                </div>
                `;
    } else {
      card.innerHTML += `
                <a href="${project.left}" target="_blank" class="left">View on GitHub</a>
                `;
    }
    projectsWrapper.appendChild(card);
  });
});
