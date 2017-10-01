function scrolly()
{
	var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	var header = document.getElementsByTagName("header")[0];

	if (scroll > 80)
	{
		header.classList.add("scrolled");
	}
	else
	{
		header.classList.remove("scrolled");
	}
}

document.body.onscroll = scrolly;
window.addEventListener("load", onscroll);