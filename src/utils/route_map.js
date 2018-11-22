'use strict';

// router inc file mapping
var ONLINE_HOST = 'pub.m.iqiyi.com';
module.exports = [
    // 泡泡
    [/^\/m5\/bubble\/index.html$/, 'page/bubble/index.html', null],
    [/^\/m5\/bubble\/detail.html$/, 'page/bubble/detail.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/detail.json?feedId=' + req.query.feedId;
    }],
    [/^\/m5\/bubble\/detail_f(\d+)_p(\d+).html$/, 'page/bubble/detail.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/detail.json?feedId=' + RegExp.$1;
    }],
    [/^\/m5\/bubble\/material.html$/, 'page/bubble/material.html', function (req, res, next) {
        return 'http://pub.m.iqiyi.com/h5/bubble/material.json?materialId=' + req.query.materialId + '&categoryType=1';
    }],
    // 我拍运营活动页
    [/^\/m5\/bubble\/ishotTopic.html$/, 'page/bubble/ishotTopic.html', function (req, res, next) {
        return 'http://pub.m.iqiyi.com/h5/bubble/topicFeeds.json?topicId=' + req.query.topicId;
    }],
    [/^\/m5\/bubble\/publish.html$/, 'page/bubble/publish.html', null],
    [/^\/m5\/bubble\/complaint.html$/, 'page/bubble/complaint.html', null],
    // 旧版圈子页（地址旧）
    [/^\/m5\/bubble\/circleInfo.html$/, 'page/bubble/landing.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/circleInfo.json?circleId=' + (req.query.wallId || req.query.circleId);
    }],
    // 新版圈子页（明星圈子）
    [/^\/m5\/bubble\/circleInfo_w(\d+)_p(\d+).html$/, 'page/bubble/starCircle.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/circleInfo.json?circleId=' + RegExp.$1;
    }],
    // 明星百科
    [/^\/m5\/bubble\/star_s(\d+)_p(\d+).html$/, 'page/bubble/starBaike.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/starBaike.json?circleId=' + RegExp.$1;
    }],
    // 事件页
    [/^\/m5\/bubble\/eventInfo.html$/, 'page/bubble/eventInfo.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/eventInfo.json?snsTime=1&eventId=' + req.query.eventId;
    }],
    // 星光墙
    [/^\/m5\/bubble\/starlightWall.html$/, 'page/bubble/starlightWall.html', 'http://pub.m.iqiyi.com/h5/bubble/starLightWall.json?page=1'],
    // 榜单规则
    [/^\/m5\/bubble\/listRule.html$/, 'page/bubble/listRule.html', null],
    // 粉丝排行榜 总、历史、动态
    [/^\/m5\/bubble\/totalTopList.html$/, 'page/bubble/listTotal.html', 'http://pub.m.iqiyi.com/h5/bubble/totalTopList.json?page=1'],
    [/^\/m5\/bubble\/historyTopList.html$/, 'page/bubble/listHistory.html', 'http://pub.m.iqiyi.com/h5/bubble/historyTopList.json?platform=15'],
    [/^\/m5\/bubble\/dynamicTopList.html$/, 'page/bubble/listDynamic.html', 'http://pub.m.iqiyi.com/h5/bubble/dynamicTopList.json?page=1'],
    [/^\/m5\/bubble\/viewCollection.html$/, 'page/bubble/viewCollection.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/viewCollection.json?collectionId=' + req.query.collectionId;
    }],
    [/^\/m5\/bubble\/influence.html$/, 'page/bubble/influence.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/influence.json?type=' + req.query.type;
    }],
    [/^\/m5\/bubble\/soundWar.html$/, 'page/bubble/soundWar.html', null],
    [/^\/m5\/bubble\/fansInventory.html$/, 'page/bubble/fansInventory.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/fansInventory.json?userId=' + req.query.userId + '&wallId=' + req.query.circleId;
    }],
    [/^\/m5\/bubble\/fansList.html$/, 'page/bubble/fansList.html', null],
    [/^\/m5\/bubble\/starMain.html$/, 'page/bubble/starMain.html', null],
    [/^\/m5\/bubble\/starPGC.html$/, 'page/bubble/starPGC.html', null],
    [/^\/m5\/bubble\/hotEvent.html$/, 'page/bubble/hotEvent.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/hotEvent.json?eId=' + req.query.eId;
    }],

    [/^\/m5\/bubble\/contribution.html$/, 'page/bubble/native/contribution.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/contribution.json?circleId=' + req.query.circleId;
    }],
    // 应援详情页
    [/^\/m5\/bubble\/fundDetail.html$/, 'page/bubble/fundDetail.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/fund.json?fundId=' + req.query.fundId;
    }],
    [/^\/m5\/bubble\/fundList.html$/, 'page/bubble/fundList.html', null],
    [/^\/m5\/bubble\/fundPayResult.html$/, 'page/bubble/fundPayResult.html', null],
    [/^\/m5\/bubble\/fundOrderInfo.html$/, 'page/bubble/fundPayDetail.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/fundOrderInfo.json?orderCode=' + req.query.orderCode;
    }],
    [/^\/m5\/bubble\/addrList.html$/, 'page/bubble/addrList.html', 'http://pub.m.iqiyi.com/h5/bubble/addrList.json'],
    [/^\/m5\/bubble\/newAddr.html$/, 'page/bubble/newAddr.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/newAddr.json' + (req.query.addrId ? '?addrId=' + req.query.addrId : '');
    }],
    [/^\/m5\/bubble\/404.html$/, 'page/bubble/404.html', 'http://pub.m.iqiyi.com/h5/bubble/404.json'],
    // 视频联播页面
    [/^\/m5\/bubble\/videoFilm.html$/, 'page/bubble/videoFilm.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/feedVideoChain.json?feedId=' + req.query.feedId;
    }],
    // 明星来电（百度合作）
    [/^\/m5\/bubble\/starCall.html$/, 'page/bubble/starCall.html', function (req, res, next) {
        return 'http://nx.m.iqiyi.com/h5/bdVideoCall.json?word=' + req.query.word;
    }],
    // 表白墙
    [/^\/m5\/bubble\/confessionWall.html$/, 'page/bubble/confessionWall.html', null],

    // 泡泡 native
    // 圈主申请
    [/^\/m5\/bubble\/apply.html$/, 'page/bubble/native/apply.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/apply.json?circleId=' + req.query.circleId + '&agentversion=' + req.query.agentversion;
    }],
    // 用户自建圈
    [/^\/m5\/bubble\/selfApplyCircle.html$/, 'page/bubble/native/selfApplyCircle.html', 'http://' + ONLINE_HOST + '/h5/bubble/selfApplyCircle.json'],
    [/^\/m5\/bubble\/selfSimilarCircle.html$/, 'page/bubble/native/selfSimilarCircle.html', null],
    [/^\/m5\/bubble\/selfPersonInfo.html$/, 'page/bubble/native/selfPersonInfo.html', 'http://' + ONLINE_HOST + '/h5/bubble/selfApplyCircle.json'],
    [/^\/m5\/bubble\/selfCircleRule.html$/, 'page/bubble/native/selfCircleRule.html', null],
    [/^\/m5\/bubble\/phoneVerify.html$/, 'page/bubble/native/phoneVerify.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/phoneVerify.json?circleId=' + req.query.circleId + '&agentversion=' + req.query.agentversion;
    }],
    [/^\/m5\/bubble\/applyQuestions.html$/, 'page/bubble/native/applyQuestions.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/applyQuestions.json?circleId=' + req.query.circleId + '&agentversion=' + req.query.agentversion;
    }],
    [/^\/m5\/bubble\/declaration.html$/, 'page/bubble/native/declaration.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/declaration.json?circleId=' + req.query.circleId + '&agentversion=' + req.query.agentversion;
    }],
    [/^\/m5\/bubble\/myGrade.html$/, 'page/bubble/native/myGrade.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/myGrade.json?wallId=' + req.query.wallId;
    }],
    [/^\/m5\/bubble\/gradeInfo.html$/, 'page/bubble/native/gradeInfo.html', null],
    [/^\/m5\/bubble\/gradeTitle.html$/, 'page/bubble/native/gradeTitle.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/gradeTitle.json?wallId=' + req.query.wallId;
    }],
    // 表白墙
    [/^\/m5\/bubble\/qrScaner.html$/, 'page/bubble/qrScaner.html', null],

    // 兴趣圈子等级说明页
    [/^\/m5\/bubble\/interestGradeInfo.html$/, 'page/bubble/native/interestGradeInfo.html', null],
    [/^\/m5\/bubble\/propInfo.html$/, 'page/bubble/native/propInfo.html', null],
    [/^\/m5\/bubble\/imgText.html$/, 'page/bubble/native/imgText.html', 'http://10.15.212.58:8050/h5/bubble/imgText.json'],

    [/^\/m5\/bubble\/myGifts.html$/, 'page/bubble/native/myGifts.html', function (req, res, next) {
        return 'http://10.16.84.246:8050/h5/bubble/myGifts.json?wallId=' + req.query.wallId;
    }],
    [/^\/m5\/bubble\/myAwardList.html$/, 'page/bubble/native/myAwardList.html', 'http://pub.m.iqiyi.com/h5/bubble/myAwardList.json'],
    // [/^\/m5\/bubble\/myAwardList.html$/, "page/bubble/native/myAwardList.html", mocks.myAwardList],
    // KOL申请与展示
    [/^\/m5\/bubble\/kolApply.html$/, 'page/bubble/native/kolApply.html', 'http://10.15.212.58:8050/h5/bubble/kolApply.json'],

    [/\/play.html/, 'page/play/play.html', 'http://10.153.109.98:8050/phone/android/h5/sp/v_19rrkbqj9o.html/'],
    [/\/shareplay.html/, 'page/newShareplay/newSharePlay.html', function (req, res, next) {
        return 'http://nx.m.iqiyi.com/h5/player/shareplay/?' + req.url.split('?')[1];
    }],
    [/\/openplay.html/, 'page/shareplay/openPlay.html', function (req, res, next) {
        return 'http://pub.m.iqiyi.com/phone/ios/h5/player/openplay/?' + req.url.split('?')[1];
    }],
    // pgc圈子
    [/^\/m5\/bubble\/pgcCircle.html$/, 'page/bubble/pgcCircle.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/circleinfo.json?wallId=' + req.query.wallId + '&s=' + req.query.s;
    }],
    [/^\/m5\/bubble\/pgcCollections.html$/, 'page/bubble/pgcCollections.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/pgcCollections.json?circleId=' + req.query.circleId + '&page=1&num=10&origin=paopao_app';
    }],

    [/^\/m5\/bubble\/myGifts.html$/, 'page/bubble/native/myGifts.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/myGifts.json?wallId=' + req.query.wallId;
    }],
    [/^\/m5\/bubble\/myAwardList.html$/, 'page/bubble/native/myAwardList.html', 'http://10.110.22.227:8050/h5/bubble/myAwardList.json'],
    // [/^\/m5\/bubble\/myAwardList.html$/, "page/bubble/native/myAwardList.html", mocks.myAwardList],
    // 内嵌个人中心的粉丝列表
    [/^\/m5\/bubble\/psFanslist.html$/, 'page/bubble/native/personalFanslist.html', function (req, res, next) {
        var url = 'http://' + ONLINE_HOST + '/h5/bubble/psFansList.json';
        if (req.query.uid) {
            url += '?uid=' + req.query.uid;
        }
        return url;
    }],
    // 群分享优化
    [/^\/m5\/bubble\/groupShare.html$/, 'page/bubble/native/groupShare.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/groupShare.json?id=' + req.query.id;
    }],
    //偶像榜单
    [/^\/m5\/bubble\/idolList.html$/, 'page/bubble/native/idolList.html', function (req, res, next) {
        return 'http://pub.m.iqiyi.com/h5/bubble/configurationList.json?topicid=' + req.query.topicid;
    }],
    // 打赏守护榜
    [/^\/m5\/app\/rewardList.html$/, '/page/app/rewardList.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/phone/android/h5/app/rewardList.json?' + req.url.split('?')[1];
    }],
    // 简介二级页
    [/^\/m5\/bubble\/videoProfile.html$/, '/page/bubble/native/videoProfile.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/videoProfile.json?' + req.url.split('?')[1];
    }],

    // 综艺专题页 偶像练习生 热血街舞团 表单 应援榜 话题榜 ...;
    [/^\/m5\/bubble\/showSpecial.html$/, '/page/bubble/native/showSpecial.html', function (req, res, next) {
        return 'http://10.16.85.2/h5/bubble/configurationSubject.json?' + req.url.split('?')[1];
    }],
    // 应援排行榜 二级页
    [/^\/m5\/bubble\/showCrowd.html$/, '/page/bubble/native/showCrowd.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/configurationSubject.json?' + req.url.split('?')[1];
    }],
    // 话题排行榜 二级页
    [/^\/m5\/bubble\/showSortEvent.html$/, '/page/bubble/native/showSortEvent.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/configurationSubject.json?' + req.url.split('?')[1];
    }],
    // 视频feed专题二级页
    [/^\/m5\/bubble\/showRead.html$/, '/page/bubble/native/showRead.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/configurationSubject.json?type=feed&' + req.url.split('?')[1];
    }],
    // 专题投票二级页
    [/^\/m5\/bubble\/showVote.html$/, '/page/bubble/native/showVote.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/configurationSubject.json?type=vote&' + req.url.split('?')[1];
    }],
    // 专题二级页
    [/^\/m5\/bubble\/showWelfare.html$/, '/page/bubble/native/showWelfare.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/configurationSubject.json?type=event&' + req.url.split('?')[1];
    }],
    // 补签邀请
    [/^\/m5\/bubble\/signInvitation.html$/, '/page/bubble/signInvitation.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/signInvitation.json?uid=' + req.query.uid + '&activityId=' + req.query.uid;
    }],
    // 评论3.0-评论二级页分享页
    [/^\/m5\/bubble\/comment_c(\d+).html$/, '/page/bubble/commentSecond.html', function (req, res, next) {
        return 'http://' + ONLINE_HOST + '/h5/bubble/comment.json?commentId=' + RegExp.$1;
    }],

];
