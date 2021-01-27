<template>
  <div class="col-12">
     <div class="row m-5">
          <div class="col-12">
               <img class="img__back" src="../../assets/games/1.jpg" alt="" srcset="">
          </div>
          <div class="col-12">
          <div class="alert alert-danger" v-if="errored">
               <p>We're sorry, we're not able to retrieve this information at the moment, please try
                    back later</p>
          </div>
              <div v-else :class="['wrapper__details',!bool ? 'h-all' : '']"> 
                   <div class="alert alert-info" v-if="loading">Loading...</div>
      
                    <h1>{{getGame[0].name}}</h1> <!--{{getGame[0].name}} ,{{getGame[0].username}}-->
                    <h3>{{getGame[0].username}}</h3>
                    <p class="text-muted">{{getGame[0].id}} Downloads</p>   <!--{{getGame[0].id * 1000}}-->
                    <h4>DODGE the oncoming trains!</h4>
                    <p>Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.</p>
                    <p>★ Grind trains with your cool crew!</p>
                    <p>★ Colorful and vivid HD graphics!</p>
                    <p v-if="bool" class="text-muted" 
                    style="cursor:pointer" 
                     @click="readView">Read More</p>
                    <p>★ Hoverboard Surfing!</p>
                    <p>★ Paint powered jetpack!</p>
                    <p>★ Lightning fast swipe acrobatics!</p>
                    <p>★ Challenge and help your friends!</p>
                    <p>Join the most daring chase!</p>

                    <p>A Universal App with HD optimized graphics.</p>

                    <p>By Kiloo and Sybo.</p>

                    <p v-if="!bool" class="text-muted" 
                    style="cursor:pointer" 
                     @click="readView">Read less</p>

               </div>
          </div>    
     </div>
    <Most />
  </div>   
</template>

<script>
import axios from 'axios';
import Most from './MostList'
export default {
     components: {
          Most
     },
     data() {
          return {
               bool: true,
               games: null,
               loading: true,
               errored: false
          }
     },
     methods: {
          readView() {
               return this.bool = !this.bool;
          }
     },
     mounted() {
          fetch('https://jsonplaceholder.typicode.com/users/')
               .then(response => response.json())
               .then(json => this.games = (json))
               .then(() => {
                    console.log('about ', this.games[0])
               })
               .catch(error => {
                    console.log(error);
                    this.errored = true
               })
               .finally(() => this.loading = false)

     },
     computed: {
          getGame: function () {
               let id = this.$route.params.id ? this.$route.params.id : 1;
               if (!this.games) {
                    this.games = [{
                              "id": 1,
                              "name": "Leanne Graham",
                              "username": "Bret",
                              "email": "Sincere@april.biz",
                         },
                         {
                              "id": 2,
                              "name": "Ervin Howell",
                              "username": "Antonette",
                              "email": "Shanna@melissa.tv",
                         },
                         {
                              "id": 3,
                              "name": "Clementine Bauch",
                              "username": "Samantha",
                              "email": "Nathan@yesenia.net",
                         },
                         {
                              "id": 4,
                              "name": "Patricia Lebsack",
                              "username": "Karianne",
                              "email": "Julianne.OConner@kory.org",
                         }
                    ];
                    return this.games;
               }
             
                    return this.games.filter(game => id == game.id);
               
          }
     },

}
</script>

<style>
.img__back{
     width: 100%;
     height: 400px;
     object-fit: cover;
}
.h-all{
     height: 620px  !important;
     overflow: auto;
}
.wrapper__details{
  text-align: left; 
   padding: 1em;
    background: #fff;
    height: 335px;
    border-radius: .25rem;
  overflow: hidden;  
}
</style>