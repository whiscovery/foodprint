<template>
<div class="container">
    {{translating()}}
  <naver-maps
      :height="height"
      :width="width"
      :mapOptions="mapOptions"
      :initLayers="initLayers"
      @load="onLoad">
      <naver-info-window
        class="info-window"
        @load="onWindowLoad"
        :isOpen="info"
        :marker="marker">
        <div class="info-window-container">
          <h1>{{hello}}</h1>
        </div>
      </naver-info-window>
      <naver-marker :lat="37" :lng="127" @click="onMarkerClicked" @load="onMarkerLoaded"/>

      <naver-marker :lat="37.001" :lng="127.002" @click="onMarkerClicked" @load="onMarkerLoaded"/>
      <!-- <naver-circle :lat="37" :lng="127" :radius="88600"/>
      <naver-rectangle :south="36" :north="38" :west="126" :east="128"/>
      <naver-ellipse :bounds="{south:36,north:38,west:126,east:128}"/>
      <naver-polygon :paths="[[{lat:37,lng:127},{lat:38,lng:127},{lat:38,lng:129},{lat:37,lng:128}]]"/>
      <naver-polyline :path="[{lat:37,lng:127},{lat:38,lng:129}]"/> -->
      <!-- <naver-ground-overlay
        :url="'//logoproject.naver.com/img/img_about.gif'"
        :bounds="{south:36.7,north:36.9,west:126.5,east:127.5}"/> -->
    </naver-maps>
</div>
</template>

<script>
// Client Secret: Yl7ZACbrYid5I9idc7XCx80AB27vwP9CrFdgskeu
// Client ID: li0futngb6
// Application: foodprint
// https://shin-jaeheon.github.io/vue-naver-maps/
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
    name: 'Map',
    data() {
      return {
        width: 800,
        height: 800,
        info: false,
        marker: null,
        count: 1,
        map: null,
        isCTT: false,
        mapOptions: {
          lat: 37,
          lng: 127,
          zoom: 10,
          zoomControl: true,
          zoomControlOptions: {position: 'TOP_RIGHT'},
          mapTypeControl: true,
        },
        initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE'],
        coord: []
      }
    },
    created () {
        this.fetchFoods()
    },
    computed: {
        hello() {
            return `Hello, World! × ${this.count}`
        },
        ...mapState(['foods'])
    },
    methods: {
        filtered (value) {
            return value ? value : ''
        },
        onLoad(vue){
            this.map = vue;
        },
        onWindowLoad(that) {
            console.log(that)
        },
        onMarkerClicked(event) {
            this.info = !this.info;
            console.log(event)
        },
        onMarkerLoaded(vue) {
            this.marker = vue.marker;
        },
        translating (value) {
            axios.get('https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode/', { params: {
                query: value
            },
            headers: {
                "X-NCP-APIGW-API-KEY-ID": 'li0futngb6',
                "X-NCP-APIGW-API-KEY": 'Yl7ZACbrYid5I9idc7XCx80AB27vwP9CrFdgskeu'
            }
            })
            .then(res => {
                return res.data
            })
            .then(data => {
                this.coord = [data.addresses[0].x, data.addresses[0].y]
            })
        },
        ...mapActions(['fetchFoods'])
    },
    mounted() {
      setInterval(() => this.count++, 1000);
    }
}
</script>

<style scoped>
  .info-window-container {
    padding: 10px;
    width: 300px;
    height: 100px;
  }
</style>