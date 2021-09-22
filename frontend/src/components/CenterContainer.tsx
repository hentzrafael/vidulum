import React from 'react';
import '../styles/CenterContainer.css'
import Title from './centerData/Title';
import Header from './Header/Header';
import Section from './Section/Section';

export default class CenterContainer extends React.Component {
    props = {
        imgUrl: '',
        alt: ''
    }
    render() {
        return (
            <div className="center-container">
                <Header title="Tiago Mazzutti" biografia="Eu sou tiago"photoUrl="https://pbs.twimg.com/profile_images/1362784994188476420/om5lsyFF_400x400.png"/>
                <Section title="Sessão Primeira" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin ex nisi, aliquam vitae massa eu, venenatis tristique elit. Nam vel consectetur sapien, eu consequat nulla. 
                Vivamus eget elit sed dui facilisis imperdiet quis a lorem. Quisque vel dolor lacus. Curabitur maximus hendrerit tellus, 
                et finibus eros euismod sed. Nullam ut velit ut est gravida gravida sed at eros. Curabitur leo nisl, auctor sit amet lectus ac, 
                pellentesque accumsan diam. Phasellus a neque eu erat tempus vulputate eu et nulla. Pellentesque id laoreet mauris.
                 Curabitur aliquet nunc et ante luctus, ac dignissim nibh facilisis. Mauris accumsan felis ac tempor rhoncus.
                 Donec aliquet mollis nibh in elementum."/>
                 <Section title="Sessão Primeira" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin ex nisi, aliquam vitae massa eu, venenatis tristique elit. Nam vel consectetur sapien, eu consequat nulla. 
                Vivamus eget elit sed dui facilisis imperdiet quis a lorem. Quisque vel dolor lacus. Curabitur maximus hendrerit tellus, 
                et finibus eros euismod sed. Nullam ut velit ut est gravida gravida sed at eros. Curabitur leo nisl, auctor sit amet lectus ac, 
                pellentesque accumsan diam. Phasellus a neque eu erat tempus vulputate eu et nulla. Pellentesque id laoreet mauris.
                 Curabitur aliquet nunc et ante luctus, ac dignissim nibh facilisis. Mauris accumsan felis ac tempor rhoncus.
                 Donec aliquet mollis nibh in elementum."/>
                 <Section title="Sessão Primeira" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin ex nisi, aliquam vitae massa eu, venenatis tristique elit. Nam vel consectetur sapien, eu consequat nulla. 
                Vivamus eget elit sed dui facilisis imperdiet quis a lorem. Quisque vel dolor lacus. Curabitur maximus hendrerit tellus, 
                et finibus eros euismod sed. Nullam ut velit ut est gravida gravida sed at eros. Curabitur leo nisl, auctor sit amet lectus ac, 
                pellentesque accumsan diam. Phasellus a neque eu erat tempus vulputate eu et nulla. Pellentesque id laoreet mauris.
                 Curabitur aliquet nunc et ante luctus, ac dignissim nibh facilisis. Mauris accumsan felis ac tempor rhoncus.
                 Donec aliquet mollis nibh in elementum."/>
                 <Section title="Sessão Primeira" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin ex nisi, aliquam vitae massa eu, venenatis tristique elit. Nam vel consectetur sapien, eu consequat nulla. 
                Vivamus eget elit sed dui facilisis imperdiet quis a lorem. Quisque vel dolor lacus. Curabitur maximus hendrerit tellus, 
                et finibus eros euismod sed. Nullam ut velit ut est gravida gravida sed at eros. Curabitur leo nisl, auctor sit amet lectus ac, 
                pellentesque accumsan diam. Phasellus a neque eu erat tempus vulputate eu et nulla. Pellentesque id laoreet mauris.
                 Curabitur aliquet nunc et ante luctus, ac dignissim nibh facilisis. Mauris accumsan felis ac tempor rhoncus.
                 Donec aliquet mollis nibh in elementum."/>
                 <Section title="Sessão Primeira" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin ex nisi, aliquam vitae massa eu, venenatis tristique elit. Nam vel consectetur sapien, eu consequat nulla. 
                Vivamus eget elit sed dui facilisis imperdiet quis a lorem. Quisque vel dolor lacus. Curabitur maximus hendrerit tellus, 
                et finibus eros euismod sed. Nullam ut velit ut est gravida gravida sed at eros. Curabitur leo nisl, auctor sit amet lectus ac, 
                pellentesque accumsan diam. Phasellus a neque eu erat tempus vulputate eu et nulla. Pellentesque id laoreet mauris.
                 Curabitur aliquet nunc et ante luctus, ac dignissim nibh facilisis. Mauris accumsan felis ac tempor rhoncus.
                 Donec aliquet mollis nibh in elementum."/>
                 <Section title="Sessão Primeira" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin ex nisi, aliquam vitae massa eu, venenatis tristique elit. Nam vel consectetur sapien, eu consequat nulla. 
                Vivamus eget elit sed dui facilisis imperdiet quis a lorem. Quisque vel dolor lacus. Curabitur maximus hendrerit tellus, 
                et finibus eros euismod sed. Nullam ut velit ut est gravida gravida sed at eros. Curabitur leo nisl, auctor sit amet lectus ac, 
                pellentesque accumsan diam. Phasellus a neque eu erat tempus vulputate eu et nulla. Pellentesque id laoreet mauris.
                 Curabitur aliquet nunc et ante luctus, ac dignissim nibh facilisis. Mauris accumsan felis ac tempor rhoncus.
                 Donec aliquet mollis nibh in elementum."/>
                 <Section title="Sessão Primeira" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin ex nisi, aliquam vitae massa eu, venenatis tristique elit. Nam vel consectetur sapien, eu consequat nulla. 
                Vivamus eget elit sed dui facilisis imperdiet quis a lorem. Quisque vel dolor lacus. Curabitur maximus hendrerit tellus, 
                et finibus eros euismod sed. Nullam ut velit ut est gravida gravida sed at eros. Curabitur leo nisl, auctor sit amet lectus ac, 
                pellentesque accumsan diam. Phasellus a neque eu erat tempus vulputate eu et nulla. Pellentesque id laoreet mauris.
                 Curabitur aliquet nunc et ante luctus, ac dignissim nibh facilisis. Mauris accumsan felis ac tempor rhoncus.
                 Donec aliquet mollis nibh in elementum."/>
                <Section title="Sessão Segunda" description="Essa é a primeira seção do título"/>
                <Section title="Sessão Terceira" description="Essa é a primeira seção do título"/>
            </div>
        );
    }
}  