import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "../../service/service";
import s from "./MovieCast.module.css";

const CastDetails = () => {
  const [castMembers, setCastMembers] = useState(null);
  const { movieId } = useParams();
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCastById(movieId);
      setCastMembers(data.cast);
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {castMembers && (
        <ul className={s.castList}>
          {castMembers.map((member) => (
            <li key={member.id} className={s.castItem}>
              <img src={imageBaseUrl + member.profile_path} alt={member.original_name} />
              <p>Character: {member.character}</p>
              <p>Actor Name: {member.original_name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CastDetails;
