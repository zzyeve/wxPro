//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    },
    //事件处理函数
    bindViewTap: function () {
        // wx.navigateTo({
        //   url: '../logs/logs'
        // })
    },
    onLoad: function () {},
    getUserInfo: function (e) {
        // console.log(e)
        // app.globalData.userInfo = e.detail.userInfo
        // this.setData({
        //   userInfo: e.detail.userInfo,
        //   hasUserInfo: true
        // })
    }
})