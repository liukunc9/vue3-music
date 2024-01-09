import { Camera, Music, Video, Fm } from "@icon-park/vue-next";
import type { Icon } from "@icon-park/vue-next/lib/runtime";

declare interface IMenu {
    name: string;
    key: string;
    icon?: Icon;
}

declare interface IMenus {
    name: string;
    menus: IMenu[];
}

export function useMenu(): IMenus[] {
    const menus: IMenus[] = [
        {
            name: '在线音乐',
            menus: [
                {
                    name: "推荐",
                    key: "discover",
                    icon: Camera,
                },
                {
                    name: "音乐馆",
                    key: "music",
                    icon: Music,
                },
                {
                    name: "视频",
                    key: "video",
                    icon: Video,
                },
                {
                    name: "电台",
                    key: "dj",
                    icon: Fm,
                }
            ]
        },
        {
            name: "我的音乐",
            menus: []
        }
    ]

    return menus
}