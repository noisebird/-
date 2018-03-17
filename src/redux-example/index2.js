/*
    本节代码继续介绍如何将index1.js中的代码抽离
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
    let getState = () => state;
    let dispatch = (action) => {
        stateChanger(state, action)
    }
    return {getState, dispatch}
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
renderApp(store.getState());
store.dispatch({type: "MODIFY_TITLE", text: "修改标题"});
store.dispatch({type: "MODIFY_CONTENT", text: "修改内容"});
renderApp(store.getState());
/*
    问题：每次数据变化的时候都需要手动调用renderApp方法，能不能自动调用？
*/
