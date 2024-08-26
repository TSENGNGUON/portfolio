import React from "react"


export default function ServicesPart(){

    const dataOfServicesPart = [
        {id: 1, number: 1, titleHead: "Frontend Developer", contentBody: " Lorem ipsum dolor sit amet consecetur adipisicing elit. Sed quibusdam ipsam, excepturi obcaecati repellat, libero, quae nulla a est voluptates ", isMargin: false},

        {id: 2, number: 2, titleHead: "React Js Developer", contentBody: " Lorem ipsum dolor sit amet consecetur adipisicing elit. Sed quibusdam ipsam, excepturi obcaecati repellat, libero, quae nulla a est voluptates ",isMargin: true},
    ]


    return(
       <div className="mt-[181px] w-full h-[1006px] bg-[#EB7711] flex items-center flex-col ">

            <div className="flex flex-col items-center mt-[69px]">
                <p className="font-extrabold text-[64px]">Services</p>
                <p className="font-bold text-[24px] text-[#ffffff] mt-[35px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at </p>
            </div>

            <div className="flex">
            {
                dataOfServicesPart.map(card => (
                <div key={card.id} className="mt-[66px] flex">

                <div style={card.isMargin ? {marginLeft:181}: {marginLeft:0}} className="w-[434px] h-[572px] bg-[#A259FF] rounded-[20px]  flex flex-col items-center border-[3px] border-black shadow-card">
                    {/* Header card on services part */}
                    <div className="font-extrabold text-[96px] text-white w-[132px] h-[132px]  bg-[#0ACF83] rounded-[50%] flex justify-center items-center relative bottom-[69px]">
                    {card.number}
                    </div>

                    {/* Body card on the services part */}
                    <div className="flex flex-col px-[53px] relative bottom-[35px]">
                        <p className="font-extrabold text-[30px] text-white">{card.titleHead}</p>

                        <p className="font-bold text-[28px] text-white ">
                            {card.contentBody} 
                        </p>

                    </div>

                    {/* Footer card on the services part */}
                    <div>
                    <a href="#" className="py-[19px] px-[63px] bg-[#FFDD55] rounded-[10px] font-bold text-[32px] hover:text-white hover:bg-[#0ACF83] ">
                        Learn More
                    </a>
                    </div>

                </div>
            </div>
                ))
            }
            </div>
       </div>
    )
}