const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;
            question.querySelector("span").textContent = "+";

        }else{

            answer.style.maxHeight = answer.scrollHeight + "px";
            question.querySelector("span").textContent = "-";

        }

    });

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        faqItems.forEach((faq) => {

            if (faq !== item) {
                faq.classList.remove("active");
                faq.querySelector(".faq-answer").style.maxHeight = null;
            }

        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }

    });

});