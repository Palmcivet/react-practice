import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import FilterItem from './container/ShowList'
import AddItem from './layout/AddItem';
import List from './layout/List'
import rootReducer from './container/reducers'

const API = {
	items: [{
		id: "i-34376",
		status: "STATUS_UNFINISHED",
		content: "test itewetwm 1"
	}, {
		id: "i-34378",
		status: "STATUS_UNFINISHED",
		content: "test ite123m 2"
	}, {
		id: "i-34379",
		status: "STATUS_FINISHED",
		content: "test item 2"
	}, {
		id: "i-3440",
		status: "STATUS_UNFINISHED",
		content: "test item 22"
	}, {
		id: "i-34342",
		status: "STATUS_FINISHED",
		content: "test item 132"
	}, {
		id: "i-34376",
		status: "STATUS_UNFINISHED",
		content: "test item 1"
	}, {
		id: "i-34377",
		status: "STATUS_FINISHED",
		content: "test itemwe 2"
	}]
}

function App() {
	const store = createStore(rootReducer)
	const unsubscribe = store.subscribe(() => alert('加载完毕'))
	console.log(API.items)
	return (
		<Provider store={store}>
			{/* <FilterItem /> */}
			<List items={API.items} />
			<AddItem />
		</Provider>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
