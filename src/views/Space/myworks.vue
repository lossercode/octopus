<script setup lang='ts'>
import { ElButton, ElCascader, ElCol, ElIcon, ElInput, ElRow, ElTable, ElTableColumn } from 'element-plus';

</script>
<template>
    <ElRow align="middle" class="filter">
        <ElCol :span="2" class="options">全部数据</ElCol>
        <ElCol :span="2" class="options">待运行任务</ElCol>
        <ElCol :span="2" class="options">运行中任务</ElCol>
        <ElCol :span="2" class="options">已完成任务</ElCol>
        <ElCol :span="4" class="options">筛选选项</ElCol>
        <ElCol :span="4" class="options">
            <ElInput suffix-icon="Search" />
        </ElCol>
        <ElCol :span="2" class="options">
            <ElButton>刷新</ElButton>
        </ElCol>
        <ElCol :span="1" class="options">
            <ElButton>重置</ElButton>
        </ElCol>
    </ElRow>
    <ElTable class="works">
        <ElTableColumn label="任务名"></ElTableColumn>
        <ElTableColumn label="采集状态"></ElTableColumn>
        <ElTableColumn label="采集数据量"></ElTableColumn>
        <ElTableColumn label="最后编辑时间"></ElTableColumn>
        <ElTableColumn label="任务操作"></ElTableColumn>
    </ElTable>
</template>
<style scoped>
.options {
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
}

.options:first-child {
    text-align: start;
    padding-left: 12px;
}

.options:nth-child(7) {
    margin-left: 20px;
}

.filter {
    background: #fff;
    height: 48px;
}

.works {
    margin-top: 30px;
}
</style>