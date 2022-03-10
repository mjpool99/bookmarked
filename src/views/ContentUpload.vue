<template>
  <div class="content">
    <form>
      <div class="upload-wrapper">
        <label class="image-upload-container">
          Upload Book Cover
          <br>
          +
          <input
            type="file"
            name="image-upload"
            accept="image/*"
            value="Upload Book Cover"
          />
        </label>
        <div class="review-content-upload">
          <div class="header-upload">
            <div class="title-upload">
              <input type="text" placeholder="Book Title" name="" id="" />
            </div>
            <div class="more-info-upload">
              <input
                class="author"
                type="text"
                placeholder="Author"
                name=""
                id=""
              />
              <input class="date" type="date" />
            </div>
          </div>
          <div class="review-upload">
            <textarea
              name=""
              placeholder="Your Review Here"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
      <button type="button">Review</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Admin",
};
</script>
<style scoped>
form {
  max-width: 100%;
  width: 900px;
  height: 600px;
}

.image-upload-container {
  height: 100%;
  width: 100%;
  border: 1px solid #000000;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgb(224, 224, 224);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: .1s;
}
.image-upload-container:hover{
  background: rgb(194, 194, 194);
}
.image-upload-container input {
  display: none;
}

.upload-wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.review-content-upload {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 25% 74%;
  justify-content: center;
}

.header-upload {
  display: grid;
  grid-template-rows: 50% 50%;
}
.more-info-upload {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.author {
  margin-right: 2.5px;
}

.date {
  margin-left: 2.5px;
}

input {
  border: none;
  border-bottom: 1px solid #000;
}

input:focus , textarea:focus{
  outline: none;
}

input, textarea, button, label{
  font-size: 1.25rem;
    font-family: Roboto Slab;
}

input,
textarea {
  background: transparent;
  width: 100%;
  height: 100%;
}

textarea {
  border: 1px solid #000;
  border-bottom-right-radius: 10px;
}
button {
  width: 100%;
  margin: 50px 0;
  background: rgb(122,0,0);
  color: white;
  padding: 20px 0;
  border-radius: 10px;
  transition: .1s;
  cursor: pointer;
}
button:hover {
  background: rgb(97, 0, 0);
}
</style>