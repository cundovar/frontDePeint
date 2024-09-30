import React, { useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { getFacebookUrl } from "@phntms/react-share";
import { getShareUrl, SocialPlatforms } from "@phntms/react-share";
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

const SocialMedia = ({ postImage, URLimage, onclick, onclick2 }) => {
    const [hoverDiv, setHoverDiv] = useState(false)
    const [clickDiv, setClickDiv] = useState(false)
    const pageUrl=window.location.href
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
        setClickDiv(true)
        setHoverDiv(false)
    }

    return (
        <div className=" w-full ">


            <div className=" mt-5  flex w-full justify-center space-x-3   max-xl:hidden">
                <div className="h-10 w-10  image overflow-hidden cursor-pointer" onClick={onclick}>
                    <img className="object-cover" src={`${URLimage}/${postImage}`} alt="img-id" />
                </div>
                <div className="h-10 w-10  bg-stone-200 cursor-pointer" onClick={onclick2}>
                    <img className="object-cover logo" src="../images/logo/canape.webp" alt="logo-canape" />
                </div>


            </div>
            <div className=" flex w-full border relative items-end justify-end">
                <div className={`${hoverDiv ? "visible" : "hidden"} p-1 bg-black text-white border -top-10  absolute`}>
                    Partager
                </div>
                <div className={`${clickDiv ? "visible" : "hidden"} flex p-1  bg-black text-white border -top-10  absolute`}>

                    <a href={getFacebookUrl({ url: pageUrl})}>
                        <FacebookIcon />

                    </a>
                    < TwitterShareButton url={pageUrl} >
                  < XIcon/>
                    </ TwitterShareButton>
                </div>
                <div className="w-1/2  cursor-pointer flex justify-end space-x-5 mr-5" onMouseEnter={hovered} onMouseLeave={hoverleave} onClick={socialClick}>

                    <ShareIcon />
                </div>

            </div>


        </div>
    )
}


export default SocialMedia