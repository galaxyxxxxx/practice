# Audio Visualization :star2: 
-----
**音频可视化 = 取数据 + 映射数据**
![audioContext在可视化上的应用](https://pic2.zhimg.com/v2-155eb88e6b57e61c0cb84d18d3a27461_r.jpg)

## Step1 创建AudioContext
作用是关联音频输入，对音频进行解码、控制音频的播放暂停等基础操作
```js
const AudioContext = window.AudioContext || window.webkitAudioContext
const ctx = new AudioContext()
```
## Step2 创建AnalyserNode
作用是获取音频的**频率数据**`FrequencyData`和**时域数据**`TimeDomainData`;仅对音频读取，而不会改变音频
```js
const analyser = ctx.createAnalyser()
analyser.fftSize = 512
```
> fftSize 
> - 一个快速傅里叶变换的参数orz
> - 值需要是2的幂次方；数字越大结果越精细
> - 对移动端网页来说，512是合适的取值
> - 决定了frequencyData的长度，为fftSize的一半

## Step3 设置SourceNode
作用是将音频节点关联到AudioContext上，作为音频分析过程的输入
### Web Audio的三种音频源类型💭
- **MediaElementAudioSourceNode** 
  将`audio`节点作为输入 做到流式播放
  
  ```js
  // 获取<audio>节点
  const audio = document.getElementById('audio');
  // 通过<audio>节点创建音频源
  const source = ctx.createMediaElementSource(audio);
  // 将音频源关联到分析器
  source.connect(analyser);
  // 将分析器关联到输出设备（耳机、扬声器）
  analyser.connect(ctx.destination);
  ```
  播放音频
	```js
  audio.play()
  ```
  
- **AudioBufferSourceNode** 
  将`音频文件`作为输入 通过xhr预先加载 再通过AudioContext进行解码
  
	```js
   // 创建一个xhr
    var xhr = new XMLHttpRequest();
  xhr.open('GET', '/path/to/audio.mp3', true);
  
    // 设置响应类型为 arraybuffer
  xhr.responseType = 'arraybuffer';
  
    xhr.onload = function() {
        var source = ctx.createBufferSource();
        // 对响应内容进行解码
        ctx.decodeAudioData(xhr.response, function(buffer) {
            // 将解码后得到的值赋给buffer
            source.buffer = buffer;
            // 完成。将source绑定到ctx。也可以连接AnalyserNode
            source.connect(ctx.destination);
        });
  };
  
    xhr.send();
  ```
  播放音频
  ```js
  // 创建AudioBufferSourceNode
const source = ctx.createBufferSource();
  
  // buffer是通过xhr获取的音频文件
source.buffer = buffer;
  
  // 调用start方法进行播放
  source.start(0);
  ```
  
- **MediaStreamAudioSourceNode** 
  将`用户麦克风`作为输入 即通过`navigator.getUserMedia`获取音频/视频后 生成音频源 

  适合语音/视频直播等场景

## Step4 获取frequencyData

获取频率数据有两个API，区别是精度不同

> `analyser.getByteFrequencyData` 返回**0-255**的Uint8Array
>
> `analyser.getFloatFrequencyData` 返回**0-22050**的Uint8Array

获取频率数组：

```js
const bufferLength = analyser.frequencyBinCount
const dataArray = new Uint8Array(bufferLength)
analyser.getByteFrequencyData(dataArray)
```

`getByteFrequencyData`是对已有数组元素赋值，而不是创建后返回新数组。

这样的优点是：只存在一个dataArray的引用，不用通过函数调用或者参数传递来重新取值。

---
# Web Audio API

 设计目标 - 结合游戏音频处理系统以及桌面音频应用程序的需求进行设计与开发

> - 实现高精度的音频计算。主要应用于DAW（音序器），软件乐器等场景
> - 音频混响器。音乐混缩的必要能力
> - 3D音频。在游戏和音乐制作中都需要
> - 与\<audio> / WebRTC的集成

![preview](https://pic2.zhimg.com/v2-5042f4c1296e7e2681b8ed45722de819_r.jpg)

---
# Canvas 动效方案
本身是一个序列帧播放；每一帧中都要先清空Canvas再重新绘制

```js
// 一个矩形绘制的小案例
function renderFrame() {
    requestAnimationFrame(RenderFrame)
    
    //update the frequency data
    analyser.getByteFrequencyData(dataArray)
    
    for(let i = 0, x= 0; i < bufferLength; i++){
        // 根据频率映射一个矩形高度
        barHeight = dataArray[i]
        
        // 根据每个矩形高度映射一个背景色
        let r= barHeight + 25 * (i / bufferLength)
        let g = 250 * (i / bufferLength)
        let b = 50
        
        // 绘制一个矩形 并填充背景色
        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")"
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)
        
        x += barWidth + 1;
    }
}

renderFrame();
```



---
# Three.js 动效方案

借助GPU的计算能力，比canvas的CPU计算性能更好一些

![img](https://pic4.zhimg.com/80/v2-2d4132405cd8784bffdac604402ee377_1440w.jpg)

---

# Reference

[网易云音乐前端团队-WebAudio在音频可视化中的应用](https://zhuanlan.zhihu.com/p/84202126)

[网易云音乐前端团队-Web Audio API 的介绍与应用](https://www.zhihu.com/column/musicfe)

[网易云音乐前端团队-Three.js 动效方案](https://zhuanlan.zhihu.com/p/113747668)