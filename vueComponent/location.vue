<template>
    <div id="location-map"></div>
</template>

<script type="text/ecmascript-6">
    export default {
        mounted() {
            var map = new BMap.Map("location-map")
            var point = new BMap.Point(116.501573, 39.900877)
            map.centerAndZoom(point, 16)
            // 定位对象
            var geoc = new BMap.Geocoder()
            var geolocation = new BMap.Geolocation()
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point)
                    map.addOverlay(mk)
                    map.panTo(r.point)
                    setLocation(r.point)
                    window.address.y = r.point.lng
                    window.address.x = r.point.lat
                }else {
                    $("#start").attr("placeholder","请输入您的当前位置")
                    alert('无法定位到您的当前位置，导航失败，请手动输入您的当前位置！'+this.getStatus())
                }
            },{enableHighAccuracy: true})

            //获取地理位置的函数
            function setLocation(point){
                geoc.getLocation(point, function(rs){
                    var addComp = rs.addressComponents
                    var result = addComp.province + addComp.city
                    window.address.province = addComp.province.replace('省', '')
                    window.address.city = addComp.city.replace('市', '')
                    window.address.district = addComp.district
                    window.address.street = addComp.street
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #location-map
        width: 0
        height: 0
</style>
