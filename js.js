var image = {
  one_: '<img src="http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg" width="550px" height="400px">',
  two_: '<img src="https://unsplash.com/a/img/marketing/unsplash-hq-01.jpg" width="550px" height="400px">',
  three_: '<img src="http://www.thriveleadership.com/wp-content/uploads/unsplash-bonus.jpg" width="550px" height="400px">'
};

var a ={
  template: image.one_
};
var b ={
  template: image.two_
};
var c ={
  template: image.three_
}

new Vue({
  el:'#app',
  data: { 
      selectedComponent: 'one',
      src1:'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
      src2:'https://unsplash.com/a/img/marketing/unsplash-hq-01.jpg',
      src3:'http://www.thriveleadership.com/wp-content/uploads/unsplash-bonus.jpg',
  },
  components: {
    one: a,
    two: b,
    three: c
  }
})
