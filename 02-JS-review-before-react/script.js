const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];
// function to get all the books
function getBooks() {
    return data;
}
// function to get book by their id
function getBook(id) {
    return data.find((d) => d.id === id);
}

const book = getBook(2);

// const title = book.title;
// const author = book.author;

// destructuring of object
// object destructuring depends of properties of objects
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } = book;
console.log("title: ", title, ", author: ", author);
// array destructruting: depends on the order of elements in the array
// const primaryGenre = genres[0];
// const seconderyGenre = genres[1];


// let's take  genres from index 2 to end inside an array
// using rest operator.
const [primaryGenre, seconderyGenre, ...otherGenres] = genres; // starts taking values from index 0 and goes on.
console.log(otherGenres);
// NOTE:
// 1. object destructruing depends on its properties
// and properties are denoted inside {}\
// 2. array destructuring depends on the order of elements in the array
// and properties are denoted inside []
// NOTE: a rest element must be in last in a destructuring pattern
// const [primaryGenre,...otherGenres,seconderyGenre] = genre; not allowed
// rest operator must be used at last position only.

// spread operator on array: just copy the values from an array
// can be written any order i.e. at last or at first.
const newGenres = ["crime thriller", ...genres];
// [...genres,"crime thriller"] is also allowed.
console.log(newGenres);

// spread operator is very important for objects.
// it allows us to add new properties and also to update existing ones.
const updatedBook = {
    ...book,
    // adding a new property
    moviePublicationDate: "2001-12-19",
    // overwriting an existing property
    pages: 1300
};
// here created another book named updatedBook from the Book object
// with adding new property and overwriting its existing property.
console.log(updatedBook);


// writing a funciton declaration to get year from a full data
// the input str is a date given like this:year-month-date
// function getYear(str) {
//     return str.split("-")[0];
// }
// console.log(getYear(publicationDate));
/* arrow function: a new way to write function in JS
it was introduced by ES6. very useful for writing short, one-line funcitons.
 */
// now writing an arrow function to get year from date like the above function
const getYear = (str) => str.split("-")[0];

// template literals are ES6 JS feature.
// it allows us to write any JS variables,expressions inside strings
// using template literals
const summary = `${title} is a ${pages} long book which was published in the year ${getYear(publicationDate)}. The movie has ${hasMovieAdaptation ? "" : "not"} been adapated into a movie`;
console.log(summary);

// using ternary operator
/*
in react, we need to define values based on conditions all the time
we can not use if-else conditions in react all the time.
So ternaries come in rescure for us.
*/
const pagesRange = pages > 1000 ? "over a thousand pages" : "less than 1000";
console.log(pagesRange);

/* in logical operation(&&): 
1) if first condition is true, returns second value.
if false, returns false(first value)
short-circuiting in &&: if first condition if false.
// short-circuting: in certain condition,
the logical operator will return the first value
and will not even take a look at the second second value
*/
console.log(true && "react is awesome");
// immeditately returns the second value
console.log(false && "hi, let's learn react");
// this is short circuting in logical &&. returns false.
console.log(hasMovieAdaptation && "The book has a movie");

/* falsy values in JS:
1. the boolean false value
2. null
3. undefined
4. number 0,-0
5. NaN(not a number)
6. empty string("")
*/
console.log(true && "truthy value");
console.log(false && "falsy value");
console.log(true && false);
console.log(false && true);

// logical || condition:
// if first is true value, returns first
// if first is false, returns second value.
console.log(true || "some string");
console.log(false || "some string");
/*Note: using logical || operator may produce wrong results.
as it goes to second value if first is falsy.
let's check countWrong var value below:
  */
const countWrong = (book.reviews.librarything.reviewsCount || "no data");
console.log(countWrong);
// here, countWrong is taking second value which is "no data"
// but this is not write.
// the output should be 0 as the value for
// librarything's review count is 0. but since 0 is considered here
// as falsy, so || operator took second value which occurred wrong result.
// that is why using || operator may produce wrong results.
// solution: in order to get rid of this thing,
// JS has introduced a new logical operator.
// this is (??), named as "nullish coalescing operator"
// returns second value only if first value is null or undefined
const count = book.reviews.librarything.reviewsCount ?? "no data";
console.log(count);

/*optional chaining: telling the compiler to go find for further values
only if the value we are trying to access till now is not null or undefined.


*/
// now writing a function to count total no. of reviews for  a book
const getTotalReviewsCount = book => {
    const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
    // here, reviews?., ? is the optional chaining.
    // we are telling the compiler if reviews value is a truthy value
    // then only go further to find value of reviewsCount
    // if book.reviews produces undefine, compiler will not try to access reviewsCount
    // as undefined.property is error.
    // also using ?? operator in case the left side (book.reviews?.reviewsCount)
    // equals to undefined, then taking 0 value for review count.
    // as goodreads has a numerical value.
    // otherwise, goodreads + librarything can gives error
    // as 25 + undefined = undefined(or NaN)
    const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

    return goodreads + librarything;
}
console.log(getTotalReviewsCount(book));

/*functional Array methods:map(), reduce(), filter(),.......etc
Array.map(): runs on each memeber of the array, returns 
a new array of the same lengh of the given array
performs some calculation defined inside the block
*/
const books = getBooks();
const essentialData = books.map(book => ({
    title: book.title,
    author: book.author,
    reviesCount: getTotalReviewsCount(book)
}));
console.log(essentialData);

/*Array.filter(): filters out some of the elements from the given array
performs other calculation declared in the block of the function
returns a new array
*/

const longBooksWithMovie = books
    .filter((book) => book.pages > 500)
    .filter(book => book.hasMovieAdaptation);
console.log(longBooksWithMovie);
const adventureBooks = books
    .filter(book => book.genres.includes("adventure"))
    .map(book => book.title);
console.log(adventureBooks);

/*Array.reduce:(callbackFunction(), starterValue);
it reduces the entire value to just one value. returns the value
does not change the array
*/
const totalPagesToRead = books.reduce((currentSum, book) => currentSum + book.pages, 0);
console.log(totalPagesToRead);

/*Array.sort(): sort the array in lexicographical order.
unlike map,reduce,filter funcitons which do not change the original array
it changes the original array.
in order to sort in ascending/descending order, we need to write our
own comparator function.
*/
const arr = [18, 1, 8, 5, 20];
const sorted = arr.sort((a, b) => a - b); // a-b: sort in ascending, b-a: in descending order
console.log(sorted);
console.log(arr); //[1,5,8,18,20]
//,look it changed the original arr
// to preserve the original array use slice() function,then sort.
// like below:
const arr2 = [20, 1, 13, 11, 14, 14, 10];
const sorted2 = arr2.slice().sort((a, b) => a - b);
console.log(sorted2);
console.log(arr2); // it is unchanged.

// now sorting the books in ascending order by page numbers
// and showing their names.
const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages).map((book) => book.title);
console.log(sortedByPages);

// working with immutable arrays.
// 1. Add book object to array
const newBook = {
    id: 6,
    title: "Dorjar Opashe",
    author: "Humayun Ahmed"
};
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2. delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3. update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
    book.id === 1 ? { ...book, price: 420 } : book
);
console.log(booksAfterUpdate);