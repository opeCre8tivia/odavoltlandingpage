
interface Props {
   width?:number,
   height?:number
}


const Spacer=({width,height=10}:Props)=>{


    return(
        <div style={{height:height,width:width}}></div>
    )
}

export default Spacer