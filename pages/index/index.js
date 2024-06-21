// index.js

const datas = require('../../assets/mock.js');
import {
  createStoreBindings
} from "mobx-miniprogram-bindings"
import {
  store
} from "../../store/store"
Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    show: false,
    popupView: false,
    modalImg: '',
    modalText: '',
    modalDescription: '',
    popupShow: '',
    autoplay: true,
    interval: 2000,
    duration: 500,
    imgUrl: [
      'https://www.bonio.co/wp-content/uploads/2018/09/news_icon.png',
      'https://png.pngtree.com/template/20220505/ourmid/pngtree-hand-holding-megaphone-with-good-news-poster-image_1335737.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84g_QwBJFYl8Gjxjn-ZCHBulGfE_-dodY5A&s'
    ],
    globalinfo: {

    },
  },
  async onLoad() {
    wx.requestVirtualPayment({
      signData: JSON.stringify({
        offerId: '123',
        buyQuantity: 1,
        env: 0,
        currencyType: 'CNY',
        productId: 'testproductId',
        goodsPrice: 10,
        outTradeNo: 'xxxxxx',
        attach: 'testdata',
      }),
      paySig: 'd0b8bbccbe109b11549bcfd6602b08711f46600965253a949cd6a2b895152f9d',
      signature: 'd0b8bbccbe109b11549bcfd6602b08711f46600965253a949cd6a2b895152f9d',
      mode: 'short_series_goods',
      success(res) {
        console.log('requestVirtualPayment success', res)
      },
      fail({ errMsg, errCode }) {
        console.error(errMsg, errCode)
      },
    })
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C','D','E','F'],
    //   success (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail (res) {
    //     console.log(res.errMsg)
    //   }
    // })
    wx.getLocation({
      type: 'wgs84',
      success (res) {
      console.log(res)
      },
      fail(err){
        console.log(err)
      }
     })
     
    
    wx.showLoading({
      title: '加載中',
      mask: true
    })
    this.getData();
    this.storeBindings = createStoreBindings(this, {
      store, // 需要绑定的数据仓库
      fields: ['userInfo'], // 将 this.data.list 绑定为仓库中的 list ，即天气数据
      actions: ['setUserInfo'], // 将 this.setList 绑定为仓库中的 setList action
    })
    setTimeout(() => {
      console.log(this.data.userInfo)
    }, 300);
    // await this.setList([1, 2, 3])
    // setTimeout(() => {
    //   console.log(this.data.list)
    // }, 300);

    const {
      statusBarHeight,
      platform
    } = await wx.getSystemInfo()


    const {
      top,
      height
    } = wx.getMenuButtonBoundingClientRect();

    let navagationHeight = 0;
    if (top && height) {
      navagationHeight - (top - statusBarHeight) * 2 + height
    } else {
      navagationHeight = platform === 'android' ? 48 : 40
    }

    this.setData({
      globalinfo: {
        status: statusBarHeight,
        navation: navagationHeight
      }
    })
    console.log(this.data.globalinfo)
    // <view style="padding:{{globalinfo.status}};height:{{globalinfo.navation}}"></view>

    // console.log(a, b)
    // const fs = wx.getFileSystemManager();
    // fs.readFile({
    //   filePath: '/assets/mock.json', // 替换为你的JSON文件路径
    //   encoding: 'utf8', // 指定编码方式
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   fail: (err) => {
    //     console.log('读取JSON文件失败:', err);
    //   }
    // });
    setTimeout(() => {
      wx.hideLoading()
    }, 1000);
  },
  getData() {
    wx.request({
      url: 'https://soa.tainan.gov.tw/Api/Service/Get/bedf8239-5346-4006-b265-3c750336650b',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        const {
          data: {
            data
          }
        } = res
        console.log(data)
      }
    })
  },
  onMyEvent(e) {
    this.setData({
      modalImg: e.detail.url,
      modalText: e.detail.text,
      modalDescription: e.detail.description,
      popupView: true,
      popupShow: 'popupShow'
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
  },
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },
})