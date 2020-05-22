<template>
    <div>

          <img class="logo" src="https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png">
            <br><br>
          <input type="text" @keyup.enter="search" v-model="search" class="search" placeholder="Google 검색 또는 URL 입력">
            <br><br>
          <button @click="crawling" class="crawlBtn">
           <h2>크롤링 하기</h2>
          </button>

    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    }),
    methods:{
      crawling(){
        alert('버튼 클릭')
      },
      search(){
          alert('d')

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

        color: black;
        padding: 14px 20px;
        position: absolute;
        left: 870px;
        top: 550px;
        border: none;
        cursor: pointer;
        width: 10%;
    }

</style>