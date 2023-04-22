import { image, square, triangle } from "ionicons/icons";
import Tab1 from "../pages/Home/Tab1";
import Tab2 from "../pages/PhotoGallery/Tab2";
import Tab3 from "../pages/About/Tab3";

export const routes = [
    {
        label: "Tab 1",
        path: "/tab1",
        icon: triangle,
        component: Tab1,
        isTab: true,
        redirect: true,
    },
    {
        label: "Gallery",
        path: "/tab2",
        icon: image,
        component: Tab2,
        isTab: true,
        redirect: false,
    },
    {
        label: "Tab 3",
        path: "/tab3",
        icon: square,
        component: Tab3,
        isTab: true,
        redirect: false,
    },
]