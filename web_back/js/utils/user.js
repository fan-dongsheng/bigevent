var baseUrl='http://localhost:8000/';

var user={

    login:function(username,password,callback){

        $.post(APIURLS.user_login,
        {
            //这里传的是用户输入的 数据,才能判断;用户自己的数据上传到服务器;请求;
            user_name:username,
            password:password,
        },
        function(res){
        console.log(res);
        //res返回 code  msg 

        callback(res);
      
        
        })

},
    logout:function(callback){

    $.post(APIURLS.user_logout,
    function(res){

        callback(res);

    console.log(res);
   
    
})

},
//获取用户信息;
    getInfo:function(callback){

        $.get(APIURLS.user_getInfo,
        function(res){

callback(res);

        })

    }





}