//reducer for fetching of intial songs on BrowsePage (and for filtering songs on search)
import {FETCHING_SONGS_START, FETCHING_SONGS_SUCCESS, FETCHING_SONGS_FAILURE, FILTER_SONGS, SET_USER_ID} from '../actions';


const intialState ={
    songs:[],
    loading:false,
  isFiltering:false,
  isFethcing:false,
    error:'',
    userID:'',
    favorites:[]
}


export const reducer = (state =intialState, action)=>{
   switch(action.type){
       case FETCHING_SONGS_START:
           return{
               ...state, 
               loading:true,
               isFethcing: true,
               error:'',
               isFiltering:false,
               userID:''
           }
        case FETCHING_SONGS_SUCCESS:
            return{
                ...state,
                loading:false,
                isFethcing:action.payload,
                error:''
            };

            case FETCHING_SONGS_FAILURE:
                return{
                    ...state,
                    isFethcing:false,
                    error: action.payload
                }

            case SET_USER_ID:
                 return {
                ...state,
                userID: action.payload
            }
                case FILTER_SONGS:
                    return{
                        ...state, 
                        isFethcing:action.payload,
                        isFiltering:true
                    }

                default:
                    return state

   };
   

}



