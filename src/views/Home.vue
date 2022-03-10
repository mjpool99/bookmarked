<template>
  <div class="content">
          <Bookshelf />
  </div>
</template>

<script>
import Bookshelf from "../components/Bookshelf.vue"
export default {
  name: 'Home',
  components: {
    Bookshelf
  }
}
</script>

<style>
.content{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
