define([],function(){
      var api="http://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/"
      var apiURLlATEST=api+"latest-deals.php"

       function loadMore(){
          return fetch(apiURLlATEST)
          .then(function(res){
              return res.json();
          }).then(function(data){
               console.log(data)
          })
      }
      return{
          loadMore:loadMore
      }
})