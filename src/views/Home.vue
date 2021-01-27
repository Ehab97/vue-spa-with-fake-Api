<template>
  <div class="home">
    <div class="container">
      <!-- //slider compnetent-->
      <div class="row">
        <Slider />
        <FeaturedGame :games="games" />
        <MostList     :games="games" />
        <MostList     :games="games" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '../components/game/Slider'
import FeaturedGame from '../components/game/FeaturedGame'
import MostList from '../components/game/MostList'
export default {
  name: "Home",
  // props:['games'],
  data(){
    return{
      games:null
    }
  },
  components: {
    Slider,
    FeaturedGame,
    MostList,

  },mounted () { 
  fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(json => this.games=json)
  .then(()=>{console.log(this.games[0])})
      
  }
};
</script>
<style>
.home{
     min-height: calc(100vh - 175px);
}
</style>