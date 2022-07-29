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
/* TOP NAVIGATION */
const LANGUAGE_ITEMS=[
    {name:'VietNam',key:'VN'},
    { name:'English',key:'EN'}
]

const CURRENCY_ITEMS=[
    { name:'USD'},
    {name:'VND'}
]
const findMyState=() =>{
    const success=(position)=>{
        console.log(position)
        const latitude=position.coords.latitude
        const longitude=position.coords.longitude
        const geoAPIURL=`https://api.bigdatacloud.net/data/reverse-geocode-client?
        latitude=${latitude}
        &longitude=${longitude}&localityLanguage=en`
        fetch(geoAPIURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data.countryCode
        })
    }
    const error=()=>{
        console.log('Browser is not supported')
    }
    navigator.geolocation.getCurrentPosition(success, error)


}

function Header() {
    return (<div className={cx('header')}>

        <TopNavigation currency_items={CURRENCY_ITEMS} language_items={LANGUAGE_ITEMS} countryCode={findMyState()}/>

        <MainNavigation nav_items={MainNavigation_ITEMS} />
    </div>  );
}

export default Header;