
// get all model according project
// project is enclosed in the header
export function getModelList(request) {
    return request({
        url: '/rest/model/',
        method: 'get'
    })
}


// get event, get model list by user
// add user token and project refId in header
export function getModelListByUser(request) {
    return request({
        url: '/rest/model/event',
        method: 'get'
    })
}

// data is a Model obj
// add user token and project refId in header
export function pushDecision(request, modelId, data) {
    return request({
        url: '/rest/model/' + modelId,
        method: 'post',
        data
    })
}


// add user token and project refId in header
// data is a Model obj
export function release(request, modelId, data) {
    return request({
        url: '/rest/model/' + modelId,
        method: 'patch',
        data
    })
}


// add user token and project refId in header
// data is a Model obj
export function initModelToStage(request) {
    return request({
        url: '/rest/model',
        method: 'post'
    })
}



