
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';


const StarReview = ({ rate }) => {
    var starComponents = [];
    var fullStar = Math.floor(rate)
  
    

    // Full Star
    for (var i = 0; i < fullStar; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={images.docteur}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

   
    

    // No Star
    

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {starComponents}
            <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{rate}</Text>
        </View>
    )
}

const IconLabel = ({ icon, label }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Text style={{ marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3 }}>{label}</Text>
        </View>
    )
}

const Profil = ({ navigation }) => {

    // Render

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{ flex: 2 }}>
                <Image
                    source={images.BannerAdm}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '80%',
                    }}
                />
                <View
                    style={[{
                        position: 'absolute',
                        bottom: "5%",
                        left: "5%",
                        right: "5%",
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white
                    }, styles.shadow]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.shadow}>
                            <Image
                                source={images.profile}
                                resizeMode="cover"
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 15,
                                }}
                            />
                        </View>

                        <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                            <Text style={{ ...FONTS.h3 }}>Salma Aboudou</Text>
                            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Tunis</Text>

                            <StarReview
                                rate={4.5}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: SIZES.radius }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                            
                        </Text>
                    </View>
                </View>

                {/* Header Buttons */}
                <View
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 20,
                        right: 20,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Home') }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: COLORS.yellow
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Home') }}
                        >
                            <Image
                                source={icons.logo}
                                resizeMode="cover"
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Body */}
            <View style={{ flex: 1.5 }}>
                {/* Icons */}
                <View style={{ flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding * 2, justifyContent: 'space-between' }}>
                    <IconLabel
                        icon={icons.internet}
                        label="Modifier"
                    />

                    <IconLabel
                        icon={icons.disable_eye}
                        label="85Kg"
                    />

                    <IconLabel
                        icon={icons.parametres}
                        label="Modifier"
                    />
                </View>

                {/* About */}
                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.black, ...FONTS.body2 }}>
                       Nom : Faissoil Mkavavo
                    
                    </Text>
                </View>
            </View>

            {/* Footer */}
            
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 558,
    }
});

export default Profil;
