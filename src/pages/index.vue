<template>
    <div>
        <img class="qrcodeImg" :src="getQrcode"/>
        <div class="text">{{title}}</div>
        <div class="text">项目路径: {{routerData[1] || '当前不是泡泡h5页面'}}</div>
        <div class="text">后端接口: <a :href="backendApi" target="_blank"> {{backendApi}} </a></div>
    </div>
</template>
<script>
    import jrQrcode from 'jr-qrcode'
    import routerMap from 'utils/route_map.js'
    import common from 'utils/common.js'


    export default {
        components: {
        },
        data() {
            return {
                href: window.location.href,
                imgBase64: '',
                title: ''
            }
        },
        computed: {
            getQrcode() {
                return jrQrcode.getQrBase64(this.href);
            },
            routerData () {
                const data = routerMap.filter((ele)=>{
                    const href = this.href.split('com')[1] || '';
                    return ele[0].test( href.split('?')[0])
                })
                return data[0] || []
            },
            backendApi(){
                if(this.routerData.length == 0) {
                    return '当前不是泡泡h5页面'
                }
                const api =  this.routerData[2]
                return api(this.requestParams)
            },
            requestParams(){
                return {query: common.getUrlQuery(this.href), url: this.href}
            }
        },
        created() {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, (tabs) => {
                this.href = tabs[0].url
                this.title = tabs[0].title
            });
        },
        watch: {},
        methods: {
        }
    }
</script>
