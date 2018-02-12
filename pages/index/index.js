var wxStar = require('../../wxStar/wxStar.js');
Page({
  data: {
  },
  onLoad: function (options) {
    // wxStar初始化
    wxStar.wxStar(this, 3, true);
  },
  resetStar: function () {
    this.wxStarInit(0);
  },
  alertStar: function () {
    var self = this;
    wx.showModal({
      title: '提示',
      content: '当前选中' + self.wxStarCont() + '星',
    })
  },
  starChangeCb: function () {
    console.log('选择星之后的回调~');
  }
})