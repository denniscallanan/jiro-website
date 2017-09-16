function scrollToElement(query)
{
	console.log("!!!")
	document.querySelector(query).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

document.body.onscroll = function()
{
	var scroll = document.body.scrollTop;
	var header = document.getElementsByTagName("header")[0];
	console.log(scroll)

	if (scroll > 320)
	{
		header.classList.add("scrolled");
	}
	else
	{
		header.classList.remove("scrolled");
	}

	if (scroll > 460)
	{
		downloadButton.classList.add("selected");
		homeButton.classList.remove("selected");
	}
	else
	{
		downloadButton.classList.remove("selected");
		homeButton.classList.add("selected");
	}
}

window.addEventListener("load", onscroll);