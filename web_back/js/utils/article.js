var article={

    show:function(obj,callback){
//传入obj参数
        $.get(APIURLS.article_show,{'page':obj.page,
                                    'type':obj.type ,  
                                    'state':obj.state,  },function(res){


            
            callback(res)
        })
    }


}