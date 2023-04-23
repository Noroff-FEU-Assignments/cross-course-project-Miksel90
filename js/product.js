const queryString = window.location.search;
console.log(queryString);



if(window.location.pathname.includes("/index.html")) {
    main();
}

if(window.location.pathname.includes("/jacket-specific.html")) {
    let queryString = window.location.search;
    queryString = queryString.slice(1);
    currentProductId = parseInt(queryString);
    main();
}