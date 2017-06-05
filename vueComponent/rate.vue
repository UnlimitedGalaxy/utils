<template>
    <div class="rate">
        <i class="icon-star" :style="{height: height, width: height,fontSize: height}"></i>
        <i class="icon-star" :style="{height: height, width: height,fontSize: height}"></i>
        <i class="icon-star" :style="{height: height, width: height,fontSize: height}"></i>
        <i class="icon-star" :style="{height: height, width: height,fontSize: height}"></i>
        <i class="icon-star" :style="{height: height, width: height,fontSize: height}"></i>
        <span :style="{fontSize: height}" v-if="showRate">{{rate}}分</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
        	height: String,
            rate: Number,
            showRate: {
        		type: Boolean,
                default: true
            }
        },
        data() {
        	return {
                fontSize: null
            }
        },
        created() {
            // this.fontSize = parseFloat(this.height.split('r')[0])*window.remSize /
            let score = parseInt(this.rate)
            let redScore = 5 - score
            let stars = document.querySelectorAll('.rate .icon-star')
            score --
            for (let i = 0; i<redScore; i++){
                score ++
                stars[score].className = 'icon-star02'
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    .rate
        color: mainColor
        font-size: 0
        white-space: nowrap
        i
            display: inline-block
            vertical-align: top
            margin-right: .1rem
</style>
