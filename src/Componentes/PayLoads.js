import React,{useState,useEffect} from 'react'
import * as actions from '../Actions/index'
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import PayLoadTable from './PayLoadTable'
import SearchIcon from '@material-ui/icons/Search';
import Clear from '../Images/Clear.png'
const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));
export default function HistoryData() {
const classes = useStyles();
let [payLoad ,setPayLoad] = useState([])


    const [totallength, setTotalLength] = React.useState(0);
    console.log('props---',payLoad)
	//how many list to show in a page
	const [listperpage, setListPerPage] = React.useState(10);
    //current page number
    const [getsearchname ,setSearchName] = React.useState('')
    const [clearSearch ,setOnClearSearch] =  React.useState( false)
    
    let [page, setCurrentPage] = React.useState(0);
    
  

 const [state,setState] =useState(
     {
         title:'',
         id:'',
         Details: '',
         

     }
 )

    useEffect(() => {
     getHistoryData(page)
    }, [page,listperpage])

const getHistoryData = (newPage) => {
    let data = {
    payload_id : state.title,
    page_no: newPage
  
}
actions.payLoad_Action(data ,(res) => {
    console.log('data-data',res)
  setPayLoad(res)
  setTotalLength(res.length)
  

})
}

  const clearAll = (ev) => {
    // ev.preventDefault()
    getHistoryData()
    setSearchName('')
setOnClearSearch(false)
    console.log('data');

    
  }
	// const searchClick = () => {
	// 	// document.getElementById('SalonLoader').style.display = 'block'
	// 	let searchdata = {
	// 		 'payload_id' : getsearchname,
		
	// 	}

	// 	actions.payLoad_Action(searchdata, (res) => {
	// 		setPayLoad(res);
	// 		setTotalLength(res.length);
    //         setCurrentPage(0)
    //         console.log('datata',searchdata)
	// 		// document.getElementById('SalonLoader').style.display = 'none'
	// 	});
	// }



    function searchClick (ev) {
  ev.preventDefault()
    payLoad = payLoad.filter(item => {
        if(item.payload_id == getsearchname){
            console.log("data",item.title)
            return item
        }
      
    })
    setPayLoad(payLoad)
  }




const searchChange = (ev) =>{
      ev.preventDefault();
    setOnClearSearch(true)
    setSearchName(ev.target.value)
  
}



  const handleInputBlurSearch = () => {  
 
    setOnClearSearch(true)
  }
    
  const handleFoucsSearch = () => {
    setOnClearSearch(true)
  }


    return (
        <div>
            <div className="mb-5 " >

        <Header className='historyHeader' />
            </div>
          <div style={{marginBottom:'5%'}}>
                <span>
   <div className={classes.search}
                        style={{
                            float: 'right', marginTop: '-5px', padding: '0px 3px 0px 4px', marginLeft: '10px',marginRight:'10px',
                            background: '#384AAC', color: 'white', height: '40px', width: "50px", borderRadius: '5px', cursor: "pointer",
                            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
                        }}>
                     
                           
                            
                            
                            <SearchIcon className={classes.searchIcon} style={{ margin: "10px 2px 0px 2px",  height:"20px",width:"90%" }}
                            onClick={searchClick} />

                    </div>
{clearSearch == true ?<img className="clearInnerSearch" src={Clear} onClick={clearAll} style={{width:'2%',backgroundColor:'transparent',float:'right',cursor:'pointer'}}/> : ''}
                    	<div style={{ float: 'right', marginBottom: '20px' }}>
						<input type="text" id="outlined-basic"
							placeholder="Pay Load Id"
							name="busearchname"
                            onChange={searchChange}
                            // onFocus ={handleFoucsSearch}
                            // onBlur={handleInputBlurSearch}
							value={getsearchname}
							style={{
								padding: '5px', borderRadius: '5px', outline: "none",marginRight:'10px',marginTop:'-15px',
								width: '100%',
								boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
							}}
							className=""
							variant="outlined" />
					</div>
                  
                    </span>
          </div>
                       
        
            <div style={{marginTop:'5%'}}>
            <PayLoadTable 
            payLoad={payLoad}
            listperpage={listperpage}
            totallength={totallength}
            page={page}
            />
            </div>

 
            
        </div>
    )
}

