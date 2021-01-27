<template>
<div class="col-12">
     <div class="row m-5">
               <div class="wrapper">
                    <div class="row">
                         <div class="col-12">
                              <div class="head">
                                   <h6>Most Name</h6>
                                  <router-link 
                                  :to="{name:'details',params:{id:10}}">
                                  SEE ALL 
                                  <i class="fas fa-chevron-right"></i>
                                  </router-link>  
                              </div>
                         </div>
                         <div class="col-12">
                              <div class="alert alert-danger" v-if="errored">
                                 <p>We're sorry, we're not able to retrieve this information at the moment, please try
                                        back later
                                   </p>
                              </div>
                              <div v-else class="row">
                                    <div class="alert alert-info" v-if="isLoading">Loading...</div>
                                    <div 
                                           v-for="(item, index) in filterdData" 
                                           :key="index" 
                                           class="col-md-3 col-sm-12">
                                        <div class="card">
                                             <img :src="item.url" class="card-img-top" alt="">
                                             <span class="badge bg-secondary">{{item.id}} {{' ⭐ '}}
                                                  
                                                   </span>
                                             <div class="card-body">
                                                  <h5 class="card-title">{{item.title.slice(0,9)}}</h5>
                                                  <p class="card-text">{{item.title}}</p>
                                             <router-link :to="{name:'details',params:{id:item.id}}" class="btn btn-secondary">Go somewhere</router-link>
                                               
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                      
                    </div>
               </div>
          </div>

     </div>
</template>

<script>
export default {
     props: ['games'],
     data() {
          return {
               games: null,
               isLoading:true,
               errored:false
          }
     },
     methods: {
          getImgUrl(pet) {
               var images = require.context('../../assets/games/', false, /\.jpg$/)
               return images('./' + pet + ".jpg")
          }
     },computed:{
          filterdData(){
               if(!this.games){
                    this.games = [{
                              "albumId": 1,
                              "id": 1,
                              "title": "accusamus beatae ad facilis cum similique qui sunt",
                              "url": "https://via.placeholder.com/600/92c952",
                              "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                         },
                         {
                              "albumId": 1,
                              "id": 2,
                              "title": "reprehenderit est deserunt velit ipsam",
                              "url": "https://via.placeholder.com/600/771796",
                              "thumbnailUrl": "https://via.placeholder.com/150/771796"
                         },
                         {
                              "albumId": 1,
                              "id": 3,
                              "title": "officia porro iure quia iusto qui ipsa ut modi",
                              "url": "https://via.placeholder.com/600/24f355",
                              "thumbnailUrl": "https://via.placeholder.com/150/24f355"
                         },
                         {
                              "albumId": 1,
                              "id": 4,
                              "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                              "url": "https://via.placeholder.com/600/d32776",
                              "thumbnailUrl": "https://via.placeholder.com/150/d32776"
                         }
                    ];
                    console.log(this.games)
                    return this.games;
               }
               return (this.games.filter(game=>game.id<5))
          }
     }, mounted() {
               fetch('https://jsonplaceholder.typicode.com/photos/')
               .then(response => response.json())
               .then(json => this.games = (json))
               .then(() => {console.log('most list 1 ', this.games)})
               .catch(error => {console.log(error);this.errored = true })
               .finally(() => this.isLoading = false)
          
     }
}
</script>

<style>
.wrapper{
     padding: 1em;
    background: #fff;
    min-height: 400px;
    border-radius: .25rem;
}
.wrapper .head{
     display: flex;
     justify-content: space-between;

}
.wrapper .head a{
     text-decoration:none  !important;
     color: #2c3e50;
}
.wrapper .card{
     max-width: 18rem;
     height: auto;
     position: relative;
     margin-bottom: 25px;
     height: 380px;
}
.wrapper .card .card-img-top{
     max-width: 18rem;
         object-fit: cover;
    height: 160px;
}
.wrapper .card .btn-secondary{
position: absolute;
    bottom: 15px;
}
.wrapper .card .badge{
     width: 50px;
    position: absolute;
    top: 5px;
    left: 5px;
}
</style>
