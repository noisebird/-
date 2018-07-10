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