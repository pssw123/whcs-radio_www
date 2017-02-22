<template>
  <nav class="nav">
  <div class="nav-left">
    <a class="nav-item">
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
    </a>
  </div>

  <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
  <span class="nav-toggle" v-on:click="changeMobileNav" v-bind:class="{'is-active': isActive}">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <!-- This "nav-menu" is hidden on mobile -->
  <!-- Add the modifier "is-active" to display it on mobile -->
  <div class="nav-right nav-menu" v-bind:class="{'is-active': isActive}">
    <nuxt-link to="/under_construction" class="nav-item">
      Shows
    </nuxt-link>
    <nuxt-link to="/under_construction" class="nav-item">
      Events
    </nuxt-link>
    <nuxt-link to="/under_construction" class="nav-item">
      Connect
    </nuxt-link>
    <nuxt-link to="/under_construction" class="nav-item">
      2Team
    </nuxt-link>
    <a target="_blank" href="https://www.facebook.com/WHCSRadio/" class="nav-item">
      <span class="icon">
        <i class="fa fa-facebook"></i>
      </span>
    </a>
    <a target="_blank" href="https://www.instagram.com/whcsradio/?hl=en" class="nav-item">
      <span class="icon">
        <i class="fa fa-instagram"></i>
      </span>    
    </a>




  </div>
</nav>
</template>
<script>
  export default{
    methods: {
      changeMobileNav (event){
        event.preventDefault();
        this.isActive = !this.isActive;
      }
    },
      data: function () {
        return{
          isActive: false
        };
      }

  }
</script>