// 创建axios实例
const $axios = axios.create({
    baseURL: "http://localhost",
    timeout: 10000, // 超时时间
    withCredentials: true // 向服务器发送认证信息
});

// 定义一个状态标签的数组
// 状态 00-未确定 22-确定 55-启用 77-禁用 99-逻辑删除 
const statArr = [
    {
        text: '未确定',
        value: '00'
    }, {
        text: '确定',
        value: '22'
    }, {
        text: '启用',
        value: '55'
    }, {
        text: '禁用',
        value: '77'
    }, {
        text: '已删除',
        value: '99'
    }
]



// 对状态进行过滤
const filterStat = function (value, state) {
    // 判断选中的状态和行中的状态是否一致
    return state === value;
};

// 封装一个工具类
class Utils {
   static filterType = { // tag的类型过滤
        '00':'info',
        '22':'',
        '55':'success',
        '77':'warning',
        '99':'danger'
    }
    static filterName = { // tag的name过滤
        '00':'未确定',
        '22':'已确定',
        '55':'已启用',
        '77':'已禁用',
        '99':'已删除'
    }
    static stateMapper = { // 状态修改对应表
        '00':'22',
        '22':'55',
        '55':'77',
        '77':'55',
    }
    static options = { // 状态监测
            "00": "未投坯",
            "05": "已投坯",
            "10": "已前处理",
            "15": "已染色",
            "20": "已印花",
            "25": "已整理",
            "30": "质检中",
            "35": "已质检",
            "40": "包装中",
            "50": "已包装",
            "55": "已部分入库",
            "60": "已入库",
            "65": "已部分交货",
            "70": "已交货"
        }
}


// 对象Copy方法
const copyObj = function (obj){
    let tempObj = {};
    // 遍历对象
    for (let props in obj) {
        tempObj[props] = obj[props];
    }
    return tempObj;
}

// 判断是否引入Vue
if (Vue) {
    // 为Vue添加原型属性
    Vue.prototype.$axios = $axios; // 异步请求
    Vue.prototype.$filterStat = filterStat; // 状态过滤
    Vue.prototype.$statArr = statArr; // 状态过滤数组
    Vue.prototype.$copyObj = copyObj; // 复制对象
}