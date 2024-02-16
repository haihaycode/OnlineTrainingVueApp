<template>
  <header>
    <h1>Admin</h1>
    <nav>
      <ul>
        <li><router-link to="/">Trang chủ</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
/* CSS cho header */
/* Thêm CSS để style cho thanh điều hướng nếu cần */
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  text-decoration: none;
}
</style>
