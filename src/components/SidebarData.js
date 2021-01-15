
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'App',
    path: '/app',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Info',
    path: '/info' ,
    link: 'https://vincent-lee-gh.github.io/robofriends/',
    // https://vincent-lee-gh.github.io/robofriends/
    icon: <FaIcons.FaInfoCircle />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: 'About',
        path: '/info/about',
        icon:  <BiIcons.BiGlasses />,
      },
      {
        title: 'Repo',
        path: '/info/repo',
        icon:  <BiIcons.BiGitRepoForked />,
      },
      {
        title: 'MyGithub',
        path: '/info/github',
        icon:  <SiIcons.SiGithub />,
      },
    ],
  },
  
]

