import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: ${props.budget}</span>
			<button type='button' className='btn btn-primary mt' style={{margin:'-6px',lineHeight:'12px'}} onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;