$(function () {
    $('.link-rules').click(function () {
        lightBtn()
    })
})

videoShow('video1')

function videoShow(id) {//视频 不能快进 观看视频结束后 触发事件
    var video = document.getElementById(id);
    var sym;//快进
    setInterval(function () {
        var time = video.currentTime
        if (time - sym > 1) {
            video.currentTime = sym

        }
        sym = video.currentTime
    }, 500);
    //监听 视频结束时 触发
    video.addEventListener('ended', function () {
        showQuestion()// 观看悦动视频后 回答问题
    }, false);
}
function lightBtn() {
    $.myLight({
        message: '一起行动，</br>为中国加油！',
        callback:function () {
            $('.myModa .mylight').css({//回答问题背景色 字体颜色
                'background': '#f00',
                'color': '#fff'
            })
            alert('送你一朵小花')
            // $('.myModa').remove();
            // $(this).parents('myModa').remove()
        }
    })
}
function showQuestion(){
    $.myQuestion({//观看小视频 回答问题
        title: '确认框提示标题',
        message: '确认框提示内容',
        btn1: '10分钟',
        btn2: '30分钟',
        callback: function () {
            alert('回答错误')
            //问题回答错误
        },
        callback2: function () {
            alert('奖励一朵小花花')
            //问题回答正确 接口
        }
    })
    $('.myModa .myAlertBox .btn').css({//回答问题背景色 字体颜色
        'background': '#f00',
        'color': '#fff'
    })
}


