<template>
    <div>
      <div class="col-12 mt-5 mb-5">
          <table class="table table-hover">
              <thead>
                  <tr align=center>
                      <th>ชื่อ</th>
                      <th>ลิงค์</th>
                      <th>เรื่องย่อ</th>
                      <th>แก้ไข / ลบ</th>
                  </tr>
              </thead>
             <tbody>
                 <tr v-for="movie in movies" :key="movie._id" align=center>
                     <td>{{movie.name}}</td>
                     <td><a :href="movie.vdo_main" class="btn btn-primary">Watch Movie</a></td>
                     <td width="600">{{movie.story}}</td>
                     <td>
                         <router-link :to="{name:'Edit',params:{id:movie._id}}" class="btn btn-warning" style="margin-right:1rem">แก้ไข</router-link>
                         <button @click="Del(movie._id)" class="btn btn-danger">ลบ</button>
                    </td>
                 </tr>
             </tbody>
          </table>
      </div>

    </div>
</template>

<script>
import axios from 'axios'
    export default{
        data(){
            return {
                movies:[]
            }
        },
        created(){
            axios.get('http://javaproject.app.ruk-com.cloud/api/').then((res)=>{
                this.movies = res.data
            })
        },
        methods:{
            Del(id){
                axios.delete(`http://javaproject.app.ruk-com.cloud/api/del/${id}`).then(()=>{
                    alert('Deleted')
                    location.reload()
                })
            }
        }
    }
</script>