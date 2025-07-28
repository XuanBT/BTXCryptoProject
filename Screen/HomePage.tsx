import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {AppStyles, Format, assets} from '../common';
import {OrderBook} from '../common/Model/OrderBook';
import {CandlestickChart, LineChart, TData} from 'react-native-wagmi-charts';
import {ChartConst} from './ChartConst';
import {DropDownList, SearchedSelect} from '../common/Component';
import {Controller, useForm} from 'react-hook-form';
import {TradingFormData} from './TradingForm';

export const HomePage = () => {
  const [orderBookList, setOrderBookList] = React.useState<OrderBook[]>([]);
  const [tradesList, setTradesList] = React.useState<OrderBook[]>([]);
  const [pageSize, setPageSize] = React.useState(10);
  const {width, height} = useWindowDimensions();
  const tradingForm = useForm<TradingFormData>({
    defaultValues: {
      currencyUnit: undefined,
      mainPrice: '',
      highPrice: '',
      lowPrice: '',
    },
  });
  const data = [
    {label: 'One', value: '1'},
    {label: 'Two', value: '2'},
    {label: 'Three', value: '3'},
    {label: 'Four', value: '4'},
    {label: 'Five', value: '5'},
  ];
  React.useEffect(() => {
    setOrderBookList(Format.generateOrderBook());
    setTradesList(Format.generateOrderBook());
    const interval = setInterval(() => {
      const newData = Format.generateOrderBook();
      const newTrade = Format.generateOrderBook();
      setPageSize(val => val + 1);
      setOrderBookList(newData);
      setTradesList(newTrade);
    }, 5000);
    initalForm();
    return () => {
      clearInterval(interval);
      setPageSize(10);
      tradingForm.reset();
    };
  }, []);

  const initalForm = () => {
    tradingForm.setValue('currencyUnit', ChartConst.CurrentConst[0]);
    tradingForm.setValue('mainPrice', '$66,360.55');
    tradingForm.setValue('highPrice', '53,952.01');
    tradingForm.setValue('lowPrice', '39,902.42');
  };

  const chartData1 = React.useMemo(() => {
    let pageNum = 0;
    return ChartConst.ChartData.o
      .slice(pageNum * pageSize, (pageNum + 1) * pageSize)
      .map((item, index) => ({
        timestamp: ChartConst.ChartData.t[pageNum * pageSize + index],
        open: item,
        high: ChartConst.ChartData.h[pageNum * pageSize + index],
        low: ChartConst.ChartData.l[pageNum * pageSize + index],
        close: ChartConst.ChartData.c[pageNum * pageSize + index],
      }));
  }, [pageSize]);

  const onChangeTimePointEvent = (type: string) => {
    switch (type) {
      case '7D':
        setPageSize(10);
        break;
      case '1M':
        setPageSize(15);
        break;
      case '3M':
        setPageSize(20);
        break;
      case '1Y':
        setPageSize(25);
        break;
      case '5Y':
        setPageSize(30);
        break;
      default:
        setPageSize(35);
        break;
    }
  };

  const onChangeCurrencyUnit = (type: string) => {
    let oldMainPrice = 66360.55,
      oldHighPrice = 53952.01,
      oldLowPrice = 39902.42;
    let exchangeRate = 0;
    switch (type) {
      case 'USD/BTC':
        tradingForm.reset({
          ...tradingForm.watch(),
          mainPrice: `$${Format.formatNumberWithComma(oldMainPrice)}`,
          highPrice: Format.formatNumberWithComma(oldHighPrice),
          lowPrice: Format.formatNumberWithComma(oldLowPrice),
        });
        break;
      case 'EUR/BTC':
        exchangeRate = 1.175;
        tradingForm.reset({
          ...tradingForm.watch(),
          mainPrice: `€${Format.formatNumberWithComma(
            (oldMainPrice / exchangeRate).toFixed(2),
          )}`,
          highPrice: Format.formatNumberWithComma(
            (oldHighPrice / exchangeRate).toFixed(2),
          ),
          lowPrice: Format.formatNumberWithComma(
            (oldLowPrice / exchangeRate).toFixed(2),
          ),
        });
        break;
      case 'GBP/BTC':
        exchangeRate = 1.347;
        tradingForm.reset({
          ...tradingForm.watch(),
          mainPrice: `£${Format.formatNumberWithComma(
            (oldMainPrice / exchangeRate).toFixed(2),
          )}`,
          highPrice: Format.formatNumberWithComma(
            (oldHighPrice / exchangeRate).toFixed(2),
          ),
          lowPrice: Format.formatNumberWithComma(
            (oldLowPrice / exchangeRate).toFixed(2),
          ),
        });
        break;
        case 'AUD/BTC':
          exchangeRate = 1.52;
          tradingForm.reset({
            ...tradingForm.watch(),
            mainPrice: `$${Format.formatNumberWithComma(
              (oldMainPrice * exchangeRate).toFixed(2),
            )}`,
            highPrice: Format.formatNumberWithComma(
              (oldHighPrice * exchangeRate).toFixed(2),
            ),
            lowPrice: Format.formatNumberWithComma(
              (oldLowPrice * exchangeRate).toFixed(2),
            ),
          });
          break;
      default:
    }
  };
  return (
    <View style={homeStyles.container}>
      <ScrollView
        // showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}>
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
                  <Text style={AppStyles.textColor}>{`${tradingForm.getValues(
                    'highPrice',
                  )}`}</Text>
                </View>
                <View style={homeStyles.priceTableContent}>
                  <Text style={[homeStyles.priceTableText, homeStyles.lowText]}>
                    Low
                  </Text>
                  <Text style={AppStyles.textColor}>
                    {' '}
                    {`${tradingForm.getValues('lowPrice')}`}
                  </Text>
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
                  {`${tradingForm.getValues('mainPrice')}`}
                </Text>
                <Text style={[homeStyles.amountSmalText]}>(+1.25%)</Text>
              </View>
              <View style={homeStyles.currencyContainer}>
                <Controller
                  control={tradingForm.control}
                  name={'currencyUnit'}
                  render={({
                    field: {onChange, onBlur, value},
                    fieldState: {error},
                  }) => (
                    <SearchedSelect
                      placeholder="Choose"
                      value={value}
                      options={ChartConst.CurrentConst}
                      onChange={val => {
                        onChange(val);
                        onChangeCurrencyUnit(val?.value || '');
                      }}
                      onBlur={onBlur}
                      containerStyle={homeStyles.selectContainer}
                      dropDownStyle={homeStyles.selectContent}
                      selectedTextStyle={homeStyles.selectedText}
                      isRightIcon
                    />
                  )}
                />
              </View>
            </View>
          </View>
          <View style={homeStyles.candlestickContainer}>
            <View style={homeStyles.chatContainer}>
              <View style={homeStyles.chatWrapper}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  {/* <ImageBackground
                    source={require('../assets/Graph.png')}
                    style={homeStyles.chartImageBackground}
                    resizeMode="contain"> */}
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}>
                    <CandlestickChart.Provider data={chartData1}>
                      <ImageBackground
                        source={require('../assets/Graph.png')}
                        style={homeStyles.chartImageBackground}
                        resizeMode="contain">
                        <CandlestickChart width={240} height={440}>
                          <CandlestickChart.Candles
                            positiveColor="#0f0"
                            negativeColor={'#FF3F3F'}
                          />
                          {/* <CandlestickChart.Candle/> */}
                          <CandlestickChart.Line
                            color={'#9CB8FF'}
                            x={290}
                            y={200}
                            x1={0}
                            y1={200}
                          />
                          <CandlestickChart.Crosshair color="hotpink">
                            <CandlestickChart.Tooltip />
                          </CandlestickChart.Crosshair>
                        </CandlestickChart>
                      </ImageBackground>
                    </CandlestickChart.Provider>
                  </ScrollView>
                  {/* </ImageBackground> */}
                  <View style={homeStyles.chartRightContainer}>
                    <Text style={homeStyles.chartRightText}>$20.5</Text>
                    <Text style={homeStyles.chartRightText}>$19.5</Text>
                    <Text style={homeStyles.chartRightText}>$19</Text>
                    <Text style={homeStyles.chartRightText}>$18.5</Text>
                    <Text style={homeStyles.chartRightText}>$18</Text>
                    <Text style={homeStyles.chartRightText}>$17.5</Text>
                    <Text style={homeStyles.chartRightText}>$17</Text>
                    <Text style={homeStyles.chartRightText}>$16.5</Text>
                    <Text style={homeStyles.chartRightText}>$16</Text>
                    <Text style={homeStyles.chartRightText}>$15.5</Text>
                    <Text style={homeStyles.chartRightText}>$15</Text>
                  </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => onChangeTimePointEvent('7D')}>
                    <View style={homeStyles.chartBottomContainer}>
                      <Text style={homeStyles.chartBottomText}>7D</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onChangeTimePointEvent('1M')}>
                    <View style={homeStyles.chartBottomContainer}>
                      <Text style={homeStyles.chartBottomText}>1M</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onChangeTimePointEvent('3M')}>
                    <View style={homeStyles.chartBottomContainer}>
                      <Text style={homeStyles.chartBottomText}>3M</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onChangeTimePointEvent('1Y')}>
                    <View style={homeStyles.chartBottomContainer}>
                      <Text style={homeStyles.chartBottomText}>1Y</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onChangeTimePointEvent('5Y')}>
                    <View style={homeStyles.chartBottomContainer}>
                      <Text style={homeStyles.chartBottomText}>5Y</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onChangeTimePointEvent('Max')}>
                    <View style={homeStyles.chartBottomContainer}>
                      <Text style={homeStyles.chartBottomText}>Max</Text>
                    </View>
                  </TouchableOpacity>
                </View>
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
                    {orderBookList &&
                      orderBookList.length > 0 &&
                      orderBookList.slice(0, 11).map((item, index) => {
                        return (
                          <Text
                            key={`orderBookPrice_${index}`}
                            style={homeStyles.orderBookLeftText}>
                            {item.price}
                          </Text>
                        );
                      })}
                  </View>
                  <View style={homeStyles.orderBookRightContent}>
                    {orderBookList &&
                      orderBookList.length > 0 &&
                      orderBookList.slice(0, 11).map((item, index) => {
                        return (
                          <Text
                            key={`orderBookAmount_${index}`}
                            style={homeStyles.orderBookLeftText}>
                            {item.amount}
                          </Text>
                        );
                      })}
                  </View>
                </View>
              </View>

              <View style={homeStyles.tradesContainer}>
                <View style={homeStyles.orderBookHeader}>
                  <Text style={homeStyles.orderBookTitle}>Trades</Text>
                </View>
                <View style={homeStyles.orderBookContent}>
                  <View style={homeStyles.orderBookLeftContent}>
                    {tradesList &&
                      tradesList.length > 0 &&
                      tradesList.slice(0, 11).map((item, index) => {
                        return (
                          <Text
                            key={`tradesPrice_${index}`}
                            style={homeStyles.orderBookLeftText}>
                            {item.price}
                          </Text>
                        );
                      })}
                  </View>
                  <View style={homeStyles.orderBookRightContent}>
                    {tradesList &&
                      tradesList.length > 0 &&
                      tradesList.slice(0, 11).map((item, index) => {
                        return (
                          <Text
                            key={`tradesAmount_${index}`}
                            style={homeStyles.orderBookLeftText}>
                            {item.amount}
                          </Text>
                        );
                      })}
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
    // display: 'flex',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  topMenu: {
    width: 364,
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 26,
    marginTop: 10,
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
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTableContainer: {
    width: 175,
    height: 114,
    flex: 50,
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
  },
  priceTableBorderLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  priceTableContent: {
    flex: 50,
    display: 'flex',
    flexDirection: 'column',
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
    flex: 50,
    width: '100%',
    height: 114,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 10,
    // backgroundColor: '#191f3f',
  },
  amountContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 44,
    alignItems: 'flex-end',
  },
  currencyContainer: {
    width: 101,
    height: 34,
    paddingHorizontal: 5,
    borderRadius: 4,
    backgroundColor: '#13183C',
  },
  selectContainer: {width: 90, height: 34},
  selectContent: {width: 90, height: 34, borderBottomWidth: 0},
  selectedText: {fontSize: 14, fontWeight: '400'},
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
    // height: '100%',
    height: 480,
    // display: 'flex',
    backgroundColor: '#01041F',
  },
  order_tradesContainer: {
    width: 87,
    marginLeft: 10,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  orderBookContainer: {
    width: 87,
    height: 344,
    display: 'flex',
    flexDirection: 'column',
  },
  orderBookLeftContent: {
    flex: 50,
    display: 'flex',
    flexDirection: 'column',
  },
  orderBookRightContent: {
    flex: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  orderBookContent: {
    flex: 50,
    display: 'flex',
    flexDirection: 'row',
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
    backgroundColor: '#13183C',
  },
  chartImageContainer: {
    // width: 290,
    // height: 480,
    transform: [{scaleX: -1}],
  },
  chartImageBackground: {
    width: 240,
    height: 440,
    // backgroundColor: 'green',
  },
  chartRightContainer: {
    width: 50,
    height: 440,
    paddingTop: Platform.OS === 'ios' ? 20 : 23,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#fff',
  },
  chartRightText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginTop: Platform.OS === 'ios' ? 17 : 15,
  },
  chartBottomContainer: {
    width: 35,
    height: 35,
    borderRadius: 4,
    padding: 6,
    marginRight: 10,
    backgroundColor: '#152652',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartBottomText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
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
