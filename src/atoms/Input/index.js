import styles from "./Input.module.scss";

export default (
  {
    label,
    name,
    id,
    error,
    value,
    onChange,
    onBlur,
    type
  }) => {
  return (
    <div className={styles.input}>
      <span>{label}</span>
      <input
        id={id || name}
        name={name}
        type={type || "text"}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        />
      <div className={styles.error}>{error}</div>
    </div>
  );
};
