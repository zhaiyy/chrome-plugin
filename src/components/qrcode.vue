<template>
    <img :src="getQrcode"/>
</template>
<script>
    import jrQrcode from 'jr-qrcode'

    export default {
        data() {
            return {
                href: window.location.href,
                imgBase64: ''
            }
        },
        created() {
        },
        watch: {},
        computed: {
            getQrcode() {
                return jrQrcode.getQrBase64(this.href);
            }
        },
        methods: {
        }
    }
</script>
