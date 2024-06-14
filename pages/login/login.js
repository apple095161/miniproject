// login.js
Page({
  data: {
    title: '測試',
  },
  onLoad() {

  },
  onShow() {
    this.data.title = '1234';

  },
  click(){
    console.log('123')
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})