<script setup lang='ts'>

</script>
<template>
    <el-row align="middle" class="filter">
        <el-col :span="2" class="options">全部数据</el-col>
        <el-col :span="2" class="options">待运行任务</el-col>
        <el-col :span="2" class="options">运行中任务</el-col>
        <el-col :span="2" class="options">已完成任务</el-col>
        <el-col :span="4" class="options">筛选选项</el-col>
        <el-col :span="4" class="options">
            <el-input suffix-icon="Search" />
        </el-col>
        <el-col :span="2" class="options">
            <el-button>刷新</el-button>
        </el-col>
        <el-col :span="1" class="options">
            <el-button>重置</el-button>
        </el-col>
    </el-row>
    <el-table class="works">
        <el-table-column label="任务名"></el-table-column>
        <el-table-column label="采集状态"></el-table-column>
        <el-table-column label="采集数据量"></el-table-column>
        <el-table-column label="最后编辑时间"></el-table-column>
        <el-table-column label="任务操作"></el-table-column>
    </el-table>
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