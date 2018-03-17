/*
    本节代码，主要解决性能浪费的问题。
*/
let stateChanger = (state, action) => {
    let type = action.type;
    switch (type) {
        case "MODIFY_TITLE":
        console.log({
            ...state,
            title: {
                text: action.text,
                color:state.title.color
            }
        });
            return {
                ...state,
                title: {
                    text: action.text,
                    color:state.title.color
                }
            };
        case "MODIFY_CONTENT":
            return {
                ...state,
                content: {
                    text: action.text,
                    color:state.content.color
                }
            };

        default:
            return state;
    }
}
let createStore = (state, stateChanger) => {
    let listeners = [];
    let subscribe = (listener) => listeners.push(listener);
    let getState = () => state;
    let dispatch = (action) => {
        state = stateChanger(state, action);
        listeners.forEach((listener) => {
            listener();
        })
    }
    return {getState, dispatch, subscribe}
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
let renderApp = (newState,oldState={} ) => {
    let {title, content} = newState;
    renderTitle(newState.title,oldState.title);
    renderContent(newState.content,oldState.content);
}
let renderTitle = (newTitle,oldTitle={}) => {
    if (oldTitle.text === newTitle.text)
        return;
    console.log("update title ....",newTitle,oldTitle);
    let title = document.querySelector('.title');
    title.innerHTML = newTitle.text;
    title.style.color = newTitle.color;
}
let renderContent = (newContent,oldContent={}) => {
    if (oldContent.text === newContent.text)
        return;
    console.log("update content....",newContent,oldContent);
    let content = document.querySelector('.content');
    content.innerHTML = newContent.text;
    content.style.color = newContent.color;
}

let store = createStore(appState, stateChanger);

let oldState = store.getState();
store.subscribe(() => {
    const newState = store.getState();
    renderApp(newState,oldState);
    oldState = newState;
})
renderApp(store.getState());
store.dispatch({type: "MODIFY_TITLE", text: "修改标题"});
store.dispatch({type: "MODIFY_CONTENT", text: "修改内容"});
/*  */
