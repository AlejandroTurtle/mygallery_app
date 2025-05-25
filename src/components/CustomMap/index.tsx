import {Colors} from '@/src/config';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';

type MapProps = {
  longitude?: number;
  latitude?: number;
};
export const CustomMap = ({longitude, latitude}: MapProps) => {
  const query = `${latitude},${longitude}`;
  const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD_5T_O-mttkb6CSgHRmdKWcSGYA-M2HvQ&q=${query}&zoom=16`;
  const width = 340;
  const height = width * (3 / 4);
  const html = `
  <html lang="en">
    <head style="border: 0px; margin: 0px; padding: 0px;">
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </head>
    <body style="border: 0px; margin: 0px; padding: 0px; display: flex; justify-content: center; align-items: center;">
        <iframe width="${width}" height="${height}" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen frameborder="0" src="${url}"/>     
     </body>
    </html>
  `;
  const styles = StyleSheet.create({
    mapContainer: {
      height: height,
      width: '100%',
      marginVertical: 15,
    },
    label: {
      fontSize: 16,
      color: Colors.black,
      marginTop: 10,
      fontFamily: 'Poppins-Bold',
      marginLeft: 15,
    },
    map: {
      width: '100%',
      minWidth: '100%',
      alignSelf: 'center',
    },
  });

  return (
    <>
      <Text style={styles.label}>Local onde a foto foi tirada:</Text>
      <View style={[styles.mapContainer]}>
        <WebView
          source={{html}}
          allowsFullscreenVideo={true}
          startInLoadingState={true}
          style={styles.map}
          onError={erro => console.error(erro)}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
        />
      </View>
    </>
  );
};
