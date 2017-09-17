function toggleMenu()
{
	if (navMenu.classList.contains("open"))
	{
		navMenu.classList.remove("open");
		navMenuBlack.classList.remove("visible");
	}
	else
	{
		navMenu.classList.add("open");
		navMenuBlack.classList.add("visible");
	}
}

function menuClick()
{
	navMenu.classList.remove("open");
	navMenuBlack.classList.remove("visible");
}

navMenuBlack.onclick = function()
{
	navMenu.classList.remove("open");
	navMenuBlack.classList.remove("visible");
}