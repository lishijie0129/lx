<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<style>
  *{
    margin: 0;
    list-style: none;
    padding: 0;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
  }
  #app>div{
    display: flex;
    flex-direction: column;
  }
</style>
