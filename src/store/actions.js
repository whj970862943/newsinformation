import axios from 'axios'
import jsonp from 'jsonp'

import * as type from './mutation-types.js'
import {
    reqUserInfo,
    reqLogout,
} from '../api'

export default {
    
    async logout({commit}) {// 异步登出
    const result = await reqLogout()
    if (result.code === 0) {
        commit(type.RESET_USER_INFO)
    }
    },
    async getUserInfo({commit}) {  // 异步获取用户信息
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(type.RECEIVE_USER_INFO, {userInfo})
        }
    },
    recordUser({commit}, userInfo) {   //同步记录用户信息
        commit(type.RECEIVE_USER_INFO, {userInfo})
    },
    
    getNews({            //首页的数据请求
        commit,
        state
    }, pay) {
        if (pay.kind && pay.flag) {
            jsonp('http://m.toutiao.com/list/?tag=' + pay.kind + '&ac=wap&count=20&format=json_raw&as=A17538D54D106FF&cp=585DF0A65F0F1E1&&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
                function(err, res) {
                    commit(type.GET_NEWSLIST, {
                        data: res.data,
                        kind: pay.kind
                    });
                    commit(type.CHANGE_LOADING_STATE, false);
                    if (res.return_count) {
                        commit(type.RETURN, true);
                    } else {
                        commit(type.RETURN, false);
                    }
                })
        }
    },
    pulldownloadmore({    //下拉点击后加载数据
        commit,
        state
    }, payload) {
        if (payload.flag && payload.kind) {
            commit(type.PULLDOWNBTN, false);
            jsonp('http://m.toutiao.com/list/?tag=' + payload.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
                function(err, res) {
                    commit(type.GET_NEWSLIST, {
                        data: res.data,
                        kind: payload.kind
                    });
                });
        }
    },
    setUserInfo({         //登录操作
        commit,
        state
    }, res) {
        localStorage.setItem('userName', JSON.stringify(res));
        localStorage.setItem('logined', true);
        commit(type.GETUSERDATA, res)
        commit(type.LOGINING, true);
    },
    setSignOut({          //退出登录操作
        commit
    }) {
        localStorage.removeItem('userName');
        localStorage.setItem('logined', false);
        commit(type.LOGINING, false);
        commit(type.LOGOFF, false);
    },
}
