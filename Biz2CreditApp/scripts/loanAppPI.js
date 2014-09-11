(function (global) {
    var loanPIViewModal,
        app = global.app = global.app || {};

    loanPIViewModal = kendo.data.ObservableObject.extend({
		currentfid:(localStorage.getItem("fid") !== '') ?  localStorage.getItem("fid") : '',
        show:function(e) {
            e.sender.reload=false;
            e.view.reload=false;
             $(".km-scroll-container").css("-webkit-transform", "");
            $("#b2cApp3").validate({
                rules: {
                    per_income: {
                    	required:true,
                    	number: true
                    },
                    per_ome: {
                    	required:true,
                    	number: true
                    }
                },
                messages: {
                    per_income: {
                    	required: "This value is required",
                    	number: "Please enter digits only"
                	},
                	per_ome: {
                   	 required: "This value is required",
                   	 number: "Please enter digits only"
                    }
                },
                submitHandler: function(form) {
                return false;
                }

            });
            totaldivs = app.loanAppCI.viewModel.get("totownerDiv");
            d_divids = app.loanAppCI.viewModel.get("ownerdeleteIds");

            for(c=0;c<=totaldivs;c++){
                
                
                if(d_divids.indexOf(c.toString()) === -1)
                {
                    
                    if ($('#ownercscore'+c).length) {
                        
                        if(viewCModel.get('check_credit_score'+c)==='Y')
                        {
                            $('#check_credit_score'+c).attr('disabled', 'disabled');
                            $('#crdscorerNo'+c).hide();
                        }
                          
                    }
                    else
                    {
                    	app.loanAppPI.viewModel.addDynamicOwner(c);
                        html ='';
                    
        				dstyle = ' style="display:block;" ';
                        html += '<div id="ownercscore'+c+'" "'+dstyle+'" >';
                        html +='<div class="rwfil">';
                        html +='<div class="rw_lin clearfix">';
                        html +='<div  id="creditScoreTextOwn'+c+'" class="labl_tx2">Would you like us to check your credit score for free?*</div></div><div class="rw_lin clearfix opt lblBtM"> <span>';

						html +='<input type="checkbox" name="cscoreknown'+c+'" onclick="KnownCheckcscore('+c+',this);" data-bind="value:cscoreknown'+c+'" id="cscoreknown'+c+'" value="Yes">';
						html +=   '<label for="crdye">Do you know your credit score?</label>';
                        html +=   '<input name="check_credit_score'+c+'" onclick="getCheckcscore('+c+',this.value);"  style="display:none" data-bind="checked:check_credit_score'+c+'"  id="check_credit_score'+c+'" type="radio" value="Y" class="crYes'+c+'" >';
                        html +=   '<label for="crdye" style="display:none">Yes</label></span> <span>';

                        html += '<input name="check_credit_score'+c+'" style="display:none" onclick="getCheckcscore('+c+',this.value);"  data-bind="checked:check_credit_score'+c+'"  id="check_credit_score'+c+'" type="radio" value="N" class="crYes'+c+'">';
                        html +='<label for="crdno" style="display:none">No</label></span>';

                        html +='<input type="hidden" name="hownid'+c+'" data-bind="value:hownid'+c+'" id="hownid'+c+'" value=""></div><div class="rwfil lft"><div id="crdscorerYes'+c+'" class="showfilds_bx" style="display:none"><div class="rw_lin clearfix">';




                        html +='<select name="credittype'+c+'" onchange="getCscore('+c+',this.value);" data-bind="value:credittype'+c+'"  id="credittype'+c+'" class="IN3"  title="Select Personal Credit Score"  >';
                        html +='<option value="">Select Personal Credit Score</option>';

                        for(var i=500;i<=850;i++) {
                        	html +='<option value="'+i+'">'+i+'</option>';
                        }
                        html +='</select></div><div id="ifless'+c+'" class="rw_lin  clearfix" style="display:none"><h4>Reason for your low credit score:<span>*</span><em>(Check all that apply)</em></h4>';



                        html +='<ul class="low_creditop">';


                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" data-bind="" id="chk_reason'+c+'_14" value="14" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">A lot of inquiries</label></li>';


                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_4" value="4" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">High credit card balances due to business expenses</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_3" value="3" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">High credit card balances due to personal expenses</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_15" value="15" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">I dont know</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_7" value="7" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Incorrect items on credit report</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_8" value="8" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Judgments</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_2" value="2" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Late on credit cards</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_1" value="1" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Late on mortgage</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_10" value="10" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Late on personal loans</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_11" value="11" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">No credit history</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_5" value="5" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Personal bankruptcy more than 7 years ago</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_9" value="9" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Personally guaranteed a loan that defaulted</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_13" value="13" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Recent foreclosure</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_6" value="6" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Recent Personal Bankruptcy</label></li>';
                        html +='<li class="opt2"><input type="checkbox" name="chk_reason'+c+'[]" id="chk_reason'+c+'_12" value="12" class="reset chkreason'+c+'"><label for="chk_reason'+c+'">Tax liens</label></li>';
                        html +='</ul></div></div></div><div class="rwfil"><div id="crdscorerNo'+c+'" class="showfilds_bx" style="display:none">';

                        html +='<div class="rw_lin clearfix"> <span class="prg">Check your credit score for free from Transunion. An accurate credit score increases loan approval by 70%, gets lower interest rate and results in faster funding. The soft pull will not impact your credit score.';
                        html +='<a  href="<?php echo $mosConfig_live_site;?>/components/com_financialnew/transunion.php?userid=<?php echo $userid;?>&fid=<?php echo $row->fid;?>&cno='+c+'" class="ifr cboxElement">Click here to authorize and pull the credit score</a>.</span> </div>';
                        html +='</div></div></div></div>';
                        $('#dynamicDiv').append(html); 
                        app.loanAppPI.viewModel.addBindDynamicOwner(c);
                    }   
           	 } else
                {
                    $('#ownercscore'+c).remove();
                }
                
            }
			app.loanAppPI.viewModel.getCheckCreditScoreText();
            
        },
        getCheckCreditScoreText:function()
        { 

            strdeldivids = "";
            totaldivs = app.loanAppCI.viewModel.get("totownerDiv");
            deldivids = app.loanAppCI.viewModel.get("ownerdeleteIds");
            
            adelids = $("#aredyownerdeleteIds").val();
            

            if(deldivids !=='' && adelids !==''){
           	 strdeldivids = deldivids+","+adelids;
            }
            else if(deldivids !=='' && adelids === ''){
            	strdeldivids = deldivids;
            }
            else if(deldivids ==='' && adelids !== ''){
            	strdeldivids = adelids;
            } 
            else {
            	strdeldivids = "";
            }

            strdivids = '';         
			
            for( var c=0; c<=totaldivs; c++){
                
                
                if(d_divids.indexOf(c.toString()) === -1)
                {

                    $(".crYes"+c).rules("add", {
                    required: true,
                    messages: {
                    required: "This value is required",
                    }
                    });

                    $("#credittype"+c).rules("add", {
                    required: true,
                    messages: {
                    required: "This value is required",
                    }
                    });

                    $(".chkreason"+c).rules("add", {
                    required: true,                            
                    messages: {
                    required: "This value is required",
                    }
                    });
                    $(".chkreason"+c).rules("add", {
                    minlength: 1,                            
                    messages: {
                    minlength: "This value is required",
                    }
                    });

                    if(c === 0 ) {
                        creditScorenodel ="Would you like us to check "+ app.loanAppCI.viewModel.Owner_FirstName +"'s credit score for free?*";
                        $("#creditScoreTextOwn"+c).html(creditScorenodel);
                        $('#ownercscore'+c+'').show();
                    } else {
                        creditScorenodel ="Would you like us to check "+ viewCModel.get('OwnerFirstName'+c) +"'s credit score for free?*";
                        $("#creditScoreTextOwn"+c).html(creditScorenodel);
                        $('#ownercscore'+c+'').show();
                    }
                    if(strdeldivids !=='') {


                    }

                    else { 



                        // End Validation


                        /*var iscschk = $("#isCheckScore"+c).val();
                        if(iscschk === ''){
                        iscschk = $("input[name='check_credit_score"+c+"']:checked").val();                           
                        }
                        var dbcscore = $("#creditScore"+c).val();
                        var cmbcscore = $("#credittype"+c).val();
                        if(cmbcscore !==''){
                        cscore = cmbcscore;
                        } else {
                        cscore = dbcscore;
                        }
                        var rlscore = $("#reasonlscore"+c).val();                        

                        if(rlscore !==''){
                        $('#ifless'+c).show();
                        var reasonarr = rlscore.split(",");
                        var maxt = reasonarr.length;                            
                        for(var r=0; r<maxt; r++){
                        var rid = reasonarr[r];
                        $("#chk_reason"+c+"_"+rid).prop("checked", true);
                        }

                        } else {
                        $('#ifless'+c).hide();
                        }

                        if(iscschk ==='N'){
                        $("#check_credit_score"+c+"2").prop("checked", true);
                        $("#credittype"+c+" option[value='"+cscore+"']").prop('selected',true);
                        $('#crdscorerYes'+c).show();
                        $('#crdscorerNo'+c).hide();                             
                        if(cscore < 659){
                        $('#ifless'+c).show();
                        } else {
                        $('#ifless'+c).hide();
                        }
                        } 
                        else if(iscschk ==='Y'){
                        $("#check_credit_score"+c+"1").prop("checked", true);
                        $(".crYes"+c).prop('disabled', 'disabled');
                        $('#crdscorerYes'+c).hide();
                        $('#crdscorerNo'+c).hide();
                        $('#ifless'+c).hide();
                        }
                        else {                            
                        $("#check_credit_score"+c+"1").prop("checked", false);
                        $("#check_credit_score"+c+"2").prop("checked", false);
                        $('#crdscorerYes'+c).hide();
                        $('#crdscorerNo'+c).hide();
                        $('#ifless'+c).hide();                         
                        }   */


                    }
                }

            }
        },
        addDynamicOwner:function(num)
        {
			viewCModel['cscoreknown'+num] ='';
            viewCModel['check_credit_score'+num] ='N';
            viewCModel['credittype'+num] ='';
            viewCModel['chk_reason'+num] =[];
        },
        addBindDynamicOwner:function(num)
        {
            kendo.bind($("#cscoreknown"+num), viewCModel);
            kendo.bind($(".crYes"+num), viewCModel);
            kendo.bind($("#credittype"+num), viewCModel);
            

            
        },
        deleteOutDebtVar:function(num)
        {
            
            delete viewCModel['check_credit_score'+num];
            delete viewCModel['credittype'+num];
        },
        loanAppPIpage:function(e)
        {
            dataParam =  {};
            if(e.sender.element.context.dataset.name === "Next")
            {
                var status = $("#b2cApp3").valid();
                if(status === false)
                return status;  
                dataParam['personal_act']='Next';
            }
            else
            {
            	dataParam['personal_act']='Save & Exit';
            }

            var that = this;
            var per_income = that.get("avg_month_income");
            var per_ome	= that.get("avg_month_expense");
            dataParam['apiaction']	= 'loanappstep3';
            dataParam['per_income'] = per_income;
            dataParam['per_ome']	= per_ome;
            dataParam['cust_id'] = localStorage.getItem("userID");
            dataParam['fid'] = localStorage.getItem("fid");
			dataParam['type'] = '';
			dataParam['frmname'] = 'b2cApp3';
            //owndivdts:success#0:18967#1:19026
            
            totaldivs = app.loanAppCI.viewModel.get("totownerDiv");
            d_divids = app.loanAppCI.viewModel.get("ownerdeleteIds");
            owndivdtsStr ='success';
            	for(var c=0; c<=totaldivs;c++)
                {
                    if(d_divids.indexOf(c.toString()) === -1)
                    {  
                       if(viewCModel.get('check_credit_score'+c)==='Y')
                        {
                            dataParam['check_credit_score'+c] = 'Y';
                            
                        }
                        else
                        {
                            dataParam['check_credit_score'+c] = 'N';
                            var check_value = [];
                            $("#ownercscore"+c+" .reset:checked").each(function() {
                            	check_value.push($(this).val());
                            
                            });
                            
                            if(viewCModel.get('cscoreknown'+c) === '')
                            {
                                dataParam['chk_reason'+c] = '';
                                dataParam['credittype'+c] = 600;
                            }
                            else
                            {
                                dataParam['chk_reason'+c] = check_value;
                                dataParam['credittype'+c] = viewCModel.get('credittype'+c);
                                if(viewCModel.get('credittype'+c)>=659)
                                {
                                    dataParam['chk_reason'+c]='';
                                }
                                
                            }
                            dataParam['cscoreknown'+c] = viewCModel.get('cscoreknown'+c);   
                            
                        }
                        if(c ===0)
                        {
                            owndivdtsStr += '#'+c+':'+app.loanAppCI.viewModel.own_id0;
                        }
                        else
                        {
                            owndivdtsStr += '#'+c+':'+viewCModel.get('own_id'+c);
                        }
                    }
                }
            dataParam['owndivdts'] = owndivdtsStr;
            app.loginService.viewModel.showloder();
            var dataSource = new kendo.data.DataSource({
                transport: {
                read: {
                    url: "http://sandbox.biz2services.com/mobapp/api/loanapp",
                    type:"POST",
                    dataType: "json", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                    data: dataParam
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

                var data = this.data();
                app.loginService.viewModel.hideloder();
                if(data[0]['results']['faultcode'] === 1 || data[0]['results']['faultcode'] === "1")
                {
                    if(dataParam['personal_act'] === "Next")
                    {
                        $msg= "Personal Information submitted successfully";
                        app.loginService.viewModel.mobileNotification($msg,'info');
                        app.loanAppPI.viewModel.ManageOwnerHideenField(dataParam);
                        apps.navigate('views/loanAppFP.html');
                    }
                    else
                    {
                    	$msg= "Personal Information submitted successfully";
                        app.loginService.viewModel.mobileNotification($msg,'info');
                        app.loansetting.viewModel.resetLoanAppBIForm();
                        app.loanAppCI.viewModel.resetLoanAppCIForm();
                        app.loanAppPI.viewModel.resetLoanAppPIForm(); 
                        apps.navigate('#tabstrip-home');
                    }

                }
                else if(data[0]['results']['faultcode'] === 0 || data[0]['results']['faultcode'] === "0")
                {
                    $msg= "Personal Information not submitted successfully.";
                    app.loginService.viewModel.mobileNotification($msg,'info'); 
                    return;
                }
                else if(data[0]['results']['faultcode'] === 3 || data[0]['results']['faultcode'] === "3")
                {
                    $msg= "Please enter all fields.";
                    app.loginService.viewModel.mobileNotification($msg,'info');
                    return;
                }
                else{
                    $msg= "Server not responding properly,Please try again";
                    app.loginService.viewModel.mobileNotification($msg,'info');
                    return;
                }            

                });
           
        },
        ManageOwnerHideenField:function(dataParam)
        {
            
            totaldivs = app.loanAppCI.viewModel.get("totownerDiv");
            d_divids = app.loanAppCI.viewModel.get("ownerdeleteIds");
            for(var c=0; c<=totaldivs;c++)
                {
                    if(d_divids.indexOf(c.toString()) === -1)
                    {  
                        if(c===0)
                        {
                        	app.loanAppCI.viewModel.isCheckScore0=dataParam['check_credit_score'+c];
                        	app.loanAppCI.viewModel.creditScore0=dataParam['credittype'+c];
                        	app.loanAppCI.viewModel.reasonlscore0=dataParam['chk_reason'+c];
                        }
                        else
                        {
                            viewCModel['isCheckScore'+c] =dataParam['check_credit_score'+c];
                            viewCModel['creditScore'+c] =dataParam['credittype'+c];
                            viewCModel['reasonlscore'+c] =dataParam['chk_reason'+c];
                        }

                    }
                }
             
        },
        resetLoanAppPIForm:function()
        {
        	var that=this;
        	that.set("avg_month_income",'');
        	that.set("avg_month_expense",'');
            viewCModel = kendo.observable();
        }
    });
   
    app.loanAppPI = {
        viewModel: new loanPIViewModal()	
    };
})(window);
