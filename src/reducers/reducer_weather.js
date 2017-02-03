import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    
    switch(action.type) {
        case FETCH_WEATHER:
        // inclination:
        //return state.push(action.payload.data); 
        
        // correct way:
        // return state.concat(action.payload.data);
        // or:
        return [action.payload.data, ...state ];
    }


    return state;
}