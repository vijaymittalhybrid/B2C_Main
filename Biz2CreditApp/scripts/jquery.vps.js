// jQuery animation by Studio Brahma 

$(document).ready(function(){

//  search	
$('.srh_men  .scmsk').mouseover(function(){     $("#log_BX").hide(); 	$("#socl_BX").hide(); 	$("#srch_BX").slideToggle(300); 	$('.log_men').removeClass("act"); 	$('.soc_men').removeClass("act");  	$('.srh_men').toggleClass( "act" ); 	$('.soc_men .scmsk').show(); 	$('.srh_men .scmsk').hide(); 	$('.log_men .scmsk').show(); });  
$('#srch_BX .clsmnub').click(function(){ 	$("#srch_BX").slideToggle(300);   $('.log_men').removeClass("act");   $('.srh_men').removeClass("act");    $('.soc_men').removeClass("act");    $('.soc_men .scmsk').show();   $('.srh_men .scmsk').show();   $('.log_men .scmsk').show(); }); 

    
 //$(".reld_info").tooltip({ effect: 'slide', position: 'bottom center'});
  //$(".que_hint").tooltip({ effect: 'slide', position: 'bottom center'});
 
 // menu 
$('.subms').hide();
$('.subnv ').click(function(){	$(".subms").slideToggle(300);  	$('.subnv').toggleClass( "act" );  });

// application
$('.montrnt.yes').hide();
$('.crYes ').click(function(){	$('.montrnt').hide(); $('.montrnt.yes').show();   });
$('.crNo ').click(function(){	$('.montrnt').show(); $('.montrnt.yes').hide();   });
}); 

// tipsy
 $(function() {
	  $('.inpbf').tipsy({gravity: 'se'});
	   $('.IN1b').tipsy({gravity: 'se'});
	   $('.IN3').tipsy({gravity: 'se'});
	  $('.IN3b').tipsy({gravity: 'se'});
	   $('.inpbf_sl').tipsy({gravity: 'se'});
	    $('.IN1').tipsy({gravity: 'se'});
		$('.IN5').tipsy({gravity: 'se'});
		$('.IN6').tipsy({gravity: 'se'});
		$('.IN4').tipsy({gravity: 'se'});
		
		
  });

$('.own2').hide();
$('.admr').click(function(){	$('.own2').show();   });


/*--------------function for select--------------*/

$('#count_number').change(function(){
    var sel_value=$(this).val();
    
if(sel_value<5)
{
   $('#dis_count').show();
}
else{
   $('#dis_count').hide();
}
})

/*--------------function for select end-------------*/
/*--------------function for radio--------------*/
$('.se_radio').click(function(){
    var sel_value=$(this).val();
if(sel_value===1){
   $('#credit_show').show();
}
else{
   $('#credit_show').hide();
}
})


// credit card accpted

$('.crditaccep').click(function(){
    alert('debug');
    var sel_value=$(this).val();
if(sel_value==1){
   $('#credit_show').show();
}
else{
   $('#credit_show').hide();
}
})

// outtand dept

$('.outDebt').click(function(){
    var sel_value=$(this).val();
if(sel_value==1){
   $('#outsta_debt').show();
}
else{
   $('#outsta_debt').hide();
}
})

// outtand dept

$('.businf').click(function(){
    var sel_value=$(this).val();
if(sel_value==1){
   $('#busInfobx').show();  $('#busInfobx2').hide();
}
else{
   $('#busInfobx2').show(); $('#busInfobx').hide();
}
})


// credi card proc
$('#creditcardproc').change(function(){
    var sel_value=$(this).val();
if(sel_value=='')
{
   $('.mercPr').hide();
}
else{
   $('.mercPr').show();
}
})


// credit score yes/no

$('.crYes').click(function(){
    var sel_value=$(this).val();
if(sel_value==1){
   $('#crdscrYes').hide();
   $('#crdscrNo').show();
}
else{
   $('#crdscrYes').show();
   $('#crdscrNo').hide();
}
})

/*// if less than 7000
$('#credittype').change(function(){
    var sel_value=$(this).val();
    
if(sel_value<700)
{
	jQuery.colorbox({href:'https://www.biz2credit.com/components/com_financialnew/betterqualified.php', iframe:true, open:true, width:"50%", height:590})
   $('#ifless700').show();
}
else{
   $('#ifless700').hide();
}
})*/