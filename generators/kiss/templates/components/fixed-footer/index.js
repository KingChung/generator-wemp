let isIpx = false
wx.getSystemInfo({
    success: (res) => {
        isIpx = !!~res.model.indexOf('iPhone X')
    }
})

Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    data: {
        isIpx
    }
})

