<template>
  <div class="container">
    <h1>{{city.label}}</h1>
    <p v-show="city.label">
      The current time in {{city.label}} is <strong>{{currentTime}}</strong>
    </p>
    <!-- static error message -->
    <p v-if="error" class="error">There was an error retrieving the time for {{city.label}}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'city-time',

  // Getting props from the Navigation component
  props: ['city'],

  data () {
    return {
      currentTime: null,
      error: null
    }
  },

  // Need to watch for updates to query data since the component is already rendered.
  // Without this, the city info data does not get loaded in the component when a new city is clicked on.
  watch: {
    '$route.query.city': function () {
      // Go get the time for the clicked city
      this.getCityTime()
    }
  },


  methods: {
    getCityTime () {
      // TimezoneDB API requires multiword cities to be separated by underscore instead of hyphens.
      let modifiedCityName = this.city.section.replace(/-/g, '_')
      // Normally I would put the api key in a environment variable. Even though I'll be closing my access after the interview phase, please don't share the key ;)
      fetch(`http://vip.timezonedb.com/v2.1/get-time-zone?key=ML747CN77Z01&by=city&city=${modifiedCityName}&country=${this.city.countryCode}&format=json`, {
        method: 'GET',
        mode: 'cors'
      })
      .then((resp) => {
        if (resp.ok) {
          resp.json()
            .then((data) => {
              this.currentTime = moment.unix(data.zones[0].timestamp).utc().format('dddd, MMMM Do, YYYY h:mm:ss A')
            })
        } else {
          this.error = true
        }

      })
      .catch((error) => {
        this.error = error.message
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
  color: darkgray;
}

.error {
  color: red;
}
</style>