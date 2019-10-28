// pages/inputs/inputs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ind:0,
    list:[
      {
        txt:"老郑",
        children:[
          {
            name:"老板",
            flag:false
          },
          {
            name: "CEO",
            flag: false
          }
        ]
      }, {
        txt: "老邢",
        children: [
          {
            name: "董事长",
            flag: false
          },
          {
            name: "董事长夫人",
            flag: false
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  radioChange(options){
    //console.log(options)
  },
  clicks(options){
    // console.log(options)
    let { ind,isn } = options.target.dataset
    isn ? ++ind:ind<=0?ind:--ind
    this.setData({ind})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})