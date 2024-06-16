// components/item/item.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    List: [{
        text: '大海的味道',
        url: '/images/1.jpeg'
      },
      {
        text: '夏威夷的空氣',
        url: '/images/2.jpeg'
      },
      {
        text: '夏威夷的空氣',
        url: '/images/3.jpeg'
      },
      {
        text: '夏威夷的空氣',
        url: '/images/4.jpeg'
      },
      {
        text: '夏威夷的空氣',
        url: '/images/5.jpeg'
      },
      {
        text: '夏威夷的空氣',
        url: '/images/6.jpeg'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(item) {
      const data = item.currentTarget.dataset.value
      this.triggerEvent('click',data)
    }
  }
})