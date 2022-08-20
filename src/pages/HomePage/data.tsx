import { VIDEO } from "../../components/Assets/ImageConstant";
import {CREATE_ACCOUNT, POST_ROLE, FACILITIES, FIND_ROLE, SEARCH_TALENT} from '../../Navigation/routes'


export const data = [
    {
        image: VIDEO,
        title: "Create a Profile",
        subtitle: "Create a new User profile",
        link: CREATE_ACCOUNT
    },
    {
        image: VIDEO,
        title: "Post Cast Call",
        subtitle: "Post cast call/auditions",
        link: POST_ROLE
    },
    {
        image: VIDEO,
        title: "Post Facility",
        subtitle: "Post facilities and equipment for sale or rent",
        link: FACILITIES
    },
    {
        image: VIDEO,
        title: "Find Talent",
        subtitle: "Search for talents for your production",
        link: SEARCH_TALENT
    },
    {
        image: VIDEO,
        title: "Audition or Find Roles",
        subtitle: "Search for open roles or auditions",
        link: FIND_ROLE
    },
    {
        image: VIDEO,
        title: "Find Facility",
        subtitle: "Search for facilities and equipment to buy or rent",
        link: FACILITIES
    }
]