
// get template according the project
// header has project refId
export function getCategory(request) {
    return request({
        url: '/rest/template/category',
        method: 'get'
    })
}

// data is a TemplateCategory obj
export function saveCategory(request, data) {
    return request({
        url: '/rest/template/category',
        method: 'post',
        data
    })
}


// data is a TemplateCategory obj
export function deleteCategory(request, data) {
    return request({
        url: '/rest/template/category',
        method: 'delete',
        data
    })
}


// data is a Template obj
// put all the filter in the Template obj
export function getTemplates(request, data) {
    return request({
        url: '/rest/template/get',
        method: 'post',
        data
    })
}

// data is a UploadDto obj
export function uploadTemplates(request, data) {
    return request({
        url: '/rest/template/',
        method: 'post',
        data
    })
}


export function downloadTemplates(request, templateRefId) {
    return request({
        url: '/rest/template/' + templateRefId,
        method: 'get'
    })
}

// data is List<Template> obj
export function batchDeleteTemplate(request, data) {
    return request({
        url: '/rest/template/',
        method: 'delete',
        data
    })
}
