import React from "react";
// import BOOKS from "../../pages/books.json"
import { Button, Img, Text } from "../../components";
import { useSearchContext } from "../../context/searchContext";
const ListPage = () => {
  const {searchInput,filtered,getData} = useSearchContext()
  const [loadMore,setLoadMore] = React.useState(5)
  // const filterdBooks =  BOOKS.filter((val) => val.title.toLowerCase().includes(searchInput.toLowerCase()))
  // Make a GET request



  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full ">
        <Text
          className="capitalize mt-[125px] md:mt-5 text-2xl sm:text-[20px] md:text-[25px] text-black-900_b2 "
          size="txtInterMedium30"
        >
          showing result for {searchInput}
        </Text>
        <div className="bg-gray-900 flex flex-col items-center max-w-[84%] mt-4 mx-auto md:px-5 py-2 w-full">
          <Text
            className="capitalize text-2xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtInterMedium30WhiteA700"
          >
            Result
          </Text>
        </div>
        <ul className="flex outline bg-gray-900 text-white-A700 py-2 w-[84%] justify-between sm:hidden">
          <li className="flex justify-around w-[35%]">
            <span>Image</span>
            <span>Description</span>
          </li>
          <li className="w-[37%] flex justify-evenly">
            <span>Price</span>
            <span>Site</span>
            <span>Action</span>
          </li>
        </ul>
        <div className="overflow-auto w-[84%] gap-4 flex flex-col ">
        
          { filtered === 0 ? (
            getData.slice(0, loadMore).map((val,id) => {
              
              const {image,description,price,title,seller,readMoreLink} = val
              return (
                <div className={`flex  justify-evenly py-3 h-[160px] md:h-[200px] ${id%2 === 0 ? "bg-gray-950":""}`  } key={id}>
                  <div className="flex w-[60%]   gap-5">
                    <Img src={image} alt=""
                      className="w-[20%]  max-h-[150px] object-contain"
                    />
                    <div className=" flex flex-col mt-4 sm:m-0 gap-4">
                      <h3 className="text-[#000] font-bold sm:text-md">{title}</h3>
                      <p className="text-sm">{description.substring(0,55)}...</p>
                      <a href={readMoreLink}>Read More</a>
                    </div>
                  </div>
                  <ul className="w-[25%] flex justify-between items-center   h-[25%] sm:h-full flex-wrap">
                    <li className="sm:text-md">{price}</li>
                    <li className="sm:text-md">{seller}</li>
                    <Button
                      className="capitalize cursor-pointer  h-[40px] sm:h-[20px]  text-sm md:pt-0 p-3 text-center"
                      shape="round"
                      color="orange_700"
                      size="xs"
                      variant="fill"
                    > Buy Now</Button>
                  </ul>
                </div>
                
                )
              })
            ):( filtered.slice(0, loadMore).map((val,id) => {
              
              const {image,description,price,title,seller,readMoreLink} = val
              return (
                <div className={`flex  justify-evenly py-3 h-[160px] md:h-[200px] ${id%2 === 0 ? "bg-gray-950":""}`  } key={id}>
                  <div className="flex w-[60%]   gap-5">
                    <Img src={image} alt=""
                      className="w-[20%]  max-h-[150px] object-contain"
                    />
                    <div className=" flex flex-col mt-4 sm:m-0 gap-4">
                      <h3 className="text-[#000] font-bold sm:text-md">{title}</h3>
                      <p className="text-sm">{description.substring(0,55)}...</p>
                      <a href={readMoreLink}>Read More</a>
                    </div>
                  </div>
                  <ul className="w-[25%] flex justify-between items-center   h-[25%] sm:h-full flex-wrap">
                    <li className="sm:text-md">{price}</li>
                    <li className="sm:text-md">{seller}</li>
                    <Button
                      className="capitalize cursor-pointer  h-[40px] sm:h-[20px]  text-sm md:pt-0 p-3 text-center"
                      shape="round"
                      color="orange_700"
                      size="xs"
                      variant="fill"
                    > Buy Now</Button>
                  </ul>
                </div>
                
                )
              }))}
            <Button className="bg-orange-700 w-[20%] md:w-[80%] mx-auto py-5 rounded-full mt-5"
            onClick={()=> setLoadMore((prev)=> prev + 5)}
            >Load More</Button>
        </div>

      </div>
    </>
  );
};

export default ListPage;
