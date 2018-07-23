const DefaultWidthHeight = {
    LeftMenuContentWidth:260,
    ConsoleHeight:200,
    LeftMenuWidth:44,
    StatusBarHeight:30,
    WorkpalceToolBoxWidth:44
};

const LeftMenu = {
    background:'#323843',
    width:DefaultWidthHeight.LeftMenuWidth,
    bottom:30,
    left:0,
    top:0,
    position: 'absolute'
 };

 const LeftMenuContent = {
    width:1,
    background: '#20252c'
 };

const Workplace = {
    background:'#272c35',
    flex:1
};

const StatusBar = {
    height: DefaultWidthHeight.StatusBarHeight,
    bottom: 0,
    left:0,
    background:'#1f242a',
    position: 'absolute',
    width:'100%'
};

const Console = {
    height: DefaultWidthHeight.ConsoleHeight,
    background: '#272c35'
};

const Container = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    margin:0
};

const InnerContainer = {
    position: 'absolute',
    bottom: 30,
    left:44,
    top:0,
    right: 0,
    display: 'flex',
    flexDirection: 'row'
};

const WorkplaceContainer = {
    display: 'flex',
    flexDirection: 'column',
    flex:1
};

 export default {
     LeftMenu,
     LeftMenuContent,
     Workplace,
     StatusBar,
     Console,
     Container,
     InnerContainer,
     WorkplaceContainer,
     DefaultWidthHeight
 }