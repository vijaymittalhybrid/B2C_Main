(function (global) {
    var loanAppViewModal,
        app = global.app = global.app || {};

    loanAppViewModal = kendo.data.ObservableObject.extend({
        username: "",
        postApp:0,
        endedApp:0,
        savedApp:0,
        loanApa:0,
        
        show:function()
        {
            $("#tabstrip").kendoTabStrip({
                        animation:  {
                            open: {
                                effects: "fadeIn"
                            }
                        }
                    });
            
        
            app.loginService.viewModel.showloder();  
            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: 'http://sandbox.biz2services.com/mobapp/api/loanapp',
                        type:"POST",
                        dataType: "json", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                        data: { apiaction:"manageapp",cust_id:localStorage.getItem("userID")} // search for tweets that contain "html5"
                    }
                    
                },
                schema: {
                    data: function(data)
                    {
                    	return [data];
                    }
                },
                error: function (e) {
                	apps.hideLoading();
                	navigator.notification.alert("Server not responding properly.Please check your internet connection.",
                	function () { }, "Notification", 'OK');
                },
            });
            dataSource.fetch(function(){
                var that = this;
                var data = that.data();
                app.loginService.viewModel.hideloder(); 
                if(data[0]['results']['faultcode']===1 && data[0]['results']['faultmsg']==='success')
                {
                     app.loanApp.viewModel.setManageStatus(data[0]['results']['results']);
                }
                app.loanApp.viewModel.setManageStatus(data);
                console.log(data[0]['results']);
                 

            });
       },
        applyFreshLoan:function(e)
        {
          app.loginService.viewModel.application(e);  
        },
        setManageStatus:function(data)
        {
            var that = this;

            that.set('postApp','');
            that.set('endedApp','');
            that.set('savedApp','');
            that.set('loanApa','');
            
            
            
            
          
        },
        
    });
   
    app.loanApp = {
        viewModel: new loanAppViewModal()	
    };
})(window);
