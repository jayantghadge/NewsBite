// API KEY and Request Parameters
const apikey = "pub_1650789bea8ca26de44691ac338d839e1a3b7";
const headline = `https://newsdata.io/api/1/news?apikey=${apikey}&category=top&language=en&domain=livemint`;
const business = `https://newsdata.io/api/1/news?apikey=${apikey}&category=business&domain=livemint`;
const health = `https://newsdata.io/api/1/news?apikey=${apikey}&category=health&language=en`;
const science = `https://newsdata.io/api/1/news?apikey=${apikey}&category=science&domain=gizmodo`;
const sports = `https://newsdata.io/api/1/news?apikey=${apikey}&category=sports&language=en&domain=theguardian`;
const entertainment = `https://newsdata.io/api/1/news?apikey=${apikey}&category=entertainment&language=en&domain=gamespot`;
const technology = `https://newsdata.io/api/1/news?apikey=${apikey}&category=technology&language=en&domain=livemint`;
const search= `https://newsdata.io/api/1/news?apikey=${apikey}&qInTitle=`;

// Varibale Declaration
const btnSearch = document.querySelector("#search");
const newsHead = document.querySelector("#headline-heading");
const newsAccordion = document.querySelector("#newsAccordion");
const container = document.querySelector("#container");
const btnHeadline = document.querySelector("#btn-headline");
const btnBusiness = document.querySelector("#btn-business");
const btnHealth = document.querySelector("#btn-health");
const btnTechnology = document.querySelector("#btn-technology");
const btnScience = document.querySelector("#btn-science");
const btnSports = document.querySelector("#btn-sports");
const btnEntertainment = document.querySelector("#btn-entertainment");
const spin = document.querySelector(".three-quarter-spinner");


window.onload = function () {
    fetchHeadlines();
};

btnBusiness.addEventListener("click", () => {
    spin.style.display="block";
    fetchBusiness();
});

btnHealth.addEventListener("click", () => {
    spin.style.display="block";
    fetchHealth();
});

btnTechnology.addEventListener("click", () => {
    spin.style.display="block";
    fetchTechnology();
});

btnScience.addEventListener("click", () => {
    spin.style.display="block";
    fetchScience();
});

btnSports.addEventListener("click", () => {
    spin.style.display="block";
    fetchSports();
});

btnEntertainment.addEventListener("click", () => {
    spin.style.display="block";
    fetchEntertainement();
});

btnSearch.addEventListener("click", () => {
    spin.style.display="block";
    fetchSearch();
});


// News Fetching Functions
const fetchHeadlines = async () => {
    const response = await fetch(headline);
    if (response.status >= 200 && response.status < 300) {
        const json = await response.json();
        newsHead.innerHTML = "TRENDING NEWS ->";
        display(json);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        return;
    }
};

const fetchBusiness = async () => {
    const response = await fetch(business);
    if (response.status >= 200 && response.status < 300) {
        const json = await response.json();
        display(json);

    } else {
        // handle errors
        console.log(response.status, response.statusText);
        return;
    }
};

const fetchHealth = async () => {
    const response = await fetch(health);
    if (response.status >= 200 && response.status < 300) {
        const json = await response.json();
        display(json);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        return;
    }
};

const fetchTechnology = async () => {
    const response = await fetch(technology);
    if (response.status >= 200 && response.status < 300) {
        const json = await response.json();
        display(json);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        return;
    }
};

const fetchScience = async () => {
    const response = await fetch(science);
    if (response.status >= 200 && response.status < 300) {
        const json = await response.json();
        
        display(json);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        return;
    }
};

const fetchSports = async () => {
    const response = await fetch(sports);
    if (response.status >= 200 && response.status < 300) {
        const json = await response.json();
        display(json);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        return;
    }
};

const fetchEntertainement = async () => {
    const response = await fetch(entertainment);
    if (response.status >= 200 && response.status < 300) {
        const json = await response.json();
        display(json);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        return;
    }
};

const fetchSearch = async () => {
    let query = document.querySelector("#search-input").value;
    console.log(query);
    const response = await fetch(search + query);
    if (response.status >= 200 && response.status < 300) {
        const json = await response.json(); 
        display(json);
        newsHead.innerHTML = `Showing Results for ${query} ->`;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        return;
    }
};

function display(json) {
    spin.style.display="none";
    var articles = json.results;
    let categoryHeading = "";
    let newsContent = "";
    for (let article of articles) {
        var news = `<div class="col">
                                <div class="card h-100">
                                <img src="${article.image_url}" class="card-img-top" alt="..." style="height:250px;">
                                <div class="card-body">
                                <span class="badge bg-danger text-light p-2" style="font-size:15px;">${article.source_id}</span>
                                    <h5 class="card-title mt-2" style="font-size:15px;">${article.title}</h5>
        
                                    <a href="${article.link}" class="btn btn-primary mt-2 mb-2" target="_blank">Read more<img src="img/redirect.png" style="width:20px; height:20px; margin-left:5px;"></a>
                                </div>
                                <div class="card-footer text-muted">
                                    ${article.pubDate}
                                </div>
                                </div>
                                </div>
                        </div>`
        newsContent += news;
        categoryHeading = `${article.category[0]} News ->`.toUpperCase();
        console.log(newsContent);
    }
    newsHead.innerHTML=categoryHeading;
    newsAccordion.innerHTML = newsContent;
    document.querySelector("#attribution").classList.remove('d-none')
};