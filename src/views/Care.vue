<template lang="html">
  <div id="care">
    <header-bar>
      <div class="care-header-bar" slot="care">
        <span>前端日报</span>
        <!-- <Icon type="person-add" size="28" class="fr addFriends" color="#fff"></Icon> -->
      </div>
    </header-bar>
    <!-- <div class="no">
      <div class="cont">
        因数据限制，暂未开发，后续可能更换此频道内容
      </div>
    </div> -->
    <ul class="newsContent animated">
            <router-link
                v-for="(val,index) in content"
                :to="{
                    name:'qddetail',
                    params:
                        {   
                          title:val.title,
                          id:val.id,
                          description:val.description
                        }
                }"
                class="newsDetaile"
                :key="index"
            >
                <p class="title">{{val.title}}</p>
                <div>
                    <!-- <img alt="加载出错" v-for="(img,index) in val.image_list" :key="index" v-lazy="img.url"> -->
                    <div class="bottomInfo clearfix">
                        <!-- <Icon type="fireball" size="10" color="#d43d3d"></Icon> -->
                        <span class="avIcon">广告</span>
                        <span class="writer">{{}}</span> &nbsp;&nbsp;
                        <span class="comment_count">评论&nbsp;{{}}</span>
                        <span class="datetime">{{}}</span>
                    </div>
                </div>
            </router-link>
        </ul>
    <BottomNav/>
  </div>
</template>

<script>
import headerBar from '../components/Header-bar.vue'
import BottomNav from '../components/BottomNav.vue'
import * as type from '../store/mutation-types.js'
import jsonp from 'jsonp'
export default {
    data(){
      return{
        content:[]
      }
    },
    components: {
        headerBar,
        BottomNav
    },
    created() {
      // let url = 'http://localhost:3001/api/daily_list'
      // this.$jsonp(url, {})
      //   .then(res => {
      //     console.log(res);
      //     this.content = res.data

      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
      httpGet('localhost:3001/api/daily_list', {}, '', false)
        .then(res=>{
          console.log(res);
          
        })
    }
    
    
}
</script>

<style lang="less">
#care{
  .care-header-bar {
    font-size: 16px;
    text-align: center;
    color: #fff;
    // span{
    //   // margin-right: 1rem;
    // }
    // .addFriends {
    //     line-height: 1.2rem;
    //     margin-right: 0.3rem;
    // }
  }
}
  // .no{
  //   position: relative;
  //   top: 2rem;
  //   font-size: 30px;
  //   .cont{
  //     width: 94%;
  //     margin: 0 auto;
  //   }
  // }
//   .newsContent {
//     margin-top: 2.3rem;
//     width: 100%;
//     .newsDetaile {
//         width: 94%;
//         display: block;
//         position: relative;
//         margin: 0 auto;
//         padding-bottom: 0.15rem;
//         .borderBottom(1px,#ccc);
//         .title {
//             font-size: 16px;
//             font-weight: bold;
//             color: #000;
//             padding-top: 0.2rem;
//             padding-bottom: 0.15rem;
//         }
//         img {
//             width: 31.1%;
//             margin-right: 0.21rem;
//             height: 2.3rem;
//         }
//         .bottomInfo {
//             font-size: 10px;
//             margin-top: 0.15rem;
//             .writer {
//                 color: #000;
//             }
//             .comment_count {
//                 color: #000;
//             }
//             .datetime {
//                 float: right;
//                 color: #000;
//             }
//             .avIcon {
//                 display: inline-block;
//                 height: 0.4rem;
//                 width: 0.9rem;
//                 text-align: center;
//                 line-height: 0.4rem;
//                 border-radius: 4px;
//                 border: 1px solid #39f;
//                 font-size: 10px;
//                 margin-right: 0.1rem;
//             }
//         }
//     }
// }



</style>
