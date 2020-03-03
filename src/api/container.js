

// data is List<Suffix>
export function batchDeleteSuffix(request, token, projectRefId, type) {
    return request({
        url: '/rest/container/type/' + type,
        method: 'post',
        headers: {
            'AUTH_TOKEN': token,
            'PROJECT': projectRefId
        },
        data
    })
}