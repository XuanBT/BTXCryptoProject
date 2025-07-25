import React, {ReactElement} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  visible: boolean;
  label: string;
  data: Array<{label: string; value: string}>;
  onSelect: (item: {label: string; value: string}) => void;
  setVisible: (val: boolean) => void;
}
export const DropDownList = (props: Props): ReactElement<any, any> => {
  const {visible, data, setVisible, onSelect} = props;
  const DropdownButton = React.useRef<TouchableOpacity>(null);
  const [dropdownTop, setDropdownTop] = React.useState(0);
  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };
  const openDropdown = (): void => {
    DropdownButton?.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };
  const onItemPress = (item: any): void => {
    // setSelected(item);
    onSelect(item);
    setVisible(false);
  };
  const renderItem = (item: any): ReactElement<any, any> => (
    <TouchableOpacity style={dropStyles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
  return (
    <Modal visible={visible} transparent animationType="none">
      <TouchableOpacity
        //   style={styles.overlay}
        //   onPress={() => setVisible(false)}
        ref={DropdownButton}
        style={dropStyles.button}
        onPress={toggleDropdown}>
        <View style={[dropStyles.dropdown, {top: dropdownTop}]}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
const dropStyles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
});
