let notecontent = localStorage.getItem("notecontent") || ["NOTE #1", "NOTE #2", "NOTE #3"]
for (let i = 0; i < notecontent.length; i++) {
    note.innerHTML += "<input type=\"checkbox\" name=\"note" + i + "\" id=\"note" + i + "\"><label for=\"note" + i + "\">" + notecontent[i] + "</label><br><div class=\"line\"></div><br>"
}