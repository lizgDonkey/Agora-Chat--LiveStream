import React, { useState, useRef,memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, Box, Typography, InputBase } from "@material-ui/core";
import i18next from "i18next";
import { sendGiftsMsg } from '.././../api/giftMsg'
import goldIcon from '../../assets/gift/gold.png'
import heartIcon from '../../assets/gift/pink_heart@2x.png'
import addIcon from '../../assets/images/add.png'
import minusIcon from '../../assets/images/minus.png'
const useStyles = makeStyles((theme) => ({
    root: {
        height: "144px",
        width: "238px",
        borderRadius: "8px",
        border: "1px solid #4D4D4D",
        background: "#1A1A1A",
        padding: "10px"
    },
    giftBox: {
        display: "flex",
        alignItems: "center"
    },
    giftStyle: {
        marginLeft: "10px",
        background: "#333333",
        width: "84px",
        height: "84px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    giftInfo: {
        margin: "10px 0 0 10px",
    },
    giftNameStyle: {
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "18px",
        letterSpacing: "0.15px",
        textalign: "left",
        color: "#FFFFFF"
    },
    giftPriceBox: {
        display: "flex",
        alignItems: "center",
        height:"24px"
    },
    priceText: {
        fontFamily: "Roboto",
        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "16px",
        letterSpacing: "0.15px",
        color: "#FFFFFF",
        margin: "10px"
    },
    inputStyle: {
        width: "130px",
        height: "32px",
        padding: "0 50px;",
        borderRadius: "16px",
        border: "1px solid #666666",
        color: "#FFFFFF !important",
    },
    giftImg: {
        width: "66px",
        height: "66px"
    },
    priceImg: {
        width: "16px",
        height: "16px"
    },
    privateBox: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        padding: "0 0 6px 6px"
    },
    propertyBox: {
        display: "flex",
        alignItems: "center",
        height: "30px"
    },
    btnStyle: {
        height: "30px",
        width: "80px",
        borderRadius: "16px",
        // background: "linear-gradient(to right, red , #e252d3);",
        background: "linear-gradient(to right, red , #e252d3);",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "6px",
        "& hover": {
            background: "#FFFFFF"
        }
    },
    sendTextStyle: {
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "14px",
        letterSpacing: "0px",
        color: "#FFFFFF"
    },
    inputBox: {
        display: "flex",
        alignItems: "center",
        position: "relative"
    },
    minusIconBox: {
        position: "absolute",
        left: "10px",
        width: "16px",
        height: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    },
    addIconBox: {
        position: "absolute",
        right: "10px",
        width: "16px",
        height: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    }

}));

const SenfGifts = ({ open, onClose, selectGift }) => {
    const classes = useStyles();
    let { gift_img, gift_name, gift_price, goldCoins, clickStatus } = selectGift;
    const [inputValue, setInputValue] = useState('1')
    const [clickFlag, setClickFlag] = useState(true)

    const inputRef = useRef();
    const handleInputBaseValue = (e) => {
        let value = e.target.value;
        if (value <= 0 || value > 99) return
        setInputValue(e.target.value)
    }

    const handleClickInputBase = () => {
        inputRef.current.focus({
            cursor: 'end',
        });
        setInputValue(' ')
    }
    const handleSendGifts = (e) => {
        e.preventDefault();
        if (clickFlag) {
            setClickFlag(false);
            sendGiftsMsg(selectGift, inputValue);
            setInputValue(1)
        }
        setTimeout(() => {
            setClickFlag(true);
        }, 300);
        onClose && onClose();
    }
   
    const handleAddChange = () => {
        let addNumber = Number(inputValue) + 1;
        setInputValue(addNumber);
    }

    const handleMinusChange = () => {
        let minusNumber = Number(inputValue) - 1;
        if (minusNumber === 0) return
        setInputValue(minusNumber);
    }

    const handleColsePopover = () => {
        onClose && onClose();
        setInputValue(1)
    }

    return (
        <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleColsePopover}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Box className={classes.root}>
                <Box className={classes.giftBox}>
                    <Box className={classes.giftStyle}>
                        <img src={gift_img ? require(`../../assets/gift/${gift_img}`) : heartIcon}
                            alt=""
                            className={classes.giftImg} />
                    </Box>
                    <Box className={classes.giftInfo}>
                        <Typography className={classes.giftNameStyle}>{gift_name}</Typography>
                        <Box className={classes.giftPriceBox}>
                            <img
                                className={classes.priceImg}
                                src={goldCoins ? require(`../../assets/gift/${goldCoins}`) : goldIcon}
                                alt=""
                            />
                            <Typography className={classes.priceText} >{gift_price}</Typography>
                        </Box>
                        <Box className={classes.inputBox}>
                            <InputBase
                                ref={inputRef}
                                type="tel"
                                placeholder={i18next.t('Number')}
                                value={inputValue}
                                style={{textAlign:"center"}}
                                className={classes.inputStyle}
                                onChange={handleInputBaseValue}
                                onClick={handleClickInputBase}
                            />
                            <Box className={classes.minusIconBox} onClick={() => handleMinusChange()}>
                                <img src={minusIcon} alt="" />
                            </Box>
                            <Box className={classes.addIconBox} onClick={() => handleAddChange()}>
                                <img src={addIcon} alt=""  />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.privateBox}>
                    <Box className={classes.propertyBox}>
                        <img
                            className={classes.priceImg}
                            src={goldCoins ? require(`../../assets/gift/${goldCoins}`) : goldIcon}
                            alt=""
                        />
                        <Typography className={classes.priceText} >{i18next.t('Subtotal')}</Typography>
                        <Typography className={classes.priceText} >32</Typography>
                    </Box>
                    <Box className={classes.btnStyle}>
                        <Typography
                            className={classes.sendTextStyle}
                            onClick={handleSendGifts}>
                            {i18next.t('Send')}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Popover>
    );
};

export default memo(SenfGifts);
