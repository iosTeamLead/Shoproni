import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Language = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', name: t('English') },
    { code: 'hi', name: t('हिंदी') },
    { code: 'pu', name: t('ਪੰਜਾਬੀ') },
    { code: 'ar', name: t('Arabic') },
    { code: 'fr', name: t('French') },
    { code: 'rs', name: t('Russian') },
    {code :'tl',name:t('Telugu')},
    {code :'tm',name:t('Tamil')}

  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {

    loadSelectedLanguage();

  }, []);

  const loadSelectedLanguage = async () => {
    try {
      const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);

      }
    } catch (error) {
      console.error('Error loading selected language:', error);
    }
  };

  const changeLanguage = async (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    // Save selected language to AsyncStorage
    try {
      await AsyncStorage.setItem('selectedLanguage', lang);
    } catch (error) {
      console.error('Error saving selected language:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{t('select.langage')}</Text>
        <Text style={styles.slogan}>{t('select.langage.slogan')}</Text>
      </View>
      {languages.map((language, index) => (
        <TouchableOpacity key={index} onPress={() => changeLanguage(language.code)} style={styles.languageOption}>
          <Text style={styles.languageText}>{language.name}</Text>
          <View style={[styles.checkbox, { backgroundColor: selectedLanguage === language.code ? 'green' : 'transparent' }]} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  slogan: {
    fontSize: 16,
    color: 'gray',
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  languageText: {
    fontSize: 18,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'green',
  },
});

export default Language;