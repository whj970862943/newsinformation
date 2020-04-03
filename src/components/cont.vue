<template>
  <div class="com">
    <!-- {{comments}} -->
    <!-- <ul class="ul">
      <li class="li" v-for="(value,index) in comments" :key="index">
        {{value.text}}
      </li>
    </ul> -->
    <p class="navbar-text pl">评   论 :</p>
    <ul class="list-group ul">
      <li class="list-group-item li" v-for="(value,index) in comments" :key="index">
        {{value.text}}
      </li>
    </ul>
  </div>
</template>

<script>


  import * as type from '../store/mutation-types.js'
  import { mapGetters } from 'vuex'

  export default {
    props:['group_id','item_id'],
    
    data() {
      return {
        comments: [],
        group:'',
        item:''
      }
    },
    methods:{
      getcomment(group_id,item_id) {
        let url = 'http://www.toutiao.com/api/comment/list/?group_id=' + group_id + '&item_id=' + item_id + '&offset=0&count=20';
        this.$jsonp(url, {})
        .then(res => {
          console.log(res);
          this.comments = res.data.comments
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    //
    activated: function() {

      this.getcomment(this.group_id,this.item_id)

    }

    
}
</script>

<style scoped>
  .ul{
    padding: 5px 5px;
  }
  .pl{
    font-size: 20px;
    margin-left: 15px;
    margin-top: 1.5em;
  }
  .li{
    font-size: 19px;
    margin:5px 5px;
    padding:0.8em 0.3em;
    
  }
</style>
