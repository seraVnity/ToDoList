
//check off specific todo VERSION 2 with class in css
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
})

//delete the todos from the list by clicking X
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

//add new todos
$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		//extract the value
		var todoText = $(this).val();
		$(this).val("");
		//add it as a new li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
})

$("#toggle-form").click(function () {
	$("input[type='text']").fadeToggle();
});
