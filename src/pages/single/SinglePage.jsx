import React from 'react'
import { useParams } from 'react-router-dom'
import useGet from '../../hooks/useGet';
import SwiperCard from '../../components/SwiperCard';

const SinglePage = () => {
    const {id} = useParams("id");
    const {data , loading} = useGet({url: `products/${id}`})
    const item = data.data;

    if (loading) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://loading.io/spinner/balls/-polygon-ball-circle-round-slack"
        alt="Loading"
        style={{ width: "100%" , height:"100%" }}
      />
    </div>
  );
}
  return (
    <div className='grid grid-cols-2 pt-[100px] container mx-auto max-w-[1400px] w-full'>
        <div>
           <SwiperCard images={item.images}/>
        </div>
    </div>
  )
}

export default SinglePage