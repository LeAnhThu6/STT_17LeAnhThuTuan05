import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Screen01 = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  const { color } = route.params || "Xanh";
  return (
    <View style={styles.screen1}>
      <Image
        style={styles.vsBlueIcon}
        contentFit="cover"
        source={
          color == "Xám"
            ? require("../assets/vs_silver.png")
            : color == "Đỏ"
            ? require("../assets/vs_red.png")
            : color == "Đen"
            ? require("../assets/vs_black.png")
            : require("../assets/vs_blue.png")
        }
      />
      <Text style={[styles.inThoiVsmart]}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.starParent}>
          <Image
            style={styles.frameChild}
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameSpaceBlock]}
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.frameInner, styles.frameSpaceBlock]}
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameSpaceBlock]}
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.frameInner, styles.frameSpaceBlock]}
            source={require("../assets/star.png")}
          />
        </View>
        <Text style={[styles.xem828Nh, styles.xem828NhTypo]}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>1.790.000 đ</Text>

      <View style={styles.parent}>
        <Text style={[styles.text1, styles.text1Position]}>1.790.000 đ</Text>
        <View style={styles.lineView} />
      </View>
      <View style={[styles.uRHnHonTinParent, styles.parentFlexBox]}>
        <Text style={[styles.uRHn, styles.textTypo]}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          style={styles.groupIcon}
          source={require("../assets/group-1.png")}
        />
      </View>
      <TouchableOpacity
        style={[styles.muChnMuParent, styles.muChnMuParentLayout]}
        onPress={() => navigate("Screen02", { color })}
      >
        <View style={styles.muChnMu} onClick={() => {}}>
          <Text style={[styles.muChnMu1, styles.xem828NhTypo]}>
            4 MÀU-CHỌN MÀU
          </Text>
        </View>
        <View style={[styles.rectanglePressable, styles.rectangleBorder]} />
        <Image
          style={styles.vectorIcon}
          source={require("../assets/vector.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rectangleParent, styles.rectanglePosition]}
      >
        <View style={[styles.rectangleView, styles.rectanglePosition]} />
        <Text style={[styles.chnMua, styles.chnMuaPosition]}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameSpaceBlock: {
    marginLeft: 2,
    height: 25,
  },
  xem828NhTypo: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
  },
  text1Position: {
    top: 0,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  muChnMuParentLayout: {
    height: 34,
    width: 332,
    position: "absolute",
    marginLeft: -166,
  },
  rectangleBorder: {
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    top: 0,
  },
  rectanglePosition: {
    height: 44,
    width: 326,
    marginLeft: -163,
    left: "50%",
    position: "absolute",
  },
  chnMuaPosition: {
    top: "50%",
    left: "50%",
  },

  text: {
    top: 430,
    fontSize: 18,
    color: Color.colorBlack,
    textAlign: "left",
    left: 23,
    position: "absolute",
  },
  frameChild: {
    height: 25,
    width: 23,
  },
  frameItem: {
    width: 24,
  },
  frameInner: {
    width: 23,
    marginLeft: 2,
  },
  starParent: {
    flexDirection: "row",
  },
  xem828Nh: {
    width: 135,
    marginLeft: 23,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  frameParent: {
    top: 395,
    left: 22,
  },
  text1: {
    left: 4,
    color: "rgba(0, 0, 0, 0.58)",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
  },
  lineView: {
    top: 9,
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 93,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  parent: {
    top: 430,
    left: 162,
    width: 92,
    height: 18,
    position: "absolute",
  },
  uRHn: {
    fontSize: 12,
    color: "#fa0000",
  },
  groupIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
    top: -1,
  },
  uRHnHonTinParent: {
    top: 460,
    left: 22,
    alignItems: "center",
  },
  muChnMu1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  muChnMu: {
    left: 103,
    top: 8,
    position: "absolute",
  },
  rectanglePressable: {
    backgroundColor: "rgba(196, 196, 196, 0)",
    borderColor: "rgba(0, 0, 0, 0.46)",
    height: 34,
    width: 332,
    position: "absolute",
    left: 0,
  },
  vectorIcon: {
    height: "41.18%",
    width: "3.46%",
    top: "29.41%",
    right: "5.87%",
    bottom: "29.41%",
    left: "90.66%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  muChnMuParent: {
    top: 490,
    left: "50%",
  },
  rectangleView: {
    backgroundColor: "#ee0a0a",
    borderColor: "#ca1536",
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    top: 0,
  },
  chnMua: {
    marginTop: -11,
    marginLeft: -52,
    fontSize: 20,
    color: "#f9f2f2",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent: {
    top: 583,
  },

  inThoiVsmart: {
    top: 370,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
    left: 22,
  },
  rectangleGroup: {
    left: 0,
  },
  vsBlueIcon: {
    marginLeft: -150,
    top: 10,
    width: 300,
    height: 360,
    left: "50%",
    position: "absolute",
  },
  screen1: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Screen01;
