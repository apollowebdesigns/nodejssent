(() => {
    let eventSource = new EventSource('/updates');
 
    eventSource.addEventListener('connected', (e) => {
        console.log(JSON.stringify(e.data));
        // => Hello world! 
    });
})();