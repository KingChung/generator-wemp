//app.js
import apiHelper from './utils/apiHelper'

const { POST, GET, PUT, DELETE } = apiHelper.methodNames

App({
  onLaunch() {
    // set config info to global data
    const accountInfo = wx.canIUse('getAccountInfoSync') ? wx.getAccountInfoSync(): {}
    const { appId } = accountInfo.miniProgram
    this.globalData.__appid = appId
  },
  beforeApiRequest() {
    if (wx.getExtConfigSync) {
      const config = wx.getExtConfigSync? wx.getExtConfigSync(): {}
      const { rootHost } = config
      if(!rootHost) {
        return false
      }
      this.globalData.__apiRoot = rootHost
    }

    return true
  },
  apiRequest(resource, method, data) {
    return new Promise((resolve, reject) => {
      if( ! this.beforeApiRequest()) {
        return reject()
      }

      let url = apiHelper.join(this.globalData.__apiRoot, resource)
      apiHelper.request(url, method, data)
        .then((res) => {
          const { statusCode } = res
          if(statusCode === 200) {
            resolve(res.data)
          }
        })
    })
  },
  globalData: {
    __apiRoot: ''
  }
})
