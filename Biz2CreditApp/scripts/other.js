/*

updateMatches:function(e)
        {
            console.log("update");
           
         console.log(e);
            
            if(e.target.innerText)
            {
                //fid = updateData;
                //console.log("from backbutton"+fid);
                console.log("from loan app");
            }
            else
            {
               // fid = updateData.data['fid'];
               // console.log("from loan app"+fid);
                var fid = e;
                console.log("from back button");
                app.loanApp.viewModel.updateMatchesByDocsAttach(fid);
                
            }
            console.log("ffff"+fid);
            
            if(!window.connectionInfo.checkConnection()){
            	navigator.notification.confirm('No Active Connection Found.', function (confirmed) {
        			if (confirmed === true || confirmed === 1) {
        				app.loanApp.viewModel.updateMatches();
        			}

        		}, 'Connection Error?', 'Retry,Cancel');
            }
            else
            {
                var fid = e.data['fid'];
                app.loginService.viewModel.showloder();  
                var dataSource = new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: localStorage.getItem("urlMobAppApiLoan"),
                            type:"POST",
                            dataType: "json", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                            data: { apiaction:"getmatchlists",cust_id:localStorage.getItem("userID"),fid:fid} // search for tweets that contain "html5"
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
                    apps.hideLoading();
                    if(data[0]['results']['faultcode']===1 && data[0]['results']['faultmsg']==='success')
                    {
                        console.log(data);
                        app.homesetting.viewModel.setMatches(data['0']['results']['matchrows']);
                        apps.navigate("#views/matches.html");
                    }
                });
                
            }
        },
        updateMatchesByDocsAttach:function(fid)
        {
           // console.log(e);
            if(!window.connectionInfo.checkConnection()){
            	navigator.notification.confirm('No Active Connection Found.', function (confirmed) {
        			if (confirmed === true || confirmed === 1) {
        				app.loanApp.viewModel.updateMatches();
        			}

        		}, 'Connection Error?', 'Retry,Cancel');
            }
            else
            {
                app.loginService.viewModel.showloder();  
                var dataSource = new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: localStorage.getItem("urlMobAppApiLoan"),
                            type:"POST",
                            dataType: "json", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                            data: { apiaction:"getmatchlists",cust_id:localStorage.getItem("userID"),fid:fid} // search for tweets that contain "html5"
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
                    apps.hideLoading();
                    if(data[0]['results']['faultcode']===1 && data[0]['results']['faultmsg']==='success')
                    {
                        console.log(data);
                        app.homesetting.viewModel.setMatches(data['0']['results']['matchrows']);
                        apps.navigate("#views/matches.html");
                    }
                });
                
            }
        }


*/