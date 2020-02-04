//reducer for fetching of intial songs on BrowsePage (and for filtering songs on search)
import {FETCHING_SONGS_START, FETCHING_SONGS_SUCCESS, FETCHING_SONGS_FAILURE, FILTER_SONGS} from '../actions';

const intialState ={
  loading:false,
  isFiltering:false,
  gettingSongs:null,
    error:''
}


export const reducer = (state =intialState, action)=>{
   switch(action.type){
       case FETCHING_SONGS_START:
           return{
               ...state, 
               loading: true,
               error:'',
               isFiltering:false
           }
        case FETCHING_SONGS_SUCCESS:
            return{
                ...state,
                loading:false,
                gettingSongs:action.payload,
                error:''
            };

            case FETCHING_SONGS_FAILURE:
                return{
                    ...state,
                    loading:null,
                    gettingSongs:null,
                    error: 'ERROR FETCHING SONGS'
                }

                case FILTER_SONGS:
                    return{
                        ...state, 
                        gettingSongs:action.payload,
                        isFiltering:true
                    }

                default:
                    return state

   };
   

}



