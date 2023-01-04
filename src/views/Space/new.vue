<script setup lang='ts'>
import { ElButton, ElCascader, ElCheckbox, ElCheckboxGroup, ElCol, ElForm, ElFormItem, ElInput, ElRadio, ElRadioGroup, ElRow } from 'element-plus';
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
    <ElRow id="basic">
        <ElCol :span="24">
            <p>基本参数</p>
            <ElRow>
                <ElCol :span="14">
                    <ElForm :model="basicInfos" label-width="100px" ref="basicFormRef">
                        <ElFormItem label="任务名称:" required>
                            <ElInput v-model="basicInfos.name" />
                        </ElFormItem>
                        <ElFormItem label="任务描述:">
                            <ElInput type="textarea" v-model="basicInfos.description" />
                        </ElFormItem>
                    </ElForm>
                </ElCol>
            </ElRow>
        </ElCol>
    </ElRow>

    <ElRow id="core">
        <ElCol :span="24">
            <p>核心参数</p>
            <ElRow>
                <ElCol :span="14">
                    <ElForm label-width="100px" ref="coreFormRef" :model="coreParams">
                        <ElFormItem label="爬取网址:" required>
                            <ElInput v-model="coreParams.coreInfo.url" />
                        </ElFormItem>

                        <ElFormItem label="定位元素:" v-for="(value, index) in coreParams.keyElements" :key="index">
                            <ElCol :span="10">
                                <ElFormItem>
                                    <ElInput v-model="value.element" placeholder="多个条件通过英文 ; 分割" />
                                </ElFormItem>
                            </ElCol>
                            <ElCol :span="10">
                                <ElFormItem label="正则匹配">
                                    <ElInput v-model="value.reg" placeholder="提取特定文本" />
                                </ElFormItem>
                            </ElCol>
                            <ElCol :span="4" style="display:flex;justify-content:flex-end;">
                                <ElFormItem>
                                    <ElButton @click.prevent="removeKeyElement(value)" type="danger">删除</ElButton>
                                </ElFormItem>
                            </ElCol>
                        </ElFormItem>

                        <ElFormItem>
                            <ElCol :span="4">
                                <ElFormItem>
                                    <ElButton @click.prevent="addKeyElement">添加元素</ElButton>
                                </ElFormItem>
                            </ElCol>
                        </ElFormItem>
                        <ElFormItem label="翻页元素:">
                            <ElInput v-model="coreParams.coreInfo.nextPage" placeholder="多个定位条件通过英文 ; 分割，无需翻页则不填" />
                        </ElFormItem>
                        <ElFormItem label="翻页刷新:">
                            <ElRadioGroup v-model="coreParams.coreInfo.needFresh">
                                <ElRadio label="needFresh">是</ElRadio>
                                <ElRadio label="withoutFresh">否</ElRadio>
                            </ElRadioGroup>
                        </ElFormItem>
                        <ElFormItem label="翻页延迟:">
                            <ElCascader v-model="coreParams.coreInfo.freshDelay" :options="delayOptions" />
                        </ElFormItem>
                        <ElFormItem label="智能识别">
                            <ElCheckboxGroup v-model="coreParams.coreInfo.intelligent">
                                <ElCheckbox label="字体反爬" />
                                <ElCheckbox label="验证码识别" />
                            </ElCheckboxGroup>
                        </ElFormItem>
                        <ElFormItem>
                            <ElButton type="primary" @click="submit">提交</ElButton>
                        </ElFormItem>
                    </ElForm>
                </ElCol>
            </ElRow>
        </ElCol>
    </ElRow>
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