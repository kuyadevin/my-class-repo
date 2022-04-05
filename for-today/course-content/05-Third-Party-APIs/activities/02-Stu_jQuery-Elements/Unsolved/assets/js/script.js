// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
var NewVar = $("#root")
// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var Author = $("<p>")
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
Author.text("~ Carol Dweck")
// TODO: Add the class `plain` to the author element
Author.addClass("plain")
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var Quote =$("<h1>")
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
Quote.text("Love Challenges, Be Intrgiued by Mistakes, Enjoy Effort, and Keep Learning.")
// TODO: Apply the class `fancy` to the quote element
Quote.addClass("fancy")
// TODO: Append the author element to the quote element
Quote.append(Author)
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
NewVar.append(Quote)