//文章类别显示;

var baseUrl='http://localhost:8000/';
var category={
    show:function(callback){

        $.get(baseUrl+'admin/category_search',function(res){
            callback(res)
        })
        
    }
}