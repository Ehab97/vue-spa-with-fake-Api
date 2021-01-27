<template>
  <div class="col-12">
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                 <div class="carousel-item active">
                      <button v-for="(i,index) in 15" :key="index" type="button" class="btn btn-outline-secondary">Sport</button>
                 </div>
                 <div class="carousel-item">
                      <button v-for="(i,index) in 15" :key="index"  type="button" class="btn btn-outline-secondary">Action</button>
                 </div>
                 <div class="carousel-item">
                      <button v-for="(i,index) in 15" :key="index" type="button" class="btn btn-outline-secondary">Adventure</button>
                 </div>
            </div>
       </div>
  </div>
</template>

<script>
export default {
/*
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
*/
}
</script>

<style>
.carousel-inner .btn{
    
    margin: 10px 5px;
    border-radius: 10px;
    
}
</style>