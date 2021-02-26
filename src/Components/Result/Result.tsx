import React from 'react';
import { CalculateResult } from '../../QA/CalculateResult';
import Zoom from 'react-reveal/Zoom';
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

export default function Result({ ans }: { ans: string[] }) {
  const link: string = 'https://www.letsplayit.web.app';
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}>
        <div style={{ flexDirection: 'column' }}>
          <h1>Your score : </h1>
          <Zoom bottom>
            <h1 style={{ textAlign: 'center' }}>{CalculateResult(ans)} / 10</h1>
          </Zoom>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: 'center', margin: 50 }}>Share this quiz.</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FacebookShareButton
            quote={"Let's Play It."}
            url={link}
            children={<FacebookIcon size={50} round={true} />}
          />
          <WhatsappShareButton
            title={"Let's Play It."}
            url={link}
            children={<WhatsappIcon size={50} round={true} />}
          />
          <TwitterShareButton
            title={"Let's Play It."}
            hashtags={['react', 'reactjs']}
            url={link}
            children={<TwitterIcon size={50} round={true} />}
          />
          <LinkedinShareButton
            title={"Let's Play It."}
            url={link}
            source={link}
            children={<LinkedinIcon size={50} round={true} />}
          />
        </div>
      </div>
    </>
  );
}
