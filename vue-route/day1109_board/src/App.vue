<template>
  <div id="app">
    <h2>SSAFY REST 기반 게시판에 오신것을 환영합니다.</h2>
    <nav>
      <router-link to="/">About</router-link> |
      <router-link to="/write">Write</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
