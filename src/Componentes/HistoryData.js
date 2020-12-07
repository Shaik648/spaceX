import React,{useState,useEffect} from 'react'
import * as actions from '../Actions/index'
import Header from './Header';
import HistoryTable from './HistoryTable'
import SearchIcon from '@material-ui/icons/Search';
import Clear from '../Images/Clear.png'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));
export default function HistoryData() {
const history = useHistory();
const classes = useStyles();
let [historyList ,setHistoryList] = useState('')
const[dataList ,setDataList] = useState('')
console.log('datata',dataList)

	const [totallength, setTotalLength] = React.useState(0);
	//how many list to show in a page
	const [listperpage, setListPerPage] = React.useState(10);
	//current page number
	let [page, setCurrentPage] = React.useState(0);
     const [getsearchname ,setSearchName] = React.useState('')
    const [clearSearch ,setOnClearSearch] =  React.useState( false)

        const [state,setState] =useState(
      {
         title:'',
         id:'',
         Details: '',

         }
 )

    useEffect(() => {
     getHistoryData(page)
    }, [page])


    // Api to get data
const getHistoryData = (newPage) => {
    let data = {
    title : state.title,
    page: newPage,
	limit: listperpage,
}
actions.history_Action(data ,(res) => {
    console.log('data--9',res)
  setHistoryList(res)
  setTotalLength(res.length)
  

})
}



// SEARCH FUNCTIONALITY 

    function searchClick (ev) {
  ev.preventDefault()
    historyList = historyList.filter(item => {
        if(item.title == getsearchname){
            console.log("data",item.title)
            return item
        }
      
    })
    setHistoryList(historyList)
  }


  const searchChange = (ev) =>{
      ev.preventDefault();
    setOnClearSearch(true)
    setSearchName(ev.target.value)
  
}



const clearAll = (ev) => {
    // ev.preventDefault()
    getHistoryData()
    setSearchName('')
    setOnClearSearch(false)
    console.log('data');

    
  }

	const handleChangePage = (event, newPage) => {
		// setCandidatelist([]);
		setCurrentPage(newPage);
		getHistoryData(newPage);
	};

const handleChangeRowsPerPage = event => {
		console.log('EVENT LOOK -> ', event.target.value)
		// setCandidatelist([]);
		setListPerPage(parseInt(event.target.value, 10));
		// setCurrentPage(listperpage > totallength ? 0 : listperpage)
		// getManageJobList(page);
		// console.log("muner",getmanageJobList)
		setCurrentPage(0)
	};









    return (
        <div>
            <div className="mb-5 historyHeader" >
               
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
							placeholder="Title"
							name="busearchname"
                            onChange={searchChange}
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
            </div>
            <HistoryTable
            historyList={historyList}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            listperpage={listperpage}
            totallength={totallength}
           
            />
        </div>
    )
}

