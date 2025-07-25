import React from 'react';
import {
  ViewStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  TextStyle,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {ControlProps, SelectOption} from './ControlProps';
import {assets} from '../Assets';
import { AppStyles } from '../shared';

type SearchedSelectProps = ControlProps<SelectOption> & {
  label?: string;
  placeholder?: string;
  options: Array<SelectOption>;
  maxHeight?: number;
  containerStyle?: StyleProp<ViewStyle>;
  dropDownStyle?: StyleProp<ViewStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isRightIcon?: boolean;
};
export const SearchedSelect = (props: SearchedSelectProps) => {
  const {
    label,
    value,
    options,
    onChange,
    maxHeight,
    placeholder = 'Select item',
    containerStyle,
    disabled,
    dropDownStyle,
    selectedTextStyle,
    isRightIcon,
  } = props;

  const renderRightIcon = () => {
    return isRightIcon ? <assets.caretdown /> : undefined;
  };
  return (
    <View style={[searchStyles.container, containerStyle]}>
      {label && <Text style={searchStyles.labelText}>{label}</Text>}
      <Dropdown
        style={[searchStyles.dropdown, dropDownStyle]}
        placeholderStyle={searchStyles.placeholderStyle}
        selectedTextStyle={[searchStyles.selectedTextStyle, selectedTextStyle]}
        inputSearchStyle={searchStyles.inputSearchStyle}
        iconStyle={searchStyles.iconStyle}
        containerStyle={searchStyles.dropDowContainer}
        activeColor={"#5E6673"}
        itemTextStyle={AppStyles.textColor}
        // itemContainerStyle={{ backgroundColor: '#13183C'}}
        // selectedStyle={{ backgroundColor: '#13183C',}}
        data={options}
        search
        maxHeight={maxHeight}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        disable={disabled}
        value={value}
        onChange={item => {
          onChange && onChange(item);
        }}
        // renderLeftIcon={() => {
        //   return <assets.caretdown />;
        // }}
        renderRightIcon={renderRightIcon}
      />
    </View>
  );
};
const searchStyles = StyleSheet.create({
  container: {
    // display: 'flex',
    // backgroundColor: "blue",
  },
  labelText: {
    color: 'rgb(112, 119, 126)',
    fontSize: 15,
    fontWeight: 'bold',
  },
  dropdown: {
    // margin: 16,
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    // backgroundColor: '#13183C',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#FFFFFF',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#fff',
    // backgroundColor: '#13183C'
  },
  iconStyle: {
    width: 20,
    height: 20,
    // color: '#FFFFFF',
    // backgroundColor: '#FFFFFF',
  },
  inputSearchStyle: {
    maxHeight: 40,
    fontSize: 16,
  },
  dropDowContainer: {
    backgroundColor: '#13183C'
  }
});
