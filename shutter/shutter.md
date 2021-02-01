# Flex 空间分配
- flex布局
  - 当父元素为flex时 块空间将进行弹性布局
  - 结合以下三个属性 可为子元素进行合适的空间分配

- flex-grow
  - 有剩余空间时 按比例值分配空间
  - 预设值为0 表示大家都不占用剩余空间
  
- flex-shrink
  - 空间不够时 按比例值压缩自身
  - 预设值为1 表示大家被压缩的比例相同
  - 当flex-shrink为0时 表示没有任何压缩 会去把其他块空间挤压占用

- flex-basis
  - 预设分配到的空间 类似于width 但优先度更高
  - 预设值为auto

以上三个值可缩写在一起，顺序为flex-grow | flex-shrink | flex-basis