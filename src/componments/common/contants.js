import store from '../../redux/store'

export const defaultAvatarUrl = "https://download-sdk.oss-cn-beijing.aliyuncs.com/downloads/AgoraChatDemo_Resource/defaultAvatat%403x.png"


export const isChatroomAdmin = (userId) => {
    let adminAry = store.getState()?.roomAdmins || []
    return adminAry.includes(userId);
}

export const giftObj = {
    gift_1: {
        gift_img: "pink_heart@2x.png",
        goldCoins: "gold.png",
        gift_price: 1, 
        gift_name: "PinkHeart",
        clickStatus: false
    },
    gift_2:{
        gift_img: "plastic_flower@2x.png", 
        goldCoins: "gold.png", 
        gift_price: 5, 
        gift_name: "PlasticFlower",
        clickStatus: false
    },
    gift_3: {
        gift_img: "the_push_box@2x.png", 
        goldCoins: "gold.png", 
        gift_price: 10, 
        gift_name: "ThePushBox",
        clickStatus: false
    },
    gift_4: {
        gift_img: "big_ace@2x.png", 
        goldCoins: "gold.png", 
        gift_price: 20, 
        gift_name: "BigAce",
        clickStatus: false
    },
    gift_5: {
        gift_img: "star.png", 
        goldCoins: "gold.png", 
        gift_price: 50, 
        gift_name: "Star",
        clickStatus: false
    },
    gift_6: {
        gift_img: "lollipop@2x.png", 
        goldCoins: "gold.png", 
        gift_price: 100, 
        gift_name: "Lollipop",
        clickStatus: false
    },
    gift_7: {
        gift_img: "diamond@2x.png", 
        goldCoins: "gold.png", 
        gift_price: 500, 
        gift_name: "Diamond",
        clickStatus: false
    },
    gift_8: {
        gift_img: "crown@2x.png", 
        goldCoins: "gold.png", 
        gift_price: 1000, 
        gift_name: "Crown",
        clickStatus: false
    }
}

export const liveStreamConfig = {
    domain: "http://a1.easemob.com",
    protocol:"hls",  // hls  flv  rtmp
    liveDomian:"ws-rtmp-pull.easemob.com",
    pushPoint:"live" 
}


