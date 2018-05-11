import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from './actionCreators';

const Link = ({ children, onClick, active }) => (
	active ? 
	<span style={{ color: 'red' }}>{children}</span>
	:
	<a onClick={onClick} 
		href="#">
		{children}
	</a>
)

const FilterLink = ({ active, onClick, children }) => (
	<Link 
		active={active}
		onClick={ onClick }
	>
	{children}
	</Link>
)


const mapStateToProps = (state, props) => {
	return {
		active: state.filter === props.filter
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onClick: () => dispatch( setFilter(props.filter) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)