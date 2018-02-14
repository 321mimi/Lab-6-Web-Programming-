// lab6 JavaScript file
// By Michelle Cantin

// Initial Array
var bookArray = [
    {
        author: "William Shakespeare",
        title : "The Tempest",
        genre : "Historical Fiction"
    }, {
        author: "Stephen King",
        title : "The Shining",
        genre : "Horror"
    }, {
        author: "Anne Frank",
        title : "The Diary of Anne Frank",
        genre : "Non-Fiction"
    }
];

// Section A – Adding Book Recommendations
function addBooks() {
    for (i = 3; i < 6; i++) {
        var number = i - 2;
        var book = " for book " + number;
        bookArray[i] = {
            author: prompt("Author" + book),
            title : prompt("Title" + book),
            genre : prompt("Genre" + book)
        };
    }
}

// Section B – Display the Book Recommendations
function displayRecommendations() {
    var ul = document.createElement("ul");
    document.getElementById("bookList").appendChild(ul);
    for (i = 0; i < 6; i++) {
        var number = i + 1;
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = '<b>' + "Book: " + number + ": " + '</b>' + bookArray[i].title + ", " + bookArray[i].genre + ", " + bookArray[i].author;
    }
}

// Section C – Invoke the Functions
addBooks();
displayRecommendations();
