document.addEventListener("DOMContentLoaded", () => {

    const nameText = "Shams Alalfy";
    const jobText = "Full-Stack Developer";

    const nameElement = document.getElementById("typing-name");
    const jobElement = document.getElementById("typing-job");

    let index = 0;
    let isDeleting = false;

    function typeEffect() {

        if (!isDeleting) {
            nameElement.textContent = nameText.substring(0, index + 1);
            jobElement.textContent = jobText.substring(0, index + 1);
            index++;

            if (index >= Math.max(nameText.length, jobText.length)) {
                setTimeout(() => isDeleting = true, 1000);
            }
        } 
        else {
            nameElement.textContent = nameText.substring(0, index - 1);
            jobElement.textContent = jobText.substring(0, index - 1);
            index--;

            if (index <= 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeEffect, isDeleting ? 60 : 120);
    }

    typeEffect();
});
