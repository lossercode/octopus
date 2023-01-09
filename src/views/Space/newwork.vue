<script setup lang='ts'>
import { reactive } from 'vue';

//表单接口
interface WorkBasicInfos {
    name: string;
    description: string;
}
interface KeyElements {
    element: string;
    reg: string;
}
interface WorkCoreInfos {
    url: string;
    nextPage: string;
    needFresh: string;
    freshDelay: string;
    intelligent: string[];
}
//翻页延迟选项
const delayOptions = [
    { label: '1秒', value: 'one' },
    { label: '2秒', value: 'two' },
    { label: '3秒', value: 'three' },
]
//基础信息
const basicInfos = reactive<WorkBasicInfos>({
    name: '',
    description: ''
})
//核心信息
const coreParams = reactive<{ coreInfo: WorkCoreInfos, keyElements: KeyElements[] }>({
    coreInfo: {
        url: '',
        nextPage: '',
        needFresh: 'withoutFresh',
        freshDelay: 'one',
        intelligent: []
    },
    keyElements: [
        { element: '', reg: '' }
    ]
})
//删除定位元素
const removeKeyElement = (item: KeyElements) => {
    const index = coreParams.keyElements.indexOf(item)
    if (index !== -1) {
        coreParams.keyElements.splice(index, 1)
    }
}
//添加核心定位元素
const addKeyElement = () => {
    coreParams.keyElements.push({ element: '', reg: '' })
}

const submit = () => {
    alert('success')
}

</script>
<template>
    <el-row id="basic">
        <el-col :span="24">
            <p>任务简介</p>
            <el-row>
                <el-col :span="14">
                    <el-form :model="basicInfos" label-width="100px" ref="basicFormRef">
                        <el-form-item label="任务名称:" required>
                            <el-input v-model="basicInfos.name" />
                        </el-form-item>
                        <el-form-item label="任务描述:">
                            <el-input type="textarea" v-model="basicInfos.description" />
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-col>
    </el-row>

    <el-row id="core">
        <el-col :span="24">
            <p>核心参数</p>
            <el-row>
                <el-col :span="14">
                    <el-form label-width="100px" ref="coreFormRef" :model="coreParams">
                        <el-form-item label="爬取网址:" required>
                            <el-input v-model="coreParams.coreInfo.url" />
                        </el-form-item>

                        <el-form-item label="提取元素:" v-for="(value, index) in coreParams.keyElements" :key="index">
                            <el-col :span="10">
                                <el-form-item>
                                    <el-input v-model="value.element" placeholder="多个条件通过英文 ; 分割" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="正则匹配">
                                    <el-input v-model="value.reg" placeholder="提取特定文本" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4" style="display:flex;justify-content:flex-end;">
                                <el-form-item>
                                    <el-button @click.prevent="removeKeyElement(value)" type="danger">删除</el-button>
                                </el-form-item>
                            </el-col>
                        </el-form-item>

                        <el-form-item>
                            <el-col :span="4">
                                <el-form-item>
                                    <el-button @click.prevent="addKeyElement">添加元素</el-button>
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="翻页元素:">
                            <el-input v-model="coreParams.coreInfo.nextPage" placeholder="多个定位条件通过英文 ; 分割，无需翻页则不填" />
                        </el-form-item>
                        <el-form-item label="翻页刷新:">
                            <el-radio-group v-model="coreParams.coreInfo.needFresh">
                                <el-radio label="needFresh">是</el-radio>
                                <el-radio label="withoutFresh">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="翻页延迟:">
                            <ElCascader v-model="coreParams.coreInfo.freshDelay" :options="delayOptions" />
                        </el-form-item>
                        <el-form-item label="特殊场景:">
                            <el-checkbox-group v-model="coreParams.coreInfo.intelligent">
                                <el-checkbox label="fontForbid">字体反爬</el-checkbox>
                                <el-checkbox label="verifyCode">验证码识别</el-checkbox>
                                <el-checkbox label="dropDown">下拉加载</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submit">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>
<style scoped>
#basic,
#core {
    background: #fff;
    padding: 0 20px;
    font-size: 14px;
    border-radius: 6px;
}

#basic {
    height: 160px;
}

#core {
    max-height: 600px;
    margin-top: 20px;
    overflow: auto;
}

#basic p,
#core p {
    height: 32px;
    font-size: 16px;
    margin-block-end: 0;
}

#basic .el-row,
#core .el-row {
    margin-bottom: 10px;
}
</style>