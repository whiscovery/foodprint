<template>
  <div> List 
      <div v-if="foods">
        <table class="table table-striped mt-3 contents">
            <thead>
                <tr>
                <th style="width: 15%" scope="col">위치</th>
                <th style="width: 20%" scope="col">상호</th>
                <th style="width: 30%" scope="col">주요메뉴</th>
                <th style="width: 35%" scope="col">정보</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="food,i in foods" :key="i">
                
                <td>{{filtered(food.위치)}}</td>
                <td>{{filtered(food.상호)}}</td>
                <td>{{filtered(food.대표메뉴)}}</td>
                <td>{{filtered(food.정보)}}</td>
                </tr>
            </tbody>
        </table>
      </div>
      <div v-else>
          Loading...
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'List',
  created () {
    this.fetchFoods()
  },
  computed: {
    ...mapState(['foods'])
  },
  methods: {
      filtered (value) {
          return value ? value : ''
      },
    ...mapActions(['fetchFoods'])
  }
}
</script>

<style>
.contents {
    font-size: 12px;
    font-family: Nanum Gothic Coding;
}
</style>