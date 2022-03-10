<template>
  <div class="bookshelf">
    <div class="thumbnail-wrapper" v-for="review in bookReviews" :key="review">
      <a class="book">
        <img class="thumbnail" :src="review" alt="Review Cover" />
        <div class="paper"></div>
        <div class="paper"></div>
        <div class="cover"></div>
      </a>
    </div>
    <div class="shelf"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookReviews: {
        url: "https://dailydead.com/wp-content/uploads/2017/10/Kill-Creek-cover-art.jpg",
      },
    };
  },
};
</script>

<style>
.bookshelf {
  display: flex;
  position: relative;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 90%;
  width: 1000px;
  height: 225px;
}

.shelf {
  background: #20140c;
  height: 15px;
  width: 100%;
  margin-top: 10px;
}

.thumbnail {
  position: absolute;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  z-index: 3;
  border: 1px solid black;
  transition: transform .3s;
  transform-origin: left;
}

.paper:nth-of-type(1) {
  position: absolute;
  border-radius: 3px;
  width: 99%;
  height: 97%;
  background: white;
  top: 2.5px;
  left: 4.5px;
  border: 1px solid black;
}
.paper:nth-of-type(2) {
  position: absolute;
  border-radius: 3px;
  width: 99%;
  height: 97%;
  background: white;
  top: 2.5px;
  left: 3px;
  border: 1px solid black;
}
.cover {
  position: absolute;
  border-radius: 3px;
  width: 99%;
  height: 99%;
  background: white;
  top: .5px;
  left: 7px;
  border: 1px solid black;
  z-index: -2;
}

.thumbnail-wrapper {
  width: 150px;
  height: 200px;
  box-shadow: 3px 3px 3px 0 #000000;
  z-index: 2;
  transition: 0.3s;
  position: relative;
}
.thumbnail-wrapper:hover {
  transform: scale(1.05);
  box-shadow: 10px 10px 10px 0 #000000;
  cursor: pointer;
}
/* .thumbnail-wrapper:hover .thumbnail{
  transform: rotateY(15deg);
} */
</style>