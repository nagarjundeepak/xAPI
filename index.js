console.log('works!');

const submitBtn = document.querySelector('.submit'); // fetching user entered URL
const recordBtn = document.querySelector('.record'); // direct record
const dummyBtn = document.querySelector('.dummy'); // testing
const iframeObj = document.querySelector('#webFrame'); // iframe
const generateBtn = document.querySelector('.generate'); // Generate

submitBtn.addEventListener('click', function (e) {
    let url = document.querySelector('.url').value;
    document.domain = document.domain;
    document.getElementById("webFrame").setAttribute("src", url);
    console.log(url);
});

var conf = {
    "endpoint": "https://watershedlrs.com/api/organizations/8501/lrs/",
    "auth": "Basic ZmU3YTdiYTAyZDU4NmM6Yjc5ZGVmMmZkMWY5ZWQ=",
};

/* recordBtn.addEventListener('click', function () {
    var stmt = new ADL.XAPIStatement(
        'mailto:steve.vergenz.ctr@adlnet.gov',
        'http://adlnet.gov/expapi/verbs/launched',
        'http://vwf.adlnet.gov/xapi/virtual_world_sandbox'
    );
    ADL.XAPIWrapper.changeConfig(conf);
    ADL.XAPIWrapper.sendStatement(stmt, function (resp, obj) {
        console.log(`this is from ${resp.statusText}`);
    });
    console.log(stmt);
}); */


/* dummyBtn.addEventListener('click', function () {
    console.log(iframeObj);
}); */


recordBtn.addEventListener('click', function () {
    var title = document.getElementById('userTitle').value;
    (window.rbmAuth = "Basic ZmU3YTdiYTAyZDU4NmM6Yjc5ZGVmMmZkMWY5ZWQ="),
        (window.rbmEndpoint =
            "https://watershedlrs.com/api/organizations/8501/lrs/"),
        (window.rbmEmail = "nagarjun.mayaraj@cognizant.com"),
        (window.rbmName = "Nagarjun Mayaraj"),
        (window.rbmDocumentTitle = title);
    var a = document,
        b = a.createElement("sc" + "ript"),
        c = a.body,
        d = a.location;
    b.setAttribute(
        "src",
        "js/bookmarklet.js"
    );
    c.appendChild(b);
});

// we have to fetch xAPI

generateBtn.addEventListener('click', function () {
    var a = document.createElement('a');
    var linkText = document.createTextNode("xAPI Bookmark");
    a.appendChild(linkText);
    a.title = "xAPI Bookmark";
    a.classList.add('mt-3');
    a.href = `javascript: function rbm(){window.rbmAuth="Basic ZmU3YTdiYTAyZDU4NmM6Yjc5ZGVmMmZkMWY5ZWQ=",window.rbmEndpoint="https://watershedlrs.com/api/organizations/8501/lrs/",window.rbmEmail="deepaknagarjun@gmail.com",window.rbmName="Nagarjun";var a=document,b=a.createElement("sc"+"ript"),c=a.body,d=a.location;b.setAttribute("src","https://cdn.jsdelivr.net/gh/nagarjundeepak/xAPI/test.js");c.appendChild(b)}rbm();void 0`;
    document.body.append(a);
});
