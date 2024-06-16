// index.js
Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    show: false,
    popupView: false,
    modalImg: '',
    modalText: ''
  },
  onLoad() {},
  onMyEvent(e) {
    console.log(e.detail.url)
    this.setData({
      modalImg: e.detail.url,
      modalText: e.detail.text,
      popupView:true
    });
  },
  close() {
    this.setData({
      popupView: false
    })
  },
  login() {
    wx.navigateTo({
      url: '/pages/login/login',
      events: () => {
        console.log('123')
      },
      routeType: 'routeType',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  }
})