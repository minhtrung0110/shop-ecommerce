import style from './Header.module.scss'
import classNames from 'classnames/bind';
import TopNavigation from './TopNavigation'
import MainNavigation from './MainNavigation'
import config from '~/config'


const cx=classNames.bind(style);
const MainNavigation_ITEMS=[
    { name:'HOME',path:config.routes.home },
    { name:'SHOP',path:config.routes.shop },
    { name:'BLOG',path:config.routes.blog },
    { name:'CONTACT',path:config.routes.contact },
]

function Header() {
    return (<div className={cx('header')}>

        <TopNavigation />

        <MainNavigation nav_items={MainNavigation_ITEMS} />
    </div>  );
}

export default Header;