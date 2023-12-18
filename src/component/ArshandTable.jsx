// import { Box, Button, Typography } from '@material-ui/core'
// import { CheckBox } from '@material-ui/icons'
// import React, { Component } from 'react'

// export default class ArshandTable extends Component {
//   render() {
//     return (
//       <div>
//         <Box style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", background: "#F1EFEF" }} >
//           <Box style={{ width: "90%", height: "5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography style={{ width: "100%", display: "flex", justifyContent: "center" }}>Select Assest Select Assest</Typography>
//             <Box style={{ width: "100%", display: "flex", justifyContent: "end" }}>
//               <Button style={{ width: "12rem", background: "red", color: "#FFF", display: "flex", borderRadius: "4px", fontSize: "12px", whiteSpace: "nowrap" }}>Back To Create User</Button>
//             </Box>
//           </Box>
//           <Box style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px" }}>
//             <Typography>Fire Protection</Typography>
//             <Typography style={{ color: "red" }}>Select All</Typography>
//           </Box>
//           <hr style={{ width: "80%", height: "1px" }} />
//           <Box style={{ width: "70%", height: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FFF", borderRadius: "5px", boxShadow: "0 0 4px 0 ", marginTop: "4px", marginBottom: "4px", padding: "5px" }}>
//             <Typography>Asset Type</Typography>
//             <CheckBox style={{ color: "red" }} />
//           </Box>
//           <Box style={{ width: "70%", height: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FFF", borderRadius: "5px", boxShadow: "0 0 4px 0 ", marginBottom: "4px", marginTop: "4px", padding: "5px" }}>
//             <Typography>Asset Type</Typography>
//             <CheckBox style={{ color: "red" }} />
//           </Box>
//           <Box style={{ width: "70%", height: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FFF", borderRadius: "5px", boxShadow: "0 0 4px 0 ", marginBottom: "4px", marginTop: "4px", padding: "5px" }}>
//             <Typography>Asset Type</Typography>
//             <CheckBox style={{ color: "red", borderRadius: "15px" }} />
//           </Box>
//         </Box>
//       </div>
//     )
//   }
// }


// **********************************************

// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

// const columns = [
//   { id: 'AssetType', label: 'AssetType', minWidth: 100, align: 'center' },
//   { id: 'AssetID', label: 'AssetID', minWidth: 100, align: 'center' },
//   {
//     id: 'Vertical',
//     label: 'Vertical',
//     minWidth: 100,
//     align: 'center',
//   },
//   {
//     id: 'location',
//     label: 'location',
//     minWidth: 100,
//     align: 'center',
//   },
// ];

// function createData(AssetType, AssetID, Vertical) {
//   const location = Vertical;
//   return { AssetType, AssetID, Vertical, location };
// }
// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];
// export default function StickyHeadTable() {
//   return (
//     <Paper >
//       <TableContainer style={{ overflow: "hidden", maxHeight: "440px" }}>
//         <Table stickyHeader aria-label="sticky table" style={{ overflowX: "hidden" }}>
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
//           <TableBody style={{ background: "#FFF", width: "100%", height: "20rem", }}>
//             {rows.map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Paper>
//   );
// }

// **********************************************





import React, { Component } from 'react'
export default class ArshandTable extends Component {

  fun = () => {
    // const name = ["sunil", "Hello", "Ram", "React"]
    // const [first, ...remaining] = name
    // console.log("first call", first);
    // console.log("remaining call", remaining);



    const vechical = {
      brand: "TATA",
      model: "Altroz",
      color: "black",
    }

    const manfucturing ={ 
      ...vechical,
      year: 2023,
      type: "car",
    }

    // const combine = {...vechical, ...manfucturing }
    console.log("Vechical......", manfucturing);
    
  }

  render() {
    this.fun();

    return (
      <div>
        <h1>JavaScript </h1>
        <p>this is para</p>
      </div>
    )
  }
}
