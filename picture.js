<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>清峰-照片墙</title>
    <link href="../static/images/favicon.ico" th:href="@{/images/me.jpg}" rel="icon" type="image/x-ico">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css">
    <link rel="stylesheet" href="../static/css/me.css" th:href="@{/css/me.css}">
    <link rel="stylesheet" href="../static/lib/picture/css/jkresponsivegallery.css"
          th:href="@{/lib/picture/css/jkresponsivegallery.css}">
</head>
<body>

<!--导航-->
<nav class="gird-header">
    <div class="ui container">
        <div class="ui inverted secondary stackable menu">
            <a href="#" th:href="@{/}"><h2 class="ui olive header item" style="font-family: STSong">清の峰</h2></a>
            <!--<div class="right m-item item m-mobile-hide">-->
            <a href="#" th:href="@{/}" class="m-item item m-mobile-hide"><i class="home icon"></i>首页</a>
            <a href="#" th:href="@{/types/-1}" class="m-item item m-mobile-hide"><i
                    class="clone outline icon"></i>分类</a>
            <a href="#" th:href="@{/archives}" class="m-item item m-mobile-hide"><i class="clock icon"></i>时间轴</a>
            <a href="#" th:href="@{/music}" class="m-item item m-mobile-hide"><i class="music icon"></i>音乐盒</a>
            <a href="#" th:href="@{/message}" class="m-item item m-mobile-hide"><i class="book icon"></i>留言板</a>
            <a href="#" th:href="@{/friends}" class="m-item item m-mobile-hide"><i class="pencil alternate icon"></i>友人帐</a>
            <a href="#" th:href="@{/picture}" class="active m-item item m-mobile-hide"><i class="image icon"></i>照片墙</a>
            <a href="#" th:href="@{/about}" class="m-item item m-mobile-hide"><i class="info icon"></i>关于我</a>
            <!--</div>-->
            <div class="right m-item item m-mobile-hide">
                <form name="search" action="#" th:action="@{/search}" method="post" target="_blank">
                    <div class="ui icon transparent input m-margin-tb-tiny" style="color: white">
                        <input style="color: white" type="text" name="query" placeholder="Search...."
                               th:value="${query}">
                        <i onclick="document.forms['search'].submit()" class="search link icon"></i>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <a href="#" class="ui menu toggle black icon button m-right-top m-mobile-show">
        <i class="sidebar icon"></i>
    </a>
</nav>

<!--顶部图片-->
<div class="m-bg-type_outer" style="width: 100%;height: 40%">
    <img src="../static/images/picturebg.jpg" th:src="@{/images/picturebg.jpg}" alt="" class="ui m-bg image"
         style="width: 100%;height: 100%; opacity: 1">
    <div class="m-bg-class_coverPicture">
        <div class="ui container" style="position: relative ;bottom: -540px;">
            <div class="m-font-size-title m-right-bottom" align="center" style="font-family:'STXingkai'">照片墙</div>
            <div class="m-font-size-text-init-title m-margin-top" align="center">愿你走出半生，归来仍是少年</div>
        </div>
    </div>
</div>


<!--照片墙-->
<div id="picture-main">

    <article class="thumb" th:each="picture : ${pictures}">
        <div class="ma5-gallery">
            <div class="rthumbnail">
                <a href="../static/images/backimg1.jpg" th:href="@{${picture.pictureaddress}}">
                    <img class="picture-zmki_px" src="../static/images/backimg1.jpg"
                         th:src="@{${picture.pictureaddress}}">
                </a>
                <div class="m-picture-text" th:text="${picture.picturename}">起风了</div>
                <div class="rcaption">
                    <div style="font-size: large;" th:text="${picture.picturename}">起风了</div>
                    <div style="font-size: 16px" class="m-margin-top" th:text="${picture.picturetime}">2020-02-02 &nbsp;深圳</div>
                    <p style="font-size: 16px" th:text="${picture.picturedescription}">我曾难自拔于世界之大，也沉迷于其中梦话</p>
                </div>
            </div>
        </div>
    </article>

</div>


<!--置顶图标-->
<div id="toolbar" class="m-padded-tb-large m-fixed m-right-bottom">
    <a href="#" class="ui teal icon button"><i class="chevron up icon"></i> </a>
</div>

