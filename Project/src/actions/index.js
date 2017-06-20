//if in the future is implemented a Rest Service where is retreaving
//all information as a JSon we are going to create a Axios request.

export function getDenomination(contry) {
  const denominations ={
  usa: {
        bills:['1','2','5','10','20','50','100','500','1000','5000','10000'],
        coins:['0.01','0.05','0.1','0.25','0.5','1']
      },
  mex:{
        bills:['20','50','100','200','500','1000'],
        coins:['0.05','0.1','0.5','1','2','5','10','20']
      }
  }
  const denomination = denominations[contry];

  return {
          payload : denomination,
          type :'GET_DENOMINATION'
          }
}
