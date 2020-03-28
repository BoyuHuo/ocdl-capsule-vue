// import request from '@/utils/request'

// data is Algorithm object, put all the filter criteria
export function getAlgorithm(request, data, page, size) {
    return request({
        url: '/rest/project/algorithm/get',
        method: 'post',
        data,
        params: {
            page: page,
            size: size
        }
    })
}

// data is Algorithm object
export function saveAlgorithm(request, data) {
    return request({
        url: '/rest/project/algorithm',
        method: 'post',
        data
    })
}

// data is List<Algorithm>
export function batchDeleteAlgorithm(request, data) {
    return request({
        url: '/rest/project/algorithm',
        method: 'delete',
        data
    })

}


// get Project object
export function getProjectConfig(request, projectId) {
    return request({
        url: '/rest/project',
        method: 'get',
        params: {
            id: projectId
        }
    })

}

// save Project object, including create and update
// data is Project object
export function saveProject(request, data) {
    return request({
        url: '/rest/project/config',
        method: 'post',
        data
    })

}

// data is Project object
export function deleteProject(request, data) {
    return request({
        url: '/rest/project/config',
        method: 'delete',
        data
    })

}

// data is an Project object, put all the filter criteria in this obj
// For pagination, need params page and size;
// need to enclose user token
export function getProjectData(request, data, page, size) {
    return request({
        url: '/rest/project/projectdata/get',
        method: 'post',
        params: {
            page: page,
            size: size
        },
        data
    })
}


export function uploadProjectData(request, srcpath) {
    return request({
        url: '/rest/project/projectdata',
        method: 'post',
        params: {
            srcpath: srcpath
        }
    })
}

// refId is ProjectData refId
export function downloadProjectData(request, refId) {
    return request({
        url: '/rest/project/projectdata',
        method: 'get',
        params: {
            refid: refId
        }
    })
}

// data is List<ProjectData>
export function batchDeleteUserData(request, data) {
    return request({
        url: '/rest/project/projectdata',
        method: 'delete',
        data
    })
}


// data is Suffix object, put all the filter criteria
export function getSuffix(request, data) {
    return request({
        url: '/rest/project/suffix/get',
        method: 'post',
        data
    })
}

// data is Suffix object
export function createSuffix(request, data) {
    return request({
        url: '/rest/project/suffix',
        method: 'post',
        data
    })
}

// data is List<Suffix>
export function batchDeleteSuffix(request, data) {
    return request({
        url: '/rest/project/suffix',
        method: 'delete',
        data
    })
}
