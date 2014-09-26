(function (global) {
    var loanApplicationViewModal,
        app = global.app = global.app || {};

    loanApplicationViewModal = kendo.data.ObservableObject.extend({
        username: "",
        show:function()
        {
        $("#tabstrip").kendoTabStrip({
                    animation:  {
                        open: {
                            effects: "fadeIn"
                        }
                    }
                });
        }
    });
   
    app.loanApplication = {
        viewModel: new loanApplicationViewModal()	
    };
})(window);
