import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {AppStyles} from '../common';
export const HomePage = () => {
  return (
    <View style={homeStyles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={homeStyles.topMenu}>
          <View>
            <Image source={require('../assets/Menu.png')} />
          </View>
          <View>
            <Text style={[AppStyles.textColor, homeStyles.headerText]}>
              Trading Details
            </Text>
          </View>
          <View>
            <Image source={require('../assets/Notification.png')} />
          </View>
        </View>
        <View style={homeStyles.bodyContainer}>
          <View style={homeStyles.priceContainer}>
            <View style={homeStyles.priceTableContainer}>
              <View
                style={[
                  homeStyles.priceTableTopContent,
                  homeStyles.priceTableBorderLine,
                ]}>
                <View style={homeStyles.priceTableContent}>
                  <Text
                    style={[homeStyles.priceTableText, homeStyles.hightText]}>
                    High
                  </Text>
                  <Text style={AppStyles.textColor}>53,952.01</Text>
                </View>
                <View style={homeStyles.priceTableContent}>
                  <Text style={[homeStyles.priceTableText, homeStyles.lowText]}>
                    Low
                  </Text>
                  <Text style={AppStyles.textColor}>39,902.42</Text>
                </View>
              </View>
              <View style={homeStyles.priceTableTopContent}>
                <View style={homeStyles.priceTableContent}>
                  <Text
                    style={[homeStyles.priceTableText, homeStyles.volumnText]}>
                    Vol (BTC)
                  </Text>
                  <Text style={AppStyles.textColor}>53,952.01</Text>
                </View>
                <View style={homeStyles.priceTableContent}>
                  <Text
                    style={[homeStyles.priceTableText, homeStyles.volumnText]}>
                    Vol (ETH)
                  </Text>
                  <Text style={AppStyles.textColor}>39,902.42</Text>
                </View>
              </View>
            </View>
            <View style={homeStyles.amountContainer}>
              <View style={homeStyles.amountContent}>
                <Text
                  style={[
                    AppStyles.textColor,
                    homeStyles.amountHightLightText,
                  ]}>
                  $66,360.55
                </Text>
                <Text style={[homeStyles.amountSmalText]}>(+1.25%)</Text>
              </View>
              <View style={homeStyles.btcContainer}>
                <Text style={[AppStyles.textColor]}>USD/BTC</Text>
                <Image source={require('../assets/Down.png')} />
              </View>
            </View>
          </View>
          <View style={homeStyles.candlestickContainer}>
            <View style={homeStyles.chatContainer}>
              <View style={homeStyles.chatWrapper}>
                <Image
                  style={homeStyles.chatImageContainer}
                  source={require('../assets/Chart1.jpg')}
                />
              </View>
              <View style={homeStyles.baringContainer}>
                <View style={homeStyles.baringContent}>
                  <Text style={homeStyles.bargingText1}>Open</Text>
                </View>
                <View style={homeStyles.baringContent}>
                  <Text style={homeStyles.bargingText2}>Filled</Text>
                </View>
                <View style={homeStyles.baringContent}>
                  <Text style={homeStyles.bargingText2}>Canceled</Text>
                </View>
              </View>
              <View style={homeStyles.footerContainer}>
                <View style={homeStyles.baringContent}>
                  <Image source={require('../assets/Radio.png')} />
                </View>
                <View style={homeStyles.baringContent}>
                  <Text style={homeStyles.footerSmallText1}>Buy</Text>
                  <Text style={homeStyles.footerSmallText}>Price</Text>
                  <Text style={homeStyles.footerSmallText}>0.0001230BTC</Text>
                </View>
                <View style={homeStyles.baringContent}>
                  <Text style={homeStyles.footerSmallText1}>BTC/ETH</Text>
                  <Text style={homeStyles.footerSmallText}>Amount</Text>
                  <Text style={homeStyles.footerSmallText}>0.0001230ETH</Text>
                </View>
                <View style={homeStyles.baringContent}>
                  <Text style={homeStyles.footerSmallText}>
                    Placed 2mins ago
                  </Text>
                  <Text style={homeStyles.footerSmallText}>Executed</Text>
                  <Text style={homeStyles.footerSmallText}>0.000ETH</Text>
                </View>
              </View>
            </View>
            <View style={homeStyles.order_tradesContainer}>
              <View style={homeStyles.orderBookContainer}>
                <View style={homeStyles.orderBookHeader}>
                  <Text style={homeStyles.orderBookTitle}>Order book</Text>
                </View>
                <View style={homeStyles.orderBookContent}>
                  <View style={homeStyles.orderBookLeftContent}>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    {/* <Text style={homeStyles.orderBookLeftText}>253.11</Text> */}
                    {/* <Text style={homeStyles.orderBookLeftText}>253.11</Text> */}
                  </View>
                  <View style={homeStyles.orderBookRightContent}>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    {/* <Text style={homeStyles.orderBookRightText}>0.001</Text> */}
                  </View>
                </View>
              </View>

              <View style={homeStyles.tradesContainer}>
                <View style={homeStyles.orderBookHeader}>
                  <Text style={homeStyles.orderBookTitle}>Trades</Text>
                </View>
                <View style={homeStyles.orderBookContent}>
                  <View style={homeStyles.orderBookLeftContent}>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    <Text style={homeStyles.orderBookLeftText}>253.11</Text>
                    {/* <Text style={homeStyles.orderBookLeftText}>253.11</Text> */}
                    {/* <Text style={homeStyles.orderBookLeftText}>253.11</Text> */}
                  </View>
                  <View style={homeStyles.orderBookRightContent}>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    <Text style={homeStyles.orderBookRightText}>0.001</Text>
                    {/* <Text style={homeStyles.orderBookRightText}>0.001</Text> */}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const homeStyles = StyleSheet.create({
  container: {
    // flex: 1,
    // maxWidth: '100%',
    // maxHeight: '100%',
    display: 'flex',
    // flexDirection: 'row',
    // backgroundColor: '#0f0'
  },
  topMenu: {
    width: 364,
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
    marginLeft: 26,
  },
  headerText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  bodyContainer: {
    paddingTop: 38,
    width: '100%',
    height: '100%',
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTableContainer: {
    width: 175,
    height: 114,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#191f3f',
    paddingHorizontal: 1,
    paddingVertical: 12,
  },
  priceTableTopContent: {
    flex: 50,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#0f0'
  },
  priceTableBorderLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  priceTableContent: {
    flex: 50,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTableText: {
    fontSize: 12,
  },
  hightText: {
    color: '#19FF05',
  },
  lowText: {
    color: '#FF3F3F',
  },
  volumnText: {
    color: '#FFFFFF',
  },
  amountContainer: {
    height: 114,
    paddingTop: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  amountContent: {
    display: 'flex',
    flexDirection: 'column',
    width: 134,
    height: 44,
    // backgroundColor: 'red',
    alignItems: 'flex-end',
  },
  btcContainer: {
    width: 101,
    height: 34,
    borderRadius: 4,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#13183C',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  amountHightLightText: {
    fontSize: 24,
    fontWeight: '600',
    // lineHeight: 1
  },
  amountSmalText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#00FFD1',
  },
  candlestickContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 25,
  },
  chatContainer: {
    width: 290,
    height: '100%',
    display: 'flex',
    // backgroundColor: '#0f0',
    backgroundColor: '#01041F',
  },
  order_tradesContainer: {
    width: 87,
    marginLeft: 10,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'red',
  },
  orderBookContainer: {
    width: 87,
    height: 344,
    display: 'flex',
    flexDirection: 'column',
  },
  orderBookLeftContent: {
    flex: 50,
    // height: 311,
    display: 'flex',
    flexDirection: 'column',
  },
  orderBookRightContent: {
    flex: 50,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  orderBookContent: {
    flex: 50,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'green',
  },
  orderBookHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  orderBookTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  orderBookLeftText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#12DD00',
    marginTop: 14,
  },
  orderBookRightText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginTop: 14,
  },
  tradesContainer: {
    width: 87,
    height: 344,
    marginTop: 25,
    display: 'flex',
    flexDirection: 'column',
  },
  chatWrapper: {
    width: 290,
    height: 480,
    borderRadius: 12,
    // padding: 17,
    display: 'flex',
    backgroundColor: 'blue',
  },
  chatImageContainer: {
    width: 290,
    height: 480,
  },
  baringContainer: {
    width: 271,
    height: 24,
    marginLeft: 16,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  baringContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  bargingText1: {
    color: '#0043F0',
    fontSize: 12,
    fontWeight: '600',
  },
  bargingText2: {
    color: '#3d6390',
    fontSize: 12,
    fontWeight: '500',
  },
  footerContainer: {
    width: 271,
    height: 57.79,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#19204A',
    justifyContent: 'space-between',
    marginLeft: 15,
    padding: 5,
  },
  footerSmallText: {
    fontSize: 8,
    fontWeight: '400',
    color: '#fff',
  },
  footerSmallText1: {
    fontSize: 10,
    fontWeight: '400',
    color: '#fff',
  },
});
