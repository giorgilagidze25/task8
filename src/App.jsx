import React, { useState } from 'react';

function Rating() {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings([]); 
    } else {
      setSelectedRatings([rating]); 
    }
  };

  const handleSubmit = () => {
    if (selectedRatings.length > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex justify-center items-center  h-screen bg-[#131519]">
      {!submitted ? (
        <div className="bg-[#1f2630] text-white rounded-3xl p-5 w-[452px]  text-center">
          <div className='w-12 h-12 flex justify-center items-center m-4 rounded-full pt-3 bg-[#262f3c]' >
            <svg className="w-6 h-6 text-orange-500 mb-4" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.06688 0.429953L11.0567 4.46137C11.1691 4.68909 11.3864 4.84692 11.6377 4.88341L16.0866 5.52998C16.3773 5.5722 16.6188 5.77583 16.7095 6.05523C16.8002 6.33463 16.7244 6.64131 16.514 6.84627L13.2943 9.98421C13.1122 10.1617 13.0296 10.4171 13.0721 10.667L13.8321 15.0981C13.8816 15.3876 13.7626 15.6801 13.525 15.8527C13.2874 16.0253 12.9724 16.048 12.7125 15.9114L8.73279 13.8189C8.50789 13.7009 8.23937 13.7009 8.01447 13.8189L4.03475 15.9114C3.77481 16.048 3.45984 16.0253 3.22224 15.8527C2.98464 15.6801 2.86562 15.3876 2.91521 15.0981L3.6752 10.667C3.71815 10.4167 3.63503 10.1613 3.45299 9.98421L0.233258 6.84627C0.022814 6.64131 -0.0529846 6.33463 0.0377459 6.05523C0.128477 5.77583 0.369993 5.5722 0.660704 5.52998L5.10953 4.88341C5.36085 4.84692 5.57812 4.68909 5.69052 4.46137L7.68038 0.429953C7.96586 -0.143318 8.78372 -0.143318 9.06688 0.429953Z" fill="#FC7614"/>
            </svg>
          </div>

          <h2 className="text-[28px] mr-40">How did we do?</h2>

          <p className="text-base text-[#a9a9a9] m-5 leading-6">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>

          <div className="flex justify-between ml-5 mr-6">
            {[1, 2, 3, 4, 5].map((rating) => {
              const isSelected = selectedRatings.includes(rating);
              const colorClass =
                isSelected
                  ? 'bg-white text-[#26333e]'
                  : 'bg-[#26333e] text-white';
              
              return (
                <button
                  key={rating}
                  className={`w-[50px]  hover:bg-[#fb7413]  h-[50px] rounded-full ${colorClass} text-[16px] transition-colors duration-300`}
                  onClick={() => handleRatingClick(rating)}
                >
                  {rating}
                </button>
              );
            })}
          </div>

          <button 
            className={`bg-[#fb7413] text-white py-2 px-5 w-[390px] mt-7 text-[20px] rounded-full transition-colors duration-300 hover:bg-white hover:text-[#26333e] ${
              selectedRatings.length < 1 ? "bg-opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={selectedRatings.length < 1} 
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="bg-[#1f2630] text-white p-5 w-[452px] rounded-lg text-center">
          <img className='m-4 ml-[130px]' src="/assets/img.png" alt="" />

          <div className='w-[220px] bg-[#393f48] rounded-lg ml-[90px]'>
            <p className="text-[18px] text-[#ff6f27]">
              You selected {selectedRatings.join(", ")} out of 5
            </p>
          </div>

          <h2 className="text-[28px] mt-[20px] text-[#ffffff]">Thank you!</h2>

          <p className="text-base text-[#a9a9a9] m-5 leading-6">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}

export default Rating;
