<template>
    <div class="buttonWrapper" ref="buttonWrapper" @click="click">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
	    props: {
	    	width: {
	    		type: String,
            },
            height: {
	    		type: String,
            },
            radius: {
	    		type: String,
            },
            theme: {
	    		type: String
            }
        },
        methods: {
            click() {
            	this.$emit('click')
            }
        },
        mounted() {
	    	let button = this.$refs.buttonWrapper
            button.style.lineHeight = this.height
            button.style.borderRadius = this.radius
            button.style.height = this.height
            button.style.width = this.width
            if (typeof this.height === 'string') {
                button.style.fontSize = Math.floor(parseFloat(this.height.split('r')[0]) * 9 / 20 * 100)/100 + 'rem'
            }
            if (this.theme) {
                button.className = button.className + ' solid'
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"

.buttonWrapper
    color: mainColor
    border: 1px solid
    text-align: center
    box-sizing: border-box
    &.solid
        color: white
        background: mainColor
</style>
