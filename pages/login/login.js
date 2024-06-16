// login.js
Page({
  data: {
    title: '會員登入',
    username: '',
    type: 'login'
  },
  onLoad() {

  },
  onShow() {
    this.data.title = '1234';
  },
  changeType() {
    console.log('1')
    this.setData({
      type: this.data.type === 'login' ? 'register' : 'login'
    })
    this.setData({
      title: this.data.type === 'login' ? '會員登入' : '會員註冊'
    })
  },
  click() {
    console.log('123')
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})