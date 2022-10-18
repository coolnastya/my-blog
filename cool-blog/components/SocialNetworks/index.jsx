import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import ScreenEgg from '../ScreenEgg';

const socialNetworks = [
  {
    id: 1,
    href: 'www.linkedin.com/in/anastasiia-cherkashina',
    icon: AiFillLinkedin,
  },
  {
    id: 2,
    href: 'https://github.com/coolnastya',
    icon: AiFillGithub,
  }
]

const SocialNetworks = ({
  className,
}) => {
  return (
    <ScreenEgg type="left">
    <ul className={cl(className, styles.list)}>
      {socialNetworks.map((socialNetwork) => (
        <li
          key={socialNetwork.id}
          className={styles.listItem}
        >
          <a
            href={socialNetwork.href}
            target="_blank"
            className={styles.listLink}
          >
            {React.createElement(
              socialNetwork.icon,
              {
                color: 'black',
                size: 50
              }
            )}
          </a>
        </li>
      ))}
    </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks
