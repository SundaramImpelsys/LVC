function search_site() {
    var siteSelect = document.form.site;
    var url = siteSelect.options[siteSelect.selectedIndex].value;

    if (url === "") {
        alert("Please select a valid website.");
        return;
    }

    url = url + document.form.u_search.value;
    window.open(url, '_blank');
}