<template>
  <div class="col-12">
       <div class="row m-5">
          <div class="col-md-9 col-sm-12 p-0">
                 <img class="img__backgound" src="../../assets/games/1.jpg" alt=""/>
            </div>
            <div class="col-md-3 col-sm-12 p-0">
                 <div class="card">
                      <div class="card-body">
                           <h5 class="card-title"> 
                                {{games?games[0].name:'no loading yet'}}
                          </h5>
                           <p class="card-text">
                                {{games?games[0].email:`
                                Some quick example text to build on the card title and make up the bulk
                                of the card s content.`}}
                          </p>
                           <!-- <h6 class="card-subtitle mb-2 text-muted">{{getGame[0].title}}</h6> -->
                           <router-link 
                              :to="{name:'details',
                              params:{id:games?games[0].id:100}}" 
                              class="btn btn-secondary">View Game</router-link>
                      </div>
                 </div>
            </div>
          
       </div>
  </div>
</template>

<script>
export default {
 props:['games'],
//  props: {
//   games: Array
// },
data(){
     return{
          singleGame:this.games
     }
},
computed:{
          getGame: function () {
               let id= this.$route.params.id ? this.$route.params.id : 1;
               if(this.games){
                    return this.games.filter(game=>id==game.id)
               }
               
          }
     }

}
</script>

<style>
.img__backgound{
     width: 100%;
     height: 250px;
     object-fit: cover;
     border-top-left-radius:  .25rem;;
      border-bottom-left-radius:  .25rem;
}
.card{
     height: 250px;
     text-align: left;
}


</style>