
import './App.css';
import Grid from '@mui/material/Grid';
import { Alert, Box, Button, Card,Icon, Snackbar, Typography} from '@mui/material';
import React from 'react';
function App() {
  const [ data, setData]= React.useState([{id:0,desc:''},
  {id:1,desc:''},
  {id:2,desc:''},
  {id:3,desc:''},
  {id:4,desc:''},
  {id:5,desc:''},
  {id:6,desc:''},
  {id:7,desc:''},
  {id:8,desc:''}]);
  const [ count, setCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [win,setWin]=React.useState('');
  const [showCardP1, setShowCardP1] = React.useState(false);
  const [showCardP2, setShowCardP2] = React.useState(false);
  const [draw, setShowDraw] = React.useState(false);
  // const handleCloseP1 = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setShowCardP2(false);
  // }
  // const handleCloseP2 = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setShowCardP1(false);
  // }
  const resetPlay =() => {
    setData([{id:0,desc:''},
    {id:1,desc:''},
    {id:2,desc:''},
    {id:3,desc:''},
    {id:4,desc:''},
    {id:5,desc:''},
    {id:6,desc:''},
    {id:7,desc:''},
    {id:8,desc:''}]);
    setCount(0);
    setOpen(false);
    setWin('');
    setShowCardP1(false);
    setShowCardP2(false);
    setShowDraw(false);
  }
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const displayNum = (x) => {
    const dataIndex = data.findIndex(item => item.id === x);
 if(data[x].desc === '') {
    if(dataIndex !== -1) {
      const newData = [...data];
        if(count === 0|| count === 2|| count === 4 || count===6||count===8){
          newData[dataIndex] ={...newData[dataIndex],desc:'circle.png'};
          setData(newData);
          setCount(count => count +1);
        }
        if(count===1 || count===3 || count===5|| count===7||count===9){
          newData[dataIndex] ={...newData[dataIndex],desc:'multiply.png'};
          setData(newData);
          setCount(count => count +1);
        }
        if(count>9){
          setCount(0)
        }
      }
  }
  else {
      handleClick();
  }
}

React.useEffect(() => {
if((data[0].desc === 'multiply.png' && data[4].desc === 'multiply.png' && data[8].desc === 'multiply.png' )|| (data[0].desc === 'circle.png' && data[4].desc === 'circle.png' && data[8].desc === 'circle.png')) {
setWin('drawLineReverse');
if(data[0].desc === 'multiply.png' && data[4].desc === 'multiply.png' && data[8].desc === 'multiply.png'){
  setShowCardP2(true);
}
else {
  setShowCardP1(true);
}

}
else if((data[2].desc === 'multiply.png' && data[4].desc === 'multiply.png' && data[6].desc === 'multiply.png' )|| (data[2].desc === 'circle.png' && data[4].desc === 'circle.png' && data[6].desc === 'circle.png')){
  setWin('drawLineNew');
  if(data[2].desc === 'multiply.png' && data[4].desc === 'multiply.png' && data[6].desc === 'multiply.png'){
    setShowCardP2(true);
  }
  else {
    setShowCardP1(true);
  }
}
else if((data[0].desc === 'multiply.png' && data[3].desc === 'multiply.png' && data[6].desc === 'multiply.png' )|| (data[0].desc === 'circle.png' && data[3].desc === 'circle.png' && data[6].desc === 'circle.png')){
  setWin('drawLine2');
  if(data[0].desc === 'multiply.png' && data[3].desc === 'multiply.png' && data[6].desc === 'multiply.png'){
    setShowCardP2(true);
  }
  else {
    setShowCardP1(true);
  }
}
else if((data[1].desc === 'multiply.png' && data[4].desc === 'multiply.png' && data[7].desc === 'multiply.png' )|| (data[1].desc === 'circle.png' && data[4].desc === 'circle.png' && data[7].desc === 'circle.png')){
  setWin('drawLine1');
  if(data[1].desc === 'multiply.png' && data[4].desc === 'multiply.png' && data[7].desc === 'multiply.png'){
    setShowCardP2(true);
  }
  else {
    setShowCardP1(true);
  }
}
else if((data[2].desc === 'multiply.png' && data[5].desc === 'multiply.png' && data[8].desc === 'multiply.png' )|| (data[2].desc === 'circle.png' && data[5].desc === 'circle.png' && data[8].desc === 'circle.png')){
  setWin('drawLine3');
  if(data[2].desc === 'multiply.png' && data[5].desc === 'multiply.png' && data[8].desc === 'multiply.png'){
    setShowCardP2(true);
  }
  else {
    setShowCardP1(true);
  }
}
else if((data[0].desc === 'multiply.png' && data[1].desc === 'multiply.png' && data[2].desc === 'multiply.png' )|| (data[0].desc === 'circle.png' && data[1].desc === 'circle.png' && data[2].desc === 'circle.png')){
  setWin('drawLine4');
  if(data[0].desc === 'multiply.png' && data[1].desc === 'multiply.png' && data[2].desc === 'multiply.png'){
    setShowCardP2(true);
  }
  else {
    setShowCardP1(true);
  }
}
else if((data[3].desc === 'multiply.png' && data[4].desc === 'multiply.png' && data[5].desc === 'multiply.png' )|| (data[3].desc === 'circle.png' && data[4].desc === 'circle.png' && data[5].desc === 'circle.png')){
  setWin('drawLine5');
  if(data[3].desc === 'multiply.png' && data[4].desc === 'multiply.png' && data[5].desc === 'multiply.png'){
    setShowCardP2(true);
  }
  else {
    setShowCardP1(true);
  }
}
else if((data[6].desc === 'multiply.png' && data[7].desc === 'multiply.png' && data[8].desc === 'multiply.png' )|| (data[6].desc === 'circle.png' && data[7].desc === 'circle.png' && data[8].desc === 'circle.png')){
  setWin('drawLine6');
  if(data[6].desc === 'multiply.png' && data[7].desc === 'multiply.png' && data[8].desc === 'multiply.png' ){
    setShowCardP2(true);
  }
  else {
    setShowCardP1(true);
  }
}
else {
  if(data[0].desc !== '' && data[1].desc !== '' && data[2].desc !== '' && data[3].desc !== '' && data[4].desc !== '' && data[5].desc !== '' && data[6].desc !== '' && data[7].desc !== '' && data[8].desc !== '')
    {
      setShowDraw(true);
    }
}
},[data])
  return (
    <>
    <Box display={'flex'}  alignItems={'center'} justifyContent={'flex-start'}  margin={'auto'} flexDirection={window.innerWidth<900?'column':'row'}>
    <Box display={'flex'}  alignItems={'center'} margin={'auto'}>
      <Typography style={{fontSize:50,textTransform:'none',fontWeight:'bolder',color:'darkgoldenrod',fontFamily:'cursive'}}>Tic</Typography>
    </Box>
    
      <Box display={'flex'}  alignItems={'center'} minHeight={'100vh'}  maxWidth={window.innerWidth<900?400:600} margin={'auto'}>
      <Grid container  justifyContent={'center'} alignItems={'center'}>
      {data.map((item,index) =>(
          <Grid item  xs={2} sm={4} md={4} key={index}  borderLeft={index === 0||index ===3||index ===6 ? 0:1} borderTop={index === 0|1|2 ? 0:1} borderBottom={index === 6|| index===7||index===8 ? 0:1} borderRight={index === 2|5|8 ? 0:1} style={{paddingLeft:0,paddingTop:0}}>
            <div style={{ display:'flex' ,alignItems: 'center', justifyContent: 'center' , margin:10}}>
      <img
        src={item.desc===''?'blank.png':item.desc}
        alt={item.desc}
        loading="eager"
        onClick={() => displayNum(index)}
        style={{width:window.innerWidth<900?100:150,height:window.innerWidth<900?100:150,alignContent:'center',backgroundColor:'white'}}
      />
</div>
          </Grid>   
              ))}     
      </Grid>
  
    </Box>
    <Box display={'flex'}  alignItems={'center'} margin={'auto'} flexDirection={window.innerWidth<900?'row':'column'}>
      <Typography style={{fontSize:50,textTransform:'none',fontWeight:'bolder',color:'darkgoldenrod',fontFamily:'cursive'}}>Tac</Typography>
      <Typography style={{fontSize:50,textTransform:'none',fontWeight:'bolder',color:'darkgoldenrod',fontFamily:'cursive'}}>Toe</Typography>
    </Box>
    </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">Please select the empty slot!</Alert>
      </Snackbar>
      <span className={win}></span>
      {showCardP1 &&(<Card sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
<div style={{color:'white', fontSize:100,display:'flex', justifyContent:'center', alignItems:'center', margin:'auto', minHeight:'100vh', flexDirection:'column'}}>
<Typography style={{color:'white', fontSize:100}}>Player 1 Wins!!!</Typography>

<Button  size='small' style={{color:'white', fontSize:50,textTransform:'none'}} disableRipple onClick={resetPlay}><Icon style={{fontSize:50}}>rotate_right</Icon>Play again</Button>
</div>
      </Card> )}
      {showCardP2 &&<Card sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
      <div style={{color:'white', fontSize:100,display:'flex', justifyContent:'center', alignItems:'center', margin:'auto', minHeight:'100vh', flexDirection:'column'}}>
<Typography style={{color:'white', fontSize:100}}>Player 2 Wins!!!</Typography>

<Button  size='small' style={{color:'white', fontSize:50,textTransform:'none'}} disableRipple onClick={resetPlay}><Icon style={{fontSize:50}}>rotate_right</Icon>Play again</Button>
</div>
      </Card> }
      {draw &&<Card sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
      <div style={{color:'white', fontSize:100,display:'flex', justifyContent:'center', alignItems:'center', margin:'auto', minHeight:'100vh', flexDirection:'column'}}>
<Typography style={{color:'white', fontSize:100}}>Draw Match</Typography>

<Button  size='small' style={{color:'white', fontSize:50,textTransform:'none'}} disableRipple onClick={resetPlay}><Icon style={{fontSize:50}}>rotate_right</Icon>Play again</Button>
</div>
      </Card> }
      </>
  );
}



export default App;

