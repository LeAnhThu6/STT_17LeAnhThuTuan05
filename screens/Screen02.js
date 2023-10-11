import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color } from "../GlobalStyles";

const Screen02 = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  const [color, setcolor] = useState("Xanh");
  const [image, setimage] = useState(require("../assets/vs_blue.png"));

  return (
    <View style={styles.screen2}>
      <View style={styles.atTop}>
        <Image style={styles.vsBlueIcon} contentFit="cover" source={image} />
        <View>
          <Text style={styles.namePhone}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={styles.namePhone}>
            Màu:{" "}
            <Text style={{ fontFamily: FontFamily.robotoBold }}>{color}</Text>
          </Text>
          <Text style={styles.namePhone}>
            Cung cấp bởi{" "}
            <Text style={{ fontFamily: FontFamily.robotoBold }}>
              Tiki Tradding
            </Text>
          </Text>

          <Text style={styles.namePhone}>1.990.000đ</Text>
        </View>
      </View>
      <View style={styles.rectangleView}>
        <Text style={styles.textChonMau}>Chọn một màu bên dưới:</Text>
        <View style={styles.bangChonMau}>
          <TouchableOpacity
            style={styles.color1}
            onPress={() => {
              setcolor("Xám");
              setimage(require("../assets/vs_silver.png"));
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.color2}
            onPress={() => {
              setcolor("Đỏ");
              setimage(require("../assets/vs_red.png"));
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.color3}
            onPress={() => {
              setcolor("Đen");
              setimage(require("../assets/vs_black.png"));
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.color4}
            onPress={() => {
              setcolor("Xanh");
              setimage(require("../assets/vs_blue.png"));
            }}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btnOk}
          onPress={() => {
            navigate("Screen01", {
              color,
            });
            console.log(color);
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.robotoRegular,
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 21,
              color: "white",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen2: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    flexDirection: "column",
  },
  atTop: {
    flexDirection: "row",
  },
  vsBlueIcon: {
    width: 112,
    height: 132,
    left: 4,
  },
  namePhone: {
    top: 10,
    width: 200,
    left: 10,
    fontFamily: FontFamily.robotoRegular,
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 10,
  },
  rectangleView: {
    backgroundColor: "#c4c4c4",
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  textChonMau: {
    left: 17,
    top: 5,
    fontFamily: FontFamily.robotoRegular,
    fontSize: 18,
    fontWeight: 400,
  },
  color1: {
    backgroundColor: "#c5f1fb",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginTop: 13,
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  color2: {
    backgroundColor: "#F30D0D",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginTop: 13,
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  color3: {
    backgroundColor: "#000000",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginTop: 13,
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  color4: {
    backgroundColor: "#234896",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginTop: 13,
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  btnOk: {
    borderRadius: 10,
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#ca1536",
    borderWidth: 1,
    height: 44,
    marginTop: 30,
    marginLeft: 17,
    marginRight: 17,
  },
  bangChonMau: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Screen02;
