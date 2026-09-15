document.addEventListener("DOMContentLoaded", () => {

    const skillsData = [
        {
            title: "Languages",
            skills: [
                { name: "C++", icon: "fa-solid fa-c" },
                { name: "HTML", icon: "fa-brands fa-html5" },
                { name: "CSS", icon: "fa-brands fa-css3-alt" },
                { name: "JavaScript", icon: "fa-brands fa-square-js" },
                { name: "Bootstrap", icon: "fa-brands fa-bootstrap"},
                { name: "PHP", icon: "fa-brands fa-php" },
                { name: "Dart", icon: "fa-regular fa-mobile" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: "fa-brands fa-node" },
                { name: "Express.js", icon: "fa-brands fa-node-js" },
                { name: "Laravel", icon: "fa-brands fa-laravel" }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: "fa-solid fa-database" },
                { name: "MongoDB", icon: "fa-solid fa-database" }
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: "fa-brands fa-git-alt" },
                { name: "GitHub", icon: "fa-brands fa-github" },
                { name: "VSCode", icon: "fa-solid fa-code" },
                { name: "Postman", icon: "fa-brands fa-telegram" },
                { name: "LaTeX", icon: "fas fa-file-alt" },
                { name: "Markdown", icon: "fas fa-book" },
                { name: "Figma", icon: "fa-brands fa-figma" } 
            ]
        }
    ];

    const skillsWrapper = document.getElementById("skills-wrapper");

    skillsData.forEach(group => {
        const groupDiv = document.createElement("div");
        groupDiv.classList.add("skills-group");

        const groupTitle = document.createElement("h2");
        groupTitle.textContent = group.title;
        groupDiv.appendChild(groupTitle);

        const container = document.createElement("div");
        container.classList.add("skills-container");

        group.skills.forEach(skill => {
            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill");
            skillDiv.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
            container.appendChild(skillDiv);
        });

        groupDiv.appendChild(container);
        skillsWrapper.appendChild(groupDiv);
    });

});
