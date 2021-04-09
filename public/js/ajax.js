const ajax = (type, url, data) => {
   

    return new Promise((resolve, reject) => {

        //headers: {"Authorization": "Basic xxxx"}
        let token = localStorage.getItem("TOKEN");
        $.ajax({
            type: type,
            url: url,
            data: data,
            cache: false,
            crossDomain: true,
            processData: true,

            success: function(data) {
                resolve(data)
            },
            error: function(a, b) {
                console.log(b);
                reject(a)
            }

        })
    });
}