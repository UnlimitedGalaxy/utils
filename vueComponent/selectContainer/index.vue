<template>
    <div class="selectContianer">
        <transition name="fade">
            <div class="mask" @click="click($event)" v-show="controlMask"></div>
        </transition>

        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
	    data() {
	    	return {
	    		controlMask: false
            }
        },
        methods: {
        	click(event) {
        		this.$children.forEach(function(item) {
                    item.isBeTabed = false
                })
                this.controlMask = false
            },
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
.selectContianer
    display: flex
    width: 100%
    height: .86rem
    position: relative
    .mask
        width: 100vw
        height: 100vh
        background-color: rgba(0, 0, 0, 0.3)
        position: absolute
        top: .86rem
        left: 0
        z-index: 100
        transtion: all .3s
</style>
