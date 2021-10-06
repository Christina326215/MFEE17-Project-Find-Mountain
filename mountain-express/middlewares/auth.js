module.exports = {
    // authentication
    loginCheckMiddleware: function (req, res, next) {
        // 要登入後才可以看
        console.log('session', req.session.account)
        if (!req.session.account) {
            // session 裡面沒有 member --> 還沒登入
            return next({
                status: 401,
                message: '登入會員後，即可以享受更多專屬功能',
            })
        } else {
            // 如果 session 裡面是有 member 的
            // 已經登入過的
            next()
        }
    },
    // authorization 授權
    isAdminMiddleware: function (req, res, next) {
        if (req.session.account.isAdmin) {
            // 是 admin
            next()
        } else {
            return next({
                status: 403,
                message: '你沒有管理員權限喔',
            })
        }
    },
}

// return module.exports
