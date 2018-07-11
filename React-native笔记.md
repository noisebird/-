### React-Native
1. 开发流程
+ 情况一（不需要使用redux存储数据）：

    （1）写样式StyleSheet.create({})
    
    （2）写组件class App extends Component{}
    
    （3）写构造函数（继承属性以及组件的对象）
    
    （4）判断是否需要生命周期
    
    （5）通过fetch发Ajax请求（项目中所有的fetch请求放在api目录下）
        
    （6）在container中直接调用api目录下的fetch请求即可获得数据
    
    （7）写render函数
    
    （8）渲染逻辑复杂的情况下，可以写一些辅助渲染函数
    
    （9）可以抽取一些公共的变量，使组件在不同的type下选择不同的渲染方式，或使用不同的组件渲染
    
    （10）写一些默认的属性App.defaultProps={props:''}
    
    （11）限制参数的类型 App.propTypes={props:PropTypes.func.isRequired}
    
    （12）导出组件 exprot default App
    
    （13）设置路由，react-native-router-flux
        
    
    
+ 情况二（需要使用redux存储数据）
    
    （1）写样式StyleSheet.create({})
        
    （2）写组件class App extends Component{}
        
    （3）写构造函数（继承属性以及组件的对象）
        
    （4）判断是否需要生命周期
        
    （5）通过fetch发Ajax请求（项目中所有的fetch请求放在api目录下）
            
    （6）在container中直接调用api目录下的fetch请求即可获得数据
        
    （7）写render函数
        
    （8）渲染逻辑复杂的情况下，可以写一些辅助渲染函数
        
    （9）可以抽取一些公共的变量，使组件在不同的type下选择不同的渲染方式，或使用不同的组件渲染
         
    （10）写一些默认的属性App.defaultProps={props:''}
        
    （11）限制参数的类型 App.propTypes={props:PropTypes.func.isRequired}
    
    （12）写mapStateToProps，将属性保存起来，子组件中可以通过props获取属性
    
    （13）写mapDispatchToProps，子组件可以直接this.props，直接调用dispatch
    
    （14）exprot default connect(写mapStateToProps,mapDispatchToProps)(App)
    
     (15) 创建action
     
     (16）创建reducer
     
    （17）绑定reducer到store
    
    （18）设置路由，react-native-router-flux
    
    
2. loadash常用api

3. PropTypes

4. React-Native开发的一些注意事项
    
    (1) 子组件调用父组件的中的函数时，如果函数中有使用到this，在子组件中调用时要注意，this到底是指向的父组件还是子组件。
    如果父组件中是使用的()=> 箭头函数那么在子组件中调用时是使用父组件的this环境。如果在进行props传递时，给方法绑定了父组
    件的this环境，那么在子组件中调用时，也是直接使用的是父组件的this。
    
    (2) 使用[].map(item => (<View></View>))渲染时，要注意如果是（）而不是{},如果是{},里面的语句要加上return

    (3) 写功能时，先写底层组件，确定需要哪些属性，状态，以及和父组件的关联。
    
    (4) 在写功能时，如果两个组件之间需要有数据通信，可以通过在外层容器中设置一个状态，然后把这个state以props的形式传递到子容器里去（这样子容器中有关联关系的两个组件就能有交互了）

    (5) 加载数据时，需要使用遮罩，maskPromise(异步函数)
    
    (6)如何写圆环（使用css）
        
        设置border-width等于环的radius，背景色另外设置

5. Redux-actions-helpers API的一些介绍
+ action的写法
```
import { createAction, createActionPrefix } from 'redux-actions-helper';

const nameCreator = createActionPrefix('USER');
export const login=createAction(nameCreator('LOGIN'),()=>null)   //第二个参数为action的处理函数，fetch，ajax等，得到返回结果
```

+ reducer的写法
```
import { combineReducers } from 'redux';
import { combineActions, handleActions } from 'redux-actions';
import * as userActions from '../actions/user';

const getToken=combineActions(userActions.login,userAction.loginToken)
const getUserName=handleActions({
    [userActions.login]:(state,action)=>actions.payload.username
})
const getPassword=handleActions({
    [userActions.login]:(state,action)=>actions.payload.password    
})
export default combineReducers({
    getUserName,
    getPassowrd
})

```

6. react-native-router-flux 如何设置路由跳转
```
import { ActionConst, Actions, Router, Scene } from 'react-native-router-flux';
class Router extends Component{
    render(){
        return ( 
        <Router createReducer={props.createReducer} getSceneStyle={getSceneStyle}>
            <Scene  key="root"
                    navigationBarStyle={styles.navigationBar}
                    titleStyle={styles.navBarTitle}
                    backButtonStyle={styles.navBarButton}
                    rightButtonStyle={styles.navBarButton}
                    backButtonTextStyle={styles.navBarButtonText}
                    rightButtonTextStyle={styles.navBarButtonText}
                    backButtonImage={backArrowIcon}>
                <Scene  key="resetPassword"
                        component={ResetPasswordContainer}
                        title="重设密码"
                        hideNavBar={false}
                        navigationBarStyle={styles.resetPasswordNavBar}
                        renderRightButton={() => <HomeRightTitle />}
                        renderBackButton={() => <Logo />}
                        backTitle="返回"/>
            </Scene>
        </Router>)
    }
}


```

