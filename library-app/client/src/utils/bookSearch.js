// Use when manipulating a book already in a library
export const bookSearchById = async (Idsearch) =>  {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${Idsearch}`);
    return bookParse(response);
};
// Use when searching for a book or adding to a library
export const bookSearchByName = async (nameSearch) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${nameSearch}`);
    return bookParse(response)
};

async function bookParse(response){
    try {
        const bookData = await response.json();

        let parsedBookData = []

        const bookDetails = (book) => ({
            bookId: book.id,
            authors: book.volumeInfo.authors,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        });

        const noData = {
            bookId: 'No Data',
            authors:  'No Data',
            title:  'No Data',
            image:  'No Data'
        };

        if(bookData.items){
            parsedBookData = bookData.items.map(bookDetails);
        } else if (bookData.volumeInfo) {
            parsedBookData = [bookDetails(bookData)]
        } else {
            parsedBookData = [noData]
        }
        
        return parsedBookData;
    } catch (error) {
        console.log(`ERROR-${error}`)
    }
};