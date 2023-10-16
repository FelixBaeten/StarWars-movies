$('.carousel').carousel()

let state = 0;

function search() {
    let term = document.getElementById("search-field").value.toLowerCase();

    const elements = document.querySelectorAll("div > a > .card");

    if (state > term.length) {
        location.reload()
    }

    state = term.length

    for(let i = 0; i < elements.length; i++) {
        let keys = elements[i].id.split("-").join(" ");
        if (!keys.includes(term)) {
            document.getElementById(elements[i].id).style.display = "none";
        }
    }
}