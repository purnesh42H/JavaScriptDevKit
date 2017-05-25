//To point to mock data api on localhost
// Comment this code if you don't want to generate random data

export default function getBaseUrl() {
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001/':'/';
}

// To point to production data
// Uncomment the below code and change the "/" to your production url

/*
export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001' : '/';
}

function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ""))
}

*/