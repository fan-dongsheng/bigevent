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

    },
    add:function(name,slug,callback){

        $.post(APIURLS.categoryAdd,{"name":name,"slug":slug},function(res){
            callback(res);
        })
    },
    edit:function(id,name,slug,callback){
        $.post(APIURLS.categoryEdit,{'id':id,'name':name,'slug':slug},function(res){

            callback(res);
        })
    }

}