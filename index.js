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

// Render posts and attach per-post listeners (fixed issues)
const renderEl = document.getElementById("render-el")
if (!renderEl) {
  console.error("render-el not found in DOM")
} else {
  renderEl.innerHTML = "" // clear before rendering

  posts.forEach((post, idx) => {
    const container = document.createElement("div")
    container.className = "center_display"

    container.innerHTML = `
      <main>
        <section class="profile_sec">
          <img src="${post.avatar}" alt="avatar" class="icon hoverable">
          <p>${post.username}<br><span>${post.location}</span></p>
        </section>
        <section class="main_img_sec">
          <img src="${post.post}" alt="${post.name} post" class="img post-img" data-index="${idx}">
          <img src="images/big-ahh-heart.jpg" alt="liked post" class="pop-heart pop-heart-${idx}">
        </section>
        <img src="images/icon-heart.png" alt="heart icon" class="icon heart-icon" data-index="${idx}">
        <img src="images/icon-comment.png" alt="comment" class="icon hoverable">
        <img src="images/icon-dm.png" alt="share" class="icon hoverable">
        <p>likes: <span class="dynamic-lk" data-index="${idx}">${post.likes}</span></p>
        <p>${post.comment}</p>
      </main>
    `

    renderEl.appendChild(container)

    // Elements for this post
    const postImg = container.querySelector(".post-img")
    const heartIcon = container.querySelector(".heart-icon")
    const likesEl = container.querySelector(".dynamic-lk")
    const popHeart = container.querySelector(".pop-heart")

    // Per-post state
    let liked = false
    let likesCount = post.likes

    function updateUI() {
      likesEl.textContent = likesCount
      heartIcon.src = liked ? "images/red_heart_icon.png" : "images/icon-heart.png"
      heartIcon.classList.toggle("likes", liked)
    }
    updateUI()

    // Double-click on image to like (only adds like if not already liked; shows pop animation)
    postImg.addEventListener("dblclick", () => {
      if (!liked) {
        liked = true
        likesCount += 1
        popHeart.classList.add("show")
        setTimeout(() => popHeart.classList.remove("show"), 600)
        updateUI()
      }
    })

    // Click on heart to toggle like
    heartIcon.addEventListener("click", () => {
      liked = !liked
      likesCount += liked ? 1 : -1
      updateUI()
    })
  })
}






