import React, { memo } from 'react';
import "./Pagenation.css"
const Pagenation = memo(({ data, nextPage }) => {
    const numOfPagenation = []
    if (data) {
        let x = Math.ceil(data / 9)
        for (let i = 0; i < x; i++) {
            numOfPagenation.push(i)
        }
    }
    return (
        <div className='flex items-center justify-center mt-12 gap-3'>
            {data &&
                numOfPagenation.length > 1 &&
                numOfPagenation.map(btn => btn === 0 ?
                    <button className='btnPagenation  w-8 h-8 flex items-end justify-center text-white border-[#ea4343] border-[2px] bg-transparent rounded-full' onClick={(e) => { nextPage(btn, e) }} key={btn}>{btn + 1}</button>
                    :
                    <button className={`btnPagenation w-8 h-8 flex items-end justify-center text-white border-[#ea4343] border-[2px] bg-transparent rounded-full `} onClick={(e) => { nextPage(btn, e) }} key={btn}>{btn + 1}</button>)}
        </div>
    );
});

export default Pagenation;