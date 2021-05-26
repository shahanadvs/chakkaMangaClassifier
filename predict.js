
//Loading model
const model = await tf.loadLayersModel('model_files/model.json');

//Taking image from URL
$("#url-holder").change(function(){
	let value = $("#url-holder").val();
	$("#image-display").attr("src", value );
	$("#prediction-list").empty();
});

//Upload button activating
$('#button123').click(function(){
    $('#upload-btn').click();
});

//Uploading image
$("#upload-btn").change(function(e){
	let reader = new FileReader();
	reader.onload = function () {
		let dataURL = reader.result;
		$("#image-display").attr("src", dataURL);
		$("#prediction-list").empty();
	}
	let fileName = e.target.files[0].name;
	$("#url-holder").val(fileName)
	let file = $("#upload-btn").prop('files')[0];
	reader.readAsDataURL(file);
});


//Predicting the image
$("#predictBtn").click(async function () {
	const image = $('#image-display').get(0);
	const pre_image = tf.browser.fromPixels(image).resizeNearestNeighbor([150,150]);
	const axis = 0;
	const post_image= pre_image.expandDims(axis);
	const predict_result = await model.predict(post_image).arraySync(); 
	
	if (predict_result == 1){
		$("#predictionResult").text("Seems like its a Manga!!!");
   }else if(predict_result==0) {
	   
	$("#predictionResult").text("Seems like its a Chakka!!!");
   }else{
	$("#predictionResult").text("Something went wrong...");
   }
	
	
});
