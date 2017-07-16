$('document').ready(function(){

//----------------------- RESIZE------------------------

$(window).resize(function(){
	if(screen.width > 676 && ($('.header_menu').prop("style").transform == "translateX(-100%)"))
{$('.header_menu').removeAttr("style")}
})
	
// ---------------TOP BAR MENU----------------------
var isTopBar = true;
$('.top_bar_control').click(function(event){
event.preventDefault();
if(isTopBar) {
	$('.top_bar').css({transform:"translateY(-46px)"});
	$('.top_bar_control').css({transform:"translateY(-46px)"});
	$('.top_bar_control .plus').css({display:"block"});
	isTopBar = false;
	return;
}

if(!isTopBar) {
	$('.top_bar').css({transform:"translateY(0)"});
	$('.top_bar_control').css({transform:"translateY(0)"});
	$('.top_bar_control .plus').css({display:"none"});
	isTopBar = true;
	return;
}

})
// ---------------DROP MENU----------------------
$('#targetDropMenu').click(function(){
event.preventDefault();
$('.dropdown').slideToggle(400);	
})

$(window).click(function(event){
if(event.target.id !== 'targetDropMenu'){
$('.dropdown').slideUp(400);
}
})


// ----------------SIDE MENU----------------------

var isSideMenu = false;
$('.min_menu').click(function(event){
event.preventDefault();
if(isSideMenu ) {
	$('.header_menu').css({transform:"translateX(-100%)"});
	$('.min_menu').css({transform:"translateX(0)"});
	isSideMenu = false;
	return;
}
if(!isSideMenu ) {
	$('.header_menu').css({transform:"translateX(0)"});
	$('.min_menu').css({transform:"translateX(150px)"});
	isSideMenu = true;
	return;
}

})








})