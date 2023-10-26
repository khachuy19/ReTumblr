import config from '~/config';

// Pages
import Home from '~/pages/Home';
import HomeFollowing from '~/pages/Home/HomeFollowing';
import HomeForYou from '~/pages/Home/HomeForYou';
import HomeYourTags from '~/pages/Home/HomeYourTags';
import Explore from '~/pages/Explore';
import ExploreToday from '~/pages/Explore/ExploreToday';
import ExploreTrending from '~/pages/Explore/ExploreTrending';
import ExploreForYou from '~/pages/Explore/ExploreForYou';
import ExploreStaffPick from '~/pages/Explore/ExploreStaffPick';
import ExploreAnswerTime from '~/pages/Explore/ExploreAnswerTime';
import Activity from '~/pages/Activity';
import MessagesPage from '~/pages/MessagesPage';
import Profile from '~/pages/Profile';
import Inbox from '~/pages/Inbox';
import Likes from '~/pages/Likes';
import Following from '~/pages/Following';
import Blog from '~/pages/Blog';
import SettingPage from '~/pages/SettingPage';
import AccountSetting from '~/pages/SettingPage/AccountSetting';
import Domain from '~/pages/Domain';
import AdFree from '~/pages/AdFree';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, subComponent: HomeFollowing },
    { path: config.routes.dashboard, component: Home, subComponent: HomeFollowing },
    { path: config.routes.dashboardFollowing, component: Home, subComponent: HomeFollowing },
    { path: config.routes.dashboardForYou, component: Home, subComponent: HomeForYou },
    { path: config.routes.dashboardYourTags, component: Home, subComponent: HomeYourTags },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.exploreToday, component: Explore, subComponent: ExploreToday },
    { path: config.routes.exploreTrending, component: Explore, subComponent: ExploreTrending },
    { path: config.routes.exploreForYou, component: Explore, subComponent: ExploreForYou },
    { path: config.routes.exploreStaffPicks, component: Explore, subComponent: ExploreStaffPick },
    { path: config.routes.exploreAnswertime, component: Explore, subComponent: ExploreAnswerTime },
    { path: config.routes.activity, component: Activity },
    { path: config.routes.messages, component: MessagesPage },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.inbox, component: Inbox },
    { path: config.routes.likes, component: Likes },
    { path: config.routes.following, component: Following },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.setting, component: SettingPage },
    { path: config.routes.settingAccount, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingDashboard, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingNotifications, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingDomains, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingAdFree, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingPurchases, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingSubscriptions, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingApps, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingPrivacy, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingLabs, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.settingGifts, component: SettingPage, subComponent: AccountSetting },
    { path: config.routes.domain, component: Domain },
    { path: config.routes.adFree, component: AdFree },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
