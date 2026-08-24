
let datacollection = [
    {
        id: 101,
        username: "ivanjohn",
        status: "developer"

    },

    {
        id: 102,
        username: "markjohn",
        status: "developer"
    },

    {
        id: 103,
        username: "saqib",
        status: "developer"
    },

    {
        id: 104,
        username: "addison",
        status: "developer"
    },

    {
        id: 105,
        username: "christopher",
        status: "developer"
    }

]


console.log(datacollection[1]);




let imagecollection = [
    {
        imgid: 1,
        img: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        category: "coding"
    },

    {
        imgid: 2,
        img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        category: "coding"
    },

    {
        imgid: 3,
        img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww",
        category: "coding"
    },

    {
        imgid: 4,
        img: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww",
        category: "coding"
    },

    {
        imgid: 5,
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww",
        category: "coding"
    },

    {
        imgid: 6,
        img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        category: "coding"
    },

    {
        imgid: 7,
        img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        category: "coding"
    },

    {
        imgid: 8,
        img: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        category: "coding"
    },

    {
        imgid: 9,
        img: "https://media.istockphoto.com/id/2200128716/photo/ai-powers-big-data-analysis-and-automation-workflows-showcasing-neural-networks-and-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wct3RqstuZiHOEexd0kSDNufRHJZ_ZcCeBUAkbWKjDo=",
        category: "coding"
    },

    {
        imgid: 10,
        img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        category: "coding"
    }




]

console.log(imagecollection);


let data = ""
imagecollection.forEach(element =>{
    data +=`
     <div class="card" style="width: 18rem;">
  <img src=${element.img} class="card-img-top" alt="coding-img">
    <a href=${element.img} download class="btn btn-info m-2">Downloade</a>
</div>
    `
    document.getElementById("display").innerHTML = data
})



















