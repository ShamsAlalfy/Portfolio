document.addEventListener("DOMContentLoaded", () => {

    const skillsData = [
        {
            title: "Languages",
            skills: [
                { name: "C++", icon: "fab fa-cuttlefish" },
                { name: "HTML", icon: "fab fa-html5" },
                { name: "CSS", icon: "fab fa-css3-alt" },
                { name: "JavaScript", icon: "fab fa-js-square" },
                { name: "PHP", icon: "fab fa-php" },
                { name: "Dart", icon: "fas fa-mobile-alt" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: "fab fa-node-js" },
                { name: "Express.js", icon: "fas fa-server" },
                { name: "Laravel", icon: "fab fa-laravel" }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: "fas fa-database" },
                { name: "MongoDB", icon: "fas fa-database" }
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: "fab fa-git-alt" },
                { name: "GitHub", icon: "fab fa-github" },
                { name: "VSCode", icon: "fas fa-code" },
                { name: "Postman", icon: "fas fa-paper-plane" },
                { name: "LaTeX", icon: "fas fa-file-alt" },
                { name: "Markdown", icon: "fas fa-book" }
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
