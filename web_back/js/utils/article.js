var article={

    show:function(obj,callback){
//传入obj参数
        $.get(APIURLS.article_show,{'page':obj.page,
                                    'type':obj.type ,  
                                    'state':obj.state,  },function(res){


            
            callback(res)
        })
    },
    del:function(id,callback){

        $.get(APIURLS.article_del,{id:id},function(res){

callback(res)
        })
    }



}