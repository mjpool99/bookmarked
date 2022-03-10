<template>
  <nav>
    <div class="logo-container">
      <a href="">
        <img class="logo" src="@/assets/logo.svg" alt="" />
        <img class="mobile-logo" src="mobile-logo.svg" alt="" />
      </a>
    </div>
    <div class="menu">
      <a @click="openNav" class="bookmark">
        <svg
          width="200"
          height="640"
          viewBox="0 0 208 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="154"
            height="404.431"
            transform="matrix(-1 0 0 1 180 0.923065)"
            fill="#7A0000"
          />
          <path
            d="M104.51 503.898C103.172 502.705 103.172 500.613 104.51 499.421L175.003 436.54C176.937 434.815 180 436.187 180 438.778L180 564.54C180 567.131 176.937 568.504 175.003 566.779L104.51 503.898Z"
            fill="#7A0000"
          />
          <path
            d="M101.49 499.102C102.828 500.295 102.828 502.387 101.49 503.579L30.997 566.46C29.0634 568.185 26 566.813 26 564.222L26 438.46C26 435.869 29.0634 434.496 30.997 436.221L101.49 499.102Z"
            fill="#7A0000"
          />
          <rect
            width="154"
            height="108.738"
            transform="matrix(-1 0 0 1 180 393.908)"
            fill="#7A0000"
          />
        </svg>
      </a>
      <ul class="menu-items">
        <li>
          <router-link class="nav-link" v-if="this.$route.path !== '/'" to="/"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-link"
            v-if="this.$route.path === '/'"
            to="/allreviews"
            >All Reviews</router-link
          >
        </li>
        <li><a href="" class="nav-link">Newsletter</a></li>
      </ul>
    </div>
  </nav>
  <router-view />

  <BookReview />
</template>
<script>
import BookReview from "./components/BookReview.vue"
export default {
  components: {
    BookReview
  },
  methods: {
    openNav() {
      let navMenu = document.querySelector(".menu");
      if (navMenu.style.transform === "translateY(-250px)") {
        navMenu.style.transform = "translateY(-450px)";
      } else {
        navMenu.style.transform = "translateY(-250px)";
      }
    },
  },
};
</script>
<style>
body {
  background: url("./assets/bg.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
  margin: 0;
  overflow-x: hidden;
}

body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar {
  display: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav {
  width: 100%;
  height: 150px;
  margin-bottom: 100px;
  position: relative;
}

a {
  font-family: Pacifico;
  text-decoration: none;
  text-align: center;
  font-size: 1.5rem;
  color: #ffffff;
}

.menu {
  position: absolute;
  right: 100px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-450px);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.menu-items {
  position: absolute;
}
.menu-items li {
  margin: 10px 0;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.logo {
  width: 450px;
  max-width: 90%;
}

.mobile-logo {
  display: none;
}

@media (max-width: 950px) {
  nav {
    display: flex;
    height: 125px;
    align-items: center;
  }
  .logo {
    display: none;
  }
  .logo-container {
    width: 100%;
  }

  .mobile-logo {
    display: block;
    position: absolute;
    left: 20px;
    top: 0;
  }

  .menu {
    right: 20px;
    top: 0;
  }

  .bookmark svg {
    width: 175px;
  }

  a {
    font-size: 1.25rem;
  }
}
</style>
