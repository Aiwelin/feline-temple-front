import { AppstoreOutlined, MailOutlined, SettingOutlined, LogoutOutlined, ProfileOutlined } from '@ant-design/icons';
import { HomeCatIcon } from '../icons/CatsIcon'
import type { MenuProps } from 'antd';


const user = { name: 'Amandine', lastName: 'PICHARD' }

const itemsConnected: MenuProps['items'] = [
  {
    label: 'Accueil',
    key: 'home',
    icon: <HomeCatIcon style={{ color: 'hotpink' }} />,
  },
  {
    label: 'Mes réservations',
    key: 'bookingMenu',
    icon: <AppstoreOutlined />,
  },
  {
    label: `${user.name} ${user.lastName}`,
    key: 'userMenu',
    icon: <SettingOutlined />,
    children: [
      {
        label: 'Mon profil',
        key: 'profilMenu',
        icon: <ProfileOutlined />,
      },
      {
        label: 'Mes notifications',
        key: 'mailMenu',
        icon: <MailOutlined />,
      },
      {
        label: 'Se déconnecter',
        key: 'logoutMenu',
        icon: <LogoutOutlined />,
      },
    ],
  },
];


export default itemsConnected;