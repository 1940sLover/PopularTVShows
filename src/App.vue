/* 
    Name: Mary Epler
    Date: 11/30/2020
    Class: CIS-131-W01
    Assignment: Popular TV Shows
    fileName: App.vue
*/
<template>
  <div id="app">
    <Header theTitle="Popular TV Shows"/>
    <Card v-bind:tvshows="tvShowList"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    Card
  },
  data()
  {
    return{
      tvShowList: []
    }
  },
  mounted()
  {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=2aff21adbfb438bd1147448bee501822&language=en-US&page=1')
    .then((res) => {
      this.tvShowList = res.data.results.slice(0,4);
    })
  }
}
</script>

<style>
*{
  margin: 0%;
  padding: 0%;
}

</style>
