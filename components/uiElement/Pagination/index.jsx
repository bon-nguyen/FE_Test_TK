import react from "react";

const Pagination = ({
    current,
    pageSize,
    total,
    onClick
})=> {
    console.log("current", current);
    console.log("pageSize", pageSize);
    console.log("total", total)
    let needStartDots = false;
    let needEndDots = false;

    return (
        <ul className="pagination inline-block">
        
   
            {
                current < total ?
                <button className="min-w-[25px] min-h-[25px] bg-slate-500 text-[16px]">&#8250;</button>
                :
                <button className=" text-[16px]">&#8250; false</button> 
            }
        </ul>
    )
}

export default Pagination;