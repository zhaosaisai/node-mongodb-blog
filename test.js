db.articles.insert([{
  title:'vue.js教程',
  content:'这是vue框架的开山教程',
  tags:['javascript','vue'],
  time: (new Date)
},{
  title:'vue.js教程简述',
  content:'这是vue框架的第二篇教程',
  tags:['javascript','vue'],
  time: (new Date)
}])

db.articles.insert([{
  title:'vue.js教程--第二篇',
  content:"能够具有交互性，能够包含更多活跃的元素，就有必要在网页中嵌入其它的技术。如：Javascript、VBScript、Document"+
   "Object Model（DOM，文档对象模型）、Layers和 Cascading Style Sheets（CSS，层叠样式表），这里主要讲Javascript"+
   "。那么Javascript是什么东西？Javascript就是适应动态网页制作的需要而诞生的一种新的编程语言，如今越来越广泛地使用于"+
   "Internet网页制作上。 Javascript是由 Netscape公司开发的一种脚本语言（scripting language），或者称为描述语言。"+
   "在HTML基础上，使用Javascript可以开发交互式Web网页。Javascript的出现使得网页和用户之间实现了一种实时性的、动态的、"+
   "交互性的关系，使网页包含更多活跃的元素和更加精彩的内容。 运行用Javascript编写的程序需要能支持Javascript语言的浏览器。"+
   "Netscape公司 Navigator 3．0以上版本的浏览器都能支持 Javascript程序，微软公司Internet Explorer 3．0以上版本的浏览器基本"+
   "上支持Javascript。微软公司还有自己开发的Javascript，称为JScript。 Javascript和Jscript基本上是相同的，只是在一些细节上有出入。"+
    "Javascript短小精悍， 又是在客户机上执行的，大大提高了网页的浏览速度和交互能力。 同时它又是专门为制作Web网页而量身定做的一种简单的编程语言。"+
"JavaScript 使网页增加互动性。JavaScript 使有规律地重复的HTML文段简化，减少下载时间。JavaScript 能及时响应用户的操作，"+
"对提交表单做即时的检查，无需浪费时间交由 CGI 验证。JavaScript 的特点是无穷无尽的，只要你有创意。",
  tags:['javascript','vue'],
  time: (new Date)
}])
