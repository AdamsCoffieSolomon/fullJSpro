const form = document.querySelector('#forms');
const mydiv = document.querySelector('.bookStore')

form.addEventListener("submit", (e) => {
    e.preventDefault()

})
const submitBooks = async function() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    console.log(title, author);
    let mybooksurl = `https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-a56a0c84-5aa3-4d65-82b2-37ce762f59df/cloud/addBooks?title=${title}&author=${author}`
    await fetch(mybooksurl);
    console.log(mybooksurl);

}
let submitinput = document.getElementById('submit');
submitinput.addEventListener('click', submitBooks);
document.addEventListener("DOMContentLoaded", () => {
    let ul = document.createElement("ul");

    let getBooksUrl = `https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-a56a0c84-5aa3-4d65-82b2-37ce762f59df/cloud/getBooks`
    fetch(getBooksUrl)
        .then(response => response.json())
        .then(books => {
            console.log(books)
            for (let book of books) {
                let list = document.createElement("li");
                list.innerHTML = `Book titled ${book.title} was written by ${book.author}</li>
            <button>Remove</button>
            <hr>
          `;
                ul.appendChild(list)
                mydiv.appendChild(ul);
            }
        })
})