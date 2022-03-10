<template>
  <div class="modal">
    <span class="x"> &times; </span>
    <div id="flipbook">
      <div class="hard">
        <img
          src="https://dailydead.com/wp-content/uploads/2017/10/Kill-Creek-cover-art.jpg"
          alt="Review Cover"
        />
      </div>
      <div class="hard"></div>
      <div class=""></div>
      <div class=""></div>
      <div class=""></div>
      <div class=""></div>
      <div class="hard"></div>
      <div class="hard"></div>
    </div>
  </div>

  <!-- <div class="book-wrapper">
    <div class="book">
      <div class="book-cover">
        <img
          src="https://dailydead.com/wp-content/uploads/2017/10/Kill-Creek-cover-art.jpg"
          alt="Review Cover"
        />
      </div>
      <div class="book-review">
        <div class="book-header">
          <div class="title">
            <h1>Kill Creek</h1>
          </div>
          <div class="more-info">
            <div class="author">
              <h3>Scott Thomas</h3>
            </div>
            <div class="date-read">
              <h3>October 4th, 2021</h3>
            </div>
          </div>
        </div>
        <div class="review">
            This book is an eerie story about a group of horror authors who are
            invited to go to a house known to be haunted to take part in an
            online interview. Afterwards they may regret this decision…. I found
            this novel while flipping through Tik Tok one day to see
            recommendations for the Halloween season. The description of the
            novel had interested me since I first read it. Kill Creek was
            definitely a different novel, but I didn't enjoy it as much as I
            wanted to. I did like the idea of different POV for novels because
            I'm usually always reading these kinds of novels because I love
            learning the story on the characters' sides. Honestly this book was
            a little hard to get through in the beginning. I just kept pushing
            through to see if maybe it would start picking up about half way
            through the book, but it honestly didn't start to pick up until I
            had fourth left of the book. I really liked the concept of the story
            line and it was also very intriguing. Each author had their own
            demon in the story that they had to somehow get over. One of the
            ideas that I liked throughout the story line was the after visiting
            the house. Each author ended up writing the same story without
            realizing due to the horror the house was putting in their minds.
            Each story that the authors wrote had different locations and
            different characters but still worked the same theme and featured
            the same terrible brick wall. I did find some of the characters
            interesting and that kept me a little intrigued throughout the
            story. The ending of the story was definitely not what I was
            expecting because of all the gore that got introduced. The ending
            kind of did satisfy me reading the book but then it didn't at the
            same time. I kind of felt like it was a waste of my time reading
            this book, but I'm also glad that I got to experience this kind of
            story line. I just wish the story wouldn't have picked up until I
            had already read half of the novel. Overall, I would recommend it if
            you wanted to read a haunted house story and you can tolerate a
            story that has some monotonous parts. If you get really bored with
            these books then I do suggest that you skip this book. I gave this
            book 3 stars because I still enjoyed the ending of this book.
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  name: "BookReview",
};
</script>
<style scoped>
.modal {
  height: 100%;
  width: 100%;
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 2;
}

.hard img{
  height: 100%;
  width: 100%;
  object-fit: fill
}

.page-wrapper .page{
  background: white;
}

.x {
  font-size: 2.5rem;
  font-weight: 900;
  position: absolute;
  top: 125px;
  right: 30px;
  cursor: pointer;
  background: #ebebeb57;
  color: #2c2c2c;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.x:hover {
  background: #ebebeb8a;
  color: #444444;
}
</style>