const addNode = (currentUrl) => {
    return {
        type: 'ADD_NODE',
        payload: currentUrl
    }
}

const titleNode = () => {
    return {
        type: 'TITLE_NODE'
    }
}

const updateView = (currentNodes) => {
    return {
        type: 'UPDATE_VIEW',
        payload: currentNodes
    }
}

export {
    addNode,
    titleNode,
    updateView
}