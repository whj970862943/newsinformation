<template>
  <section class="profile">
    <!-- <HeaderTop title="我的"/> -->
    <!-- <header-bar>
      <div class="care-header-bar" slot="care">
        <span class="cen">我的</span>
      </div>
    </header-bar> -->

    <section class="profile-number">
      <router-link :to="userInfo._id ? '/Selfpage': '/login'" class="profile-link">
        <div class="profile_image" v-if="userInfo._id">
          <i class="iconfont icon-person"></i>
        </div>

        <div class="user-info">
          <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</p>
          <p>
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
            <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
      <div class="grid grid1">
          <div class="item">
            <div class="colorWhite">0</div>
            <div class="colorGray">动态</div>
          </div>
          <div class="item">
            <div class="colorWhite">0</div>
            <div class="colorGray">关注</div>
          </div>
          <div class="item">
            <div class="colorWhite">0</div>
            <div class="colorGray">粉丝</div>
          </div>
        </div>
    </section>
    <!-- <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section> -->
    <section class="profile_my_order border-1px">
      
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-order-s"></i>
            </span>
        <div class="my_order_div">
          <span>消息通知</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
        <router-link to="/setup" class="my_order_div">
          <span>系统设置</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </router-link>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- GitHub项目地址 -->
      <a  class="my_order" href="https://github.com/whj970862943?tab=repositories" target=_blank>
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
        <div class="my_order_div">
          <span>GitHub项目地址</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>

    <section class="profile_my_order border-1px">
      <mt-button type="danger" style="width: 100%" v-if="userInfo._id" @click="logout">退出登陆</mt-button>
    </section>
    <BottomNav/>
  </section>
</template>

<script>
  import BottomNav from '../components/BottomNav.vue'
  import {mapState} from 'vuex'
  import { MessageBox, Toast } from 'mint-ui'
  import headerBar from '../components/Header-bar.vue'
  
  export default {
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      logout () {
        MessageBox.confirm('确认退出吗?').then(
          action => {
            // 请求退出
            this.$store.dispatch('logout')
            Toast('登出完成')
          },
          action => {
            console.log('点击了取消')
          }
        );
      }
    },

    components: {
      headerBar,
      BottomNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixins.styl"
  .profile //我的
    background-color #ddd
    width 100%
    //overflow hidden
    .care-header-bar 
      font-size: 16px;
      text-align: center;
      color: #fff;
      .cen
        margin-right: 0rem;   
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .profile-number
      //margin-top 34.5px
      height 160px
      background #777670
      margin-top -11px
      .colorWhite
        color: #ffffff;
      .colorGray
        color: #c8c8cd; 
      .grid
        overflow: hidden;
        text-align: center;
        font-size: 4vw;
        margin-top -7px
        .item
          width: 33%;
          float: left;
          margin:5vw 0;
          div:first-child
            margin-bottom: 1.5vw;
  
  
      .profile-link
        clearFix()
        
        position relative
        display block
        background #777670
        padding 30px 10px 10px 10px
        
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          .icon-person
            background #e4e4e4
            font-size 62px
          .el-icon-s-custom
            background #e4e4e4
            font-size 62px

        .user-info
          float left
          margin-top 8px
          margin-left 15px
          p
            font-weight: 700
            font-size 18px
            color #fff
            &.user-info-top
              padding-bottom 8px
            .user-icon
              display inline-block
              margin-left -15px
              margin-right 5px
              width 20px
              height 20px
              .icon-mobile
                font-size 30px
                vertical-align text-top
            .icon-mobile-number
              font-size 14px
              color #fff
        .arrow
          width 12px
          height 12px
          position absolute
          right 15px
          top 40%
          margin-top 10px
          .icon-jiantou1
            color #eee
            font-size 5px           
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 100%
      background #fff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          .info_data_top
            display block
            width 100%
            font-size 14px
            color #333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              color #f90
              font-weight 700
              line-height 30px
          .info_data_bottom
            display inline-block
            font-size 14px
            color #666
            font-weight 400
            padding-bottom 10px
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(3)
          border 0
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .my_order
        display flex
        align-items center
        padding-left 15px
        >span
          display flex
          align-items center
          width 20px
          height 20px
          >.iconfont
            margin-left -10px
            font-size 30px
            
          .icon-order-s
            color #02a774
          .icon-jifen
            color #ff5f3e
          .icon-vip
            color #f90
          .icon-fuwu
            color #02a774
        .my_order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          color #333
          display flex
          justify-content space-between
          span
            display block
          .my_order_icon
            width 10px
            height 10px
            .icon-jiantou1
              color #111111
              font-size 10px
</style>