const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });

    });
}

// BOOK CATALOGUE
const books = [
    {
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        category: "Fiction",
        year: 1958,
        available: true
    },
    {
        title: "The River Between",
        author: "Ngũgĩ wa Thiong'o",
        category: "Fiction",
        year: 1965,
        available: true
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Development",
        year: 2018,
        available: false
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Technology",
        year: 2008,
        available: true
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        year: 1988,
        available: true
    },
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Technology",
        year: 1990,
        available: false
    }
];

function displayBooks(bookCollection = books) {

    const bookList = document.getElementById("book-list");

    if (!bookList) {
        return;
    }

    bookList.innerHTML = "";

    if (bookCollection.length === 0) {
        const message = document.createElement("p");
        message.className = "no-results";
        message.textContent = "No books found matching your search.";
        bookList.appendChild(message);
        return;
    }

    bookCollection.forEach(function(book) {

        const card = document.createElement("article");
        card.className = "book-card";

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.className = "book-author";
        author.textContent = `Author: ${book.author}`;

        const category = document.createElement("p");
        category.className = "book-category";
        category.textContent = `Category: ${book.category}`;

        const year = document.createElement("p");
        year.className = "book-year";
        year.textContent = `Published: ${book.year}`;

        const status = document.createElement("span");

        status.className = book.available
            ? "book-status available"
            : "book-status unavailable";

        status.textContent = book.available
            ? "Available"
            : "Currently Borrowed";

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(category);
        card.appendChild(year);
        card.appendChild(status);

        bookList.appendChild(card);
    });
}

displayBooks();

const categoryFilter = document.getElementById("category-filter");

function populateCategories() {

    if (!categoryFilter) {
        return;
    }

    const categories = [];

    books.forEach(function(book) {

        if (!categories.includes(book.category)) {
            categories.push(book.category);
        }

    });

    categories.sort();

    categories.forEach(function(category) {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);

    });
}

const searchInput = document.getElementById("book-search");
function applyFilters() {

    const searchTerm = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const selectedCategory = categoryFilter
        ? categoryFilter.value
        : "all";

    const filteredBooks = books.filter(function(book) {

        const matchesSearch =
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            book.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayBooks(filteredBooks);
}

if (categoryFilter) {

    categoryFilter.addEventListener("change", function() {
        applyFilters();
    });

}


if (searchInput) {

    searchInput.addEventListener("input", function() {
        applyFilters();
    });

}

populateCategories();
applyFilters();
