// login.js
import {
  createStoreBindings
} from "mobx-miniprogram-bindings"
import {
  store
} from "../../store/store"
Page({
  data: {
    title: '會員登入',
    username: '',
    password: '',
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
  },
  submit() {
    this.storeBindings = createStoreBindings(this, {
      store, // 需要绑定的数据仓库
      fields: ['userInfo'], // 将 this.data.list 绑定为仓库中的 list ，即天气数据
      actions: ['setUserInfo'], // 将 this.setList 绑定为仓库中的 setList action
    })
    this.setUserInfo({
      userName: this.data.username,
      userPassword: this.data.password
    })

    setTimeout(() => {
      console.log(this.data.userInfo)
      wx.navigateBack({
        delta: -1
      });
    }, 200);
  }
})