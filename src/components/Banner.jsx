import { useEffect, useRef, useState } from "react";


const Banner = ({handleGetData}) => {
  const searchRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const divStyle = {
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(./images/bannerimage.png)',
    backgroundSize: 'cover',
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    setKeyword(e.target.search.value);
    
    
  }
  useEffect(()=>{
    console.log(keyword);
    handleGetData(keyword)
  },[keyword])
  
  return (
    <div style={divStyle}

      className="h-[500px] flex flex-col justify-center items-center gap-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
        I Grow By Helping People In Need
      </h1>
      <form onSubmit={handleSubmit} className="flex w-min justify-center items-center border-2 border-gray-600 text-xl rounded-md">
        <input placeholder="i.e.All/Education/Health" className="pl-4 py-2" type="search" name="search" id="search" />
        <button type="submit" className="bg-red-600 text-white px-4 py-2">Search</button>
      </form>
    </div>
  )
}

export default Banner