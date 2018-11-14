
const request = (url, method, data, header = {}) => {
    return new Promise((success, fail) => {
        wx.request({
            url,
            method,
            data,
            header,
            success,
            fail
        })
    })
}

const join = function() {
    return [].slice.call(arguments, 0).map(p => p.replace(/^[\/]+/, '').replace(/[\/]+$/, '')).join('/')
}

const methodNames = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

module.exports = {
    request,
    join,
    methodNames
}