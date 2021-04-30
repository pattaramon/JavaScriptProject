<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(229, 161, 231);
}

li {
    float: left;
}

li a {
    display: block;
    color: rgb(172, 63, 1);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: rgb(194, 61, 61);
}
</style>

<template >

 <div style="background-image: url('https://www.wallpapertip.com/wmimgs/197-1976819_-.jpg');
 background-repeat: no-repeat; 
  background-attachment:fixed;
  background-size: cover;">
   <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: rgb(229, 161, 231)!important;">
      <div class="container-fluid">
         
            <ul>
                <li> <router-link class="navbar-brand" to="/">Movie</router-link></li>
                <li><router-link class="navbar-brand" to="/create">เพิ่มหนัง</router-link></li>
                <li><router-link class="navbar-brand" to="/view">แก้ไข</router-link></li>
            </ul>
      </div>
  </nav>
  
  <div class="container" >
    <div class="row">
        <router-view></router-view>
        
    </div>
  </div>
 </div>

</template>

<script>

  export default{
      data(){
          return {
              
          }
          
      }
  }
</script>