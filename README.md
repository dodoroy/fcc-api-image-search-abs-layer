## 3D图片轮播


### 普通引入方式

`<script type="text/javascript" src="node_modules/@cnpm/image-flow/image-flow.js">`


### Node

`npm install '@cnpm/image-flow';`


## 调用方法
```
domReady(function() {
    var instanceOne = new ImageFlow();
    instanceOne.init({ ImageFlowID: '{{name}}' });
});
```

## 参数
```
var options =
{
   /**
    * Animation speed in ms.
    * @type {number}
    */
    animationSpeed: 50,
    
   /**
    * Aspect ratio of the ImageFlow container.
    * @type {number}
    */
    aspectRatio: 1.964,
 
   /**
    * Toggle navigation buttons.
    * @type {boolean}
    */
    buttons: false,
    
   /**
    * Toggle image captions.
    * @type {boolean}
    */
    captions: true,
     
   /**
    * Toggle circular rotation.
    * @type {boolean}
    */
    circular: false,
     
    /**
    * Toggle glide animation to start ID.
    * @type {boolean}
    */
    glideToStartID: true,
     
   /**
    * Cursor type for the images (try 'pointer').
    * @type {string}
    */
    imageCursor: 'default',
     
   /**
    * Unique id of the ImageFlow container.
    * @type {string}
    */
    ImageFlowID: 'imageflow',
     
   /**
    * Multiplicator for the focussed image size in percent.
    * @type {number}
    */
    imageFocusM: 1.0,
     
   /**
    * Maximum number of images on each side of the focussed one.
    * @type {number}
    */
    imageFocusMax: 4,
     
   /**
    * Path to the images relative to the reflect_.php script.
    * @type {string}
    */
    imagePath: '',
     
   /**
    * Toggle image scaling.
    * @type {boolean}
    */
    imageScaling: true,
     
   /**
    * Height of the images div container in percent.
    * @type {number}
    */
    imagesHeight: 0.67,
     
   /**
    * Multiplicator for all images in percent.
    * @type {number}
    */
    imagesM: 1.0,
     
   /**
    * Callback function for onclick events.
    * @type {function}
    */
    onClick: function() { document.location = this.url; },
     
   /**
    * Toggle image opacity.
    * @type {boolean}
    */
    opacity: false,
     
   /**
    * Image opacity (range: 0 to 10) first value is for the focussed image.
    * @type {array}
    */
    opacityArray: [10, 8, 6, 4, 2],
     
   /**
    * Scale landscape format.
    * @type {number}
    */
    percentLandscape: 118,
     
   /**
    * Scale portrait and square format.
    * @type {number}
    */
    percentOther: 100,
     
   /**
    * Toggles loading bar (false: requires img attributes height and width).
    * @type {boolean}
    */
    preloadImages: true,
     
   /**
    * Toggle image reflections.
    * @type {boolean}
    */
    reflections: true,
     
   /**
    * Pass variables via the GET method to the reflect_.php script.
    * @type {string}
    */
    reflectionGET: '',
     
   /**
    * Height of the reflection in percent of the source image.
    * @type {number}
    */
    reflectionP: 0.5,
     
   /**
    * Toggle reflect2.php or reflect3.php.
    * @type {boolean}
    */
    reflectionPNG: false,
     
   /**
    * Path to the reflect_.php script.
    * @type {string}
    */
    reflectPath: '',
     
   /**
    * Width of the scrollbar in percent.
    * @type {number}
    */
    scrollbarP: 0.6,
     
   /**
    * Toggle slider.
    * @type {boolean}
    */
    slider: true,
     
   /**
    * Slider cursor type - default is 'default'.
    * @type {string}
    */
    sliderCursor: 'e-resize',
     
   /**
    *  Width of the slider in px.
    * @type {number}
    */
    sliderWidth: 14,
     
   /**
    * Toggle slideshow.
    * @type {boolean}
    */
    slideshow: false,
     
   /**
    * Time between slides in ms.
    * @type {number}
    */
    slideshowSpeed: 1500,
     
   /**
    * Toggle automatic slideshow play on startup.
    * @type {boolean}
    */
    slideshowAutoplay: false,
     
   /**
    * Image ID to begin with.
    * @type {number}
    */
    startID: 1,
     
   /**
    * Animate images moving in from the right on startup.
    * @type {boolean}
    */
    startAnimation: false,
 
   /**
    * Step width on the x-axis in px.
    * @type {number}
    */
    xStep: 150
};
```
## 功能
- 支持多个实例（面向对象）
- 易于实施（非侵入式JavaScript）
- 与所有的图形浏览器兼容
- 支持所有图像的纵横比
- 支持多个图像的显示（> 100）
- 动态的镜面反射（通过PHP服务器端）
- 100％的JavaScript（除了图像反射）
- Scrollbalken
- 鼠标滚轮支持
- 支持标题
- 支持图片链接
- 缩放100％动态
- 集成使用div标签
- 支持的浏览器与触控功能
- 幻灯片
- 无限旋转