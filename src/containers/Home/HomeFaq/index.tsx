import React, {FC} from 'react';

import {Link} from 'react-router-dom';
import FaqDropdownCard from 'components/FaqDropdownCard';
import {getTopQuestionsAndAnswers} from 'utils/faq';

import './HomeFaq.scss';

const HomeFaq: FC = () => {
  return (
    <div className="HomeFaq">
      <div className="HomeFaq__title">Frequently Asked Questions</div>
      <div className="HomeFaq__main">
        {getTopQuestionsAndAnswers()
          .slice(0, 5)
          .map((qna) => {
            return <FaqDropdownCard key={qna.id} question={qna.question} answer={qna.answer} />;
          })}
      </div>
      <Link to="/faq">View more</Link>
    </div>
  );
};

export default HomeFaq;
