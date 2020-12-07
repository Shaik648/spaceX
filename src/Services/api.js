import axios from 'axios'
import * as API from '../Constants/API_Constants'

export default {
    
  History_API(data, res) {
 
    axios.get(API.HISTORY_DETAILS, data,
      {
        headers: {
          'Authorization': "Bearer " 
        }
      })
      .then(response => {
        if (response) {

            console.log('data-1',response)
          res(response.data)
        }
      })
},


  PayLoad_API(data, res) {
 
    axios.get(API.PAYLOAD_DETAILS , data,
      {
        headers: {
          'Authorization': "Bearer " 
        }
      })
      .then(response => {
        if (response) {

            console.log('data-1',response)
          res(response.data)
        }
      })
}



}