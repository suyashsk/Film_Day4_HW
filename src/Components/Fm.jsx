
import film from './film'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
const Fm = () =>{

    return(
        <>
        {
            film.map((item,index)=>{
                return(
                    <div className=" flex text-[white] bg-[#010101] rounded-lg shadow-2xl shadow-gray-800 my-20 w-[55rem] mx-auto">

                        <div className="w-[55%] p-6 ">
                            <div >
                                <div className="flex pb-5">
                                    <div className="h-[8rem] w-[8rem]">
                                        <img key={index} src={item.Images[0]} alt="" className="h-[100%]"/>
                                    </div>
                                    <div className="pl-6">
                                        <h1 className="text-3xl" key={index}>{item.Title}</h1>
                                        <p className="text-sm pb-2 text-blue-400">
                                            <span className="">{item.Year}</span>, <span>{item.Director}</span>
                                        </p>
                                        <p className="text-sm py-4">
                                        <span className=" border border-gray-600 rounded-md px-2">{item.Runtime}</span> ,<span className="pl-2">{item.Genre}</span>  
                                        </p>
                                    
                                    </div>
                                </div>


                                <div className="pb-16 text-sm">
                                    {item.Plot}
                                </div>
                                <div className="flex gap-6">
                                    <a href={item.Poster}><ShareIcon /></a>
                                    <a href=""><FavoriteIcon /></a>
                                    <a href=""><ChatBubbleIcon /></a>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%] ">
                            <img src={item.Images[1]} alt="" className="h-[100%] rounded-r-lg"/>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default Fm;