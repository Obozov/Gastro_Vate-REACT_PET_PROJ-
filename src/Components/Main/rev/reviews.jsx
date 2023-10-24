import c from './reviews.module.css'
import React from 'react';
const RevSup = (props) => {

	const ReviewItem = (props) => {
		return <div>
			
			userId=
		</div>
	}




	let newReviewText = React.createRef();

	return <div>
		<div className={c.reviews__list}>
	
			<ReviewItem reviewData={props} />
		</div>
		<div className={c.makeRev}>
			<textarea ref={newReviewText}></textarea>
			<button className={c.rateBtn}>Rate</button>
		</div>
	</div>


}


export default RevSup;






