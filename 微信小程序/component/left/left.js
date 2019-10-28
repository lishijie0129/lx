// component/left/left.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    ind: {
      type: Number,
      ind: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goclick(options) {
      let { ind } = options.target.dataset
      this.triggerEvent('myevent',{ind})
    }
  }
})
