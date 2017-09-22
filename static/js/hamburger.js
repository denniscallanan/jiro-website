function openMenu()
{
	navMenu.classList.add("open");
	navMenuBlack.classList.add("visible");
}

function closeMenu()
{
	navMenu.classList.remove("open");
	navMenuBlack.classList.remove("visible");
}

function toggleMenu()
{
	if (navMenu.classList.contains("open"))
	{
		closeMenu();
	}
	else
	{
		openMenu();
	}
}

navMenuBlack.onclick = closeMenu;