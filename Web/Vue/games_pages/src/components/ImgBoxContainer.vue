<template>
  <div class="imagebox-container">
    <div class="imagebox-wrapper">
      <div class="img-box" style="background-image: url('../assets/tera.jpg')">

      </div>
      <div class="img-box" style="background-image: url('../assets/tera.jpg')">

      </div>
      <div class="img-box" style="background-image: url('../assets/tera.jpg')">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ImgBoxContainer",
}
</script>

<style scoped lang="scss">
$indent : 5px;
$border : 1px solid black;

.imagebox-container {
  display         : flex;
  justify-content : center;
  align-items     : center;
  border          : $border;
  height          : 80vh;
}

.imagebox-wrapper {
  display : flex;
  border  : $border;
  width   : 1200px;
  height  : 500px;
}

.img-box {
  flex-grow : 1;
  border    : $border;
}

</style>