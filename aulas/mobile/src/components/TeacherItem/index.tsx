import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/latsnet.png' }}
                />
            </View>

            <View style={styles.profileInfo}>

                <Text style={styles.name}>Luiz Augusto</Text>
                <Text style={styles.subject}>Matemática</Text>

            </View>

            <View style={styles.bio}>
                Linha 1 {'\n'}
                Linha 2 {'\n'}
                Linha 3
            </View>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 24,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={heartOutlineIcon} />
                        
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>

            </View>

        </View>
    );
}

export default TeacherItem;