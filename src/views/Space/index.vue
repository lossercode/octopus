<script setup lang='ts'>
import { ElAside, ElCol, ElContainer, ElIcon, ElImage, ElMain, ElMenu, ElMenuItem, ElMenuItemGroup, ElRow, ElSubMenu } from 'element-plus';

</script>
<template>
    <ElContainer>
        <ElAside id="aside">
            <ElRow justify="center">
                <ElCol :span="14">
                    <ElImage src="https://www.bazhuayu.com/images/bzy-logo.png"></ElImage>
                </ElCol>
            </ElRow>
            <!-- 菜单导航 -->
            <ElRow id="menu" justify="center">
                <ElCol :span="18">
                    <ElMenu default-active="1-1">
                        <ElSubMenu index="1">
                            <template #title>
                                <ElIcon>
                                    <DocumentRemove />
                                </ElIcon>
                                <span>任务</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">我的任务</el-menu-item>
                                <el-menu-item index="1-2">新建任务</el-menu-item>
                                <el-menu-item index="1-3">导入任务</el-menu-item>
                            </el-menu-item-group>
                        </ElSubMenu>
                        <ElSubMenu index="2">
                            <template #title>
                                <ElIcon>
                                    <PieChart />
                                </ElIcon>
                                <span>分析</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1">数据面板</el-menu-item>
                                <el-menu-item index="2-2">NLP分析</el-menu-item>
                            </el-menu-item-group>
                        </ElSubMenu>
                        <ElMenuItem>
                            <ElIcon>
                                <PictureRounded />
                            </ElIcon>
                            <span>定制</span>
                        </ElMenuItem>
                        <ElMenuItem>
                            <ElIcon>
                                <Headset />
                            </ElIcon>
                            <span>反馈</span>
                        </ElMenuItem>
                    </ElMenu>
                </ElCol>
            </ElRow>
        </ElAside>
        <ElContainer>
            <ElMain id="main">
                <RouterView></RouterView>
            </ElMain>
        </ElContainer>
    </ElContainer>
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