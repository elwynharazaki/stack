import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

const reducer = combineReducers({
   libraries: LibraryReducer,
   selectedLibraryId: SelectionReducer
});

export default reducer;
