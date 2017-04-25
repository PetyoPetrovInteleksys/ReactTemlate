import {browserHistory} from 'react-router'


export default function RootReducer(state = {}, action) {
    console.log('RootReducer');
    switch (action.type) {

        case 'LOGGED':
            return login(state, action);

        default :
            return state
    }



}

function login(state, action) {

    sessionStorage.setItem('loged', true);

    console.log(' in reducer login');

    //  console.log(action.payload);
    let username = action.payload.username;
    browserHistory.push('/home/about');

    return Object.assign({}, state, {loged: true, username:username})
}