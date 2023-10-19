import React from "react";

// import { Button, Text,Input } from "components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSearchContext } from "../../context/searchContext";
import ListPage from "../ListPage";
import { Button, Input, Text } from "../../components";

const HomePage = () => {
  const [search, setSearch] = React.useState(false)
  
  const {setSearchInput} = useSearchContext
  // const onSearch = () => {
  //   const result = BOOK.filter((value)=> value.tolowerCase.inl)
  // }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto  w-full">
        <Header className="bg-gray-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-around md:p-5 w-full  h-[80px]" />
        <Text
          className="capitalize mt-[50px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_b2"
          size="txtInterMedium30"
        >
          search for item 
        </Text>
        <Input
          className="common-pointer capitalize cursor-pointer font-light h-[30px] mt-4 w-[70vw] text-base text-center "
          type="text"
          color="black_900"
          placeholder="enter search item"
          onChange={setSearchInput}
        />
        <Button
          className="capitalize cursor-pointer font-bold leading-[normal] mt-[30px] text-base text-center w-[164px]"
          shape="round"
          color="gray_900"
          size="xs"
          variant="fill"
          onClick={() => setSearch(!search)}
        >
          search
        </Button>
        {search && <ListPage />}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
