
// get all model according project
// project is enclosed in the header
export function getModelList(request, project) {
    return request({
        url: '/rest/model/',
        method: 'get',
        headers: {
            'PROJECT': project
        },
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
export function pushDecision(request, data, project) {
    return request({
        url: '/rest/model/',
        method: 'put',
        headers: {
            'PROJECT': project
        },
        data
    })
}


// add user token and project refId in header
// data is a Model obj
export function release(request, data, project) {
    return request({
        url: '/rest/model/',
        method: 'patch',
        headers: {
            'PROJECT': project
        },
        data
    })
}


// add user token and project refId in header
// data is a Model obj
export function initModelToStage(request, project) {
    return request({
        url: '/rest/model/init',
        method: 'post',
        headers: {
            'PROJECT': project
        }
    })
}



