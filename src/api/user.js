// import request from '@/utils/request'

// invoke when user want to add collaborator
// use for find all the user whoes name match or partly match with the input name
// param: input name
// need to enclose user token
export function getUserByName(request, name) {
    return request({
        url: '/rest/user',
        method: 'get',
        params: {
            name: name
        }
    })
}

// get the role name in DB, like developer and manager
// for bind the role with user and project
// need to enclose user token
export function getRoles(request) {
    return request({
        url: '/rest/role',
        method: 'get'
    })
}

// data is an UserData object, put all the filter criteria in this obj
// For pagination, need params page and size;
// need to enclose user token
export function getUserData(request, data, page, size) {
    return request({
        url: '/rest/userdata/get',
        method: 'post',
        params: {
            page: page,
            size: size
        }
        data
    })
}

// data is uploadDto, including the path of the data, and which category the user want to put
// need to enclose user token
export function uploadUserData(request, data) {
    return request({
        url: '/rest/userdata',
        method: 'post'
      })
}

// refId is the UserData refId
// need to enclose user token
export function downloadUserData(request, refId) {
    return request({
        url: '/rest/userdata',
        method: 'get',
        params: {
            refid: refId
        }
      })
}

// data is List<UserData>
export function batchDeleteUserData(request, data) {
    return request({
        url: '/rest/userdata',
        method: 'delete',
        data
      })
}
