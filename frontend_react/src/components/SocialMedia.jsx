import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin, BsTelegram, BsWhatsapp } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/UmarNurov'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/umar-nurov-3b60701a4/'>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/umar-nurov'>
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href='https://t.me/N_Umar'>
        <BsTelegram />
      </a>
    </div>
    <div>
      <a href='https://wasap.my/+992985355286'>
        <BsWhatsapp />
      </a>
    </div>
  </div>
);

export default SocialMedia;
