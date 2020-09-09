&('.form').submit(function(){
	var name= $('.name').val();
	if (name == "") {
		alert("enter Name plese...");
		return false;
	}
});