import axios from 'axios'
import router from '@/router'

const state = {
    context : 'http://localhost:5000/',
    bugsmusic : [],
    count : 0
}

const actions = {
    async search({commit}, searchWord){
        alert('검색어: '+searchWord)
        axios.post(state.context+`bugsmusic`,searchWord,{
            authorization: 'JWT fefege..',
            Accept : 'application/json',
            'Content-Type': 'application/json'
        })
            .then(({data})=>{
                commit('SEARCH',data)
                router.push("/retrieve")
            })
            .catch(()=>{
                alert('통신 실패 !')
            })
    }
}

const mutations = {
    SEARCH(state, data){
        alert('mutation 검색된 결과 수 : '+data.count)
        state.bugsmusic = [] //new
        state.count = data.count
        data.list.forEach(item => {
            state.bugsmusic.push({
                seq : item.seq,
                artist :item.artist,
                title : item.title,
                album : item.album,
                thumbnail : item.thumbnail
            })
        })
        /*data.forEach( item =>{
            alert(item)
            state.bugsmusic.push([])
        })*/

    }
}

const getters = {
    bugsmusic : state => state.bugsmusic, // 스테이트의 벅스뮤직을 리턴
    count : state => state.count
}

export default {
    name : 'crawling', //vuex
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}