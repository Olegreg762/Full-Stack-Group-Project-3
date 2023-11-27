import LibraryPage from '../../pages/LibraryPage';
import { useLibraryContext } from '../../utils/GlobalState';
import { BOOK_CHECKOUT, BOOK_RETURN } from '../../utils/actions';

const CheckoutBook = () => {
    const [state, dispatch] = useLibraryContext();
    
    const checkoutOnClick = (e) => {
        e.preventDefault();
        dispatch({
            type: BOOK_CHECKOUT,
            available: false,
        });
        const checkoutResult = state.isValid
            ? 'Checkout Successful!'
            : 'Checkout Failed :('

        alert(checkoutResult);        
    };

    return (
        <LibraryPage>
            <button
                type='button'
                id='button'
                className='btn'
                onClick={checkoutOnClick}
            >
                Return Book
            </button>
        </LibraryPage>
    );
};

const ReturnBook = () => {
    const [state, dispatch] = useLibraryContext();

    const returnOnClick = () => {
        dispatch({
            type: BOOK_RETURN,
            available: true,
        });
        const returnResult = state.isValid 
            ? 'Return Successful!'
            : 'Return Failed :('
        
            alert(returnResult);
    };
    
    return (
        <LibraryPage>
            <button
                type='button'
                id='button'
                className='btn'
                onClick={returnOnClick}
            >
                Checkout Book
            </button>
        </LibraryPage>
    );
};

export default { CheckoutBook, ReturnBook };

