document.addEventListener("keydown", (e) => {
  if (e.key === "PageUp") {
	console.log('debug enabled!')
	document.getElementById('hackindicator').style.display='block';
    setpoints(27632763);
  }
});
