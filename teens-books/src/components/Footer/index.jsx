import { Img } from "../Img"
import { Text } from "../Text"

const Footer = () => {
  return (
    <footer className="bg-gray-900 flex flex-col items-center  mt-[118px] p-[65px] md:px-5 w-full ">
          <div className="flex flex-col gap-[43px] items-center justify-start  w-[44%] md:w-full">
            <div className="flex flex-row gap-[13px] items-center justify-start w-[79%] md:w-full">
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_instagram.png"
                alt="instagram"
              />
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_google.png"
                alt="google"
              />
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_facebookf.png"
                alt="facebookf"
              />
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_twitter.png"
                alt="twitter"
              />
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_letter.png"
                alt="letter"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
              <Img
                className="h-[19px] md:h-auto object-cover w-[19px]"
                src="images/img_copyrightallrights.png"
                alt="copyrightallrig"
              />
              <Text
                className="text-lg text-white-A700"
                size="txtInterRegular18"
              >
                ALL rights reserverd. Recommender System
              </Text>
            </div>
          </div>
        </footer>

  )
}

export default Footer
