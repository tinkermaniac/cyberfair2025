function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})


gsap.to("#page",{
    scrollTrigger:{
        trigger:`#page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`#main`,
        pin:true
    }
})


gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:`#page-bottom`,
        start:`5% top`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    opacity:0
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl.to("#page1>h1",{
    top:`-50%`
})






var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl1.to("#page2>h1",{
    top:`-50%`
})




var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl2.to("#page4>#center-page4",{
    top:`-50%`
})



function canvas(){
    const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
a001.png
a002.png
a003.png
a004.png
a005.png
a006.png
a007.png
a008.png
a009.png
a010.png
a011.png
a012.png
a013.png
a014.png
a015.png
a016.png
a017.png
a018.png
a019.png
a020.png
a021.png
a022.png
a023.png
a024.png
a025.png
a026.png
a027.png
a028.png
a029.png
a030.png
a031.png
a032.png
a033.png
a034.png
a035.png
a036.png
a037.png
a038.png
a039.png
a040.png
a041.png
a042.png
a043.png
a044.png
a045.png
a046.png
a047.png
a048.png
a049.png
a050.png
a051.png
a052.png
a053.png
a054.png
a055.png
a056.png
a057.png
a058.png
a059.png
a060.png
a061.png
a062.png
a063.png
a064.png
a065.png
a066.png
a067.png
a068.png
a069.png
a070.png
a071.png
a072.png
a073.png
a074.png
a075.png
a076.png
a077.png
a078.png
a079.png
a080.png
a081.png
a082.png
a083.png
a084.png
a085.png
a086.png
a087.png
a088.png
a089.png
a090.png
a091.png
a092.png
a093.png
a094.png
a095.png
a096.png
a097.png
a098.png
a099.png
a100.png
b016.png
b017.png
b018.png
b019.png
b020.png
b021.png
b022.png
b023.png
b024.png
b025.png
b026.png
b027.png
b028.png
b029.png
b030.png
b031.png
b032.png
b033.png
b034.png
b035.png
b036.png
b037.png
b038.png
b039.png
b040.png
b041.png
b042.png
b043.png
b044.png
b045.png
b046.png
b047.png
b048.png
b049.png
b050.png
b051.png
b052.png
b053.png
b054.png
b055.png
b056.png
b057.png
b058.png
b059.png
b060.png
b061.png
b062.png
b063.png
b064.png
b091.png
b092.png
b093.png
b094.png
b095.png
b096.png
b097.png
b098.png
b099.png
b100.png
b101.png
b102.png
b103.png
b104.png
b105.png
b106.png
b107.png
b108.png
b109.png
b110.png
b111.png
b112.png
b113.png
b114.png
b115.png
b116.png
b117.png
b118.png
b119.png
b120.png
b121.png
b122.png
b123.png
b124.png
b125.png
b126.png
b127.png
b128.png
b129.png
b130.png
b131.png
b132.png
b133.png
b134.png
b135.png
b136.png
b137.png
b138.png
b139.png
b140.png
b141.png
b142.png
b143.png
b144.png
b145.png
b146.png
b147.png
c001.png
 c002.png
 c003.png
 c004.png
 c005.png
 c006.png
 c007.png
 c008.png
 c009.png
 c010.png
 c011.png
 c012.png
 c013.png
 c014.png
 c015.png
 c016.png
 c017.png
 c018.png
 c019.png
 c020.png
 c021.png
 c022.png
 c023.png
 c024.png
 c025.png
 c026.png
 c027.png
 c028.png
 c029.png
 c030.png
 c031.png
 c032.png
 c033.png
 c034.png
 c035.png
 c036.png
 c037.png
 c038.png
 c039.png
 c040.png
 c041.png
 c042.png
 c043.png
 c044.png
 c045.png
 c046.png
 c047.png
 c048.png
 c049.png
 c050.png
 c051.png
 c052.png
 c053.png
 c054.png
 c055.png
 c056.png
 c057.png
 c058.png
 c059.png
 c060.png
 c061.png
 c062.png
 c063.png
 c064.png
 c065.png
 c066.png
 c067.png
 c068.png
 c069.png
 c070.png
 c071.png
 c072.png
 c073.png
 c074.png
 c075.png
 c076.png
 c077.png
 c078.png
 c079.png
 c080.png
 c081.png
 c082.png
 c083.png
 c084.png
 c085.png
 c086.png
 c087.png
 c088.png
 c089.png
 c090.png
 c091.png
 c092.png
 c093.png
 c094.png
 c095.png
 c096.png
 c097.png
 c098.png
 c099.png
 c100.png
 c101.png
 c102.png
 c103.png
 c104.png
 c105.png
 c106.png
 c107.png
 c108.png
 c109.png
 c110.png
 c111.png
 c112.png
 c113.png
 c114.png
 c115.png
 c116.png
 c117.png
 c118.png
 c119.png
 c120.png
 c121.png
 c122.png
 c123.png
 c124.png
 c125.png
 c126.png
 c127.png
 c128.png
 c129.png
 c130.png
 c131.png
 c132.png
 c133.png
 c134.png
 c135.png
 c136.png
 c137.png
 c138.png
 c139.png
 c140.png
 c141.png
 c142.png
 c143.png
 c144.png
 c145.png
`;
  return data.split("\n")[index];
}

const frameCount = 198;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();



function canvas1(){
  const canvas = document.querySelector("#page18>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
.//vision canvas images/007.jpg
.//vision canvas images/008.jpg
.//vision canvas images/009.jpg
.//vision canvas images/010.jpg
.//vision canvas images/011.jpg
.//vision canvas images/012.jpg
.//vision canvas images/013.jpg
.//vision canvas images/014.jpg
.//vision canvas images/015.jpg
.//vision canvas images/016.jpg
.//vision canvas images/017.jpg
.//vision canvas images/018.jpg
.//vision canvas images/019.jpg
.//vision canvas images/020.jpg
.//vision canvas images/021.jpg
.//vision canvas images/022.jpg
.//vision canvas images/023.jpg
.//vision canvas images/024.jpg
.//vision canvas images/025.jpg
.//vision canvas images/026.jpg
.//vision canvas images/027.jpg
.//vision canvas images/028.jpg
.//vision canvas images/029.jpg
.//vision canvas images/030.jpg
`;
return data.split("\n")[index];
}

const frameCount = 25;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page18`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page18",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();



var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl3.to("#page21>#troff",{
  opacity:0
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page22>#snroff",{
  opacity:0
})



gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
})
