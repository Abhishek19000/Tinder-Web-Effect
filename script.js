// Get the data
let users=[
    {
        profilePic :"https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMGdpcmxzJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic:"https://images.unsplash.com/photo-1589553009868-c7b2bb474531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3MTUzOTE5NXx8ZW58MHx8fHx8",
        pendingMessages : 3,
        location : "Bhagalpur, India",
        name: "Nimalika",
        age : 23,
        interests: ["Zumba","Photography"],
        bio: "Lmet consecte, et sint mollitia magni enim molestiae iure ipsa placeat perferendis ex odio natus aiores, praesentium velit.",
        isFriend: null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        displayPic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        pendingMessages : 4,
        location : "Delhi, India",
        name: "Neha",
        age : 22,
        interests: ["Dance","Workout"],
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing ferendis ex odio natus deserunt quo quidem. Maiores, praesentium velit.",
        isFriend: null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGdpcmxzJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic:"https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGdpcmxzJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        pendingMessages : 4,
        location : "Jaipur, India",
        name: "Suhani",
        age : 20,
        interests: ["Music","Photography"],
        bio: "Ti sint mollitia magni enim molestiae iure ipsa placeat perferendis ex odio natus deserunt quo quidem. Maiores, praesentium velit.",
        isFriend: null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D ",
        displayPic:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        pendingMessages : 4,
        location : "Kolkata, India",
        name: "Sanjana",
        age : 25,
        interests: ["Music","Filming"],
        bio: "Lorem ipsum magni enim molestiae iure ipsa placeat perferendis ex odio natus deserunt quo quidem. Maiores, praesentium velit.",
        isFriend: null
    },
];

function select(elem){
    return document.querySelector(elem);
}
let curr=0;

let isAnimating=false;

function setData(index){
    select(".prflimg img").src=users[index].profilePic;
    select(".badge h5").textContent=users[index].pendingMessages;
    select(".location h3").textContent=users[index].location;
    select(".name h1:nth-child(1)").textContent=users[index].name;
    select(".name h1:nth-child(2)").textContent=users[index].age;

    var clutter="";
    users[index].interests.forEach(function(interest){
            clutter+=`<div class="tag flex gap-2 rounded-full py-1 px-3 bg-white/30 items-center ">
            <h3 class="text-sm tracking-tighter capitalize">${interest}</h3>
        </div>`
    })

    select(".tags").innerHTML=clutter;

    select(".bio p").textContent=users[index].bio;

  

}

(function setInitial(){
    select(".maincard img").src=users[curr].displayPic;
    select(".incomingcard img").src=users[curr+1]?.displayPic;
    setData(curr);
    curr=2;
    } )();

 function imageChange(){
    if(!isAnimating){
        isAnimating=true;
        let tl=gsap.timeline({
            onComplete: function(){
                isAnimating=false;
                let main=select(".maincard"); 
                let incoming=select(".incomingcard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale:1,
                    opacity:1
                })
                if(curr===users.length) curr=0;
                select(".maincard img").src=users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
                 
            }
         } );
        tl.to(".maincard",{
            scale:1.1,
            opacity:0,
            ease:Circ,
            duration:.9
        },"a")
        .from(".maincard",{
            scale:.9,
            opacity:0,
            ease:Circ,
            duration:1.1
        },"a")
    } 
}

 let deny= select(".deny");
 let accept=select(".accept");

 deny.addEventListener("click",function(){
     imageChange();
     setData(curr-1);
     gsap.from(".details .element",{
        y:"100%",
        opacity:0,
        stagger: .06,
        ease:Power4.easeInOut,
        duration: 1.2
    
     })
 });

 accept.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
       y:"100%",
       opacity:0,
       stagger: .06,
       ease:Power4.easeInOut,
       duration: 1.2
   
    })
});

( function containerCreator(){
    document.querySelectorAll(".element").forEach(function(element){
        let div=document.createElement("div");
        div.classList.add(`${element.classList[1]}container,overflow-hidden`);
        div.appendChild(element);
        select(".details").appendChild(div);
        console.log(div)
    })
 })();

 