<script setup lang='ts'>
import { onMounted, ref } from 'vue';


const emit = defineEmits(['cancel'])
/**
 * @description: 滑动验证组件 
 * @return {*}
 */

interface Props {
    //滑块的位置
    sliderPosition: number;
    //验证区域的x坐标
    verifyBlockPositionX: number;
    //验证区域的Y坐标
    verifyBlockPositionY: number;
}

//滑动条的元素引用，用来计算移动的距离
const slider = ref()
//滑动条相对于屏幕的X坐标
const sliderPageX = ref<number>(0)

const sliderPosition = ref<number>(10)
const verifyBlockPositionX: number = 160
const verifyBlockPositionY: number = 60

//鼠标按下事件
const mouseDown = (e: any) => {
    //根据e.target判断是否点击了取消按钮
    console.log(e.target.nodeName)
    if (e.target.nodeName !== 'DIV') {
        emit('cancel')
    } else {
        //判断鼠标的位置是否在滑动条内，即要求鼠标必须置于滑动条上才能注册事件
        let mousePageX: number = e.pageX
        if (mousePageX < sliderPageX.value || mousePageX > (sliderPageX.value + 20)) return

        //在合理范围内，注册移动事件
        window.addEventListener('mousemove', mouseMove)
    }

}

//鼠标移动时触发
const mouseMove = (e: any) => {
    //获取鼠标的绝对位置
    let mousePageX: number = e.pageX
    //计算距离并更新滑动条的left值
    sliderPosition.value = mousePageX - sliderPageX.value
}

//鼠标停止按动触发
const mouseUp = (e: any) => {
    //移除滚动事件
    window.removeEventListener('mousemove', mouseMove)
    //判断是否达到指定位置,在（-10，10）范围内均可
    if (sliderPosition.value > verifyBlockPositionX - 10 && sliderPosition.value < verifyBlockPositionX + 10) {
        console.log('验证成功')
    } else {
        sliderPosition.value = 20
    }
}
onMounted(() => {
    //获取滑动条的初始位置
    sliderPageX.value = slider.value.getBoundingClientRect().left
    //初始化监听事件
    window.addEventListener('mousedown', mouseDown)
    window.addEventListener('mouseup', mouseUp)
})

/**
 * @description:
 * 此处有一个bug，即mouseDown和click事件冲突，通用方法是设定一个flag,如果鼠标按下的事件超过200ms则为mousemove事件
 * 我的做法是通过e.target来判断,如果是取消按钮则传递取消事件给父组件
 * @return {*}
 */
// const cancel = () => {
//     console.log('已经点击了')
//     emit('cancel')
// }


</script>
<template>
    <div class="mask">
        <div class="core">
            <div class="cancel">
                <!-- //给父组件传递取消验证事件 -->
                <el-icon>
                    <Close />
                </el-icon>
            </div>
            <div class="info">滑动滑块完成验证</div>
            <div class="img">
                <el-image src="https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg">
                </el-image>
                <div class="verify-slider" :style="{ top: verifyBlockPositionY + 'px' }">
                    <div class="move-area" :style="{
                        left: sliderPosition + 'px', backgroundPositionX: -verifyBlockPositionX + 'px',
                        backgroundPositionY: -verifyBlockPositionY + 'px'
                    }"></div>
                    <div class="verify-area" :style="{ left: verifyBlockPositionX + 'px' }">
                    </div>
                </div>
            </div>
            <div class="slider">
                <div class="move-slider" :style="{ left: sliderPosition + 'px' }" ref="slider"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.mask {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    background: rgba(0, 0, 0, .5);
}

.core {
    width: 300px;
    height: 300px;
    position: absolute;
    border-radius: 10px;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
}

.cancel,
.info,
.slider {
    display: flex;
    width: 100%;
}

.cancel {
    height: 20px;
    justify-content: flex-end;
    width: 100%;
}

.cancel i {
    cursor: pointer;
}

.info {
    height: 20px;
    font-size: 12px;
    width: 100%;
}

.img {
    height: 200px;
    position: relative;
}

.verify-slider {
    position: absolute;
    height: 40px;
    box-sizing: border-box;
    width: 280px;
}

.move-area,
.verify-area {
    width: 40px;
    height: 40px;
    position: absolute;
}

.move-area {
    background-image: url('https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg');
    z-index: 999;
}

.verify-area {
    background: #000;
}

.slider {
    height: 30px;
    background: #f7f7f7;
    position: relative;
}

.move-slider {
    height: 30px;
    width: 20px;
    background: #7a72ff;
    position: absolute;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
}
</style>