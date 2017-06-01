<template>
    <div class="vux-search-box vux-search-fixed" :style="{top: top, position: position}">
        <div class="weui-search-bar" :class="{'weui-search-bar_focusing': !isCancel || currentValue}">
            <form class="weui-search-bar__form" @submit.prevent="$emit('on-submit', value)" action=".">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" :id="`search_input_${uuid}`" :placeholder="placeholder" autocomplete="off" :required="required" v-model="currentValue" ref="input"
                        @focus="onFocus"
                        @blur="onBlur"
                    />
                    <a href="javascript:" class="weui-icon-clear" @click="clear" v-show="currentValue"></a>
                </div>
            </form>
            <label :for="`search_input_${uuid}`" class="weui-search-bar__label -resFull" v-show="!isFocus && !value">
                <i class="weui-icon-search"></i>
                <span>{{placeholder}}</span>
            </label>
            <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancel">
                {{cancelText}}
            </a>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import uuidMixin from 'common/js/uuid.js'
    export default {
        mixins: [uuidMixin],
        props: {
            required: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: '搜索'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            value: {
                type: String,
                default: ''
            },
            results: {
                type: Array,
                default () {
                    return []
                }
            },
            top: {
                type: String,
                default: '0px'
            },
            position: {
                type: String,
                default: 'fixed'
            },
            autoScrollToTop: Boolean
        },
        created() {
            if (this.value) {
                this.currentValue = this.value
            }
        },
        methods: {
            clear() {
                this.currentValue = ''
                this.isFocus = true
                this.setFocus()
            },
            cancel() {
                this.isCancel = true
                this.currentValue = ''
                this.$emit('on-cancel')
            },
            handleResultClick(item) {
                this.$emit('result-click', item)
                this.$emit('on-result-click', item)
                this.isCancel = true
            },
            setFocus() {
                this.$refs.input.focus()
            },
            onFocus() {
                this.isFocus = true
                this.$emit('on-focus')
            },
            onBlur() {
                this.isFocus = false
            }
        },
        data() {
            return {
                currentValue: '',
                isCancel: true,
                isFocus: false
            }
        },
        watch: {
            value(val) {
                this.currentValue = val
            },
            currentValue(val) {
                this.$emit('input', val)
                this.$emit('on-change', val)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    .vux-search-fixed
        position: fixed
        left: 0
        top: 0
        z-index: 5
        background: rgba(255, 255, 255, 1)
    .vux-search-box
        width: 100%
    .weui-cells .vux-search_show
        margin-top: 0!important
        overflow-y: auto
    .weui-search-bar
        position: relative
        padding: 8px 10px
        background-color: #EFEFF4
        height: 28px
        display: flex
        font-size: .3rem
        font-weight: 300
    .weui-search-bar__form
        height: 28px
        position: relative
        flex: 1
        .weui-search-bar__box
            display: flex
            background-color: white
            height: 100%
            align-items: center
            padding: 0 6px
            box-sizing: border-box
            border-radius: 14px
            >input
                flex: 1
                text-indent: 3px
                font-size: 12px
    .weui-search-bar__cancel-btn
        display: block
        margin-left: 10px
        line-height: 28px
        color: mainColor
        white-space: nowrap
    .weui-search-bar__label
        background-origin: padding-box
        border: solid #EFEFF4
        border-width: 8px 10px
        background-color: #fff
        box-sizing: border-box
        border-radius: 14px
        display: flex
        justify-content: center
        align-items: center
        z-index: 10
</style>
