<script setup lang='ts'>
import { ElButton, ElCol, ElContainer, ElFooter, ElHeader, ElImage, ElLink, ElMain, ElRow } from 'element-plus';

//header的路由
interface Nav {
    route: string;
    name: string;
}
const navList: Array<Nav> = [
    { route: 'download', name: '插件下载' },
    { route: 'document', name: '使用文档' },
    { route: 'about', name: '关于我们' },
]

//功能描述
interface Detail {
    title: string;
    description: string;
    icon: string
}
const details: Array<Detail> = [
    { title: '简单易用', description: '无需再学爬虫编程技术就可以轻松抓取网页数据，支持多种格式一键导出，快速导入数据库', icon: 'https://www.bazhuayu.com/images/home/Easy.png' },
    { title: '海量模板', description: '内置数百个网站数据源，全面覆盖多个行业，只需简单设置，就可快速准确获取数据', icon: 'https://www.bazhuayu.com/images/home/auto.png' },
    { title: '智能采集', description: '提供多种网页采集策略与配套资源，帮助整个采集过程实现数据的完整性与稳定性', icon: 'https://www.bazhuayu.com/images/home/Intelligent.png' },
]

</script>
<template>
    <el-container>
        <el-header id="header">
            <el-row class="nav-row" align="middle">
                <el-col :span="6">
                    <el-row align="middle" justify="center">
                        <el-col :span="12">
                            <el-image src="https://www.bazhuayu.com/images/bzy-logo.png" />
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4" v-for="(nav, index) in navList" key="index">
                    <el-row align="middle" justify="end">
                        <el-col :span="8">
                            <el-link :href="nav.route" :underline='false'>{{ nav.name }}</el-link>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- 登录注册 -->
                <el-col :span="6">
                    <el-row align="middle" justify="center">
                        <el-col :span="6">
                            <el-link href="login" :underline="false">
                                <el-button type="primary">登录</el-button>
                            </el-link>
                        </el-col>
                        <el-col :span="6">
                            <el-link href="login" :underline="false">
                                <el-button>注册</el-button>
                            </el-link>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row justify="center" align="middle">
                <el-col :span="12" id="title">
                    <h1>
                        <span>八爪鱼</span>
                        <br>
                        <span>让数据采集简单高效</span>
                    </h1>
                </el-col>
            </el-row>
            <el-row justify="center" align="middle" class="details">
                <el-col :span="6" v-for="(detail, index) in details" key="index">
                    <el-row justify="center">
                        <el-col :span="6">
                            <el-image :src="detail.icon"></el-image>
                        </el-col>
                    </el-row>
                    <el-row justify="center">
                        <el-col :span="12">
                            <p class="details-title">{{ detail.title }}</p>
                        </el-col>
                    </el-row>
                    <el-row justify="center">
                        <el-col :span="18">
                            <p class="details-des">{{ detail.description }}</p>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-main>
        <el-footer id="footer">
            <div>深圳视界信息技术有限公司版权所有 | 粤公网安备 44030502000701号</div>
        </el-footer>
    </el-container>

</template>
<style scoped>
#header {
    background: rgba(255, 255, 255, 0.94);
    border-bottom: 1px solid rgba(60, 60, 60, .12);
}

.nav-row {
    height: 100%;
}

#title {
    height: 240px;
    font-size: 48px;
    text-align: center;
}

#title span {
    letter-spacing: 6px;
}

#title span:first-child {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.details {
    margin-top: 60px;
}

.details-title {
    font-size: 24px;
}

.details-title,
.details-des {
    text-align: center;
}

#footer {
    height: 140px;
    line-height: 140px;
    text-align: center;
    color: #ccc;
    font-size: 14px;
}
</style>