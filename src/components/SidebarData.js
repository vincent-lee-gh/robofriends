
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';


export const SidebarData = [
  {
    title: 'App',
    path: '/app',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Info',
    path: '/info',
    icon: <FaIcons.FaInfoCircle />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpen: <RiIcons.RiArrowUpFill />,
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
  }
]

