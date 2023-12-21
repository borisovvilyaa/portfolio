<template>
  <div id="app" @click="handleOutsideClick">
    <button class="menu-toggle" :class="{ open: isMenuOpen }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="side-menu" :class="{ open: isMenuOpen }">
      <ul>
        <li :class="{ active: isRouteActive('/') }">
          <router-link to="/" @click="closeMenu"> <i class="fas fa-home"></i> Home </router-link>
        </li>
        <li :class="{ active: isRouteActive('/education') }">
          <router-link to="/education" @click="closeMenu">
            <i class="fas fa-graduation-cap"></i> Education
          </router-link>
        </li>
        <li :class="{ active: isRouteActive('/projects') }">
          <router-link to="/projects" @click="closeMenu">
            <i class="fas fa-briefcase"></i> Projects
          </router-link>
        </li>
      </ul>
    </div>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    isRouteActive(route) {
      return this.$route.path === route || this.$route.fullPath === route
    }
  }
}
</script>

<style scoped>
.menu-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 15px;
  background: transparent;
  border: none;
  padding: 0;
  transition: background-color 0.3s;
}

.menu-toggle span {
  display: block;
  width: 30px;
  height: 2px;
  background-color: #333;
  transition:
    transform 0.3s,
    opacity 0.3s;
}

.menu-toggle.open {
  background-color: transparent;
}

.menu-toggle.open span:nth-child(1) {
  transform: rotate(-45deg) translate(-0px, 0px);
}

.menu-toggle.open span:nth-child(2) {
  opacity: 0;
  transform: rotate(0deg) translate(0, 0);
}

.menu-toggle.open span:nth-child(3) {
  transform: rotate(45deg) translate(-8px, -10px);
}

.side-menu {
  z-index: 1;
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #f8f9fa;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.side-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.side-menu li {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}

.side-menu a {
  text-decoration: none;
  color: #333;
}

.side-menu a:hover {
  color: #007bff;
}

.side-menu.open {
  left: 0;
}

.main-content {
  margin-left: 0;
  transition: margin-left 0.5s;
}

.main-content.open {
  margin-left: 250px;
}

.active {
  font-weight: bold;
}
</style>
