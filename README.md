# wxStar项目说明

wxStar是在小程序中实现评分/评星效果，见效果图，也可以直接看代码

![Alt text](http://demos.pxuexiao.com/web_css/img/wxStar.gif)

## 使用说明

### wxml

&lt;import src="/wxStar/wxStar.wxml" />

&lt;template is="wxStar" data="{{wxStar: wxStar}}" />



### js

// wxStar初始化

wxStar.wxStar(this, 3, true);

参数说明：
> this：当前Page对象

3：初始化星数

true: 代码可编辑，即用户可以进行评星，如果是false，则表明只能查看，不可编辑



### wxss

@import "/wxStar/wxStar.wxss";




## 方法说明
### 回调方法
this.starChangeCb();    // 选择星数后的callback

this.initSuccessCb();     // 初始化完成后的callback

### 获取当前星数
this.wxStarCont();    // 获取当前星数

### 重置当前星数
this.wxStarInit(5);    // 重置星数

### 取消半星做法
在starChangeCb里面，重新调用wxStarInit方法即可~



## 想添加技术讨论群，可以联系我
![Alt text](http://demos.pxuexiao.com/web_css/img/xigua_net.jpeg)
