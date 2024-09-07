import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "../../service/service";
import s from "./MovieReviews.module.css";

const ReviewsList = () => {
  const [reviewList, setReviewList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviewsById(movieId);
      setReviewList(data.results);
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {reviewList && (
        <ul className={s.revList}>
          {reviewList.map((review) => (
            <li key={review.id} className={s.revItem}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
              <p>{review.updated_at}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewsList;
