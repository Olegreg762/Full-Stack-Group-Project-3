import LibraryChoicePage from '../../pages/LibraryChoicePage';
import { useLibraryContext } from '../../utils/GlobalState';
import { UPDATE_LIBRARY, ADD_LIBRARY, DELETE_LIBRARY} from '../../utils/actions';

const UpdateLibrary = () => {
    const [state, dispatch] = useLibraryContext();

    const updateOnSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: UPDATE_LIBRARY,
            payload: e,
        });

        const updateLibraryResults = state.isValid
            ? 'Update Successful!'
            : 'Update Failed!'
        
            alert(updateLibraryResults);
    };

    return (
        <LibraryChoicePage>

        </LibraryChoicePage>
    )
}

const AddLibrary = () => {

}