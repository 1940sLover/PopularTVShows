/* 
    Name: Mary Epler
    Date: 11/30/2020
    Class: CIS-131-W01
    Assignment: Popular TV Shows
    fileName: Header.vue
*/
<template>
    <div class = "tvheader">
        <h1>{{ theTitle }}</h1>
    </div>
</template>

<script>
//exports the Header template so that it can be used else where
export default {
    name: "Header",
    props: ['theTitle']
}
</script>

// uses scoped so that the styles will only be used for the header template
<style scoped>
.tvheader
{
    background-image: url(../assets/header.jpg);
    background-size: cover;
    background-position: center;
    color: red;
    text-shadow: 2px 2px rgba(17, 228, 217, 0.61);
    text-align: center;
    padding: 6%;
    margin: 0px;
    border-bottom: 2px red solid;
}

h1 {font-size: 6em;}
</style>