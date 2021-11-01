import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyAYPTU2asiwl-Cil1zGCTgd5cir7rcMWXw',
   },
})

export default request
