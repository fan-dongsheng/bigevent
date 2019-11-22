//文章类别显示;

var baseUrl='http://localhost:8000/';
var category={
    show:function(callback){

        $.get(APIURLS.categoryShow,function(res){
            callback(res)
        })
        
    },
    del:function(id,callback){

        $.post(APIURLS.categoryDel,{id:id},function(res){
            callback(res)

        })

    }

}