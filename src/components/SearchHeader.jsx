import styles from "./SearchHeader.module.css";
import { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <BsYoutube className={styles.bsyoutube} />
        <h1 className={styles.h1}>Youtube</h1>
      </Link>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.button}>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