<!--底部栏-->
<footer class="ui inverted vertical segment m-padded-tb-massive m-opacity">
    <!--容器-->
    <div class="ui center aligned container">
        <div class="ui inverted divided stackable grid">
            <div class="four wide column">
                <div style="font-size: large;font-weight: bold"
                     class="ui inverted m-text-thin m-text-spaced m-margin-top-max">联系我
                </div>
                <!--<div id="newblog-container">-->
                <!--<div class="ui inverted link list" th:fragment="newblogList">-->
                <!--<a href="#" th:href="@{/blog/{id}(id=${blog.id})}" target="_blank" class="item m-text-thin" th:each="blog : ${newblogs}" th:text="${blog.title}">最新文章</a>-->
                <!--</div>-->
                <!--</div>-->
                <div class="ui inverted link list">
                    <div href="#" class="m-text-thin">Email：1305366530@qq.com</div>
                    <div href="#" class="m-text-thin">QQ：1305366530</div>
                </div>
            </div>

            <div class="four wide column">
                <div class="ui inverted link list">
                    <div class="item">
                        <!--微信二维码-->
                        <div style="font-size: large;font-weight: bold" class="ui inverted m-text-thin m-text-spaced ">
                            关注微信
                        </div>
                        <img src="../../static/images/weChatInn.jpg" th:src="@{/images/weChatInn.jpg}"
                             class="ui m-margin-top rounded image" alt="" style="width: 110px">
                    </div>
                </div>
            </div>

            <div class="four wide column">
                <div class="ui inverted link list">
                    <div class="item">
                        <!--微信二维码-->
                        <div style="font-size: large;font-weight: bold" class="ui inverted m-text-thin m-text-spaced ">
                            问题交流（QQ）
                        </div>
                        <img src="../../static/images/qqqun.jpg" th:src="@{/images/qqqun.jpg}"
                             class="ui m-margin-top rounded image" alt="" style="width: 110px">
                    </div>
                </div>
            </div>
            <!--博客运行时间统计-->
            <div class="four wide column">
                <div style="font-size: large;font-weight: bold"
                     class="ui inverted  m-text-thin m-text-spaced m-margin-top">小栈信息
                </div>
                <!--<p id="htmer_time" class="item m-text-thin"></p>-->
                <div id="blog-message">
                    <div class="ui inverted link list" style="align-content: center;margin-top: 10px"
                         th:fragment="blogMessage">
                        <div class="m-text-thin" style="text-align: left;margin-left: 75px;">
                            文章总数： <h2 class="ui orange header m-inline-block m-margin-top-null"
                                      style="font-size:medium;" th:text="${blogTotal}"> 2000 </h2> 篇
                        </div>
                        <div class="m-text-thin" style="text-align: left;margin-left: 75px">
                            访问总数： <h2 class="ui orange header m-inline-block m-margin-top-null"
                                      style="font-size:medium;" th:text="${blogViewTotal}"> 2000 </h2> 次
                        </div>
                        <div class="m-text-thin" style="text-align: left;margin-left: 75px">
                            评论总数： <h2 class="ui orange header m-inline-block m-margin-top-null"
                                      style="font-size:medium;" th:text="${blogCommentTotal}"> 2000 </h2> 条
                        </div>
                        <div class="m-text-thin" style="text-align: left;margin-left: 75px">
                            留言总数： <h2 class="ui orange header m-inline-block m-margin-top-null"
                                      style="font-size:medium;" th:text="${blogMessageTotal}"> 2000 </h2> 条
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui inverted section divider"></div>
        <div style="color: #F08047;margin-top: -18px" class="ui inverted m-text-thin m-text-spaced">我的清峰小栈已营业：<span
                id="htmer_time" class="item m-text-thin"></span></div>
        <a rel="nofollow" href="http://www.beian.miit.gov.cn" target="_blank">湘ICP备20004408号-1</a>
    </div>
    </div>

</footer>


<script src="https://cdn.jsdelivr.net/npm/jquery@3.2/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.js"></script>
<script src="../static/lib/picture/js/jquery.min.js" th:src="@{/lib/picture/js/jquery.min.js}"></script>
<script src="../static/lib/picture/js/jkresponsivegallery.js"
        th:src="@{/lib/picture/js/jkresponsivegallery.js}"></script>

<script>

    // $('#newblog-container').load(/*[[@{/footer/newblog}]]*/"/footer/newblog");

    $('#blog-message').load(/*[[@{/footer/blogmessage}]]*/"/footer/blogmessage");

    // 运行时间统计
    function secondToDate(second) {
        if (!second) {
            return 0;
        }
        var time = new Array(0, 0, 0, 0, 0);
        if (second >= 365 * 24 * 3600) {
            time[0] = parseInt(second / (365 * 24 * 3600));
            second %= 365 * 24 * 3600;
        }
        if (second >= 24 * 3600) {
            time[1] = parseInt(second / (24 * 3600));
            second %= 24 * 3600;
        }
        if (second >= 3600) {
            time[2] = parseInt(second / 3600);
            second %= 3600;
        }
        if (second >= 60) {
            time[3] = parseInt(second / 60);
            second %= 60;
        }
        if (second > 0) {
            time[4] = second;
        }
        return time;
    }

    function setTime() {
        /*此处为网站的创建时间*/
        var create_time = Math.round(new Date(Date.UTC(2020, 8, 25, 15, 15, 15)).getTime() / 1000);
        var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
        currentTime = secondToDate((timestamp - create_time));
        currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
            + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
            + '秒';
        document.getElementById("htmer_time").innerHTML = currentTimeHtml;
    }

    setInterval(setTime, 1000);


    $(function () {
        $('.rthumbnail').responsivegallery();
    });

    $('.menu.toggle').click(function () {
        $('.m-item').toggleClass('m-mobile-hide');
    });

</script>


</body>
</html>