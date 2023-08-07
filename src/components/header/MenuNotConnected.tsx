import { LoginOutlined } from '@ant-design/icons';
import { HomeCatIcon } from '../icons/CatsIcon'
import type { MenuProps } from 'antd';
const user = { name: 'Amandine', lastName: 'PICHARD' }


const itemsNotConnected: MenuProps['items'] = [
  {
    label: 'Accueil',
    key: 'home',
    icon: <HomeCatIcon style={{ color: 'hotpink' }} />,
  },
  {
    label: `Se connecter`,
    key: 'loginMenu',
    icon: <LoginOutlined />
  },
];

export default itemsNotConnected;