const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let incrementLk = 0
 let incFun = document.querySelectorAll(".increment-el")
 let myLikes = document.getElementById("dynamic-lk")
 let popHeart = document.querySelector(".pop-heart")
 let heartEl = document.querySelector(".heart")
let renderEl = document.getElementById("render-el")




 incFun.forEach(item => {
     item.addEventListener("dblclick", function(){
        console.log("double click works.")
          heartEl.classList.toggle("likes");
       if(heartEl.classList.contains("likes")){
             heartEl.src = "/images/red_heart_icon.png";
          incrementLk += 1
              popHeart.classList.add("show");  // trigger heart animation

                setTimeout(() => {
             popHeart.classList.remove("show"); // hide heart after 0.6s
                }, 600);
        
              }
                   else{
                         heartEl.src = "/images/icon-heart.png";
                       incrementLk -= 1
            
                 }
                       myLikes.textContent = incrementLk   
                       });
                  });
                  
                  
// with this i.ve looped through the post.
posts.forEach(display) 

// i've gotten my hands on the array function
function display(Element){
    renderEl.innerHTML +=`
     <div class="center_display">
        <main>
        <section class="profile_sec">
        <img  src= ${Element.avatar} alt="avater"  class="icon hoverable" >
        <p>${Element.username}<br><span>${Element.location}</span> </p>
        </section >
        <section class="main_img_sec">
        <img src= ${Element.post} alt="a portriat by Vincent van gogh."  class="img increment-el" >
        <img src="/images/big-ahh-heart.jpg" alt="liked post."  class="pop-heart" >
        </section>
        <img src="/images/icon-heart.png" alt="heart icon" class="icon increment-el heart">
        <img src="/images/icon-comment.png" alt="comment" class="icon hoverable">
        <img src="/images/icon-dm.png" alt="share" class="icon hoverable">
        <p>likes: <span id="dynamic-lk"></span> </p>
        <p>just took a few mushrooms lol</p>`
    
}

// creating my increment function




 

