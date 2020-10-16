<template>
  <div>
    <nav>
      <ul class="container">
        <li v-for="city in cities.cities" :key="city.label">
          <router-link
            :to="{
              path: '/' + city.section,
              // Sending city information to the city-time component inside the router-view via query parameters
              query: {
                city: city
              }
            }"
            class="nav-items"
          >
          {{city.label}}
          </router-link>             
        </li>
        <span class="underline" ref="underline"></span>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation',

  props: ['cities']

}
</script>

<style scoped>

ul {
  list-style: none;
  padding: 0px;
}

li {
  padding: 0px 20px 0px 20px;
}
.container {
  display: inline-flex;
  justify-content: center;
  border-bottom: 1px solid Silver;
  padding: 0px 40px 10px 40px;
}

.container a.router-link-active {
  color: black;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  transform: translateX(-60px);
}

.nav-items {
  text-decoration: none;
  color: Silver;
}

.nav-items:hover {
  color: Steelblue;
  cursor: pointer;
}

</style>