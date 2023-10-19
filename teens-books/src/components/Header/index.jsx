import { Button } from "../Button";
import { Text } from "../Text";


const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="capitalize  text-lg text-white-A700"
          size="txtInterRegular18"
        >
          home{" "}
        </Text>
        <Text
          className="capitalize   text-lg text-white-A700"
          size="txtInterRegular18"
        >
          About Us
        </Text>
        <Text
          className="capitalize  text-lg text-white-A700 mr-[120px]"
          size="txtInterRegular18"
        >
          contact Us
        </Text>
        <Button
          className="capitalize cursor-pointer font-bold font-inter leading-[normal] min-w-[110px]  text-base text-center"
          shape="round"
          color="orange_700"
          size="xs"
          variant="fill"
        >
          shop now
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
