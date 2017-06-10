<template>
    <div class="selectItem">
        <span  :class="{'selectActive': isBeTabed}" @click="click">{{activeName}}
            <i class="icon-triangle"></i>
        </span>
        <transition name="slide-down">
            <div class="selectList" v-show="isBeTabed">
                <div class="selectList__container">
                    <form class="selectList__wrapper">
                        <template v-for="(item, index) in data" >
                            <input type="radio" name="list1" :id="uuid+'_list1_' + item.id">
                            <span class="-bottom-line">
                                <label class="-resFull" :for="uuid+'_list1_' + item.id"
                                    :data-id="item.id"
                                    :data-title="item.name"
                                    @click="selectTab($event, item)"
                                >
                                </label>
                                {{item.name}}
                                <i class="icon-arrow-right -centerY" v-if="item.hasOwnProperty('children') && item.children.length != 0"></i>
                            </span>
                        </template>
                    </form>
                </div>
                <form class="selectList__wrapper" v-if="listCount>1">
                    <template v-for="(item, index) in childData" >
                        <input type="radio" name="list2" :id="uuid+'_list2_' + item.id" >
                        <span class="-bottom-line">
                            <label class="-resFull" :for="uuid+'_list2_' + item.id"
                                :data-id="item.id"
                                :data-title="item.name"
                                @click="selectChildren($event)"
                            >
                            </label>
                            {{item.name}}
                        </span>
                    </template>
                </form>
            </div>
        </transition>

    </div>
</template>

<script type="text/ecmascript-6">
    import uuid from 'common/js/uuid.js'

    // function isArray(obj) {
    //     return Object.prototype.toString.call(obj) === '[object Array]'
    // }
    // let iterate = (function () {
    // 	let count = 0
    //     return function(arr) {
    //         if (!isArray(arr)) {
    //             return
    //         }
    //         debugger
    //         if (arr.length === 0) {
    //         	debugger
    //             return
    //         }
    //         count ++
    //         for (let i = 0, item; item = arr[i]; i++){
    //             if (item.hasOwnProperty('children')) {
    //             	iterate(item.children)
    //                 break
    //             }
    //         }
    //         return count
    //     }
    // })()

    export default {
    	name: 'selectItem',
        props: {
        	list: Array,
            cate_id: String,
            cate_type_id: String,
            listCount: Number
        },
        mixins: [uuid],
        data() {
        	return {
                childData: [],
                id: this.cate_id,
                type_id: this.cate_type_id,
                data: this.list,
                activeName: this.list[0].name,
                isBeTabed: false
            }
        },
        methods: {
            select(event) {
                let id = event.target.dataset.id
                this.activeName = event.target.dataset.title
                this.id = id
                this.$emit('change', id, '', this.list[0].name)
                this.childData = []
            },
        	selectChild(event, data) {
                let id = event.target.dataset.id
                this.id = id
            	this.childData = data
                this.activeName = event.target.dataset.title
            },
        	selectChildren(event) {
                this.type_id = event.target.dataset.id
                this.$emit('change', this.id, this.type_id, this.list[0].name)
            },
            click() {
                if (this.isBeTabed) {
                    this.isBeTabed = false
                    this.$parent.controlMask = false
                    return
                }
                this.$emit('click', this)
            },
            selectTab($event, item) {
                if (!item.hasOwnProperty('children')) {
                    return this.select($event)
                } else if (item.children.length === 0) {
                    return this.select($event)
                } else {
                    return this.selectChild($event, item.children)
                }
            }
        },
        watch: {
    		list(val) {
                this.data = val
                this.$nextTick(() => {
                    let dom = document.querySelector(`#${this.uuid}_list1_${this.cate_id} +span label`)
                    dom.click()
                    // debugger
                    if (this.type_id) {
                        this.$nextTick(() => {
                            let dom2 = document.querySelector(`#${this.uuid}_list2_${this.cate_type_id} +span label`)
                            dom2.click()
                        })
                    }
                })
            },
            cate_id(val) {
                this.id = val
                let dom = document.querySelector(`#${this.uuid}_list1_${this.cate_id} +span label`)
                dom.click()
                // debugger
            },
            cate_type_id(val) {
                this.type_id = val
                // debugger
                if (this.val) {
                    this.$nextTick(() => {
                        let dom2 = document.querySelector(`#${this.uuid}_list2_${this.cate_type_id} +span label`)
                        dom2.click()
                    })
                }
            }
        },
        mounted() {
            if (this.list.length > 1) {
            	// debugger
            	this.$nextTick(function() {
                    let dom = document.querySelector(`#${this.uuid}_list1_${this.cate_id} +span label`)
                    dom.click()
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    .slide-down-enter
        transform: scaleY(0)
        opacity: 0
    .slide-down-leave-active
        opacity: 0
    .selectActive
        color: mainColor !important
        >i
            transform: rotate(180deg) !important
    input:checked + span
        color: mainColor !important
        background-color: #d9d9d9 !important
    .selectItem
        flex: 1
        height: .86rem
        span
            display: block
            width: 100%
            height: 100%
            position: relative
            font-title: .3rem #333 .86rem
            >i
                position: absolute
                top: 0
                right: .1rem
                margin-top: .32rem
                font-title: .26rem
                transition: all .3s
        .selectList
            position: absolute
            width: 100vw
            height: 6rem
            left: 0
            top: .86rem
            overflow-x: hidden
            overflow-y: scroll
            transition: all .3s
            transform-origin: center top
            background-color: #fff
            display: flex
            z-index: 100000
            .selectList__container
                flex: 1
                height: 100%
                overflow-x: hidden
                overflow-y: scroll
            .selectList__wrapper
                flex: 1
                >input
                    display: none
                >span
                    display: block
                    width: 100%
                    height: .88rem
                    background-color: #fff
                    font-box: .3rem  .88rem .3rem
                    text-align: left
                    color: #333
                    position: relative
                    >i
                        font-title: .18rem
                        position: absolute
                        right: .28rem

</style>
