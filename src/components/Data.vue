<template>
  <div>
      <button @clock="moveToMongo">MongoDB로 이전</button>
      {{datas}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Data',
    data () {
        return {
            datas : [],
            tempdata : []
        }
    },
created () {
    axios.get('https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json')
            .then((result)=>{
                let temp = result.data['feed']['entry'];
                for(var i=0; i<temp.length; i++){
                    var Object = {
                        '상호': temp[i]['gsx$상호']['$t'],
                        '주소': temp[i]['gsx$주소']['$t'],
                        '분류': temp[i]['gsx$분류']['$t'],
                        '위치': temp[i]['gsx$위치']['$t'],
                        '기타': temp[i]['gsx$기타']['$t'],
                        '정보': temp[i]['gsx$정보']['$t']
                    };
                    this.tempdata.push(Object);
                }
                console.log(this.tempdata);
                this.datas = this.tempdata;
            }
            )
    }
}
</script>

<style>

</style>
