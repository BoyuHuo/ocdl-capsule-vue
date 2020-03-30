

// type is cpu/gpu
export function getContainer(request, type) {
    return request({
        url: '/rest/container/type/' + type,
        method: 'post'
    })
}