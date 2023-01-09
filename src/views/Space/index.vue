<script setup lang='ts'>

</script>
<template>
    <el-container>
        <el-aside id="aside">
            <el-row justify="center">
                <el-col :span="14">
                    <el-image src="https://www.bazhuayu.com/images/bzy-logo.png"></el-image>
                </el-col>
            </el-row>
            <!-- 菜单导航 -->
            <el-row id="menu" justify="center">
                <el-col :span="18">
                    <el-menu default-active="myworks" router>
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <DocumentRemove />
                                </el-icon>
                                <span>任务</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="myworks">我的任务</el-menu-item>
                                <el-menu-item index="newwork">新建任务</el-menu-item>
                                <el-menu-item index="loadwork">导入任务</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <PieChart />
                                </el-icon>
                                <span>分析</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="dataAnalyse">数据面板</el-menu-item>
                                <el-menu-item index="nlp">NLP分析</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-menu-item index="vip">
                            <el-icon>
                                <PictureRounded />
                            </el-icon>
                            <span>定制</span>
                        </el-menu-item>
                        <el-menu-item index="feedback">
                            <el-icon>
                                <Headset />
                            </el-icon>
                            <span>反馈</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-container>
            <el-main id="main">
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </el-container>
</template>
<style scoped>
#aside {
    padding: 32px 0;
    width: 200px;
    height: 100vh;
}

#menu {
    margin-top: 20px;
}

.el-menu {
    border: none;
}

#main {
    height: 100vh;
    background-color: #f7f7f7;
    padding-top: 22px;
    overflow: hidden;
}
</style>