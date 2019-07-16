# install
```
npm install react-g-lang
```

# react or react-native example
```js
import React from 'react';
import { SafeAreaView, Text,TouchableOpacity } from 'react-native';

// required
import { setLanguages, setLanguage, createObject } from 'g-lang'
import LangReloader, { lang } from 'react-g-lang'


// './languages' must be the same path as './node_modules'
// Please download 'https://github.com/lendland/g-lang/raw/master/g-lang-example.zip' and refer to directory/file structure.
setLanguages({
    en: require('./languages/en'),
    kor: require('./languages/default'),
})

const langObject = createObject(function (){
    return {
        content: lang.content
    }
})

class App extends React.Component {
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>

            <TouchableOpacity style={{ padding:20 }} onPress={()=>{
            setLanguage('en')
            }}>
            <Text>to EN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding:20 }} onPress={()=>{
            setLanguage('kor')
            }}>
            <Text>to KOR</Text>
            </TouchableOpacity>

            <Text>{lang.title}</Text>
            <Text>{langObject.content}</Text>
            </SafeAreaView>
        )
    }
};

// Be sure to wrap your app with LangReloader.
export default LangReloader(App);
```

# DOC
[https://github.com/lendland/g-lang](https://github.com/lendland/g-lang)
