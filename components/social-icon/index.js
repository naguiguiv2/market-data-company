import { SocialIcon as ReactSocialIcon } from "react-social-icons";
import { MAIN_PURPLE, WHITE } from "../../assets/colors";

const SocialIcon = props => {
  const { url } = props;
  return (
    <ReactSocialIcon
      url={url}
      style={{ height: 40, width: 40, marginRight: 20 }}
      bgColor={MAIN_PURPLE}
      fgColor={WHITE}
    />
  );
};

export default SocialIcon;
