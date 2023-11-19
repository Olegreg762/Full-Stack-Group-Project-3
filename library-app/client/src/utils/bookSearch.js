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
    const bookData = await response.json();
    try {
        if(bookData.items || bookData.volumeInfo){
            const parsedBookData = bookData.items.map((book) => ({
               bookId: book.id,
               authors: book.volumeInfo.authors,
               title: book.volumeInfo.title,
               description: book.volumeInfo.description,
               image: book.volumeInfo.imageLinks.thumbnail
            }))
            // const parsedBookData = {
            //    bookId: bookData.id,
            //    authors: bookData.volumeInfo.authors,
            //    title: bookData.volumeInfo.title,
            //    description: bookData.volumeInfo.description,
            //    image: bookData.volumeInfo.imageLinks.thumbnail
            // }
        
            return parsedBookData;
        } else {
            const noData = {
                bookId: 'No Data',
                authors:  'No Data',
                title:  'No Data',
                image:  'No Data'
            }

            return noData;
        }
    } catch (error) {
        console.log(`ERROR-${error}`)
    }
};

async function exampleUsage() {
    try {
      const idSearchResult = await bookSearchById('XA4iEAAAQBAJ');
      console.log('ID Search Result:', idSearchResult);
  
    //   const nameSearchResult = await bookSearchByName('Leviathan Falls');
    //   console.log('Name Search Result:', nameSearchResult);
    } catch (error) {
      console.error('Error:', error);
    }
  };

exampleUsage();