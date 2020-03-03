// import request from '@/utils/request'

// data is Algorithm object, put all the filter criteria
export function getAlgorithm(request, data, page, size, token, projectRefId) {
    return request({
        url: '/rest/project/algorithm/get',
        method: 'post',
        data,
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        },
        params: {
            page: page,
            size: size
        }
    })
}

// data is Algorithm object
export function saveAlgorithm(request, token, projectRefId, data) {
    return request({
        url: '/rest/project/algorithm',
        method: 'post',
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        },
        data
    })
}

// data is List<Algorithm>
export function batchDeleteAlgorithm(request, token, projectRefId, data) {
    return request({
        url: '/rest/project/algorithm',
        method: 'delete',
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        },
        data
    })

}


// get Project object
export function getProjectConfig(request, token, projectRefId, projectId) {
    return request({
        url: '/rest/project',
        method: 'get',
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        },
        params: {
            id : projectId
        }
    })

}

// save Project object, including create and update
// data is Project object
export function saveProject(request, token, data) {
    return request({
        url: '/rest/project/config',
        method: 'post',
        headers: {
            'AUTH_TOKEN': token
        }
    })

}

// data is Project object
export function deleteProject(request, token, data) {
    return request({
        url: '/rest/project/config',
        method: 'post',
        headers: {
            'AUTH_TOKEN': token
        }
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
        }
        headers: {'AUTH_TOKEN': token}
        data
    })
}


export function uploadProjectData(request, srcpath, projectRefId, token) {
    return request({
        url: '/rest/userdata',
        method: 'post',
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        },
        params: {
            srcpath: srcpath
        }
      })
}

// refId is ProjectData refId
export function downloadProjectData(request, refId, token, projectRefId) {
    return request({
        url: '/rest/projectdata',
        method: 'get',
        params: {
            refid: refId
        }
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        }
      })
}

// data is List<ProjectData>
export function batchDeleteUserData(request, data) {
    return request({
        url: '/rest/projectdata',
        method: 'delete',
        data
      })
}


// data is Suffix object, put all the filter criteria
export function getSuffix(request, data, token, projectRefId) {
    return request({
        url: '/rest/project/suffix/get',
        method: 'post',
        data,
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        }
    })
}

// data is Suffix object
export function createSuffix(request, token, projectRefId, data) {
    return request({
        url: '/rest/project/suffix',
        method: 'post',
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        },
        data
    })
}

// data is List<Suffix>
export function batchDeleteSuffix(request, token, projectRefId, data) {
    return request({
        url: '/rest/project/suffix',
        method: 'delete',
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        },
        data
    })

}
