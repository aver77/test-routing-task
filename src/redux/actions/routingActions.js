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
    titleNode,
    updateView
}