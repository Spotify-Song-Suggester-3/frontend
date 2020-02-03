//reducer for fetching of intial songs on BrowsePage (and for filtering songs on search)
import {FETCHING_SONGS_START, FETCHING_SONGS_SUCCESS, FETCHING_SONGS_FAILURE} from '../actions';

const intialState ={
    tracks:[],
    isFetching:false,
    error:''
}


export const reducer = (state =intialState, action)=>{
   switch(action.type){
       case FETCHING_SONGS_START:
           return{
               ...state, 
               isFetching: true,
               error:''
           }
        case FETCHING_SONGS_SUCCESS:
            return{
                ...state,
                tracks: action.payload,
                isFetching:false,
                error:''
            };

            case FETCHING_SONGS_FAILURE:
                return{
                    ...state,
                    loading:null,
                    isFetching:null,
                    error: 'ERROR FETCHING SONGS'
                }

                default:
                    return state

   };
   

}



