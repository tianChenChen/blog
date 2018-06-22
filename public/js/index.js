$(function(){
    var $loginBox = $('#loginBox')
    var $registerBox = $('#registerBox')
    
    //切换到注册面板
    $loginBox.find('a.colMint').on('click',function(){
        $registerBox.show()
        $loginBox.hide()
    })

    // 切换到登录面板
    $registerBox.find('a.colMint').on('click',function(){
        $registerBox.hide()
        $loginBox.show()
    })

    // 注册
    $registerBox.find('button').on('click',function(){
        // ajax提交请求
        $.ajax({
            type: 'post',
            url:'/api/user/register',
            data:{
                username: $registerBox.find('[name="username"]').val(),
                password: $registerBox.find('[name="password"]').val(),
                repassword: $registerBox.find('[name="repassword"]').val(),
            },
            dataType:'json',
            success:function(result){
                console.log(result)
            }
        })
    })
})