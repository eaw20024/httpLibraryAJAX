const http = new easyHttp;

// Get Post
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(response);
//     }

//     console.log(response);
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/2', function(error, response){
//     if(error, response){
//         console.log(error);
//     } else {
//         console.log(response);
//     }

//     console.log(response);
// });

// Create Data
const data = {
    title: 'Custom Post', 
    body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, response) {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, response){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// })

// Delete Post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if(error, response){
        console.log(error);
    } else {
        console.log(response);
    }

    console.log(response);
});