<template>
  <q-page>
    <q-toolbar class="bg-amber">
      <!-- Logo -->
      <img src="YumYummy.png" alt="Logo" class="logo">
      <q-toolbar-title> Get inspired and inspire others! </q-toolbar-title>

      <nav>
        <ul>
          <li class="dropdown">
            <a>Categories<i class="material-icons"></i></a>
            <ul class="dropdown-content">
              <li><a href="link.html">Desserts</a></li>
              <li><a href="link.html">Main dishes</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <q-input outlined placeholder="Search..." dense></q-input>
      <q-btn color="accent" @click="this.$router.push('/auth/sign_up')">Sign up</q-btn>
      <q-btn color="accent" @click="this.$router.push('/auth/sign_in')">Sign in</q-btn>
    </q-toolbar>

    <section class="recipies-box">
      <div class="recipies-posts">
        <article class="post">
          <img src="Pudding.jpg" alt="Post 1">
          <h3>Japanese Milk Pudding</h3>
          <p class="post-meta">Posted on <time datetime="2023-10-23">October 26, 2023</time> by Luna</p>
          <a href="html">Read More</a>
        </article>

        <article class="post">
          <img src="Cake.jpg" alt="Post 1">
          <h3>Chocolate cake</h3>
          <p class="post-meta">Posted on <time datetime="2023-10-23">March 20, 2023</time> by Diego</p>
          <a href="html">Read More</a>
        </article>

        <article class="post">
          <img src="IceCream.jpg" alt="Post 1">
          <h3>Strawberry Ice Cream</h3>
          <p class="post-meta">Posted on <time datetime="2023-10-23">October 26, 2023</time> by Lisa</p>
          <a href="html">Read More</a>
        </article>
      </div>

      <div class="recipies-posts">
        <article class="post">
          <img src="BlogPost1Pic1.jpg" alt="Post 1">
          <h3>Food title</h3>
          <p class="post-meta">Posted on <time datetime="2023-10-23">July 10, 2023</time> by Luna</p>
          <a href="html">Read More</a>
        </article>

        <article class="post">
          <img src="BlogPost1Pic1.jpg" alt="Post 1">
          <h3>Food title</h3>
          <p class="post-meta">Posted on <time datetime="2023-10-23">October 26, 2023</time> by Simmie</p>
          <a href="html">Read More</a>
        </article>

        <article class="post">
          <img src="BlogPost1Pic1.jpg" alt="Post 1">
          <h3>Food title</h3>
          <p class="post-meta">Posted on <time datetime="2023-10-23">October 26, 2023</time> by Simmie</p>
          <a href="html">Read More</a>
        </article>
      </div>
    </section>

  </q-page>

</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AboutPage'
})
</script>

<style>
.q-toolbar {
  height: 64px;
  padding: 0 20px;
}

.q-toolbar q-input {
  margin-left: 10px;
}

.q-toolbar q-btn {
  margin-left: 10px;
}

.logo {
  height: 100px;
  margin-right: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}

.grid-item {
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

.post-image {
  width: 100%;
  border-radius: 8px;
}

/* Navigation links */
nav ul {
  list-style: none;
  display: flex;
  margin-right: 20px;
}

nav ul li {
  margin-right: 20px;
  position: relative;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}

/* Dropdown menu */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ff4696;
  z-index: 1;
  top: 100%;
  animation: fadeIn 0.5s;
}

nav ul li:hover .dropdown-content {
  display: block;
}

.dropdown-content li {
  padding: 10px;
  text-align: left;
}

.dropdown-content li:hover {
  background-color: #ffa6cb;
}

/* Layout for all posts */
.post {
  background-color: #ffffff;
  border-radius: 25px;
  padding: 20px;
  margin: 20px 10px;
  max-width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  color: #434343;
}

.post:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post img {
  max-width: 100%;
  height: auto;
}

.post h3 {
  font-size: 24px;
  margin: 10px 0;
}

.post p {
  color: #666;
  margin: 10px 0;
}

.post a {
  text-decoration: none;
  background-color: #ffa6cb;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
}

.post a:hover {
  background-color: #ff4696;
  color: #434343;
}

.post time {
  font-style: italic;
  color: #999;
}

/* Recent Posts */
.recipies-box {
  background-color: #ffa6cb;
  padding: 10px;
  border: 5px solid #ffffff;
  border-radius: 25px;
  margin-left: 25px;
  margin-right: 25px;
  animation: slideIn 1s;
}

.recipies-title {
  font-family: 'Pacifico', sans-serif;
  font-size: 40px;
  margin-top: 20px;
  text-align: center;
  color: #434343;
}

.recipies-posts {
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  animation: slideIn 1s;
}
</style>

