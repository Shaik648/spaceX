
import React,{useState,useEffect} from 'react';
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
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';




const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    // maxHeight: 900,
  },
});

export default function PayLoadTable(props) {
  const classes = useStyles();
  const [dataSearch , setSearch] =useState(props.payLoad)
const [totallength ,setTotalLength] = useState(props.totallength)
const  [currentPage ,setCurrentPage] = useState(props.page)

  let [page, setPage] = useState(1);
  const PER_PAGE = 10;
 const count = Math.ceil(dataSearch.length / PER_PAGE);
   const _DATA = usePagination(dataSearch, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };


  useEffect(() => {
      setSearch(props.payLoad)
  }, [props.payLoad])


  return (
      <div>
           <h2>Pay Loads</h2>
      
    <Paper className={classes.root} style={{overflow:'hidden',marginTop:'%'}}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
             <TableRow>
                <TableCell>Id </TableCell>
          <TableCell>Payload type </TableCell>
           <TableCell>orbit </TableCell>
            <TableCell>Nationality </TableCell>
             <TableCell>Manufacturer </TableCell>
             <TableCell>PayLoad Mass(in Kg) </TableCell>
             <TableCell>PayLoad Mass(in lb) </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
{/* 
  {props.payLoad.slice(props.page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((payLoad) => { */}
      {/* return( */}
         {  _DATA.currentData().length > 0  ? _DATA.currentData().map((items) =>
          
           <TableRow>
               <TableCell style={{padding:'8px'}}>{items.payload_id}</TableCell>
              <TableCell style={{padding:'8px'}}>{items.payload_type}</TableCell>
                <TableCell style={{padding:'8px'}}>{items.orbit}</TableCell>
              <TableCell style={{padding:'8px'}}>{items.nationality}</TableCell>
               <TableCell style={{padding:'8px'}}>{items.manufacturer}</TableCell>
                 <TableCell style={{padding:'8px'}}>{items.payload_mass_kg}</TableCell>
                     <TableCell style={{padding:'8px'}}>{items.payload_mass_lbs}</TableCell>
           </TableRow>
           
           
           
           ) :'No Data'}
  {/* })} */}
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



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';

// const columns = [
//   { id: 'Id', label: 'Id', minWidth: 170 },
//   { id: 'Payloadtype', label: 'Payloadtype', minWidth: 100 },
//   {
//     id: 'orbit',
//     label: 'orbit',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'Nationality',
//     label: 'Nationality',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'Manufacturer',
//     label: 'Manufacturer',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: 'Manufacturer',
//     label: 'Manufacturer',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: 'PayLoadMass (in Kg)',
//     label: 'PayLoadMass',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
//    {
//     id: 'PayLoadMass (in Lb)',
//     label: 'PayLoadMass',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(Id, Payloadtype , orbit, Nationality, Manufacturer, PayLoadMass , PayLoadMassinlb) {

//   return { Id, Payloadtype , orbit, Nationality,Manufacturer,PayLoadMass,PayLoadMass };
// }



// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

// export default function PayLoadTable(props) {
//   const classes = useStyles();
//   const [dataLoad ,setDataLoad] = React.useState(props.payLoad)
//   const [totalLength , setTotalLength] = React.useState(props.totallength)
//   console.log('data----',dataLoad)
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const rows = [

// dataLoad.length > 0 ? dataLoad.map((items) => {
//   createData(items, 'IN', 1324171354, 3287263) 
// }) : ''

 
// ];

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper className={classes.root}>
//       <TableContainer className={classes.container}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {totalLength.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (

//                 dataLoad.length > 0 ?  dataLoad.map((items) => 
//         <TableRow hover role="checkbox" tabIndex={-1} key={items.id}>
//                   {/* {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </TableCell>
//                     );
//                   })} */}


//                 <TableCell>{}</TableCell>
//                 </TableRow> ) : ''
                

                        
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={dataLoad.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }
