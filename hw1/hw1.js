let jsonData = 'data.json';
async function fetchJson() {
    const response = await fetch(jsonData);
    let result = await response.json();
    return result;
}
fetchJson().then(
    function(data) {
        let section2 = data["section2"];
        let section4 = data["section2"];

        document.querySelector('#s2text1').innerText = section2[0].text;
        document.querySelector('#s2text2').innerText = section2[1].text;
        document.querySelector('#s2text3').innerText = section2[2].text;
        document.querySelector('#s4text1').innerHTML = section4[0].text;
        document.querySelector('#s4text2').innerHTML = section4[1].text;
    }
)