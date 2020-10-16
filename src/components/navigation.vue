<template>
  <div>
    <nav>
      <ul class="container">
        <li v-for="(city, index) in cities.cities" :key="index">
          <router-link
            @click.native="handleUnderline(city.section)"
            :ref="city.section"
            :id="city.section"
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
        <span class="underline" id="underline" ref="underline"></span>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation',

  props: ['cities'],

  methods: {
    handleUnderline(link) {
      // Get the navigation item's DOM properties
      console.log('clicked', link, this.$refs[link][0])
      let el = this.$refs[link][0].$el
      let elProps = el.getBoundingClientRect()
      // Grab the width of the nav item
      const elWidth = elProps.width
      // Grab the left point
      const elLeft = elProps.left
      // Check point
      console.log('width: ' + elWidth, 'left: ' + elLeft)

      // Get the sliding DOM's properties
      let underline = this.$refs['underline']
      // Set the new properties based on the properties of the nav item selected
      underline.style.display = 'block' // This is because it's hidden on initial load
      underline.style.left = elLeft + 'px'
      underline.style.width = elWidth + 'px'
    }
  }

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

.underline {
  position: absolute;
  display: none;
  background-color: black;
  margin-top: 32px;
  height: 1px;
  z-index: 1;
  left: 0;
  transition: .3s;
}

</style>