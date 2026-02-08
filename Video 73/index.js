function createcard(title, cName, views, monthsold, duration, thumbnail) {
  let viewNumber;
  if (views < 1000) {
    viewNumber = views / 1000 + "K";
  } else if (views >= 1000000) {
    viewNumber = views / 1000000 + "M";
  } else {
    viewNumber = views / 1000 ;
  }
  let html = ` <div class="card">
        <div class="image">
          <img class="img_1"    
            src=${thumbnail} alt="thumbnail"
          />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>
            ${title} 
          </h1>
          <p>${cName} . ${viewNumber} views . ${monthsold} months ago</p>
        </div>
      </div>`;
  document.querySelector(".cont").innerHTML =
    document.querySelector(".cont").innerHTML + html;
}

createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
