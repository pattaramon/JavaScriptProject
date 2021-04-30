<template>
    <div>
        <form @submit.prevent="EditMovie">
            <div class="row">
                <div class="col-12 mb-3 mt-5 text-center">
                    <img src="" class="img-fluid" id="preview">
                </div>
                <div class="col-12 mb-3">
                    <label for="name" class="form-label">ชื่อเรื่อง</label>
                    <input type="text" v-model="movie.name" class="form-control">
                </div>
                <div class="col-12 mb-3">
                    <label for="img " class="form-label">ลิงค์รูป</label>
                    <!--<input ref="file" id="file" type="file" class="form-control" width="150" @change="Preview()">-->
                    <input type="text" v-model="movie.img" class="form-control">
                </div>
                <div class="col-12 mb-3">
                    <label for="vdo_ex" class="form-label">วีดีโอตัวอย่าง</label>
                    <input type="text" v-model="movie.vdo_ex" class="form-control">
                </div>
                <div class="col-12 mb-3">
                    <label for="vdo_main" class="form-label">วีดีโอหลัก</label>
                    <input type="text" v-model="movie.vdo_main" class="form-control">
                </div>
                <div class="col-12 mb-3">
                    <label for="story" class="form-label">เนื้อเรื่อง</label>
                    <input type="text" v-model="movie.story" class="form-control">
                </div>
                <div class="col-12 d-flex justify-content-end">
                    <button  class="btn btn-success">บันทึกข้อมูล</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import $ from "jquery";
    export default{
        data(){
            return {
                movie:[]
            }
        }
        , created(){
            axios.post(`http://javaproject.app.ruk-com.cloud/api/find/${this.$route.params.id}`).then((res)=>{
                this.movie = res.data;
            })
        },
        methods:{
            Preview(){
                this.movie.img = this.$refs.file.files[0].name
                this.upload = this.$refs.file.files[0]
                let reader = new FileReader();
                reader.onload = (e)=>{
                    $('#preview').attr('src',e.target.result)
                }
                reader.readAsDataURL(this.$refs.file.files[0])
            },
            EditMovie(){
      
               
                    const apiURL = `http://javaproject.app.ruk-com.cloud/api/update/${this.$route.params.id}`;
                    axios.put(apiURL,this.movie).then(()=>{
                        alert('แก้ข้อมูลสำเร็จ')
                        this.member = {
                            name:'',
                            img:'',
                            vdo_ex:'',
                            vdo_main:'',
                            story:''
                        }
                        this.upload = ""
                    })
            }
        }
    }
</script>