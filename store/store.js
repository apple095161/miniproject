// store.js
import {
  observable,
  action
} from 'mobx-miniprogram'


export const store = observable({

  numA: 1,
  numB: 2,
  list: [],
  userInfo: {
    userName: '',
    userPassword: ''
  },
  get sum() {
    return this.numA + this.numB
  },
  setList: action(function (list) {
    console.log('213', list)
    this.list = list
  }),
  setUserInfo: action(function (user) {
   this.userInfo = user
  }),
  // actions
  update: action(function () {
    const sum = this.sum
    this.numA = this.numB
    this.numB = sum
  }),
})