<template>
    <div>

          <img class="logo" src="https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png">
            <br><br>
          <input type="text" @keyup.enter="search" v-model="searchWord" class="search" placeholder="Google 검색 또는 URL 입력">
            <br><br>
        <div>
            <h3>검색된 수 : {{count}}</h3>
        </div>

        <div class="text-center">
            <v-pagination
                    v-model="page"
                    :length="6"
            ></v-pagination>
        </div>

    </div>
</template>

<script>
    export default {
    data(){
        return {
            searchWord : ''
        }
    },
    methods:{
      search(){
          alert('search')
          this.$store.dispatch('crawling/search',this.searchWord)
      }
    }
  }
</script>
<style scoped>

    .search {border: 3px solid #f1f1f1;}

    .logo{
        margin: 250px 800px;
    }

    .search {
        width: 40%;
        padding: 12px 20px;
        position: absolute;
        left: 580px;
        top: 450px;

        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    .crawlBtn {

        color: gray;
        padding: 14px 20px;
        position: absolute;
        left: 870px;
        top: 550px;
        border: none;
        cursor: pointer;
        width: 10%;
    }

</style>