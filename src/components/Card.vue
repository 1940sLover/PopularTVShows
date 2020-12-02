/* 
    Name: Mary Epler
    Date: 11/30/2020
    Class: CIS-131-W01
    Assignment: Popular TV Shows
    fileName: Card.vue
*/
// template for each card
<template>
    <div class = "tvshows">
        <!-- uses v-for to loop through the array of tvshows -->
        <div v-for="show in tvshows" v-bind:key="show.id" class="card show" style="width: 18rem;">
            <img v-bind:src="'https://image.tmdb.org/t/p/w342' + show.poster_path" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{show.original_name}}</h5>
                <p class="card-text">{{show.overview}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    // uses a prop to get the tvshows array
    props: ['tvshows'],
}
</script>

// uses scoped so that the styles will only be used for the card template
<style scoped>
    .tvshows {display: flex; 
              margin: 50px 10% 50px 10%; 
              background-color: rgb(228, 222, 222); 
              padding: 2%;
              box-shadow: 5px 2px 10px black;}
    .show {margin: 10px; border: 4px red double}
    h5 {text-decoration: underline; text-align: center;}
</style>