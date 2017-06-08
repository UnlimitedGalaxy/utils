<template>
    <div >
        <div @click="$emit('click')"></div>
        <div :style="{backgroundImage: 'url('+indexData.supplier_logo+')'}"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
        	value: String
        },
        data() {
        	return {
        		dynamicVal: this.value
            }
        },
        watch: {
        	value(val) {
        		this.dynamicVal = val
            },
            dynamicVal(val) {
        		this.$emit('input', val)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../../common/stylus/mixin.styl"

</style>
