
import React ,{useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Tab, Tooltip } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import * as actions from '../Actions/index'
// import { useDispatch, useSelector } from 'react-redux';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { useHistory } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    // maxHeight: 900,
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
const history = useHistory();
  // const dispatch = useDispatch();
  // const jobdetails = useSelector(({ auth }) => auth);
  // console.log("jobdetails", jobdetails)
  const[historyList ,setHistoryList] =useState(props.historyList)
  
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;
 const count = Math.ceil(historyList.length / PER_PAGE);
   const _DATA = usePagination(historyList, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };


    useEffect(() => {
      setHistoryList(props.historyList)
  }, [props.historyList])
//   const actionDetails = (title) => event =>{
   
//       let data = {
//       "title": title
//     }

//     actions.history_Action(data ,(res) => {


//       if(res.map(items => items.title === title)){
// 	history.push({
// 					pathname: '/historydetails',
//           state: { detail: res }
        
//         });
//       }
  
//  console.log('dataId',res.title)
//           // console.log('state',details)
//     })
//   }

  return (
    <div>
      <h2>History</h2>
    <Paper className={classes.root} style={{overflow:'hidden'}}>
    
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
             <TableRow>
                <TableCell>Id </TableCell>
          <TableCell>Title </TableCell>
           <TableCell>Deatils </TableCell>
            <TableCell>Event Date </TableCell>
             <TableCell>Flight Number </TableCell>
              <TableCell>Wikipedia </TableCell>
               <TableCell>Article </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           { _DATA.currentData().length > 0  ? _DATA.currentData().map((items) =>
           <TableRow>
               <TableCell>{items.id}</TableCell>
              <Tooltip title={items.title}>
              <TableCell>{items.title.slice(0,20)}</TableCell></Tooltip> 
              <Tooltip title={items.details}><TableCell>{items.details.slice(0,40)}</TableCell></Tooltip>
              
              <TableCell>{items.event_date_utc}</TableCell>
              <TableCell>{items.flight_number == 'null' ? '' :items.flight_number}</TableCell>
<TableCell>
 <Tooltip title='Wikipedia'>
<a href={items.links.wikipedia}> <RemoveRedEyeIcon  /></a>
 </Tooltip>
     

</TableCell>
<TableCell>
 <Tooltip title='Article'>
<a href={items.links.article}> <DescriptionIcon  /></a>
 </Tooltip>
     

</TableCell>
           </TableRow> ) :''}
          </TableBody>
        </Table>
      </TableContainer>
   
    </Paper>

     <div className="mt-4 mb-4" style={{float:'right'}}>
    <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      </div>
    </div>
  );
}
