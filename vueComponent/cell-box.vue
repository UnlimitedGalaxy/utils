<template>
    <div class="cell-wrapper" :style="{height: height}" @click="$emit('click')">
        <slot></slot>
        <i class="icon-arrow-right -centerY" v-if="showArrow"></i>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
	    props: {
	    	height: {
	    		type: String,
                require: true
            },
            showArrow: {
	    		type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"

.cell-wrapper
    display: flex
    position: relative
    border-1px-select(#eef2f5, 'bottom')
    align-items: center
    .icon-arrow-right
        position: absolute
        right: .36rem
        width: .24rem
        height: .24rem
        line-height: .24rem
        font-size: .24rem
        color: #999
        text-align: center
</style>
