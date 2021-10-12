<template>
  <div id="app">
    <div id="nav">
      <!-- 智慧停车，智慧通行，智慧用电，智慧空开，智慧巡更，视频监管 -->
      <!-- wisdomParking ,智慧停车
      wisdompass ,智慧通行
      wisdomelectricity ,智慧用电
      wisdomopenOpen ,智慧空开
      wisdomPatrol ,智慧巡更
      videoSupervision ,视频监管 -->
      <router-link to="/">xxx</router-link> |
      <router-link to="/wisdompass">xxx</router-link>
      <!-- <router-link to="/about">智慧用电</router-link>
      <router-link to="/about">智慧空开</router-link>
      <router-link to="/about">智慧巡更</router-link>
      <router-link to="/about">视频监管</router-link> -->
    </div>
    <router-view/>
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

#nav {
  padding: 30px;

  /* a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  } */
}
</style>
