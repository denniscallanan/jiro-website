function toggleMenu()
{
	if (navMenu.classList.contains("open"))
	{
		navMenu.classList.remove("open");
	}
	else
	{
		navMenu.classList.add("open");
	}
}

function menuClick()
{
	navMenu.classList.remove("open");
}