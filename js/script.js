 ////////////////// - initiate - //////////////////
var todo = function (title) {
            this.title = title;
        }
        
        var todolist = [];
        var todocontainer = document.getElementById('tdcontain');


 ////////////////// - make container ul sortable - //////////////////
        var sortable = Sortable.create(todocontainer,{
            animation: 150,
            
            onEnd: function (/**Event*/evt) {
                
                sortPlans();
	    },
            
        });

        
        
        
    


         ////////////////// - load items into container - //////////////////
      function loadPlans(){
          
          $('#tdcontain').empty();
          
            todolist.forEach(function(item, index){
                
                var todohtml = `<li class="todo mx-auto rounded row align-content-center pl-3 pt-2 mb-3" id="${index}">
                  <p class="text-capitalize h-100 indx">${index + 1} -</p>
                  <p class="text-capitalize h-100 ml-2 tdtitle">${item.title}</p>
                  <button class="btn ml-auto h-100 btn-dark mr-2 dlt-btn" onClick="deletPlan(${index})">delete</button>
                  </li> `
                
                $('#tdcontain').append(todohtml);
                
            })
          
          // check if there are any item. if so, hide nothing text
          if($('#tdcontain').children().length > 0){
                $('#nothing').hide();
             }else{
                 $('#nothing').show();
             }
            
                      
      }
        
    
          
     
     ////////////////// - add new plan when add button clicked - //////////////////
    function addPlan(title){
        
         var inputval = $('#input').val()
         
          if(inputval !== null && inputval !== '' && typeof(inputval) !== null && typeof(inputval) !== undefined){
              var obj = new todo(inputval);
              todolist.push(obj);
              loadPlans();
              $('#input').val('');
              $('#input').focus();
              
          } else {
              niceAlert('todo form can not be empty!');
          }
          
    }
        
        
     ////////////////// - alert if input is empty - //////////////////
     function niceAlert(atitle){
         
         if($('.alert-contain').children().length === 0){
             var alerthtml = `<div class="alert alert-danger alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            ${atitle}
            </div>`
         
            $('.alert-contain').append(alerthtml);
         }
         
         
         
     }
        
 ////////////////// - delete item from array - //////////////////
    function deletPlan(id){
              todolist.splice(id, 1);
              loadPlans();
          }



 ////////////////// - rebuild array to sort the array after dragging an item - //////////////////
    function sortPlans(){
        todolist = [];
        $('#tdcontain').children().each(function (index){
            var titlee = $(this).children()[1].innerHTML;
            
            var obj = new todo(titlee);
            todolist.push(obj);
            console.log(titlee);
        });
        
        loadPlans();
        
    }