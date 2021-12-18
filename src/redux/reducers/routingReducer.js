// This task can be easily solved using this
// import { LOCATION_CHANGE } from "connected-react-router" 

const initialState = {
    route: '/main',
    nodes: [],
    title: 'Main'
}

const routingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NODE': {
            return {
                route: state.route + '/' + action.payload,
                nodes: [...state.nodes, action.payload],
                title: action.payload
            }
        }
        case 'TITLE_NODE':
            return {
                route: '/main',
                nodes: [],
                title: 'Main'
            }
        case 'UPDATE_VIEW':
            const newNodes = action.payload.split('/');
            return {
                ...state,
                route: action.payload,
                nodes: [...newNodes],
                title: newNodes[newNodes.length - 1]
            }
        default: 
            return {
                ...state
            }
    }
}

export default routingReducer;