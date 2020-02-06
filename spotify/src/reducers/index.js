//reducer for fetching of intial songs on BrowsePage (and for filtering songs on search)
import {FETCHING_SONGS_START, FETCHING_SONGS_SUCCESS, FETCHING_SONGS_FAILURE, FILTER_SONGS, SET_USER_ID} from '../actions';


const intialState ={
//    songs: [],
//   isFiltering:false,
loading:false,
  gettingSongs:false,
    error:'',
    userID:'',
    // favorites:[]
}


export const reducer = (state =intialState, action)=>{
   switch(action.type){
       case FETCHING_SONGS_START:
           return{
               ...state,
               error:'',
               loading:true,
             
           }
        case FETCHING_SONGS_SUCCESS:
            return{
                ...state,
                // songs: action.payload,
                loading:false,
                gettingSongs:action.payload,
                error:''
            };

            case FETCHING_SONGS_FAILURE:
                return{
                    ...state,
                    gettingSongs:false,
                    error: action.payload
                }

            case SET_USER_ID:
                 return {
                ...state,
                userID: action.payload
            }
                
                default:
                    return state

   };
   

}



