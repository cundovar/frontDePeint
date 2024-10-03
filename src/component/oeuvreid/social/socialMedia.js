import React, { useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { getFacebookUrl } from "@phntms/react-share";
import { getShareUrl, SocialPlatforms } from "@phntms/react-share";
import PinterestIcon from "@mui/icons-material/Pinterest";
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookShareCount,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";
import LikeButton from "../../common/heart/heart";
import LikeButtonId from "../../common/heart/likebuttonOeuvreId";

const SocialMedia = ({ postImage, URLimage, onclick, onclick2, post, likeButton, pageUrl }) => {
    const [hoverDiv, setHoverDiv] = useState(false)
    const [clickDiv, setClickDiv] = useState(false)

    const hovered = () => {
        if (clickDiv === true) {
            setHoverDiv(false)
        } else {
            setHoverDiv(true)

        }
    }
    const hoverleave = () => {
        setHoverDiv(false)
    }

    const socialClick = () => {
        setClickDiv(!clickDiv)
        setHoverDiv(false)
    }

    return (
        <div className=" w-full flex flex-col max-md:space-y-5 ">


            <div className=" xl:mt-5  flex w-full justify-center space-x-3   ">
                <div className="h-10 w-10  image overflow-hidden cursor-pointer" onClick={onclick}>
                    <img className="object-cover" src={`${URLimage}/${postImage}`} alt="img-id" />
                </div>
                <div className="h-10 w-10  bg-stone-200 cursor-pointer" onClick={onclick2}>
                    <img className="object-cover logo" src="../images/logo/canape.webp" alt="logo-canape" />
                </div>


            </div>
            <div className=" flex w-full  items-end justify-center">
                <div className=" cursor-pointer flex justify-around w-96  space-x-5 mr-5" >

                    <LikeButtonId likesCount={likeButton} oeuvreId={post} />
                    <div className="relative">

                        <div className="relative" onMouseEnter={hovered} onMouseLeave={hoverleave} onClick={socialClick}>
                            <div className={`${hoverDiv ? "visible" : "hidden"} p-1 bg-black text-white  -top-10  absolute`}>
                                Partager
                            </div>
                            <div className={`${clickDiv ? "visible" : "hidden"} flex p-1 space-x-4 bg-black text-white  -top-10  absolute`}>


                                {/* Bouton Pinterest, utilise l'image */}
                                <PinterestShareButton url={pageUrl} media={`${URLimage}/${postImage}`} description="Découvrez cette œuvre sur Pinterest !">
                                    <PinterestIcon />
                                </PinterestShareButton>

                                <FacebookShareButton url={pageUrl} quote="Découvrez cette œuvre !">
                                    <FacebookIcon />
                                </FacebookShareButton>

                                {/* Twitter Share */}
                                <TwitterShareButton url={pageUrl} title="Découvrez cette œuvre !" hashtags={["art", "oeuvre"]}>
                                    <XIcon />
                                </TwitterShareButton>
                            </div>
                            <ShareIcon />
                        </div>

                    </div>


                </div>

            </div>


        </div>
    )
}


export default SocialMedia