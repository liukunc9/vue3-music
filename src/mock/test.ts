import { IBanner, ISongUrl, ISongSheet } from "@/models";
import { IBaseResp } from "@/models/baseResp";

export default {
  listBanner(): IBaseResp<IBanner[]> {
    return {
      code: 0,
      data: [
        {
          pic: "https://p1.music.126.net/eLa897mPDFBNizBqbkIPVg==/109951168182295247.jpg",
          targetId: 1,
        },
        {
          pic: "https://p1.music.126.net/1Wvh0PF7ObLjIoXBemqMUA==/109951168179787610.jpg",
          targetId: 2,
        },
        {
          pic: "https://p1.music.126.net/62q0wg7f0S9ZBbaik2BckQ==/109951168180395799.jpg",
          targetId: 3,
        },
        {
          pic: "http://p1.music.126.net/W3FF7T6MR_xLd-V0TQO6-A==/109951169251913384.jpg",
          targetId: 4,
        },
        {
          pic: "http://p1.music.126.net/h5Wh0NY-R6LH4iw8hpzMcQ==/109951169251890622.jpg",
          targetId: 5,
        },
        {
          pic: "http://p1.music.126.net/SNzdCLU25auJ3nCEHr6Nbg==/109951169251917559.jpg",
          targetId: 6,
        },
        {
          pic: "http://p1.music.126.net/xi2VBlgbUfmm-kmtIMheBA==/109951169251939548.jpg",
          targetId: 7,
        },
      ],
    };
  },
  getSongUrl(): IBaseResp<ISongUrl> {
    return {
      code: 0,
      data: {
        id: 1,
        url: "/SG Wannabe - Wedding.mp3",
      },
    };
  },
  songSheet(): IBaseResp<ISongSheet[]> {
    return {
      code: 0,
      data: [
        {
          text: "乡村之旅：安静惬意·与自然同在",
          src: "http://c1.kgimg.com/custom/150/20201207/20201207134716994336.jpg",
        },
        {
          text: "披荆斩棘的哥哥 合辑",
          src: "http://imge.kugou.com/soft/collection/150/20210813/20210813110609255220.jpg",
        },
        {
          text: "丹心赋：望九州风月，祈万世长安",
          src: "http://imge.kugou.com/soft/collection/150/20210912/20210912000735358694.jpg",
        },
        {
          text: "巅峰ing-TA们创造着欧美乐坛新荣耀",
          src: "http://imge.kugou.com/soft/collection/150/20210914/20210914141726699353.jpg",
        },
        {
          text: "国风：饮一壶清茶,笑看十里风光",
          src: "http://imge.kugou.com/soft/collection/150/20201203/20201203163919492030.jpg",
        },
        {
          text: "【国创音乐精选】聆听穿越动漫世界",
          src: "http://imge.kugou.com/soft/collection/150/20201029/20201029175832367762.jpg",
        },
        {
          text: "通勤路上不孤单！华语情歌来相伴",
          src: "http://c1.kgimg.com/custom/150/20201206/20201206141703862350.jpg",
        },
        {
          text: "一壶酒，一卷书，半世逍遥半日闲",
          src: "http://c1.kgimg.com/custom/150/20201110/20201110183236127742.jpg",
        },
        {
          text: "一曲入魂，那些自带泪点的OST",
          src: "http://imge.kugou.com/soft/collection/150/20200821/20200821212630943034.jpg",
        },
        {
          text: "小声唱我们的歌，属于成长的印记",
          src: "http://c1.kgimg.com/custom/150/20201203/20201203233554448176.jpg",
        },
        {
          text: "千秋如一梦，历史终留名",
          src: "http://c1.kgimg.com/custom/150/20201210/20201210190502593893.jpg",
        },
        {
          text: "年末促销！服装店里的欧美风",
          src: "http://c1.kgimg.com/custom/150/20201207/20201207075030766670.jpg",
        },
      ],
    };
  },
};
