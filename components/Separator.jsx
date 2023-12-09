import "./Separator.css";

export default function Separator({ children }) {
  return (
    <div className="separator__wrapper">
      <div className="separator__line" />
      {children && (
        <>
          <div className="separator__content">{children}</div>
          <div className="separator__line" />
        </>
      )}
    </div>
  );
}
