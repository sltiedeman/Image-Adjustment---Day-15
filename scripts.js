$(window).load(function(){

	var maxHeight = 0;
	var imageHeight = 0;
	
	//Go through each image and find the max height of all the images
	$("img").each(function(){
		imageHeight = $(this).height();
		if(imageHeight > maxHeight){
			maxHeight = imageHeight;
		}	
	});

	//Set the div containing the images to the max height
	$('.home-image-wrapper').css("height", maxHeight);

	//loop throught all the images and establish how much padding to add to
	//make the images vertically aligned.
	$("img").each(function(){
		var paddingAmount;
		imageHeight = $(this).height();
		if(maxHeight > imageHeight){
			paddingAmount = Math.floor((maxHeight-imageHeight)/2);
			paddingAmount = paddingAmount +'px';
			$(this).css("padding-top", paddingAmount);
		}
	})
	
	//establish the max height of the divs containing text
	var imageHeight = 0;
	var maxHeight = 0;
	$(".product-table").each(function(){	
		imageHeight = $(this).height();
		if(imageHeight > maxHeight){
			maxHeight = imageHeight;
		}
	});

	//add a little height to give padding for the text
	maxHeight +=10;

	//set the text containing div to a height of maxHeight
	$('.product-table').css("height", maxHeight);



	})