function wxStar(self, count, isEidt){
  self.setData({
    wxStarEdit: isEidt ? true : false,
  })
  self.wxStarChange = wxStarChange;
  self.wxStarInit = wxStarInit;
  self.wxStarCont = wxStarCont;
  
  // 初始化星数
  self.wxStarInit(count);
}

function wxStarChange(e) {
  if (!this.data.wxStarEdit) return;   // 只可展示，不可评星
  var dataset = e.currentTarget.dataset, idx = dataset.idx, index = dataset.index;
  var star = this.data.wxStar, len = star.length;
  for (var i = 0; i < len; i++) {
    if (i < idx) star[i] = [1, 1];
    else if (i == idx) {
      if (index == 0) star[i] = [1, 0];
      else star[i] = [1, 1];
    }
    else star[i] = [0, 0];
  }
  this.setData({
    wxStar: star,
  })
  // 选择星之后，回调方法
  if (this.starChangeCb) this.starChangeCb();
}

function wxStarInit(count) {
  count = count != undefined ? parseInt(count, 10) : 10;
  var str = '';
  for (var i = 1; i <= 10; i++) {
    if (i <= count) str += '1,';
    else str += '0,';
  }
  var arr = str.split(',');
  this.setData({
    wxStar: [
      [arr[0], arr[1]],
      [arr[2], arr[3]],
      [arr[4], arr[5]],
      [arr[6], arr[7]],
      [arr[8], arr[9]],
    ]
  })
  // 初始化完成之后，回调方法。是否需要回调，自己决定
  if (this.initSuccessCb) this.initSuccessCb();
}

function wxStarCont() {
  var star = this.data.wxStar, count = 0;
  for (var i = 0; i < 5; i++) {
    count += parseInt(star[i][0]);
    count += parseInt(star[i][1]);
  }
  return count;
}

module.exports = {
  wxStar: wxStar,
}