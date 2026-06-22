const btn = document.getElementById("theme-btn");

btn.onclick = () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode"))
{
btn.innerHTML = "☀ Light Mode";
}
else
{
btn.innerHTML = "🌙 Dark Mode";
}

};
