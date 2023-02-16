import { FacebookShareButton, FacebookIcon } from "react-share";
import LinkedinIcon from "react-share/lib/LinkedinIcon";
import LinkedinShareButton from "react-share/lib/LinkedinShareButton";
import TwitterIcon from "react-share/lib/TwitterIcon";
import TwitterShareButton from "react-share/lib/TwitterShareButton";

const SocialMediaIcons = ({ postUrl }: { postUrl: string }) => {
  return (
    <div className="flex justify-between">
      <FacebookShareButton url={postUrl} hashtag="#linzoptik">
        <FacebookIcon
          size={24}
          className="rounded-full mx-2 opacity-30 hover:opacity-100 duration-100"
        />
      </FacebookShareButton>
      <TwitterShareButton url={postUrl}>
        <TwitterIcon
          size={24}
          className="rounded-full mx-2 opacity-30 hover:opacity-100 duration-100"
        />
      </TwitterShareButton>
      <LinkedinShareButton url={postUrl}>
        <LinkedinIcon
          size={24}
          className="rounded-full mx-2 opacity-30 hover:opacity-100 duration-100"
        />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialMediaIcons;
