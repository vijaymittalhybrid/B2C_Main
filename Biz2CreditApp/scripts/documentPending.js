(function(global){
    var DocumentPendingModel,
        app = global.app = global.app || {};
    
    DocumentPendingModel = kendo.data.ObservableObject.extend({
        
        appfid:"",
        
        show:function(e)
        {
            console.log("document pending");
            console.log(e);
            /*Upload Document Toggle*/
            $(".documentList .wrap-content h2").unbind('.myPlugin');
            $(".documentList .wrap-content .row .name a").unbind(".myPlugin");
            
            $(".documentList .wrap-content h2").on("click.myPlugin", function() {                                    
                $(this).next(".rows").slideToggle();
                $(this).toggleClass("off");
            });

            $(".documentList .wrap-content .row .name a").on("click.myPlugin", function() {
                $(this).parents('.row').next(".filesBlock").slideToggle();	
            });
          
        },
        UploadExisting:function(e)
        {
            console.log(e);
            apps.navigate("views/document_attach.html");
        },
        gobackMatchesPage:function()
        {
            var appfid = sessionStorage.getItem("sessionMatchFID");
            console.log("hidden fid : "+appfid);
            app.loanApp.viewModel.updateMatchesByBackHandling(appfid);
        }
    });
    app.documentService ={
        viewModel:new DocumentPendingModel()
    };
})(window);