/*
    本节代码，主要解决自动调用渲染的过程。使用监听者模式来实现。
*/
let stateChanger = (state, action) => {
    let type = action.type;
    switch (type) {
        case "MODIFY_TITLE":
            state.title.text = action.text;
            break;
        case "MODIFY_CONTENT":
            state.content.text = action.text;
            break;
        default:
            return appState;
    }
}
let createStore = (state, stateChanger) => {
    let listeners=[];
    let subscribe=(listener)=>listeners.push(listener);
    let getState = () => state;
    let dispatch = (action) => {
        stateChanger(state, action);
        listeners.forEach((listener)=>{
            listener();
        })
    }
    return {getState, dispatch,subscribe}
}
let appState = {
    title: {
        text: "react 小红书",
        color: 'red'
    },
    content: {
        text: "redux内容",
        color: 'blue'
    }
}
let renderApp = (appState) => {
    let {title, content} = appState;
    renderTitle(title);
    renderContent(content);
}
let renderTitle = (titleObj) => {
    let title = document.querySelector('.title');
    title.innerHTML = titleObj.text;
    title.style.color = titleObj.color;
}
let renderContent = (contentObj) => {
    let content = document.querySelector('.content');
    content.innerHTML = contentObj.text;
    content.style.color = contentObj.color;
}

let store=createStore(appState,stateChanger);
store.subscribe(()=>{
    renderApp(store.getState());
})
renderApp(store.getState());
store.dispatch({type: "MODIFY_TITLE", text: "修改标题"});
store.dispatch({type: "MODIFY_CONTENT", text: "修改内容"});
/*
    纯函数的特点？
        1.返回值只依赖参数
        2.执行过程没有什么副作用，即对外部作用域的一些函数，变量值等没有什么影响

    这里的代码还会有什么问题？
        如果只是title变了，这里的调用更新，也会更新content的内容，存在着性能上的浪费。
        index4.js中将会介绍如何优化代码
*/
