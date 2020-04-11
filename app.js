//let covid = fetchData();
let tms;
const
    getDomId = ele => document.getElementById(ele),
    report = getDomId('covid'),
    active = getDomId('actv'),
    done = getDomId('done'),
    recoverd = getDomId('recoverd'),
    refresh = getDomId('refresh'),
    reportUS = getDomId('covidUS'),
    province = getDomId('province'),
    doneUS = getDomId('doneUS'),
    recoverdUS = getDomId('recoverdUS'),
    refreshUS = getDomId('refreshUS'),
    reportDE = getDomId('covidDE'),
    doneDE = getDomId('doneDE'),
    recoverdDE = getDomId('recoverdDE'),
    activeDE = getDomId('actvDE'),
    refreshDE = getDomId('refreshDE'),
    lastUpdate = getDomId('upd')
    

//India
function fetchData() {
    return fetch("https://covid19.mathdro.id/api/countries/in/confirmed")
        .then(data => data.json())
        .then(
            data => {
                return report.textContent = `Confirmed : ${data[0].confirmed}`,
                recoverd.textContent = `Recovered : ${data[0].recovered}`,
                active.textContent = `Active : ${data[0].active}`,
                done.textContent = `Dead: ${data[0].deaths}`  
            })
}
// refresh.addEventListener('click', fetchData)


//USA
function fetchDataUS() {
    return fetch("https://covid19.mathdro.id/api/countries/us/confirmed")
        .then(data => data.json())
        .then(
            data => {
                return province.textContent = `Province : ${data[0].provinceState}`,
                    reportUS.textContent = `Confirmed : ${data[0].confirmed + data[1].confirmed + data[2].confirmed + data[3].confirmed}`,
                    doneUS.textContent = `Dead: ${data[0].deaths + data[1].deaths + data[2].deaths + data[3].deaths}`,
                    recoverdUS.textContent = `Active : ${data[0].active + data[1].active + data[2].active + data[3].active}`
            })
}

// refreshUS.addEventListener('click', () => {
//     return fetchDataUS()
// })

//DE
function fetchDataDE() {
    return fetch("https://covid19.mathdro.id/api/countries/de/confirmed")
        .then(data => data.json())
        .then(
            data => {
                tms = data[0].lastUpdate;
                const updtd = new Date(tms)
                return reportDE.textContent = `Confirmed : ${data[0].confirmed}`,
                    doneDE.textContent = `Dead: ${data[0].deaths}`,
                    recoverdDE.textContent = `Recovered : ${data[0].recovered}`,
                    activeDE.textContent = `Active : ${data[0].active}`,
                    lastUpdate.textContent = `Last Update : ${updtd}`
            })
}

refreshDE.addEventListener('click', () => {
    return fetchDataDE(), fetchDataUS(), fetchData()
})

//TODO: https://sutanlab.id/blog/mengenal-higher-order-function-di-javascript-part-2/