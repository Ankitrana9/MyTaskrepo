import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from './utils/Images';
import ImagePicker from 'react-native-image-crop-picker';
import CountryPicker from 'rn-country-picker';
const Login = () => {
  const [Name, setName] = useState('');
  const [Profile, setProfile] = useState(Images.ProfilePlaceholder);
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Gender, setGender] = useState('Select gender');
  const [mCountryCode, setmCountryCode] = useState('91');
  const [modalVisible, setModalVisible] = useState(false);
  const pickSingle = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then(image => {
        console.log('received image', image);
        setProfile({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };
const _selectedValue = index => {
    setmCountryCode(index);
  };

const Submit_Button = () => {
    return (
      <TouchableOpacity
        onPress={Validate_form}
        style={styles.SubmitBtnstyle}>
        <Text style={{fontSize: 20, color: 'white'}}>Submit</Text>
      </TouchableOpacity>
    );
  };
  const Validate_form = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (Name == '') {
      alert('Please enter name');
    } else if (Email == '') {
      alert('Please enter e-mail');
    } else if (reg.test(Email) === false) {
      alert('Email is Not Correct');
    } else if (Phone == '') {
      alert('Please enter phone number');
    } else if (Gender=='Select gender'){
      alert('Please select gender')
     
    }
    else if (Profile==Images.ProfilePlaceholder){
      alert('Please select profile pic')
    }
    else {
      alert('Registeration completed')
    }
  };
  const Image_pickerBox = () => {
    return (
      <TouchableOpacity
        onPress={() => pickSingle(false)}
        style={styles.ImagepickerBox}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignSelf: 'center',
            borderRadius: 90,
          }}
          source={Profile}></Image>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'grey', flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('./assets/loginBack.jpeg')}>
        <Image_pickerBox />
        {/* Name */}
        <View style={[styles.TextInputMainVIew, {marginTop: 80}]}>
          <TextInput
            onChangeText={setName}
            placeholder={'Name'}
            style={styles.TextInputStyle}
          />
        </View>
        {/* Email */}
        <View style={styles.TextInputMainVIew}>
          <TextInput
            onChangeText={setEmail}
            placeholder={'Email'}
            style={styles.TextInputStyle}
          />
        </View>
       
        <View
          style={[
            styles.TextInputMainVIew,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <View
            style={{
              height: 40,
              width: '25%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CountryPicker
              disable={false}
              animationType={'slide'}
              containerStyle={styles.pickerStyle}
              pickerTitleStyle={styles.pickerTitleStyle}
              dropDownImage={require('./res/ic_drop_down.png')}
              selectedCountryTextStyle={styles.selectedCountryTextStyle}
              countryNameTextStyle={styles.countryNameTextStyle}
              pickerTitle={'Country Picker'}
              searchBarPlaceHolder={'Search......'}
              hideCountryFlag={false}
              hideCountryCode={false}
              searchBarStyle={styles.searchBarStyle}
              backButtonImage={require('./res/ic_back_black.png')}
              searchButtonImage={require('./res/ic_search.png')}
              countryCode={mCountryCode}
              selectedValue={_selectedValue}
            />
          </View>
          <View style={{height: 40, width: '70%', justifyContent: 'center'}}>
            <TextInput 
             onChangeText={setPhone}
             keyboardType={'number-pad'}
             placeholder={'Mobile Number'}
            ></TextInput>
          </View>
        </View>
        {/* Name */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[styles.TextInputMainVIew, {justifyContent: 'center'}]}>
          <Text style={{marginLeft: 20, color: 'grey'}}>{Gender}</Text>
        </TouchableOpacity>
        <Submit_Button />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={[styles.modalView]}>
              <TouchableOpacity
                style={styles.ModalBtn}
                onPress={() => {
                  setModalVisible(false);
                  setGender('Male');
                }}>
                <Text style={{alignSelf: 'center', fontSize: 15,color:'white'}}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.ModalBtn,{marginTop:5}]}
                onPress={() => {
                  setModalVisible(false);
                  setGender('Female');
                }}>
                <Text style={{alignSelf: 'center', fontSize: 15,color:'white'}}>Female</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  ModalBtn:{
    height: 40,
    width: 250,
    borderRadius: 15,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ImagepickerBox: {
    // borderWidth:1,borderColor:'white',

    height: 90,
    width: 90,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 60,
  },
  TextInputMainVIew: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
  },
  TextInputStyle: {
    width: '100%',
    height: '100%',
    // backgroundColor:'white'
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  titleText: {
    color: '#000',
    fontSize: 25,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  pickerTitleStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  pickerStyle: {
    height: 25,
    width: 100,
    marginLeft: 30,
    justifyContent: 'center',
    padding: 10,
    // borderWidth: 2,
    // borderColor: '#303030',
    backgroundColor: 'transparent',
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000',
    textAlign: 'right',
  },

  countryNameTextStyle: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },

  searchBarStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  SubmitBtnstyle:{
    height: 50,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(91,99,250)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    marginTop:100,
    alignSelf: 'center',
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
