import api from '../Services/api'
import * as ActionConstants from '../Constants/Action_Constants'

// export function HISTORYUSER(action, payload) {
//    return { type: action, payload }
// }

export function history_Action(data, res) {
   return api.History_API(data, (response) => {
        // dispatch(HISTORYUSER(ActionConstants.HISTORYDATA, response))
      console.log("data api",response)
 
       return res(response);
    })
 }

export function payLoad_Action(data, res) {
   return api.PayLoad_API(data, (response) => {
        // dispatch(HISTORYUSER(ActionConstants.HISTORYDATA, response))
      console.log("data api",response)
 
       return res(response);
    })
 }