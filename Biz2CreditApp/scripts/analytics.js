(function(global){
    var AnalyticsModel,
        app = global.app = global.app || {};
    
    var productId = "f19ae305ccd24d2f92598ebd1b88ebf0",
        version   = "1.5";
    
    AnalyticsModel = kendo.data.ObservableObject.extend({
        
        checkMonitorstatus:function(){
           window.plugins.EqatecAnalytics.Factory.IsMonitorCreated(function(result){
               //console.log(result);
               if(result.isCreated === "true" || result.isCreated === true)
               {
                   console.log("Monitor is Available");
               }
               else
               {
                  //console.log("Sorry,Monitor is not created");
                   app.analyticsService.viewModel.monitorCreateWithCustom();
               }
           });
           
        },
        
        monitorCreateWithCustom:function(){
            var factory = window.plugins.EqatecAnalytics.Factory,
                monitor = window.plugins.EqatecAnalytics.Monitor;
            if (localStorage.getItem("isLoggedIn") !== null && localStorage.getItem("isLoggedIn") === true) {
                app.analyticsService.viewModel.setInstallationInfo( localStorage.getItem("userEmail"));
            }
                
            var settings = factory.CreateSettings(productId,version);
            settings.LoggingInterface = {
                LogError:function(errorMsg)
                {
                    console.log("Error :"+errorMsg);
                },
                LogMessage:function(msg)
                {
                    console.log(msg);    
                }
            };
            settings.TestMode = true;
            factory.CreateMonitorWithSettings(settings,
                function(){
                    console.log("Monitor is create");
                    app.analyticsService.viewModel.startMonitor();
                },
                function(err){
                    console.log("error creating monitor :"+err);
                }
            );
            //console.log(monitor);
        },
        
        startMonitor:function(){
            window.plugins.EqatecAnalytics.Monitor.Start(function(){
                        console.log("Monitor is start");
            });
        },
        
        stopMonitor:function(reason){
            console.log(reason);
            app.analyticsService.viewModel.trackFeature(reason);
            window.plugins.EqatecAnalytics.Monitor.Stop(function(reason) {
                console.log("Monitor stopped");
            });
            
        },
        
        setInstallationInfo:function(email){
           window.plugins.EqatecAnalytics.Monitor.SetInstallationInfo(email);
        },
        
        trackFeature:function(feature){
            console.log(feature);
            window.plugins.EqatecAnalytics.Monitor.TrackFeature(feature);
        }
    });
    app.analyticsService = {
        viewModel :new AnalyticsModel()
    };
})(window);