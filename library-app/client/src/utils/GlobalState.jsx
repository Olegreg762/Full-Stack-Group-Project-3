import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers';

const LibraryContext = createContext();
const { Provider } = LibraryContext;

const LibraryProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        libraries: [],
        books: [],
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useLibraryContext = () => {
    return useContext(LibraryContext);
};

export { LibraryProvider, useLibraryContext };