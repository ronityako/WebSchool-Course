var educationURL = 'https://data.gov.il/api/action/datastore_search?resource_id=b2970446-98e0-483a-86c1-7ec00170b386&limit=400';
var eduIns = [];
fetch(educationURL).then(response => {
    if(response.status !== 200){
        console.log(`status error: ${response.status}`);
    }
    else{
        response.json().then( data => {
            eduIns = data.result.records
            showData(eduIns)
        })
    }
});

function showData(data){
    let htmlData = '';
    data.forEach(element => {
        htmlData += `<tr>
                        <td>${element.NAME}</td>
                        <td>${element.SETL_NAME}</td>
                    </tr>`
    });
    document.getElementById('tableBody').innerHTML = htmlData;
}

fetch('https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json').then(resp => {
    if(resp.status !== 200){
        console.log(`status error: ${resp.status}`);
    }
    else{
        resp.json().then(data => loadCities(data));
    }
})

function loadCities(data){
    let htmlSelect = '';
    data.forEach(element => {
        htmlSelect += `<option>${element.name}</option>`;
    });
    document.getElementById('mySelect').innerHTML = htmlSelect;
}

function showEduIns(){
    let mySelect = document.getElementById('mySelect');
    var chosenCity = mySelect.options[mySelect.selectedIndex].value;
    var filteredArr = eduIns.filter(ins => {return ins.SETL_NAME == chosenCity});
    showData(filteredArr);
}
