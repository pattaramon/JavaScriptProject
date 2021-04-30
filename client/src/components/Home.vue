<template>
    <div>
        <div class="col-12" >
        <vueper-slides class="no-shadow" fixed-width="720px" >
            <vueper-slide v-for="(img,i) in imgs" :key="i" :image="img.img"></vueper-slide>
        </vueper-slides>
        </div>

        <div class="col-12 mt-4 mb-4">
            ค้นหา
            <input type="text" class="form-control" v-model="search" >
        </div>
        <div class="row" >

            <div class="col-4 mb-4" v-for="movie in Search" :key="movie._id">
                <div class="card" >
                <img  :src="movie.img" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{movie.name}}</h5>
                    <p class="card-text">{{movie.story}}</p>
                    <a :href="movie.vdo_main" class="btn btn-primary">Watch Movie</a>
                </div>
                </div>
            </div>

        </div>

    </div>
    
</template>

<script>
import { VueperSlides , VueperSlide} from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'
import axios from 'axios'
// กำหนดความสูงของ slide => fixed-height="700px" ใส่ตรง vueper-slides
    export default{
        components:{VueperSlides , VueperSlide},
        data(){
            return {
                imgs :[
                    {img : 'https://s359.kapook.com/pagebuilder/2d310c19-d465-4c93-af3d-054afb906e04.jpg' },
                    {img : 'https://cms.dmpcdn.com/movie/2019/05/08/377d6a06-accb-4124-9d56-7b1441f45b2c_original.jpg'},
                    {img : 'https://www.beartai.com/wp-content/uploads/2020/02/cover-4.jpg'},
                ],
                
                movies:[],
                search:''
            }
        },
        created(){
            axios.get('http://javaproject.app.ruk-com.cloud/api/').then((res)=>{
                this.movies = res.data
            })
        },
        computed:{
            Search(){
                return this.movies.filter(movie=>{
                    return movie.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }

    }
        

</script>